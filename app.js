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

  /* ---------- motion preferences ---------- */
  const mq = (q) => (window.matchMedia ? window.matchMedia(q) : { matches: false, addEventListener() {} });
  const reducedMotion = mq('(prefers-reduced-motion: reduce)');
  const phone = mq('(max-width: 680px)');

  /* ---------- haptics ----------
     Reserved for two meaningful moments (a successful copy, a sheet dismissed
     by a flick) and fired on the same frame as the visual change. */
  function buzz(pattern) {
    try { if (navigator.vibrate) navigator.vibrate(pattern); } catch (err) {}
  }

  /* ---------- spring ----------
     Apple's two designer-facing parameters:
       damping  — 1 = critically damped (no overshoot), < 1 bounces
       response — roughly how quickly it gets there, in seconds (not a duration)
     A spring always animates from its current on-screen value and keeps its
     velocity when it is re-targeted, so any motion can be grabbed or reversed
     mid-flight without a jump or a "brick wall". */
  function Spring(initial, onUpdate, restDelta) {
    let x = initial, v = 0, target = initial;
    let damping = 1, response = 0.35, raf = 0, last = 0, onRest = null;
    const rest = restDelta || 0.001;

    function step(now) {
      const dt = Math.min(0.064, Math.max(0, (now - last) / 1000));
      last = now;
      const k = Math.pow((2 * Math.PI) / response, 2);   // stiffness (mass = 1)
      const c = (4 * Math.PI * damping) / response;       // damping coefficient
      const n = Math.max(1, Math.ceil(dt * 240));         // fixed sub-steps for stability
      const h = dt / n;
      for (let i = 0; i < n; i++) {
        v += (-k * (x - target) - c * v) * h;
        x += v * h;
      }
      if (Math.abs(x - target) < rest && Math.abs(v) < rest * 10) {
        x = target; v = 0; raf = 0;
        onUpdate(x);
        const done = onRest; onRest = null;
        if (done) done();
        return;
      }
      onUpdate(x);
      raf = requestAnimationFrame(step);
    }

    return {
      get value() { return x; },
      get target() { return target; },
      get moving() { return raf !== 0; },
      to(t, opts) {
        opts = opts || {};
        target = t;
        if (opts.damping != null) damping = opts.damping;
        if (opts.response != null) response = opts.response;
        if (opts.velocity != null) v = opts.velocity;   // velocity hand-off from a gesture
        onRest = opts.onRest || null;
        if (!raf) { last = performance.now(); raf = requestAnimationFrame(step); }
      },
      // Freeze at the presentation value (used when a finger grabs it).
      stop() { if (raf) cancelAnimationFrame(raf); raf = 0; v = 0; onRest = null; },
      jump(t) { this.stop(); x = target = t; onUpdate(x); }
    };
  }

  /* Where a flick is going, using the same exponential-decay projection as
     scroll deceleration (Designing Fluid Interfaces, WWDC 2018). */
  function project(velocity, decelerationRate) {
    const d = decelerationRate || 0.998;
    return (velocity / 1000) * d / (1 - d);
  }

  /* Past a boundary, follow less and less: soft resistance, not a hard stop. */
  function rubberband(overshoot, dimension, constant) {
    const c = constant || 0.55;
    return (overshoot * dimension * c) / (dimension + c * Math.abs(overshoot));
  }

  /* Velocity from the last few pointer samples (px/s), not just the last two. */
  function velocityFrom(history) {
    const now = history[history.length - 1];
    let first = now;
    for (let i = history.length - 1; i >= 0; i--) {
      if (now.t - history[i].t > 100) break;
      first = history[i];
    }
    const dt = (now.t - first.t) / 1000;
    return dt > 0 ? (now.y - first.y) / dt : 0;
  }

  /* ---------- colour theme ---------- */
  function initTheme() {
    const root = document.documentElement;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.setAttribute('aria-pressed', root.dataset.theme === 'dark' ? 'true' : 'false');
    button.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6.75 6.75 0 1 0 9 9A7.5 7.5 0 1 1 12 3Z"></path></svg>' +
      '<span class="sr-only"></span>';

    function render() {
      const dark = root.dataset.theme === 'dark';
      const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
      const icon = $('.theme-toggle svg', button);
      icon.innerHTML = dark
        ? '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>'
        : '<path d="M12 3a6.75 6.75 0 1 0 9 9A7.5 7.5 0 1 1 12 3Z"></path>';
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      button.setAttribute('aria-pressed', dark ? 'true' : 'false');
      $('.sr-only', button).textContent = label;
    }

    // Ease light <-> dark instead of an abrupt brightness jump.
    let easeTimer = null;
    function apply(theme) {
      root.classList.add('theme-changing');
      root.dataset.theme = theme;
      render();
      clearTimeout(easeTimer);
      easeTimer = setTimeout(() => root.classList.remove('theme-changing'), 360);
    }

    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('psych-theme', next); } catch (err) {}
      apply(next);
    });

    // Until someone picks a theme here, follow the device's appearance.
    mq('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      let saved = null;
      try { saved = localStorage.getItem('psych-theme'); } catch (err) {}
      if (saved !== 'light' && saved !== 'dark') apply(e.matches ? 'dark' : 'light');
    });

    document.body.appendChild(button);
    render();
  }

  /* ---------- floating bar: scroll-edge effect ---------- */
  function initScrollEdge() {
    const nav = $('.nav');
    if (!nav) return;
    const root = document.documentElement;
    let ticking = false, settle = 0, scrolled = null;
    function update() {
      ticking = false;
      const s = window.scrollY > 2;
      if (s !== scrolled) { scrolled = s; nav.classList.toggle('is-scrolled', s); }   // write only on change
    }
    // While the page is moving, cards under the pointer don't restyle on hover;
    // that work is invisible mid-scroll and is what makes fast scrolls stutter.
    function settled() { settle = 0; root.classList.remove('is-scrolling'); }
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
      if (!settle) root.classList.add('is-scrolling');
      else clearTimeout(settle);
      settle = setTimeout(settled, 120);
    }, { passive: true });
    update();
  }

  /* ---------- disclosure cards (event-delegated) ----------
     Highlight on press (CSS :active), commit on release. A second tap while
     a card is still opening reverses it immediately: nothing is locked out. */
  function wireDisclosure(listEl) {
    listEl.addEventListener('click', (e) => {
      const head = e.target.closest('.item-head');
      if (!head || head.tagName !== 'BUTTON' || !listEl.contains(head)) return;
      const item = head.closest('.item');
      const open = item.classList.toggle('open');
      head.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- filter popover / sheet ----------
     Desktop: a floating panel that grows out of the Filter button and goes
     back into it — same path both ways, origin anchored to the trigger.
     Phone: a bottom sheet with a dimming scrim, dragged 1:1, rubber-banded
     at the top, and released with momentum projection + velocity hand-off. */
  function wirePopover(btn, panel) {
    if (!btn || !panel) return { close: function () {} };

    // Keep the viewport-positioned panel outside animated page containers,
    // which otherwise become its containing block in some browsers.
    document.body.appendChild(panel);

    const grabber = document.createElement('div');
    grabber.className = 'sheet-grabber';
    grabber.setAttribute('aria-hidden', 'true');
    grabber.innerHTML = '<span></span>';
    panel.insertBefore(grabber, panel.firstChild);

    const scrim = document.createElement('div');
    scrim.className = 'sheet-scrim';
    scrim.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(scrim, panel);

    const edge = 12;
    const gap = 8;
    let isOpen = false;
    let mode = null;          // 'pop' | 'sheet' — fixed for the life of one opening
    let openAbove = false;
    let sheetH = 1;

    /* --- desktop: one progress value, 0 (inside the button) → 1 (open) --- */
    const pop = Spring(0, (p) => {
      const q = Math.max(0, Math.min(1, p));
      panel.style.opacity = q;
      if (reducedMotion.matches) { panel.style.transform = ''; panel.style.filter = ''; return; }
      const dir = openAbove ? 1 : -1;
      panel.style.transform =
        'translateY(' + ((1 - p) * 6 * dir).toFixed(2) + 'px) scale(' + (0.94 + 0.06 * p).toFixed(4) + ')';
      // Materialise: the surface sharpens as it arrives instead of only fading.
      panel.style.filter = p > 0.985 ? '' : 'blur(' + ((1 - q) * 4).toFixed(2) + 'px)';
    }, 0.002);

    /* --- phone: the sheet's offset from fully open, in px --- */
    const sheet = Spring(0, (y) => {
      if (reducedMotion.matches && !dragging) {
        panel.style.transform = '';
      } else {
        panel.style.transform = 'translate3d(0,' + y.toFixed(2) + 'px,0)';
      }
      // The scrim follows the sheet, so mid-drag frames already show the outcome.
      scrim.style.opacity = Math.max(0, Math.min(1, 1 - y / sheetH)).toFixed(3);
    }, 0.5);

    /* --- reduced motion: cross-fade the sheet instead of sliding it --- */
    const fade = Spring(0, (o) => {
      const q = Math.max(0, Math.min(1, o));
      panel.style.opacity = q;
      scrim.style.opacity = q;
    }, 0.004);

    function position() {
      if (!isOpen || mode !== 'pop') return;

      const rect = btn.getBoundingClientRect();
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = window.innerHeight;
      const width = Math.min(288, viewportWidth - (2 * edge));
      const left = Math.max(edge, Math.min(rect.left, viewportWidth - width - edge));
      const below = viewportHeight - rect.bottom - gap - edge;
      const above = rect.top - gap - edge;
      openAbove = below < 260 && above > below;
      const available = Math.max(140, openAbove ? above : below);

      panel.style.width = width + 'px';
      panel.style.left = left + 'px';
      panel.style.maxHeight = Math.min(520, available) + 'px';
      panel.style.top = openAbove
        ? Math.max(edge, rect.top - gap - panel.offsetHeight) + 'px'
        : Math.max(edge, Math.min(viewportHeight - edge, rect.bottom + gap)) + 'px';

      // Anchor the motion to the button that triggered it.
      const originX = Math.max(0, Math.min(width, rect.left + rect.width / 2 - left));
      panel.style.transformOrigin = originX + 'px ' + (openAbove ? '100%' : '0');
    }

    function clearInline() {
      panel.style.transform = ''; panel.style.opacity = ''; panel.style.filter = '';
      panel.style.top = ''; panel.style.left = ''; panel.style.width = '';
      panel.style.maxHeight = ''; panel.style.transformOrigin = '';
      scrim.style.opacity = '';
    }

    function finishClose() {
      if (isOpen) return;          // reopened mid-flight: nothing to finish
      panel.hidden = true;
      panel.classList.remove('is-sheet');
      scrim.classList.remove('is-visible');
      clearInline();
      mode = null;
    }

    function open() {
      const wasMoving = !panel.hidden;   // still on screen from a close in flight
      isOpen = true;
      btn.setAttribute('aria-expanded', 'true');
      document.addEventListener('click', onDocClick, true);
      document.addEventListener('keydown', onKey);
      window.addEventListener('resize', onResize, { passive: true });
      window.addEventListener('scroll', position, { passive: true });

      if (!wasMoving) mode = phone.matches ? 'sheet' : 'pop';
      panel.hidden = false;

      if (mode === 'sheet') {
        panel.classList.add('is-sheet');
        scrim.classList.add('is-visible');
        sheetH = panel.offsetHeight || 1;
        if (reducedMotion.matches) {
          sheet.jump(0);
          if (!wasMoving) fade.jump(0);
          fade.to(1, { damping: 1, response: 0.2 });
        } else {
          if (!wasMoving) sheet.jump(sheetH);   // otherwise start from where it is now
          sheet.to(0, { damping: 1, response: 0.3 });
        }
      } else {
        position();
        if (!wasMoving) pop.jump(0);
        pop.to(1, { damping: 1, response: reducedMotion.matches ? 0.2 : 0.3 });
      }
    }

    function close(refocus) {
      if (!isOpen) return;
      isOpen = false;
      btn.setAttribute('aria-expanded', 'false');
      document.removeEventListener('click', onDocClick, true);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', position);
      if (refocus) btn.focus();

      if (mode === 'sheet') {
        if (reducedMotion.matches) fade.to(0, { damping: 1, response: 0.2, onRest: finishClose });
        else sheet.to(sheetH, { damping: 1, response: 0.3, onRest: finishClose });
      } else {
        pop.to(0, { damping: 1, response: reducedMotion.matches ? 0.2 : 0.3, onRest: finishClose });
      }
    }

    function closeNow() {
      isOpen = false;
      btn.setAttribute('aria-expanded', 'false');
      pop.stop(); sheet.stop(); fade.stop();
      finishClose();
    }

    function onResize() {
      // Crossing between phone and desktop mid-open: settle rather than morph.
      if ((mode === 'sheet') !== phone.matches) { closeNow(); return; }
      if (mode === 'sheet') sheetH = panel.offsetHeight || 1;
      position();
    }
    function onDocClick(e) {
      if (panel.contains(e.target) || btn.contains(e.target)) return;
      close(false);
    }
    function onKey(e) { if (e.key === 'Escape') { e.stopPropagation(); close(true); } }

    btn.addEventListener('click', () => { isOpen ? close(false) : open(); });
    scrim.addEventListener('click', () => close(false));

    /* --- sheet drag --- */
    let dragging = false, pending = false, startY = 0, startSheetY = 0, history = [];

    function dragStart(clientY) {
      if (mode !== 'sheet' || !isOpen) return false;
      pending = true; dragging = false;
      startY = clientY;
      history = [{ y: clientY, t: performance.now() }];
      return true;
    }
    function dragMove(clientY) {
      if (!pending && !dragging) return false;
      const now = performance.now();
      if (!dragging) {
        // ~10px of hysteresis before committing to a drag, then track 1:1.
        if (Math.abs(clientY - startY) < 10) return false;
        dragging = true; pending = false;
        fade.stop();
        if (reducedMotion.matches) fade.jump(1);
        sheet.stop();                       // grab it wherever it is on screen
        startSheetY = sheet.value;
        startY = clientY;                   // rebase so there is no jump at the threshold
        panel.style.opacity = '';
      }
      history.push({ y: clientY, t: now });
      if (history.length > 6) history.shift();
      let y = startSheetY + (clientY - startY);
      if (y < 0) y = rubberband(y, 120);   // pulled past fully open
      sheet.jump(y);
      return true;
    }
    function dragEnd() {
      if (pending) { pending = false; return; }
      if (!dragging) return;
      dragging = false;
      const v = velocityFrom(history);
      const y = sheet.value;
      // Choose the destination from where the flick is heading, not from where
      // the finger let go. A clear flick decides by its direction alone.
      let target;
      if (Math.abs(v) > 300) target = v > 0 ? sheetH : 0;
      else target = (y + project(v)) > sheetH / 2 ? sheetH : 0;
      const flicked = Math.abs(v) > 300;
      const opts = { velocity: v, damping: flicked ? 0.8 : 1, response: 0.3 };

      if (target === sheetH) {
        if (flicked) buzz(8);
        isOpen = false;
        btn.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', onDocClick, true);
        document.removeEventListener('keydown', onKey);
        window.removeEventListener('resize', onResize);
        window.removeEventListener('scroll', position);
        if (reducedMotion.matches) fade.to(0, { damping: 1, response: 0.2, onRest: finishClose });
        else sheet.to(sheetH, Object.assign(opts, { onRest: finishClose }));
      } else {
        sheet.to(0, opts);
      }
    }

    // Grabber: Pointer Events with capture, so tracking continues off the element.
    grabber.addEventListener('pointerdown', (e) => {
      if (!dragStart(e.clientY)) return;
      grabber.setPointerCapture(e.pointerId);
    });
    grabber.addEventListener('pointermove', (e) => { dragMove(e.clientY); });
    grabber.addEventListener('pointerup', dragEnd);
    grabber.addEventListener('pointercancel', dragEnd);

    // Sheet body: once its list is scrolled to the top, pulling down drags the sheet.
    panel.addEventListener('touchstart', (e) => {
      if (mode !== 'sheet' || e.target.closest('.sheet-grabber')) return;
      if (panel.scrollTop > 0 || e.touches.length !== 1) return;
      dragStart(e.touches[0].clientY);
    }, { passive: true });
    panel.addEventListener('touchmove', (e) => {
      if (!pending && !dragging) return;
      const y = e.touches[0].clientY;
      if (pending && y < startY) { pending = false; return; }   // scrolling up: let the list scroll
      if (dragMove(y) && e.cancelable) e.preventDefault();
    }, { passive: false });
    panel.addEventListener('touchend', dragEnd);
    panel.addEventListener('touchcancel', dragEnd);

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
      if (typeof GRID_CONTEXTS !== 'undefined') {
        const lines = [];
        GRID_CONTEXTS.forEach((ctx) => ctx.groups.forEach((g) => g.topics.forEach((t) => {
          if ((t.notes || []).indexOf(n.id) === -1) return;
          const links = CONCEPTS_ORDER.filter((c) => GRID_ANGLES[t.id + ':' + c[0]]).map((c) =>
            '<a href="terms.html#angle=' + esc(t.id + ':' + c[0]) + '">' + esc(c[1]) + '</a>');
          if (links.length) {
            lines.push('<p class="note-angles"><span class="note-angles-topic">' + esc(t.name) + '</span>' +
              links.join(SEP) + '</p>');
          }
        })));
        if (lines.length) body += field('Concept angles for Paper 1C', lines.join(''));
      }
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

  const CONCEPTS_ORDER = [['bias', 'Bias'], ['causality', 'Causality'], ['change', 'Change'],
    ['measurement', 'Measurement'], ['perspective', 'Perspective'], ['responsibility', 'Responsibility']];

  /* ---------- concepts page: grid + key terms ---------- */
  const CONCEPT_QUESTIONS = {
    bias:           (p) => 'Evaluate possible sources of bias in research on ' + p + '.',
    causality:      (p) => 'To what extent can causal conclusions be drawn about ' + p + '?',
    change:         (p) => 'Discuss the role of change in relation to ' + p + '.',
    measurement:    (p) => 'Discuss challenges of measurement in research on ' + p + '.',
    perspective:    (p) => 'Evaluate ' + p + ' with reference to more than one perspective.',
    responsibility: (p) => 'Discuss ethical considerations in research on ' + p + '.'
  };

  function initConcepts() {
    const gridEl = $('#cgrid');
    const listEl = $('#terms-list');
    if (!gridEl || !listEl || typeof CONCEPTS === 'undefined' || typeof GRID_CONTEXTS === 'undefined') return;

    const store = {
      get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
      set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
    };
    const conceptById = {};
    CONCEPTS.forEach((c) => { conceptById[c.id] = c; });
    const topicById = {};
    GRID_CONTEXTS.forEach((ctx) => ctx.groups.forEach((g) => g.topics.forEach((t) => {
      topicById[t.id] = { topic: t, ctx: ctx };
    })));

    /* ---- motion helpers for this page ----
       New content arrives from the direction you moved (a hint of where you
       went); a single indicator slides between choices instead of the
       highlight blinking from one to the next. Both are springs, so a second
       tap mid-flight re-targets from wherever things are on screen. */
    function Arrival(el) {
      let dir = 1;
      const s = Spring(1, (p) => {
        const q = Math.max(0, Math.min(1, p));
        if (q >= 0.999) { el.style.opacity = ''; el.style.transform = ''; return; }
        el.style.opacity = q.toFixed(3);
        el.style.transform = reducedMotion.matches ? '' :
          'translate3d(' + ((1 - p) * dir * 14).toFixed(2) + 'px,0,0)';
      }, 0.002);
      return function play(d) {
        dir = d || 1;
        s.jump(0);
        s.to(1, { damping: 1, response: reducedMotion.matches ? 0.2 : 0.32 });
      };
    }

    function Indicator(container, className, underline) {
      const ind = document.createElement('span');
      ind.className = className;
      ind.setAttribute('aria-hidden', 'true');
      container.insertBefore(ind, container.firstChild);
      let x = 0, y = 0, w = 0, h = 0;
      const paint = () => {
        ind.style.transform = 'translate3d(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px,0)';
        ind.style.width = w.toFixed(2) + 'px';
        ind.style.height = h ? h.toFixed(2) + 'px' : '';
      };
      // X and Y as independent springs, so a jump across a wrapped row stays in sync.
      const sx = Spring(0, (v) => { x = v; paint(); }, 0.05);
      const sy = Spring(0, (v) => { y = v; paint(); }, 0.05);
      const sw = Spring(0, (v) => { w = v; paint(); }, 0.05);
      const sh = Spring(0, (v) => { h = v; paint(); }, 0.05);
      let shown = false;
      return {
        move(el, instant) {
          if (!el || !el.offsetWidth) return;     // not laid out (hidden view): measure later
          const t = underline
            ? { x: el.offsetLeft, y: el.offsetTop + el.offsetHeight, w: el.offsetWidth, h: 0 }
            : { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight };
          if (instant || !shown || reducedMotion.matches) {
            sx.jump(t.x); sy.jump(t.y); sw.jump(t.w); sh.jump(t.h);
            shown = true; ind.classList.add('is-ready');
            return;
          }
          const o = { damping: 1, response: 0.32 };
          sx.to(t.x, o); sy.to(t.y, o); sw.to(t.w, o); sh.to(t.h, o);
        }
      };
    }

    /* ---- views (tabs) ---- */
    const tabs = { grid: $('#tab-grid'), terms: $('#tab-terms') };
    const views = { grid: $('#view-grid'), terms: $('#view-terms') };
    const tabInd = Indicator($('.view-switch'), 'tab-ind', true);
    const arrive = { grid: Arrival(views.grid), terms: Arrival(views.terms) };
    let view = null;
    let gridBuilt = false;
    function showView(name, focus) {
      const prev = view;
      view = name;
      if (name === 'grid' && !gridBuilt) renderGrid();
      if (name === 'terms' && !groups) { buildTerms(); renderTerms(); }
      Object.keys(tabs).forEach((k) => {
        const on = k === name;
        tabs[k].setAttribute('aria-selected', on ? 'true' : 'false');
        tabs[k].tabIndex = on ? 0 : -1;
        views[k].hidden = !on;
      });
      tabInd.move(tabs[name], !prev);
      if (name === 'grid') ctxInd.move(ctxBtns.find((b) => b.dataset.ctx === ctxId), true);
      if (prev && prev !== name) arrive[name](name === 'terms' ? 1 : -1);
      if (focus) tabs[name].focus();
      store.set('psych-concepts-view', name);
    }
    Object.keys(tabs).forEach((k) => {
      tabs[k].addEventListener('click', () => { showView(k); history.replaceState(null, '', '#' + k); });
      tabs[k].addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          showView(k === 'grid' ? 'terms' : 'grid', true);
        }
      });
    });

    /* ---- grid ---- */
    const ctxEl = $('#ctx-switch');
    ctxEl.innerHTML = GRID_CONTEXTS.map((c) =>
      '<button type="button" class="seg-btn" data-ctx="' + esc(c.id) + '" aria-pressed="false">' + esc(c.name) + '</button>'
    ).join('');
    const ctxBtns = $$('.seg-btn', ctxEl);
    const ctxInd = Indicator(ctxEl, 'seg-ind');
    const arriveGrid = Arrival(gridEl);
    let ctxId = store.get('psych-grid-context');
    if (!GRID_CONTEXTS.some((c) => c.id === ctxId)) ctxId = GRID_CONTEXTS[0].id;
    let highlight = null;

    function cellHTML(t, c) {
      const a = GRID_ANGLES[t.id + ':' + c.id];
      const label = c.name + ' × ' + t.name + (a ? ': ' + a.hook : ': general angle');
      return '<button type="button" class="cg-cell' + (a ? '' : ' is-empty') + '"' +
        ' data-topic="' + esc(t.id) + '" data-concept="' + esc(c.id) + '" aria-label="' + esc(label) + '">' +
        '<span class="cg-cname" aria-hidden="true">' + esc(c.name) + '</span>' +
        (a ? '<span class="cg-hook" aria-hidden="true"><span class="key-dot"></span>' + esc(a.hook) + '</span>'
           : '<span class="cg-hook cg-none" aria-hidden="true">–</span>') +
      '</button>';
    }

    function renderGrid() {
      gridBuilt = true;
      const ctx = GRID_CONTEXTS.find((c) => c.id === ctxId);
      ctxBtns.forEach((b) => {
        const on = b.dataset.ctx === ctxId;
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
        if (on && ctxEl.scrollWidth > ctxEl.clientWidth) {
          ctxEl.scrollTo({
            left: Math.max(0, b.offsetLeft - ctxEl.clientWidth / 2 + b.offsetWidth / 2),
            behavior: reducedMotion.matches ? 'auto' : 'smooth'
          });
        }
      });
      gridEl.innerHTML =
        '<div class="cg-head" aria-hidden="true"><span class="cg-corner">Topic</span>' +
          CONCEPTS.map((c) => '<span class="cg-col" data-concept="' + esc(c.id) + '">' + esc(c.name) + '</span>').join('') +
        '</div>' +
        ctx.groups.map((g) =>
          '<div class="cg-group">' +
            '<h2 class="cg-group-title">' + esc(g.name) + '</h2>' +
            g.topics.map((t) =>
              '<section class="cg-row">' +
                '<h3 class="cg-topic">' + esc(t.name) + '</h3>' +
                '<div class="cg-cells">' + CONCEPTS.map((c) => cellHTML(t, c)).join('') + '</div>' +
              '</section>').join('') +
          '</div>').join('');
      applyHighlight();
    }
    function applyHighlight() {
      $$('[data-concept]', gridEl).forEach((el) => el.classList.toggle('is-hl', el.dataset.concept === highlight));
    }
    const ctxIndex = (id) => GRID_CONTEXTS.findIndex((c) => c.id === id);
    ctxBtns.forEach((b) => b.addEventListener('click', () => {
      if (b.dataset.ctx === ctxId) return;
      const dir = ctxIndex(b.dataset.ctx) > ctxIndex(ctxId) ? 1 : -1;
      ctxId = b.dataset.ctx; store.set('psych-grid-context', ctxId);
      ctxInd.move(b);                 // the pill leaves on the same frame as the press
      renderGrid();
      arriveGrid(dir);
    }));
    window.addEventListener('resize', () => {
      if (view) tabInd.move(tabs[view], true);
      if (view === 'grid') ctxInd.move(ctxBtns.find((b) => b.dataset.ctx === ctxId), true);
    }, { passive: true });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (view) tabInd.move(tabs[view], true);
        if (view === 'grid') ctxInd.move(ctxBtns.find((b) => b.dataset.ctx === ctxId), true);
      });
    }

    /* ---- angle card ----
       Desktop: the card grows out of the cell you pressed and goes back into
       it when closed, same path both ways. Phone: a bottom sheet that tracks
       your finger 1:1, rubber-bands at the top, and on release projects the
       flick to decide whether it closes, handing its velocity to the spring.
       Every opening and closing can be reversed mid-flight. */
    const dlg = $('#angle-dialog');
    const dScrim = $('.angle-scrim', dlg), dSheet = $('.angle-sheet', dlg);
    const dContent = $('#angle-content'), dGrab = $('.angle-grabber', dlg);
    const dEyebrow = $('#angle-eyebrow'), dTitle = $('#angle-title'), dBody = $('#angle-body');
    const dPrev = $('#angle-prev'), dNext = $('#angle-next');
    const arriveContent = Arrival(dContent);
    let current = null, cardOpen = false, cardMode = null, sheetH = 1, dragging = false;

    const pop = Spring(0, (p) => {
      const q = Math.max(0, Math.min(1, p));
      dScrim.style.opacity = q.toFixed(3);
      dSheet.style.opacity = Math.min(1, q * 1.6).toFixed(3);
      dSheet.style.transform = reducedMotion.matches ? '' : 'scale(' + (0.9 + 0.1 * p).toFixed(4) + ')';
      if (!cardOpen && q < 0.02) finishCard();     // hand the page back as soon as it is gone
    }, 0.002);
    const sheet = Spring(0, (y) => {
      dSheet.style.opacity = '1';
      dSheet.style.transform = 'translate3d(0,' + y.toFixed(2) + 'px,0)';
      dScrim.style.opacity = Math.max(0, Math.min(1, 1 - y / sheetH)).toFixed(3);
      if (!cardOpen && !dragging && y > sheetH - 2) finishCard();
    }, 0.5);
    const fade = Spring(0, (o) => {
      const q = Math.max(0, Math.min(1, o));
      dScrim.style.opacity = q.toFixed(3);
      dSheet.style.opacity = q.toFixed(3);
      if (!cardOpen && q < 0.02) finishCard();
    }, 0.004);

    function finishCard() {
      if (cardOpen || !dlg.open) return;
      pop.stop(); sheet.stop(); fade.stop();
      dlg.close();
    }

    function fillAngle(topicId, conceptId) {
      const rec = topicById[topicId], c = conceptById[conceptId];
      const t = rec.topic, a = GRID_ANGLES[topicId + ':' + conceptId];
      dEyebrow.textContent = c.name + ' × ' + t.name + ' · ' + rec.ctx.name;
      let body = '';
      if (a) {
        dTitle.textContent = a.hook;
        body += field('The angle', '<p>' + esc(a.angle) + '</p>');
        body += field('Evidence to use', '<p>' + esc(a.use) + '</p>');
        body += field('Counter-point', '<p>' + esc(a.but) + '</p>');
      } else {
        dTitle.textContent = 'Weaker link: use the general angle';
        body += field('General angle for ' + c.name.toLowerCase(), '<p>' + esc(GRID_GENERAL[conceptId]) + '</p>');
        body += '<p class="angle-aside">Exam setters tend to ask about combinations that matter, so this pairing is less likely. If it comes up, apply the general angle to your key study for ' + esc(t.name.toLowerCase()) + '.</p>';
      }
      body += field('Practice question', '<p class="angle-q">' + esc(CONCEPT_QUESTIONS[conceptId](t.phrase)) + '</p>' +
        '<p class="angle-aside">Written in the style of Paper 1 Section C (15 marks). Not an official question.</p>');
      const links = [];
      (t.notes || []).forEach((id) => {
        const title = (typeof GRID_NOTE_TITLES !== 'undefined' && GRID_NOTE_TITLES[id]) || 'Revision note';
        links.push('<a href="notes.html#' + esc(id) + '">' + esc(title) + '</a>');
      });
      links.push('<a href="#terms" data-goto-terms="' + esc(conceptId) + '">Key terms for ' + esc(c.name.toLowerCase()) + '</a>');
      body += '<p class="angle-links">' + links.join(SEP) + '</p>';
      dBody.innerHTML = body;
      const i = CONCEPTS.findIndex((x) => x.id === conceptId);
      dPrev.hidden = i === 0; dNext.hidden = i === CONCEPTS.length - 1;
    }

    function cellFor(cur) {
      return cur && $('.cg-cell[data-topic="' + cur.topicId + '"][data-concept="' + cur.conceptId + '"]', gridEl);
    }

    function anchorTo(cell) {
      // Grow out of the cell that was pressed: the card's transform-origin is
      // the cell's centre, measured against the card's resting position.
      dSheet.style.transform = '';
      const r = dSheet.getBoundingClientRect();
      if (!cell) { dSheet.style.transformOrigin = ''; return; }
      const c = cell.getBoundingClientRect();
      dSheet.style.transformOrigin =
        (c.left + c.width / 2 - r.left).toFixed(1) + 'px ' + (c.top + c.height / 2 - r.top).toFixed(1) + 'px';
    }

    function openAngle(topicId, conceptId, fromEl) {
      if (!topicById[topicId] || !conceptById[conceptId]) return;
      const reopening = dlg.open && !cardOpen;          // closing in flight: reverse it
      current = { topicId: topicId, conceptId: conceptId };
      fillAngle(topicId, conceptId);
      cardOpen = true;
      if (!dlg.open) {
        cardMode = phone.matches ? 'sheet' : 'pop';
        dlg.classList.toggle('is-sheet', cardMode === 'sheet');
        dlg.showModal();
        dSheet.scrollTop = 0;
      }
      if (reducedMotion.matches) {
        dSheet.style.transform = '';
        if (!reopening) fade.jump(0);
        fade.to(1, { damping: 1, response: 0.2 });
      } else if (cardMode === 'sheet') {
        sheetH = dSheet.offsetHeight || 1;
        if (!reopening) sheet.jump(sheetH);
        sheet.to(0, { damping: 1, response: 0.3 });
      } else {
        if (!reopening) { anchorTo(fromEl); pop.jump(0); }
        pop.to(1, { damping: 1, response: 0.3 });
      }
      dTitle.tabIndex = -1;
      dTitle.focus({ preventScroll: true });
      history.replaceState(null, '', '#angle=' + topicId + ':' + conceptId);
    }

    function closeAngle(velocity) {
      if (!cardOpen) return;
      cardOpen = false;
      const back = cellFor(current);
      if (reducedMotion.matches) fade.to(0, { damping: 1, response: 0.2 });
      else if (cardMode === 'sheet') {
        sheet.to(sheetH, { damping: velocity ? 0.8 : 1, response: 0.3, velocity: velocity || 0 });
      } else {
        if (back) anchorTo(back);   // go back into the cell it came from
        pop.to(0, { damping: 1, response: 0.26 });
      }
    }

    dlg.addEventListener('cancel', (e) => { e.preventDefault(); closeAngle(); });  // Esc animates too
    dlg.addEventListener('close', () => {
      dSheet.style.transform = ''; dSheet.style.opacity = ''; dScrim.style.opacity = '';
      dSheet.style.transformOrigin = '';
      history.replaceState(null, '', '#grid');
      const el = cellFor(current);
      if (el) el.focus({ preventScroll: true });
    });
    $('#angle-close').addEventListener('click', () => closeAngle());
    dScrim.addEventListener('click', () => closeAngle());

    function step(dir) {
      const i = CONCEPTS.findIndex((x) => x.id === current.conceptId) + dir;
      if (i < 0 || i >= CONCEPTS.length) return;
      current = { topicId: current.topicId, conceptId: CONCEPTS[i].id };
      fillAngle(current.topicId, current.conceptId);
      dSheet.scrollTop = 0;
      arriveContent(dir);
      history.replaceState(null, '', '#angle=' + current.topicId + ':' + current.conceptId);
    }
    dPrev.addEventListener('click', () => step(-1));
    dNext.addEventListener('click', () => step(1));
    dBody.addEventListener('click', (e) => {
      const a = e.target.closest('[data-goto-terms]');
      if (!a) return;
      e.preventDefault();
      cardOpen = false; finishCard();
      selectConcept(a.dataset.gotoTerms);
      showView('terms');
      history.replaceState(null, '', '#terms');
      window.scrollTo({ top: 0 });
    });
    gridEl.addEventListener('click', (e) => {
      const cell = e.target.closest('.cg-cell');
      if (cell) openAngle(cell.dataset.topic, cell.dataset.concept, cell);
    });

    /* sheet drag (phone) */
    let pending = false, startY = 0, startSheetY = 0, trail = [];
    function dragStart(y) {
      if (cardMode !== 'sheet' || !cardOpen || reducedMotion.matches) return false;
      pending = true; dragging = false; startY = y;
      trail = [{ y: y, t: performance.now() }];
      return true;
    }
    function dragMove(y) {
      if (!pending && !dragging) return false;
      if (!dragging) {
        if (Math.abs(y - startY) < 10) return false;     // hysteresis, then 1:1
        dragging = true; pending = false;
        sheet.stop(); startSheetY = sheet.value; startY = y;
      }
      trail.push({ y: y, t: performance.now() });
      if (trail.length > 6) trail.shift();
      let off = startSheetY + (y - startY);
      if (off < 0) off = rubberband(off, 120);
      sheet.jump(off);
      return true;
    }
    function dragEnd() {
      if (pending) { pending = false; return; }
      if (!dragging) return;
      dragging = false;
      const v = velocityFrom(trail);
      const off = sheet.value;
      const flicked = Math.abs(v) > 300;
      const closes = flicked ? v > 0 : (off + project(v)) > sheetH / 2;
      if (closes) {
        if (flicked) buzz(8);
        closeAngle(v);
      } else {
        sheet.to(0, { velocity: v, damping: flicked ? 0.8 : 1, response: 0.3 });
      }
    }
    dGrab.addEventListener('pointerdown', (e) => {
      if (!dragStart(e.clientY)) return;
      dGrab.setPointerCapture(e.pointerId);
    });
    dGrab.addEventListener('pointermove', (e) => { dragMove(e.clientY); });
    dGrab.addEventListener('pointerup', dragEnd);
    dGrab.addEventListener('pointercancel', dragEnd);
    dSheet.addEventListener('touchstart', (e) => {
      if (e.target.closest('.angle-grabber') || dSheet.scrollTop > 0 || e.touches.length !== 1) return;
      dragStart(e.touches[0].clientY);
    }, { passive: true });
    dSheet.addEventListener('touchmove', (e) => {
      if (!pending && !dragging) return;
      const y = e.touches[0].clientY;
      if (pending && y < startY) { pending = false; return; }   // scrolling up: let the card scroll
      if (dragMove(y) && e.cancelable) e.preventDefault();
    }, { passive: false });
    dSheet.addEventListener('touchend', dragEnd);
    dSheet.addEventListener('touchcancel', dragEnd);

    /* ---- key terms ---- */
    const searchEl = $('#terms-search'), clearEl = $('#terms-search-clear');
    const emptyEl = $('#terms-empty'), liveEl = $('#terms-live'), countEl = $('#terms-count');
    const chipsEl = $('#concept-chips');

    const homes = {};   // term id -> concept names it appears under
    CONCEPTS.forEach((c) => c.terms.forEach((id) => { (homes[id] = homes[id] || []).push(c); }));

    chipsEl.innerHTML =
      '<button type="button" class="chip" data-concept="all" aria-pressed="true">All</button>' +
      CONCEPTS.map((c) => '<button type="button" class="chip" data-concept="' + esc(c.id) + '" aria-pressed="false">' +
        esc(c.name) + '<span class="chip-n">' + c.terms.length + '</span></button>').join('');
    const chips = $$('.chip', chipsEl);

    let groups = null;
    // Built the first time the Key terms tab is shown, so the grid paints first.
    function buildTerms() {
      if (groups) return;
      listEl.innerHTML = CONCEPTS.map((c) =>
        '<section class="terms-group" data-concept="' + esc(c.id) + '">' +
          '<div class="terms-intro">' +
            '<h2 class="terms-heading">' + esc(c.name) + '</h2>' +
            '<p class="terms-blurb">' + esc(c.blurb) + '</p>' +
            '<button type="button" class="text-btn terms-togrid" data-concept="' + esc(c.id) + '">See ' + esc(c.name.toLowerCase()) + ' across topics →</button>' +
          '</div>' +
          '<dl class="terms">' +
            c.terms.map((id) => {
              const t = TERMS[id];
              const others = homes[id].filter((h) => h.id !== c.id).map((h) => h.name);
              return '<div class="term">' +
                '<dt>' + esc(t.term) + '</dt>' +
                '<dd>' + esc(t.def) +
                  (others.length ? '<span class="term-also">Also under ' + esc(others.join(', ')) + '</span>' : '') +
                '</dd></div>';
            }).join('') +
          '</dl>' +
        '</section>').join('');

      groups = $$('.terms-group', listEl).map((el, i) => ({
        el: el, id: CONCEPTS[i].id, shown: true,
        rows: $$('.term', el).map((rowEl, j) => {
          const t = TERMS[CONCEPTS[i].terms[j]];
          return { el: rowEl, id: CONCEPTS[i].terms[j], shown: true, s: norm(t.term + ' ' + t.def) };
        })
      }));
    }
    const total = Object.keys(homes).length;
    let words = [], selected = 'all', liveTimer = null;

    function renderTerms() {
      if (!groups) return;
      const seen = {};
      let rowsShown = 0;
      groups.forEach((g) => {
        const conceptOk = selected === 'all' || g.id === selected;
        let any = 0;
        g.rows.forEach((r) => {
          let ok = conceptOk;
          for (let i = 0; ok && i < words.length; i++) if (r.s.indexOf(words[i]) === -1) ok = false;
          if (ok !== r.shown) { r.shown = ok; r.el.hidden = !ok; }
          if (ok) { any++; rowsShown++; seen[r.id] = 1; }
        });
        const gOk = any > 0;
        if (gOk !== g.shown) { g.shown = gOk; g.el.hidden = !gOk; }
      });
      const unique = Object.keys(seen).length;
      emptyEl.hidden = rowsShown !== 0;
      countEl.textContent = (selected === 'all' && !words.length) ? total + ' terms' : unique + ' of ' + total + ' terms';
      clearTimeout(liveTimer);
      liveTimer = setTimeout(() => { liveEl.textContent = unique + (unique === 1 ? ' term shown' : ' terms shown'); }, 450);
    }
    function selectConcept(id) {
      selected = id;
      chips.forEach((b) => b.setAttribute('aria-pressed', b.dataset.concept === id ? 'true' : 'false'));
      renderTerms();
    }
    chips.forEach((b) => b.addEventListener('click', () => selectConcept(b.dataset.concept)));
    function setSearch(v) { const q = norm(v); words = q ? q.split(' ') : []; }
    searchEl.addEventListener('input', () => { setSearch(searchEl.value); clearEl.hidden = !searchEl.value; renderTerms(); });
    searchEl.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchEl.value) { searchEl.value = ''; setSearch(''); clearEl.hidden = true; renderTerms(); }
    });
    clearEl.addEventListener('click', () => { searchEl.value = ''; setSearch(''); clearEl.hidden = true; searchEl.focus(); renderTerms(); });
    listEl.addEventListener('click', (e) => {
      const b = e.target.closest('.terms-togrid');
      if (!b) return;
      highlight = b.dataset.concept;
      showView('grid');
      history.replaceState(null, '', '#grid');
      applyHighlight();
      window.scrollTo({ top: 0 });
    });

    /* ---- start ---- */
    const hash = decodeURIComponent(location.hash.slice(1));
    if (hash.indexOf('angle=') === 0) {
      const parts = hash.slice(6).split(':');
      const rec = topicById[parts[0]];
      if (rec) ctxId = rec.ctx.id;
      showView('grid');
      openAngle(parts[0], parts[1]);
    } else if (hash === 'terms' || hash === 'grid') {
      showView(hash);
    } else {
      showView(store.get('psych-concepts-view') === 'terms' ? 'terms' : 'grid');
    }
  }

  /* ---------- deep links into notes (notes.html#n13) ---------- */
  function openNoteFromHash() {
    const id = location.hash.slice(1);
    if (!id) return;
    const item = document.getElementById(id);
    if (!item || !item.classList.contains('item')) return;
    item.classList.add('open');
    const head = $('.item-head', item);
    if (head) head.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => item.scrollIntoView({ block: 'start', behavior: reducedMotion.matches ? 'auto' : 'smooth' }));
  }

  /* ---------- copy button ----------
     Completion feedback: the label, the button's state and (on phones that
     support it) a light tap all change on the same frame as the copy. */
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
      btn.classList.toggle('is-done', ok);
      if (ok) buzz(10);
      if (!ok) {
        const range = document.createRange();
        range.selectNodeContents(source);
        const sel = window.getSelection();
        sel.removeAllRanges(); sel.addRange(range);
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        label.textContent = 'Copy prompt';
        btn.classList.remove('is-done');
      }, 2200);
    });
  }

  /* ---------- mobile navigation ----------
     The menu grows out of the toggle and returns into it along the same path.
     It's a spring, so tapping the toggle again mid-flight simply reverses it. */
  function initMobileNav() {
    const nav = $('.nav');
    const toggle = $('.nav-toggle', nav);
    const links = $('.nav-links', nav);
    if (!nav || !toggle || !links) return;

    const menu = Spring(0, (p) => {
      const q = Math.max(0, Math.min(1, p));
      links.style.opacity = phone.matches ? q : '';
      links.style.transform = (!phone.matches || reducedMotion.matches) ? ''
        : 'translateY(' + ((1 - p) * -8).toFixed(2) + 'px) scale(' + (0.96 + 0.04 * p).toFixed(4) + ')';
    }, 0.002);

    function setOpen(open, refocus) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      if (open) links.classList.add('is-shown');
      menu.to(open ? 1 : 0, {
        damping: 1,
        response: reducedMotion.matches ? 0.18 : 0.3,
        onRest: open ? null : () => links.classList.remove('is-shown')
      });
      if (refocus) toggle.focus();
    }

    toggle.addEventListener('click', () => {
      setOpen(!nav.classList.contains('is-open'), false);
    });
    links.addEventListener('click', (e) => {
      if (e.target.closest('a')) setOpen(false, false);
    });
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('is-open') && !nav.contains(e.target)) setOpen(false, false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) setOpen(false, true);
    });
    phone.addEventListener('change', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      links.classList.remove('is-shown');
      menu.jump(0);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollEdge();
    initMobileNav();
    initNotes();
    initQuestions();
    initConcepts();
    openNoteFromHash();
    initCopy();
  });
})();
