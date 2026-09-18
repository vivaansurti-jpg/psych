/* ============================================================
   psych — shared behaviour
   Filtering, search, filter popover, disclosure cards, copy.
   ============================================================ */

(function () {
  'use strict';

  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  const norm = (s) => String(s || '').toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

  const SEP = '<span class="sep" aria-hidden="true">·</span>';

  const CHEVRON =
    '<svg class="chevron" width="17" height="17" viewBox="0 0 24 24" fill="none" ' +
    'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' +
    'aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>';

  const field = (label, body) =>
    '<div class="field"><div class="field-label">' + label + '</div>' + body + '</div>';

  /* ---------- disclosure cards (event-delegated) ---------- */
  function wireDisclosure(listEl) {
    listEl.addEventListener('click', (e) => {
      const head = e.target.closest('.item-head');
      if (!head || head.tagName !== 'BUTTON' || !listEl.contains(head)) return;
      const item = head.closest('.item');
      const open = item.classList.toggle('open');
      head.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- filter popover ---------- */
  function wirePopover(btn, panel) {
    if (!btn || !panel) return { close: function () {} };

    // Keep the viewport-positioned panel outside animated page containers,
    // which otherwise become its containing block in some browsers.
    document.body.appendChild(panel);

    const edge = 12;
    const gap = 8;

    function position() {
      if (panel.hidden) return;

      const rect = btn.getBoundingClientRect();
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = window.innerHeight;
      const mobile = viewportWidth <= 680;
      const width = mobile
        ? Math.max(0, viewportWidth - 36)
        : Math.min(288, viewportWidth - (2 * edge));
      const left = Math.max(edge, Math.min(rect.left, viewportWidth - width - edge));
      const below = viewportHeight - rect.bottom - gap - edge;
      const above = rect.top - gap - edge;
      const openAbove = below < 260 && above > below;
      const available = Math.max(140, openAbove ? above : below);

      panel.style.width = width + 'px';
      panel.style.left = left + 'px';
      panel.style.maxHeight = Math.min(mobile ? 400 : 520, available) + 'px';
      panel.style.top = openAbove
        ? Math.max(edge, rect.top - gap - panel.offsetHeight) + 'px'
        : Math.max(edge, Math.min(viewportHeight - edge, rect.bottom + gap)) + 'px';
    }

    function open() {
      panel.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      position();
      document.addEventListener('click', onDocClick, true);
      document.addEventListener('keydown', onKey);
      window.addEventListener('resize', position, { passive: true });
      window.addEventListener('scroll', position, { passive: true });
    }
    function close(refocus) {
      if (panel.hidden) return;
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      document.removeEventListener('click', onDocClick, true);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', position);
      window.removeEventListener('scroll', position);
      if (refocus) btn.focus();
    }
    function onDocClick(e) {
      if (panel.contains(e.target) || btn.contains(e.target)) return;
      close(false);
    }
    function onKey(e) { if (e.key === 'Escape') { e.stopPropagation(); close(true); } }

    btn.addEventListener('click', () => { panel.hidden ? open() : close(false); });
    return { close: close };
  }

  /* ---------- filter + search controller ---------- */
  function buildFilters(config) {
    const state = { search: '', groups: {} };
    Object.keys(config.groups).forEach((k) => { state.groups[k] = 'all'; });

    const listEl   = $(config.list);
    const countEl  = $(config.count);
    const emptyEl  = $(config.empty);
    const resetEl  = $(config.reset);
    const searchEl = $(config.search);
    const clearEl  = $(config.searchClear);
    const liveEl   = $(config.live);
    const btnEl    = $(config.filterBtn);
    const panelEl  = $(config.filterPanel);
    const badgeEl  = $(config.filterCount);
    const activeEl = $(config.active);

    const groupKeys = Object.keys(config.groups);
    const total     = config.data.length;

    // Static work, done once: search index and each record's filter values,
    // so filtering is a property read rather than a function call per render.
    config.data.forEach((d) => {
      d._s = norm(config.searchText(d));
      d._g = {};
      groupKeys.forEach((k) => { d._g[k] = String(config.groups[k].value(d)); });
    });

    // Build every row ONCE. Filtering only flips `hidden` on rows whose
    // visibility changed — no node is created or destroyed again, and open
    // cards stay open through a filter change.
    listEl.innerHTML = config.data.map(config.template).join('');
    const rows = config.data.map((d, i) => ({ d: d, el: listEl.children[i], shown: true }));

    // Cache options and their last-written values so render() only writes to
    // the DOM when a number or a state really changed.
    const optGroups = {};
    groupKeys.forEach((key) => {
      optGroups[key] = $$('[data-group="' + key + '"]', panelEl).map((el) => {
        const countEl2 = $('.count', el);
        return {
          el: el, value: el.dataset.value, label: el.dataset.label, countEl: countEl2,
          n: countEl2 ? parseInt(countEl2.textContent, 10) : -1, disabled: false
        };
      });
    });

    const popover = wirePopover(btnEl, panelEl);

    let searchTerms = [];
    // Seeded to the unfiltered state the markup already shows, so the first
    // render is a no-op against the DOM.
    let lastCount = total, lastDirty = false, lastSummary = '', liveTimer = null;

    function passes(d, skipKey) {
      for (let i = 0; i < groupKeys.length; i++) {
        const key = groupKeys[i];
        if (key === skipKey) continue;
        const val = state.groups[key];
        if (val !== 'all' && d._g[key] !== val) return false;
      }
      for (let i = 0; i < searchTerms.length; i++) {
        if (d._s.indexOf(searchTerms[i]) === -1) return false;
      }
      return true;
    }

    function render() {
      let visible = 0;
      for (let i = 0; i < rows.length; i++) {
        const r = rows[i];
        const ok = passes(r.d, null);
        if (ok !== r.shown) { r.shown = ok; r.el.hidden = !ok; }
        if (ok) visible++;
      }

      if (visible !== lastCount) {
        lastCount = visible;
        emptyEl.hidden = visible !== 0;
        countEl.textContent = visible === total
          ? total + ' ' + config.noun
          : visible + ' of ' + total + ' ' + config.noun;
        if (liveEl) {
          clearTimeout(liveTimer);
          liveTimer = setTimeout(() => {
            liveEl.textContent = visible + ' ' + config.noun + ' shown';
          }, 450);
        }
      }

      // active filters, shown quietly
      const active = [];
      for (let i = 0; i < groupKeys.length; i++) {
        const key = groupKeys[i];
        if (state.groups[key] === 'all') continue;
        const opt = optGroups[key].filter((o) => o.value === state.groups[key])[0];
        if (opt) active.push(opt.label);
      }
      const summary = active.join(' · ');
      if (summary !== lastSummary) {
        lastSummary = summary;
        if (activeEl) { activeEl.textContent = summary; activeEl.hidden = summary === ''; }
        if (badgeEl) { badgeEl.textContent = active.length; badgeEl.hidden = active.length === 0; }
      }

      const dirty = state.search !== '' || active.length > 0;
      if (dirty !== lastDirty) { lastDirty = dirty; resetEl.hidden = !dirty; }

      // per-option counts, given every *other* active filter. Pure array work.
      for (let g = 0; g < groupKeys.length; g++) {
        const key = groupKeys[g];
        const counts = Object.create(null);
        let poolTotal = 0;
        for (let i = 0; i < rows.length; i++) {
          const d = rows[i].d;
          if (!passes(d, key)) continue;
          poolTotal++;
          counts[d._g[key]] = (counts[d._g[key]] || 0) + 1;
        }
        const opts = optGroups[key];
        for (let c = 0; c < opts.length; c++) {
          const opt = opts[c];
          const n = opt.value === 'all' ? poolTotal : (counts[opt.value] || 0);
          if (n !== opt.n) {
            opt.n = n;
            if (opt.countEl) opt.countEl.textContent = n;
          }
          const dis = n === 0 && opt.el.getAttribute('aria-pressed') !== 'true';
          if (dis !== opt.disabled) { opt.disabled = dis; opt.el.disabled = dis; }
        }
      }
    }

    // option clicks
    groupKeys.forEach((key) => {
      optGroups[key].forEach((opt) => {
        opt.el.addEventListener('click', () => {
          state.groups[key] = opt.value;
          optGroups[key].forEach((o) => {
            o.el.setAttribute('aria-pressed', o === opt ? 'true' : 'false');
          });
          render();
        });
      });
    });

    function setSearch(value) {
      state.search = norm(value);
      searchTerms = state.search ? state.search.split(' ') : [];
    }

    if (searchEl) {
      searchEl.addEventListener('input', () => {
        setSearch(searchEl.value);
        if (clearEl) clearEl.hidden = searchEl.value === '';
        render();
      });
      searchEl.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchEl.value) {
          searchEl.value = ''; setSearch('');
          if (clearEl) clearEl.hidden = true;
          render();
        }
      });
    }
    if (clearEl) {
      clearEl.addEventListener('click', () => {
        searchEl.value = ''; setSearch(''); clearEl.hidden = true;
        searchEl.focus(); render();
      });
    }

    resetEl.addEventListener('click', () => {
      setSearch('');
      if (searchEl) searchEl.value = '';
      if (clearEl) clearEl.hidden = true;
      groupKeys.forEach((key) => {
        state.groups[key] = 'all';
        optGroups[key].forEach((o) => {
          o.el.setAttribute('aria-pressed', o.value === 'all' ? 'true' : 'false');
        });
      });
      render();
      popover.close(true);
    });

    wireDisclosure(listEl);
    render();
  }

  /* ---------- revision notes ---------- */
  function initNotes() {
    if (!$('#notes-list')) return;

    const template = (n) => {
      let body = field('Definition', '<p>' + esc(n.definition) + '</p>');
      if (n.mechanism.length) {
        body += field('Mechanism', '<ul>' +
          n.mechanism.map((m) => '<li>' + esc(m) + '</li>').join('') + '</ul>');
      }
      if (n.study)        body += field(esc(n.studyLabel || 'Study'), '<p>' + esc(n.study) + '</p>');
      if (n.link)         body += field('Link', '<p>' + esc(n.link) + '</p>');
      if (n.backup)       body += field('Backup study', '<p>' + esc(n.backup) + '</p>');
      if (n.advantage)    body += field('Strength', '<p>' + esc(n.advantage) + '</p>');
      if (n.disadvantage) body += field('Limitation', '<p>' + esc(n.disadvantage) + '</p>');
      body += '<p class="item-meta body-meta">' + esc(APPROACH_LABELS[n.approach]) + SEP +
              esc(TOPIC_LABELS[n.topic]) + '</p>';

      return '<article class="item" id="' + esc(n.id) + '">' +
        '<button type="button" class="item-head" aria-expanded="false" aria-controls="' + esc(n.id) + '-body">' +
          '<span class="item-main">' +
            '<span class="item-title">' + esc(n.title) + '</span>' +
            (n.meta ? '<span class="item-sub">' + esc(n.meta) + '</span>' : '') +
          '</span>' + CHEVRON +
        '</button>' +
        '<div class="item-body" id="' + esc(n.id) + '-body"><div class="inner">' +
          '<div class="body-pad">' + body + '</div>' +
        '</div></div>' +
      '</article>';
    };

    buildFilters({
      data: NOTES, noun: 'concepts',
      list: '#notes-list', count: '#notes-count', empty: '#notes-empty',
      reset: '#notes-reset', search: '#notes-search', searchClear: '#notes-search-clear',
      live: '#notes-live', filterBtn: '#notes-filter-btn', filterPanel: '#notes-filter-panel',
      filterCount: '#notes-filter-count', active: '#notes-active',
      groups: {
        topic:    { value: (n) => n.topic },
        approach: { value: (n) => n.approach }
      },
      searchText: (n) => [n.title, n.meta, n.definition, n.mechanism.join(' '), n.study,
                          n.link, n.advantage, n.disadvantage, n.backup,
                          TOPIC_LABELS[n.topic], APPROACH_LABELS[n.approach]].join(' '),
      template: template
    });
  }

  /* ---------- question bank ---------- */
  function initQuestions() {
    if (!$('#q-list')) return;

    const questionsByMarks = QUESTIONS.slice().sort((a, b) =>
      Number(a.marks) - Number(b.marks)
    );

    const template = (q) => {
      const marks = (q.est ? 'Est. ' : '') + q.marks + (q.marks === 1 ? ' mark' : ' marks');

      const detail = [esc(q.id)];
      if (q.paper)    detail.push(esc(q.paper));
      if (q.topic)    detail.push(esc(TOPIC_LABELS[q.topic]));
      if (q.approach) detail.push(esc(APPROACH_LABELS[q.approach]));
      if (q.subtopic) detail.push(esc(q.subtopic));

      return '<article class="item" id="' + esc(q.id) + '">' +
        '<button type="button" class="item-head" aria-expanded="false" aria-controls="' + esc(q.id) + '-body">' +
          '<span class="item-main">' +
            '<span class="item-q">' + esc(q.text) + '</span>' +
            '<span class="item-meta"><span class="marks">' + esc(marks) + '</span></span>' +
          '</span>' + CHEVRON +
        '</button>' +
        '<div class="item-body" id="' + esc(q.id) + '-body"><div class="inner">' +
          '<div class="body-pad">' +
            '<p class="item-meta body-meta">' + detail.join(SEP) + '</p>' +
          '</div>' +
        '</div></div>' +
      '</article>';
    };

    buildFilters({
      data: questionsByMarks, noun: 'questions',
      list: '#q-list', count: '#q-count', empty: '#q-empty',
      reset: '#q-reset', search: '#q-search', searchClear: '#q-search-clear',
      live: '#q-live', filterBtn: '#q-filter-btn', filterPanel: '#q-filter-panel',
      filterCount: '#q-filter-count', active: '#q-active',
      groups: {
        topic:    { value: (q) => q.topic },
        approach: { value: (q) => q.approach },
        marks:    { value: (q) => q.marks }
      },
      searchText: (q) => [q.id, q.text, q.subtopic, q.paper,
                          TOPIC_LABELS[q.topic], APPROACH_LABELS[q.approach],
                          q.marks + ' marks'].join(' '),
      template: template
    });
  }

  /* ---------- key terms ---------- */
  function initTerms() {
    const listEl = $('#terms-list');
    if (!listEl || typeof CONCEPTS === 'undefined') return;

    const searchEl = $('#terms-search');
    const clearEl  = $('#terms-search-clear');
    const emptyEl  = $('#terms-empty');
    const liveEl   = $('#terms-live');
    const countEl  = $('#terms-count');
    const filterBtn = $('#terms-filter-btn');
    const filterPanel = $('#terms-filter-panel');
    const filterBadge = $('#terms-filter-count');
    const activeEl = $('#terms-active');

    // Rendered once; searching only flips `hidden` on rows and sections.
    listEl.innerHTML = CONCEPTS.map((c) =>
      '<section class="terms-group">' +
        '<h2 class="terms-heading">' + esc(c.name) + '</h2>' +
        '<p class="terms-blurb">' + esc(c.blurb) + '</p>' +
        '<div class="terms">' +
          c.terms.map((id) => {
            const t = TERMS[id];
            const bodyId = c.id + '-' + id + '-body';
            return '<article class="term item">' +
              '<button type="button" class="item-head term-head" aria-expanded="false" aria-controls="' + esc(bodyId) + '">' +
                '<span class="item-main"><span class="item-title">' + esc(t.term) + '</span></span>' +
                CHEVRON +
              '</button>' +
              '<div class="item-body" id="' + esc(bodyId) + '"><div class="inner">' +
                '<div class="body-pad"><p class="term-definition">' + esc(t.def) + '</p></div>' +
              '</div></div>' +
            '</article>';
          }).join('') +
        '</div>' +
      '</section>').join('');

    const groups = $$('.terms-group', listEl).map((el, i) => ({
      el: el,
      id: CONCEPTS[i].id,
      name: CONCEPTS[i].name,
      shown: true,
      rows: $$('.term', el).map((rowEl, j) => {
        const t = TERMS[CONCEPTS[i].terms[j]];
        return { el: rowEl, shown: true, s: norm(CONCEPTS[i].name + ' ' + t.term + ' ' + t.def) };
      })
    }));

    const total = groups.reduce((sum, group) => sum + group.rows.length, 0);
    const filterOptions = $$('[data-concept]', filterPanel);
    const popover = wirePopover(filterBtn, filterPanel);
    wireDisclosure(listEl);
    let terms = [], selectedConcept = 'all', lastVisible = -1, liveTimer = null;

    function matches(row) {
      for (let i = 0; i < terms.length; i++) {
        if (row.s.indexOf(terms[i]) === -1) return false;
      }
      return true;
    }

    function render() {
      let visible = 0;
      for (let g = 0; g < groups.length; g++) {
        const group = groups[g];
        const conceptMatches = selectedConcept === 'all' || group.id === selectedConcept;
        let anyInGroup = 0;
        for (let r = 0; r < group.rows.length; r++) {
          const row = group.rows[r];
          const ok = conceptMatches && matches(row);
          if (ok !== row.shown) { row.shown = ok; row.el.hidden = !ok; }
          if (ok) { anyInGroup++; visible++; }
        }
        const groupOk = anyInGroup > 0;
        if (groupOk !== group.shown) { group.shown = groupOk; group.el.hidden = !groupOk; }
      }

      if (visible !== lastVisible) {
        lastVisible = visible;
        emptyEl.hidden = visible !== 0;
        if (countEl) {
          countEl.textContent = visible === total
            ? total + ' terms'
            : visible + ' of ' + total + ' terms';
        }
        if (liveEl) {
          clearTimeout(liveTimer);
          liveTimer = setTimeout(() => {
            liveEl.textContent = visible + (visible === 1 ? ' term shown' : ' terms shown');
          }, 450);
        }
      }
    }

    filterOptions.forEach((option) => {
      option.addEventListener('click', () => {
        selectedConcept = option.dataset.concept;
        filterOptions.forEach((item) => {
          item.setAttribute('aria-pressed', item === option ? 'true' : 'false');
        });
        const filtered = selectedConcept !== 'all';
        if (filterBadge) filterBadge.hidden = !filtered;
        if (activeEl) {
          activeEl.textContent = filtered ? option.dataset.label : '';
          activeEl.hidden = !filtered;
        }
        render();
        popover.close(false);
      });
    });

    function setSearch(value) {
      const q = norm(value);
      terms = q ? q.split(' ') : [];
    }

    if (searchEl) {
      searchEl.addEventListener('input', () => {
        setSearch(searchEl.value);
        if (clearEl) clearEl.hidden = searchEl.value === '';
        render();
      });
      searchEl.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchEl.value) {
          searchEl.value = ''; setSearch('');
          if (clearEl) clearEl.hidden = true;
          render();
        }
      });
    }
    if (clearEl) {
      clearEl.addEventListener('click', () => {
        searchEl.value = ''; setSearch(''); clearEl.hidden = true;
        searchEl.focus(); render();
      });
    }

    render();
  }

  /* ---------- copy button ---------- */
  function initCopy() {
    const btn = $('#copy-prompt');
    if (!btn) return;
    const source = $('#prompt-text');
    const label  = $('#copy-label');
    let timer = null;

    btn.addEventListener('click', async () => {
      const text = source.textContent;
      let ok = true;
      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        try {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.cssText = 'position:fixed;top:0;left:-9999px';
          document.body.appendChild(ta);
          ta.select();
          ok = document.execCommand('copy');
          document.body.removeChild(ta);
        } catch (e2) { ok = false; }
      }
      label.textContent = ok ? 'Copied' : 'Press Ctrl/Cmd + C';
      if (!ok) {
        const range = document.createRange();
        range.selectNodeContents(source);
        const sel = window.getSelection();
        sel.removeAllRanges(); sel.addRange(range);
      }
      clearTimeout(timer);
      timer = setTimeout(() => { label.textContent = 'Copy prompt'; }, 2200);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNotes();
    initQuestions();
    initTerms();
    initCopy();
  });
})();
