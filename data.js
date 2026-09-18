// Generated from IB Psychology Revision Notes.md and question-bank.md — content preserved verbatim.
const TOPIC_LABELS = {"learning": "Learning and Cognition", "development": "Human Development", "relationships": "Human Relationships", "core": "Core Approach Content", "methods": "Research Methods"};
const APPROACH_LABELS = {"biological": "Biological", "cognitive": "Cognitive", "sociocultural": "Sociocultural", "methods": "Research Methods"};
const NOTES = [
 {
  "title": "Localization of Function",
  "meta": "Scoville & Milner (1957) — Patient H.M.",
  "approach": "biological",
  "topic": "learning",
  "definition": "Localization of function is the idea that specific cognitive functions are controlled by specific brain areas, so damage to that area impairs that function.",
  "mechanism": [
   "Hippocampus + medial temporal lobe → formation of new long-term memories.",
   "Declarative memory (facts, events — conscious) vs procedural memory (skills — unconscious): can be separately impaired.",
   "Anterograde amnesia → cannot form new memories.",
   "Retrograde amnesia → cannot recall memories from before the damage."
  ],
  "study": "Henry Molaison (H.M.) had large portions of his hippocampus and amygdala removed (age 27) to control epilepsy. He developed severe anterograde amnesia (couldn't form new memories) and partial retrograde amnesia (lost ~3 years pre-surgery), but his procedural memory (learning new motor skills) was intact — he could improve at tasks with practice despite not remembering practicing.",
  "link": "The double dissociation (declarative memory destroyed, procedural memory spared) shows these two memory types are localized in different brain structures, supporting localization of function.",
  "advantage": "Naturalistic brain damage → allows study of cognitive functions impossible to ethically recreate in a lab.",
  "disadvantage": "Unique case study (only one H.M.) → very limited generalizability, and damage was not controlled (multiple areas affected at once).",
  "backup": "",
  "studyLabel": "Study",
  "id": "n1"
 },
 {
  "title": "Brain Imaging Techniques (fMRI)",
  "meta": "Sharot et al. (2007)",
  "approach": "biological",
  "topic": "learning",
  "definition": "Brain imaging techniques (e.g. fMRI) let researchers observe brain activity in a living person while they perform cognitive tasks, linking specific brain regions to specific processes.",
  "mechanism": [
   "fMRI measures the BOLD signal (blood-oxygen-level dependent) — more oxygenated blood flow = more neural activity in that region.",
   "Trade-off: fMRI has good spatial resolution (~1–5mm) but poor temporal resolution (~1 second); EEG is the reverse."
  ],
  "study": "Sharot et al. (2007) scanned 24 participants (half in Downtown Manhattan, half in Midtown during 9/11) three years later, recalling either 9/11 memories or a neutral \"summer\" memory while in an fMRI scanner. 83% of the Downtown group showed selective activation of the left amygdala specifically for 9/11 memories, and activation correlated with proximity to the attack (r=0.45).",
  "link": "Selective amygdala activation for the emotionally shocking event (but not the neutral one) supports the amygdala as the biological basis of vivid, long-lasting \"flashbulb memories.\"",
  "advantage": "fMRI allows real, in vivo study of brain activity, impossible before scanning technology.",
  "disadvantage": "Correlational — fMRI shows amygdala activity is associated with vivid recall, not proven to cause it.",
  "backup": "",
  "studyLabel": "Study",
  "id": "n2"
 },
 {
  "title": "Neuroplasticity & Critical Periods, Greenough",
  "meta": "Black & Wallace (1987)",
  "approach": "biological",
  "topic": "development",
  "definition": "Neuroplasticity is the making and breaking of synaptic connections between neurons; experience-expectant neuroplasticity is when the brain over-produces connections then prunes those not used during \"critical periods\" of heightened sensitivity to typical experiences.",
  "mechanism": [
   "Neurogenesis → migration → differentiation (synapse growth) → pruning (elimination) — the four stages of brain maturation.",
   "Experience-expectant plasticity: brain \"anticipates\" typical species experiences, over-produces synapses, then prunes unused ones (\"use it or lose it\").",
   "Experience-dependent plasticity: unique, individual learning — new synapses form based on how often two neurons fire together, no over-production/pruning cycle."
  ],
  "study": "Werker et al. (1981) tested discrimination of Hindi phonemes (e.g. /ta/ vs /Ta/) in 6–7-month-old infants, English-speaking adults, and Hindi-speaking adults. Infants (regardless of native language) discriminated the sounds as well as Hindi-speaking adults, but English-speaking adults could not.",
  "link": "Because infants start with the ability to discriminate all phonetic contrasts and lose the unused ones over time, this supports pruning: connections not reinforced by the infant's actual linguistic environment are eliminated during a critical period for language.",
  "advantage": "Non-invasive, ethical way to demonstrate a pruning-based mechanism in real (human) development.",
  "disadvantage": "The pruning mechanism itself is inferred, not directly observed (no synapses were actually measured in the study).",
  "backup": "Blakemore & Cooper (1970) — kittens raised seeing only vertical OR only horizontal stripes later behaved as if \"blind\" to contours in the orientation they never saw, and visual cortex neurons only fired for the experienced orientation. Demonstrates experience-dependent plasticity, but ethically troubling and animal-only.",
  "studyLabel": "Study",
  "id": "n3"
 },
 {
  "title": "Epigenetics & Childhood Experience",
  "meta": "Weaver et al. (2004)",
  "approach": "biological",
  "topic": "development",
  "definition": "Epigenetics is the study of how environmental/experiential factors change gene expression (not the DNA sequence itself) through mechanisms like DNA methylation, and how this can produce long-lasting behavioural effects.",
  "mechanism": [
   "Adverse/nurturing experiences → methylation of specific genes (e.g. the glucocorticoid receptor/GR gene) → suppressed gene expression.",
   "This can permanently alter stress reactivity, persisting into adulthood unless reversed."
  ],
  "study": "Weaver et al. (2004) found that rat pups raised by low-nurturing mothers (less licking/grooming in the first week of life) showed increased methylation of the GR gene in the hippocampus, lower expression of that gene, and greater stress reactivity as adults compared to pups raised by high-nurturing mothers.",
  "link": "Because the only difference was early maternal behaviour (an environmental/experiential factor), and this produced a measurable, lasting biological change (methylation) with a behavioural consequence (stress reactivity), this demonstrates a biological mechanism by which early experience shapes lifelong development.",
  "advantage": "Directly measures a biological mechanism (methylation), not just a correlation between experience and behaviour.",
  "disadvantage": "Animal study (rats) → uncertain generalizability to human early-adversity effects.",
  "backup": "McGowan et al. (2009) — found increased GR gene methylation specifically in the hippocampus (not other brain regions) of human suicide victims with a history of childhood abuse, versus those without, supporting the same mechanism in humans.",
  "studyLabel": "Study",
  "id": "n4"
 },
 {
  "title": "Attachment (Contact Comfort & Secure Base)",
  "meta": "Harry Harlow (1958)",
  "approach": "biological",
  "topic": "development",
  "definition": "Attachment is an emotional bond between infant and caregiver; Harlow's research showed it is driven by \"contact comfort\" rather than simple satisfaction of hunger, and provides a secure base for exploration.",
  "mechanism": [
   "Contact comfort: infants prefer a soft, huggable object over one that merely provides food.",
   "Secure base hypothesis: a comforting attachment figure allows the infant to explore confidently, retreating to it when anxious."
  ],
  "study": "Harlow (1958) raised infant rhesus monkeys with two surrogate \"mothers\" — a wire mother (that could dispense milk) and a soft cloth mother (that could not, in one condition). Monkeys spent far more time clinging to the cloth mother regardless of which one fed them, and used the cloth (but not wire) mother as a secure base to explore a novel/frightening room, returning to her when scared.",
  "link": "Because monkeys preferred the non-feeding cloth mother for comfort and used only her as a secure base, this shows attachment is driven by contact comfort, not merely satisfaction of hunger as behaviourists had assumed.",
  "advantage": "True experiment with random allocation → strong causal conclusions about contact comfort vs. feeding.",
  "disadvantage": "Major ethical concerns (deliberate maternal deprivation causing lasting distress) and questionable generalizability from monkeys to humans (human attachment develops much more slowly).",
  "backup": "",
  "studyLabel": "Study",
  "id": "n5"
 },
 {
  "title": "Chemical Messengers in Romantic Relationships, Fisher",
  "meta": "Aron & Brown (2005)",
  "approach": "biological",
  "topic": "relationships",
  "definition": "Chemical messengers (hormones/neurotransmitters) appear to underlie three distinct evolved systems regulating reproduction: sex drive (testosterone), attraction/romantic love (dopamine), and partner attachment (oxytocin/vasopressin).",
  "mechanism": [
   "Dopaminergic pathway (ventral tegmental area, caudate nucleus) = reward system, linked to motivation/pleasure → romantic love/attraction.",
   "Testosterone → sex drive (independent of romantic love).",
   "Oxytocin/vasopressin → long-term partner attachment/pair bonding."
  ],
  "study": "Fisher, Aron & Brown (2005) put 17 participants who were \"intensely in love\" into an fMRI scanner and had them alternately view a photo of their beloved and a neutral acquaintance. Viewing the beloved's photo activated dopamine-rich regions (ventral tegmental area, caudate nucleus), especially the more intensely in love the participant was.",
  "link": "Selective activation of dopamine-associated reward regions specifically for the loved one's photo (not the neutral acquaintance) supports dopamine's role in the brain system underlying romantic love/attraction.",
  "advantage": "Uses objective brain-imaging data rather than relying only on self-report of feelings.",
  "disadvantage": "Correlational (fMRI shows association, not proof dopamine causes romantic love) and small, self-selected sample.",
  "backup": "",
  "studyLabel": "Study",
  "id": "n6"
 },
 {
  "title": "Classical Conditioning",
  "meta": "Ivan Pavlov (1897)",
  "approach": "cognitive",
  "topic": "learning",
  "definition": "Classical conditioning is learning through association between two stimuli.",
  "mechanism": [
   "Unconditioned stimulus (US): naturally triggers a response (e.g. food).",
   "Unconditioned response (UR): automatic/reflexive response to US (e.g. salivation).",
   "Conditioned stimulus (CS): neutral stimulus repeatedly paired with the US (e.g. bell).",
   "Conditioned response (CR): learned response to the CS after pairing.",
   "Generalization: the CR extends to similar stimuli (e.g. dogs salivating to a buzzer, not just the bell)."
  ],
  "study": "Pavlov paired a metronome/bell (CS) with food (US) for dogs whose saliva was measured via a surgically redirected tube. After repeated pairings, dogs salivated (CR) to the bell alone.",
  "link": "",
  "advantage": "Highly controlled lab procedure → easy to establish cause and effect.",
  "disadvantage": "Animal study → findings may not fully generalize to complex human behaviour.",
  "backup": "Watson & Rayner (1920) — \"Little Albert,\" a 9-month-old conditioned to fear a white rat by pairing it with a loud frightening noise; fear generalized to other white/fluffy objects. Useful human example, but ethically highly criticized (no informed consent/withdrawal, lasting distress).",
  "studyLabel": "Study",
  "id": "n7"
 },
 {
  "title": "Operant Conditioning",
  "meta": "B.F. Skinner (1948)",
  "approach": "cognitive",
  "topic": "learning",
  "definition": "Operant conditioning is learning through the consequences of behaviour (reinforcement/punishment), based on Thorndike's law of effect.",
  "mechanism": [
   "Positive reinforcement: adding a reward to increase behaviour.",
   "Negative reinforcement: removing an unpleasant stimulus to increase behaviour.",
   "Positive punishment: adding an aversive stimulus to decrease behaviour.",
   "Negative punishment: removing something desirable to decrease behaviour.",
   "Extinction: behaviour decreases when reinforcement stops."
  ],
  "study": "Skinner (1948) placed 8 hungry pigeons in a chamber where food was dispensed at fixed time intervals regardless of behaviour. In 6/8 cases, pigeons developed distinct repetitive \"superstitious\" behaviours (e.g. turning, head-tossing) — whatever they happened to be doing when food arrived got reinforced, despite no real causal link.",
  "link": "The pigeons falsely \"learned\" a behaviour-reward association purely by coincidental reinforcement timing, demonstrating operant conditioning's core mechanism (behaviour → consequence → repetition) even without a genuine contingency.",
  "advantage": "Skinner box gives full experimental control over all variables affecting behaviour.",
  "disadvantage": "Radical behaviourism ignores cognitive variables (e.g. expectation, thought) entirely, giving an incomplete account of learning.",
  "backup": "",
  "studyLabel": "Study",
  "id": "n8"
 },
 {
  "title": "Schema Theory, Jean Piaget",
  "meta": "",
  "approach": "cognitive",
  "topic": "learning",
  "definition": "A schema is a generalized mental representation of some aspect of reality that shapes how we interpret new information.",
  "mechanism": [
   "Assimilation: fitting new information into an existing schema (schema unchanged).",
   "Accommodation: adjusting an existing schema to fit new information (occurs only when assimilation fails).",
   "Schemas are constructs — not directly observable, only inferred from their effects on perception/memory.",
   "Schemas bias processing but also make information processing efficient."
  ],
  "study": "Brewer & Treyens (1981) had participants wait briefly in a fake \"office\" containing schema-consistent items (desk, stationery) and schema-inconsistent items (a skull, a picnic basket), while some expected items (books) were missing. When asked to recall the room's contents, participants recalled schema-consistent objects more often, and some falsely recalled schema-consistent objects that were never there (e.g. a window).",
  "link": "Participants' pre-existing \"office schema\" distorted both encoding and recall, directly demonstrating a schema's biasing effect on memory.",
  "advantage": "Explains real cognitive/memory errors (false memories) with a simple, well-supported mechanism.",
  "disadvantage": "Schema is an unobservable construct → findings are open to alternative explanations (e.g. encoding vs. retrieval failure), as Brewer & Treyens themselves showed with recognition tasks.",
  "backup": "",
  "studyLabel": "Study",
  "id": "n9"
 },
 {
  "title": "Cognitive Models — Multi-Store Memory Model (MSMM)",
  "meta": "Atkinson & Shiffrin (1968)",
  "approach": "cognitive",
  "topic": "learning",
  "definition": "The MSMM proposes memory consists of three separate stores — sensory, short-term (STM), and long-term (LTM) — each with distinct duration and capacity.",
  "mechanism": [
   "Sensory memory: near-unlimited capacity, <1 second duration; attention moves info to STM.",
   "STM: capacity 7±2 chunks, duration ~30 seconds; rehearsal moves info to LTM.",
   "LTM: unlimited capacity, indefinite duration."
  ],
  "study": "Glanzer & Cunitz (1966) — 240 participants free-recalled 20-word lists. Immediate recall showed both a primacy effect (first words recalled well — rehearsed into LTM) and recency effect (last words recalled well — still in STM). When a 30-second counting-backwards filler task was inserted before recall (blocking rehearsal), the recency effect disappeared but the primacy effect remained.",
  "link": "Because only the recency effect (STM-dependent) was disrupted by the filler task while the primacy effect (LTM-dependent) was not, this shows STM and LTM are functionally separate stores, as MSMM proposes.",
  "advantage": "Simple, parsimonious model, easy to test with controlled experiments.",
  "disadvantage": "Cannot explain findings like the phonological similarity effect or word length effect (evidence that doesn't fit the model).",
  "backup": "",
  "studyLabel": "Study",
  "id": "n10"
 },
 {
  "title": "Cognitive Models — Working Memory Model (WMM)",
  "meta": "Baddeley & Hitch (1974)",
  "approach": "cognitive",
  "topic": "learning",
  "definition": "The WMM refines the MSMM's \"STM\" into a central executive that coordinates two subsystems: the phonological loop (sound/verbal info) and the visuospatial sketchpad (visual/spatial info).",
  "mechanism": [
   "Phonological loop = \"inner ear\" (passive storage) + \"inner voice\" (subvocal rehearsal).",
   "Visuospatial sketchpad = \"inner eye,\" holds visual/spatial info.",
   "Central executive: allocates attention between subsystems.",
   "Articulatory suppression (repeating a sound aloud) occupies the inner voice, blocking phonological encoding."
  ],
  "study": "Baddeley, Lewis & Vallar (1984) found that the phonological similarity effect (rhyming letters like B/D/C/P being harder to recall) disappeared under articulatory suppression, because the \"inner voice\" was occupied and letters had to be stored visually instead of acoustically.",
  "link": "This shows the phonological loop specifically (not STM as one unit) handles rhyme confusion, explaining data the MSMM could not, and demonstrating the loop's separate visual/acoustic pathways.",
  "advantage": "More explanatory power than MSMM — accounts for phonological similarity effect and word length effect.",
  "disadvantage": "Less parsimonious — the roles of the central executive and episodic buffer remain unclear/harder to test.",
  "backup": "",
  "studyLabel": "Study",
  "id": "n11"
 },
 {
  "title": "Cognitive Load Theory",
  "meta": "John Sweller (1988)",
  "approach": "cognitive",
  "topic": "learning",
  "definition": "Cognitive load theory states that working memory has limited capacity, and learning is optimized by managing the type of mental demand placed on it.",
  "mechanism": [
   "Intrinsic load: inherent difficulty of the material itself (teacher has little control).",
   "Extraneous load: unnecessary load created by poor presentation (teacher has full control; should minimize).",
   "Germane load: load from building useful schemas (should be maximized).",
   "Once a schema is formed, complex info becomes \"one chunk,\" freeing working memory capacity."
  ],
  "study": "",
  "link": "",
  "advantage": "Directly links cognitive theory (schema theory + MSMM) to practical, evidence-based teaching guidelines.",
  "disadvantage": "The three load types are difficult to measure/separate independently in practice, limiting precise empirical testing.",
  "backup": "none essential — this concept is usually explained conceptually/applied to a scenario rather than tested via one landmark study.",
  "studyLabel": "Study",
  "id": "n12"
 },
 {
  "title": "Dual-Process Model & Cognitive Bias",
  "meta": "Daniel Kahneman (2011)",
  "approach": "cognitive",
  "topic": "learning",
  "definition": "The dual-process model proposes two systems of thinking: System 1 (fast, automatic, heuristic-based) and System 2 (slow, effortful, rational/logical); System 1 fires first and can be overridden by System 2. Cognitive biases occur when System 1 heuristics cause systematic deviation from a normative (rational) model.",
  "mechanism": [
   "System 1 = descriptive model (how people actually think); System 2 = normative model (how people should think).",
   "Confirmation bias: seeking information that confirms existing beliefs, avoiding contradicting evidence.",
   "Anchoring bias: initial (even irrelevant) information skews subsequent judgments."
  ],
  "study": "Wason's (1968) four-card problem — given the rule \"if a vowel, then even number\" and four cards, most participants chose to check cards that could only confirm the rule (e.g., the vowel and the even number) rather than the card that could logically falsify it (the odd number), violating the normative principle of falsifiability.",
  "link": "Participants sought confirming rather than falsifying evidence, directly demonstrating confirmation bias as a deviation from logical (normative) reasoning.",
  "advantage": "Wason's task is a controlled, logically precise way to isolate the bias from other factors.",
  "disadvantage": "Artificial abstract task → low ecological validity; may not reflect how confirmation bias operates in real-life belief systems.",
  "backup": "Englich, Mussweiler & Strack (2006) — practising judges given a hypothetical case rolled dice to \"randomly\" generate a sentencing suggestion; despite knowing the number was random, judges' final sentences correlated positively with the dice roll — showing anchoring bias occurs even among experts and even with a transparently irrelevant anchor.",
  "studyLabel": "Study (Confirmation Bias)",
  "id": "n13"
 },
 {
  "title": "Stage Theory of Cognitive Development, Jean Piaget",
  "meta": "",
  "approach": "cognitive",
  "topic": "development",
  "definition": "Piaget proposed that children move through four universal stages of cognitive development (sensorimotor, preoperational, concrete operational, formal operational) in a fixed sequence, driven by biological maturation.",
  "mechanism": [
   "Sensorimotor (0–2): object permanence develops; cognitive egocentrism present.",
   "Preoperational (2–7): irreversibility, lack of conservation, cognitive egocentrism.",
   "Concrete operational (7–11): logical reasoning about concrete objects; conservation achieved; egocentrism overcome.",
   "Formal operational (11–16): abstract thought, deductive reasoning, metacognition."
  ],
  "study": "Piaget & Inhelder's (1956) three mountains task — children view a 3D model of mountains with a doll positioned at a different viewpoint, then choose a picture showing what the doll sees. 4-year-olds consistently chose the picture matching their OWN viewpoint (egocentrism); only by 7–8 years did children reliably choose the doll's correct viewpoint.",
  "link": "The age-linked, consistent shift from egocentric to correct answers supports the idea of a maturation-driven stage transition (from preoperational to concrete operational) at a fairly fixed age.",
  "advantage": "Established a highly influential, systematic method (standardized tasks) for studying children's cognitive development.",
  "disadvantage": "Challenged by later research — Borke's (1975) simplified replication (using \"Grover\" from Sesame Street and a turntable instead of pictures) found children as young as 3–4 could pass a version of the same task, suggesting stage boundaries are far less clear-cut than Piaget claimed and performance depends heavily on task difficulty/familiarity.",
  "backup": "",
  "studyLabel": "Study",
  "id": "n14"
 },
 {
  "title": "Theory of Mind",
  "meta": "tested via the Sally-Anne Task",
  "approach": "cognitive",
  "topic": "development",
  "definition": "Theory of mind is the cognitive ability to attribute mental states (beliefs, intentions, knowledge) to other people, including understanding that others can hold false beliefs different from one's own.",
  "mechanism": [
   "Develops around age 4–5 in typically developing children.",
   "Requires understanding that another person's behaviour is guided by their (possibly false) belief, not by the actual state of the world.",
   "Localized partly in the temporo-parietal junction (TPJ); also linked to mirror neurons."
  ],
  "study": "Baron-Cohen, Leslie & Frith (1985) used the Sally-Anne task (Sally hides a marble and leaves; Anne moves it; child is asked where Sally will look for it) with typically developing children, children with Down syndrome, and children with autism. ~86% of typical and ~85% of Down syndrome children passed (correctly said Sally would look in her original location), but 80% of children with autism failed (said the marble's new/actual location).",
  "link": "The selective failure of autistic children (despite otherwise varied cognitive ability, as shown by the Down syndrome comparison group performing normally) supports theory of mind as a distinct cognitive capacity that can be selectively impaired.",
  "advantage": "Uses a well-controlled comparison group (Down syndrome) to isolate theory of mind specifically, rather than general cognitive/intellectual ability.",
  "disadvantage": "Relies on a verbal response, which may underestimate theory of mind in non/pre-verbal children — later eye-tracking studies (Ruffman et al., 2001) showed some autistic children who answer correctly still look toward the wrong location, suggesting verbal Sally-Anne performance doesn't always reflect true underlying understanding.",
  "backup": "",
  "studyLabel": "Study",
  "id": "n15"
 },
 {
  "title": "Cognitive Explanations for Relationships — Investment Model",
  "meta": "Caryl Rusbult (1980)",
  "approach": "cognitive",
  "topic": "relationships",
  "definition": "The investment model proposes that commitment to a relationship depends on three factors: satisfaction (rewards minus costs), quality of perceived alternatives, and investment size (what one has put into the relationship) — high commitment can persist even with low satisfaction if investment is high and alternatives are poor.",
  "mechanism": [
   "Satisfaction = rewards − costs of the relationship.",
   "Alternatives = perceived quality of other options (including being single).",
   "Investment = irretrievable resources put into the relationship (time, effort, shared property/memories).",
   "Commitment = combination of all three; predicts whether the relationship continues."
  ],
  "study": "Rusbult (1980) had participants read a hypothetical scenario where they had to decide between staying with a current partner or leaving for an alternative, manipulating cost (distance), quality of alternative, and investment size (low/medium/high) as independent variables. Commitment scores were highest when investment was high and the alternative partner was unattractive, even when relationship costs were high.",
  "link": "Because commitment tracked the combination of investment and alternative quality (not satisfaction alone), this supports the model's core claim that investment and alternatives — not just satisfaction — independently drive commitment.",
  "advantage": "True experiment (manipulated IVs) → allows causal conclusions about what drives commitment.",
  "disadvantage": "Hypothetical scenario, not participants' real relationships → low ecological validity.",
  "backup": "Rusbult (1983) — a longitudinal study of real couples found that \"stayers\" showed declining perceived alternatives and rising satisfaction/investment/commitment over time, while \"leavers\" showed the opposite pattern, and \"abandoned\" partners showed an \"entrapment\" pattern (continuing to invest despite declining satisfaction) — supporting the model with real, non-hypothetical data over time.",
  "studyLabel": "Study",
  "id": "n16"
 },
 {
  "title": "Social Learning Theory (SLT)",
  "meta": "Albert Bandura (1977)",
  "approach": "sociocultural",
  "topic": "learning",
  "definition": "SLT proposes that people can learn new behaviours indirectly, by observing a model, without direct reinforcement themselves.",
  "mechanism": [
   "Observational (indirect) learning vs. direct (trial-and-error) learning.",
   "Mediating variables: attention (esp. via identification with model), retention, motor reproduction (self-efficacy), motivation.",
   "Vicarious reinforcement/punishment: observing consequences experienced by the model."
  ],
  "study": "Bandura, Ross & Ross (1961) — 72 children (3–6yrs) randomly assigned to watch an adult model behave aggressively toward a Bobo doll, behave non-aggressively, or no model (control). After mild frustration, children exposed to the aggressive model showed significantly more imitative AND novel aggressive acts toward the doll than other groups; children also imitated same-sex models more (identification).",
  "link": "Children reproduced aggression they had only observed (no direct reinforcement to themselves), directly demonstrating observational learning, with identification acting as a mediating variable.",
  "advantage": "True experiment (random assignment, manipulated IV) → allows cause-effect conclusions.",
  "disadvantage": "Low ecological validity — a Bobo doll is not a real victim, so findings may not generalize to genuine interpersonal aggression.",
  "backup": "",
  "studyLabel": "Study",
  "id": "n17"
 },
 {
  "title": "Cognitive Dissonance",
  "meta": "Leon Festinger (1956)",
  "approach": "sociocultural",
  "topic": "learning",
  "definition": "Cognitive dissonance is the mental discomfort caused by a conflict between one's behaviour and one's beliefs, which motivates a change in belief (since behaviour, once performed, can't be undone).",
  "mechanism": [
   "Dissonance can be resolved by changing behaviour OR changing belief — changing belief is usually easier once behaviour is already committed.",
   "Explains why behaviour often drives belief change, not just the reverse.",
   "Underlies compliance techniques like foot-in-the-door (small compliance creates dissonance with prior non-helpful self-image, resolved by adopting a more helpful belief)."
  ],
  "study": "Festinger, Riecken & Schachter (1956) covertly observed \"The Seekers,\" a doomsday cult who gave up jobs/possessions believing the world would end and they'd be rescued by a spaceship. When the prophecy failed, instead of abandoning their belief, members reinterpreted it (claiming their faith had saved the world) and began actively proselytizing — behaviour they'd never done before.",
  "link": "Because members could not undo their extreme prior commitment (giving up jobs, possessions), they resolved the dissonance from the failed prophecy by changing/strengthening their belief rather than admitting error.",
  "advantage": "Naturalistic covert observation → high ecological validity, captures genuine real-world belief change.",
  "disadvantage": "Single case study of one unusual group → very limited generalizability; also raises ethical concerns (covert observation without consent).",
  "backup": "",
  "studyLabel": "Study",
  "id": "n18"
 },
 {
  "title": "Emic and Etic Approaches",
  "meta": "John Berry (1989)",
  "approach": "sociocultural",
  "topic": "learning",
  "definition": "The emic approach studies a culture from an insider's perspective (its own unique meanings); the etic approach studies it from an outsider's perspective using external/comparative frameworks. Imposed etic = when a researcher inappropriately applies concepts from their own culture onto another.",
  "mechanism": [
   "Berry's 4-step process: imposed etic → emic → derived etic → cultural universal.",
   "Derived etic = genuine cross-cultural commonalities discovered after emic understanding is reached (not assumed beforehand)."
  ],
  "study": "Cole & Scribner (1974) studied memory among the Kpelle people (Liberia). Initial free-recall tests (imposed etic — using a Western \"semantic clustering\" framework) suggested Kpelle children had \"worse\" categorical memory than American children. But when the same items were embedded in a culturally relevant narrative/story (an emic approach), Kpelle participants recalled and clustered the information just as effectively — revealing they could use categorization, but simply preferred narrative organization in daily life.",
  "link": "The narrative (emic) method revealed that the earlier \"poor memory\" conclusion was a result of imposed etic bias (using the wrong culturally-specific method), not an actual cognitive deficit — showing why the emic approach is necessary to avoid a biased conclusion.",
  "advantage": "Demonstrates a genuine methodological correction — shows how emic methods can overturn an unfair imposed-etic conclusion.",
  "disadvantage": "Findings from one ethnic group (Kpelle) cannot be assumed to generalize to how all \"traditional\" or non-Western societies process memory.",
  "backup": "",
  "studyLabel": "Study",
  "id": "n19"
 },
 {
  "title": "Sociocultural Theory of Development, Lev Vygotsky",
  "meta": "",
  "approach": "sociocultural",
  "topic": "development",
  "definition": "Vygotsky's theory proposes that higher-order cognitive functions (e.g. voluntary attention, semantic memory, conceptual thinking) originate in social interaction and are internalized — every function \"appears twice\": first interpersonally (between people), then intrapersonally (within the child).",
  "mechanism": [
   "Zone of proximal development (ZPD): the gap between what a child can do alone and what they can do with help from a \"more knowledgeable other.\"",
   "Scaffolding: temporary support from a more knowledgeable other, withdrawn as competence increases.",
   "Cultural tools (esp. language) mediate cognitive development — just as physical tools transform the physical world, cultural/mental tools transform our inner cognitive world."
  ],
  "study": "Leontyev (1931) had pre-schoolers, schoolchildren, and adults memorize word lists either with or without picture cards as memory aids. Pre-schoolers performed poorly regardless of cards; adults performed well regardless; but schoolchildren performed poorly without cards and as well as adults when given cards.",
  "link": "Because only schoolchildren benefited from the cultural tool (cards), this shows the adult-level performance was within their ZPD — achievable with, but not without, the cultural/mediating tool — supporting Vygotsky's claim that tools and assistance drive development forward within the ZPD.",
  "advantage": "Demonstrates a specific, testable mechanism (cultural tools) for how social/cultural factors boost cognitive performance.",
  "disadvantage": "Vygotsky rejected standardized experiments as the right method for studying his theory, so much supporting evidence comes from less controlled \"formative experiments\" that are harder to replicate exactly.",
  "backup": "Nedospasova (1985) — a three-step scaffolding procedure (using dolls, then diagrams, then verbal reasoning) helped pre-school children overcome cognitive egocentrism on the three-mountains-type task earlier than Piaget's stage theory would predict.",
  "studyLabel": "Study",
  "id": "n20"
 },
 {
  "title": "Enculturation of Social Norms",
  "meta": "",
  "approach": "sociocultural",
  "topic": "development",
  "definition": "Enculturation is the process by which people internalize the norms, values, and practices of their surrounding culture, via direct education, participatory learning, and/or observational learning.",
  "mechanism": [
   "Social norms have four features: normativity, generality, context sensitivity, conventionality.",
   "Different cultures may rely on different balances of participatory vs. observational learning as the primary enculturation mechanism."
  ],
  "study": "Göckeritz, Schmidt & Tomasello (2014) had triads of 5-year-old German children play a cooperative marble-run game across several sessions; on the third day, \"expert\" children (who had played before) were mixed with novices. Children spontaneously created arbitrary rules (e.g. \"if a marble misses the bucket, restart it\") and transmitted them to novices using normative language (\"this is how it's supposed to be done\"), which novices accepted without question.",
  "link": "Because children created and enforced norms with no adult input, and novices accepted them as objective rules rather than mere suggestions, this demonstrates that even young children understand and actively participate in transmitting social norms — a key mechanism of enculturation.",
  "advantage": "Naturalistic, child-driven task with high ecological validity for how norms actually spread in a peer group.",
  "disadvantage": "Small, culturally narrow sample (German children only) → limited generalizability to how norm-creation works in other cultures.",
  "backup": "Odden & Rochat (2004) — a 20-month ethnographic study of a Samoan village found that children learned complex skills (fishing, chores, social hierarchy) almost entirely through observation, with no direct instruction from adults — showing observational learning (not participatory learning) can be the dominant/preferred enculturation mechanism in some cultures.",
  "studyLabel": "Study",
  "id": "n21"
 },
 {
  "title": "Peer Influence on Development",
  "meta": "",
  "approach": "sociocultural",
  "topic": "development",
  "definition": "Peer influence is a sociocultural factor whereby children/adolescents' behaviour, attitudes, and even cognitive development are shaped by same-age peers, operating via both a behavioural (social learning) pathway and an identity (belonging/self-concept) pathway.",
  "mechanism": [
   "Must be distinguished from \"selection effects\" (people choosing similar friends, rather than friends causing similarity).",
   "Peer influence effects are generally small but robust and consistent across behaviours/cultures/ages (per meta-analysis)."
  ],
  "study": "Giletta et al. (2021) meta-analysed 233 effect sizes from 60 longitudinal studies (>47,000 participants, 10 countries) that used external (non-self-report) reporting. They found a small (d≈0.08) but statistically significant and robust effect of peer influence on behaviour, stable across externalizing, internalizing, and academic behaviours, and across age and country — with peer effects stronger short-term than long-term.",
  "link": "Because the meta-analysis only included longitudinal, non-self-report studies (ruling out reverse causality/selection and self-report bias), the small but consistent effect size gives strong evidence that peer influence has a genuine, if modest, causal effect on development.",
  "advantage": "Meta-analysis of many robust (longitudinal, non-self-report) studies → very high generalizability/reliability of conclusion.",
  "disadvantage": "Cannot fully rule out selection effects within any single included study, and the small effect size may not reflect real-world importance well for extreme cases (e.g. severe peer pressure).",
  "backup": "Cohen & Prinstein (2006) — a true experiment in which teenage boys were led to believe high- or low-status peers endorsed risky behaviour online; higher perceived peer status increased participants' subsequent endorsement of and engagement in risky behaviour, allowing a causal (not just correlational) conclusion about peer status and influence.",
  "studyLabel": "Study",
  "id": "n22"
 },
 {
  "title": "Social Identity Theory (SIT)",
  "meta": "Tajfel & Turner (1979)",
  "approach": "sociocultural",
  "topic": "relationships",
  "definition": "SIT proposes that the mere perception of belonging to a group (social categorization) is enough to trigger in-group favouritism and out-group discrimination, because people derive self-esteem from a positively distinct social identity.",
  "mechanism": [
   "Social categorization → social identity (defining self in group terms) → social comparison (in-group vs out-group) → striving for positive distinctiveness.",
   "If social identity is not positive, individuals may leave the group or try to make it more positively distinct."
  ],
  "study": "Tajfel et al. (1971), Experiment 1 — randomly and trivially assigned 64 British schoolboys to groups (labelled \"overestimators\" vs \"underestimators\" based on a meaningless dot-counting task), then had them privately allocate real money to anonymous in-group/out-group members using reward matrices. Participants consistently allocated more money to in-group members and less to out-group members than a \"fair\" (7.5) midpoint, even though the two groups never met, competed, or had any real conflict of interest.",
  "link": "Because group membership was trivial/meaningless and participants never met or competed with the other group in reality, the in-group favouritism observed must have been triggered purely by the perception of group membership itself — directly supporting SIT's core claim.",
  "advantage": "Minimal group paradigm gives excellent experimental control, isolating \"mere categorization\" as the true cause of discrimination.",
  "disadvantage": "Artificial lab setting with forced-choice matrices may create demand characteristics (boys behaving competitively because that's what they thought was expected) → limited ecological validity.",
  "backup": "Tajfel et al. (1971), Experiment 2 — with a separate sample of 48 boys (grouped by a trivial preference for Klee vs Kandinsky paintings), matrices were redesigned so participants could choose maximum joint profit, maximum in-group profit, or maximum difference favouring the in-group. Boys consistently chose to maximize the difference in favour of their own group, even sacrificing their own group's absolute profit to do so — showing positive distinctiveness (not just profit-seeking) drives in-group bias.",
  "studyLabel": "Study",
  "id": "n23"
 },
 {
  "title": "Cultural Dimensions",
  "meta": "Geert Hofstede (1980)",
  "approach": "sociocultural",
  "topic": "relationships",
  "definition": "Cultural dimensions are a small set of universal value dimensions (e.g. individualism–collectivism, power distance) used to describe and compare cultures quantitatively — an etic approach to cross-cultural comparison.",
  "mechanism": [
   "Individualism vs collectivism: personal achievement/autonomy vs group loyalty/identity.",
   "Power distance: acceptance vs questioning of unequal power/hierarchy.",
   "Dimensions are derived via factor analysis of correlated survey items."
  ],
  "study": "Hofstede (1967–73) surveyed ~117,000 IBM employees worldwide on work-related values, then used factor analysis to identify clusters of correlated responses, deriving national scores on each cultural dimension (e.g. USA scores high on individualism, Guatemala scores high on power distance).",
  "link": "Because groups of survey items cluster together statistically (correlate strongly with each other but not with other clusters), this supports the existence of distinct, measurable \"dimensions\" underlying cross-cultural value differences, enabling etic comparison.",
  "advantage": "Highly influential and practically useful (e.g. managing multinational organizations); parsimonious (explains much cultural variation with few dimensions).",
  "disadvantage": "Ignores within-nation heterogeneity (treats one nation as having one culture) and conflates individual-level with national-level scores — a person from a \"collectivist\" country need not hold collectivist values themselves.",
  "backup": "",
  "studyLabel": "Study",
  "id": "n24"
 },
 {
  "title": "Acculturation",
  "meta": "John Berry (1992)",
  "approach": "sociocultural",
  "topic": "relationships",
  "definition": "Acculturation is the process of adjusting to a new culture; Berry's two-dimensional model proposes that maintaining the heritage culture and adopting the host culture are independent dimensions, producing four strategies: assimilation, separation, integration, and marginalization.",
  "mechanism": [
   "Two independent dimensions (unlike earlier \"unidimensional\" models where gaining one culture meant losing the other).",
   "Integration (high on both dimensions) is generally associated with the best outcomes (e.g. health)."
  ],
  "study": "Ferguson, Ferguson & Ferguson (2015) studied 83 urban Zambian adolescents exposed to multiple foreign cultures (US, UK, South African) via globalization/media without ever having lived abroad (\"remote acculturation\"). Adolescents differentiated clearly between the three foreign cultural influences (not treating \"foreign culture\" as one thing), and split into two distinct clusters: \"Westernized Multicultural Zambians\" (stronger foreign, weaker Zambian orientation, more independent) vs \"Traditional Zambians\" (stronger Zambian, weaker foreign orientation, more interdependent/obligated to family).",
  "link": "Because adolescents showed independently varying levels of orientation toward host/foreign vs. heritage culture (rather than one trading off against the other), this supports Berry's two-dimensional (rather than the older one-dimensional) view of acculturation, and shows it can occur even without physical migration.",
  "advantage": "Shows the model generalizes to a modern, non-migration form of acculturation (globalization/media exposure).",
  "disadvantage": "Correlational, self-report, and specific to one context (urban Zambia) → limited generalizability of the exact cluster pattern found.",
  "backup": "",
  "studyLabel": "Study",
  "id": "n25"
 },
 {
  "title": "Conformity",
  "meta": "Solomon Asch (1951)",
  "approach": "sociocultural",
  "topic": "relationships",
  "definition": "Conformity is changing one's beliefs, attitudes, or behaviour to match a group, in the absence of any direct request to do so — driven by normative influence (wanting acceptance) and/or informational influence (assuming the group is more likely correct).",
  "mechanism": [
   "Normative influence: conforming to be liked/accepted by the group.",
   "Informational influence: conforming because uncertain of one's own judgement.",
   "Conformity is stronger toward in-groups one identifies with (links to SIT)."
  ],
  "study": "Asch (1951) had a real participant join a group of confederates in a simple line-judgement task; confederates unanimously gave an obviously wrong answer on 12 of 18 trials. 74% of real participants conformed at least once, and 35.7% of all responses on critical trials were incorrect (vs <1% in a no-confederate control condition).",
  "link": "Because the correct answer was visually obvious and the control group made almost no errors, the large jump in errors when confederates gave wrong answers shows the group's unanimous (but incorrect) judgement caused participants to conform, despite the objectively easy task.",
  "advantage": "Highly controlled, replicable paradigm (\"Asch paradigm\") that isolated group pressure as the causal variable.",
  "disadvantage": "Ethical concerns (deception, psychological discomfort of publicly disagreeing/being wrong) — and later analysis (Friend, Rafferty & Bramel, 1990) showed textbooks historically over-emphasized the \"conformity\" finding while downplaying that 26% of participants never conformed at all.",
  "backup": "",
  "studyLabel": "Study",
  "id": "n26"
 },
 {
  "title": "Compliance Techniques",
  "meta": "Robert Cialdini (1984)",
  "approach": "sociocultural",
  "topic": "relationships",
  "definition": "Compliance techniques are strategies used to increase the likelihood that someone agrees to a request, exploiting six principles: reciprocity, commitment/consistency, social proof, authority, liking, and scarcity.",
  "mechanism": [
   "Foot-in-the-door: securing agreement to a small request first increases compliance with a later, larger request (via commitment/consistency, sometimes explained through cognitive dissonance).",
   "Low-ball: securing initial agreement before revealing a less favourable true cost, which still yields higher compliance than stating the true cost upfront."
  ],
  "study": "Freedman & Fraser (1966) — californian housewives who first agreed to a small request (a brief survey) were far more likely (52.8%) to later comply with a large request (letting men survey their home for 2 hours) than those asked the large request directly (22.2%); mere prior contact/familiarity did not explain the effect (a familiarization-only condition, 27.8%, did not differ significantly from the one-contact condition).",
  "link": "Because performing the small request (not just being contacted) increased later compliance, this supports foot-in-the-door as a genuine technique driven by the act of agreeing itself, not mere familiarity.",
  "advantage": "Real-world field experiment (actual householders, real requests) → high ecological validity.",
  "disadvantage": "Cannot fully isolate the psychological mechanism (commitment/consistency vs. self-perception) — the \"why\" behind the effect is inferred, not directly measured.",
  "backup": "Cialdini et al. (1978) — low-balling (agreeing first, then learning the true cost) produced far higher behavioural compliance (60% showing up/displaying a poster) than foot-in-the-door (10%) or a direct control request (20%) in a real-world charity field study, showing low-balling is a distinct and often more powerful technique.",
  "studyLabel": "Study",
  "id": "n27"
 },
 {
  "title": "Social Learning in Group Behaviour — Violent Media & Aggression",
  "meta": "Kühn et al. (2019)",
  "approach": "sociocultural",
  "topic": "relationships",
  "definition": "Social learning theory (Bandura) has been applied to group behaviours such as aggression, testing whether observing violent media (e.g. video games) causes real increases in aggressive behaviour via observational learning.",
  "mechanism": [
   "Builds on Bandura's SLT (see Learning & Cognition section): observing violence could be learned/imitated, but effects depend on mediating variables and exposure duration.",
   "Much earlier research was correlational (bidirectional ambiguity) or used very brief exposure with immediate-only measurement."
  ],
  "study": "Kühn et al. (2019) randomly assigned 90 adults with minimal recent gaming history to play a violent video game, a non-violent video game, or no game, for at least 30 minutes/day over 8 weeks, measuring aggression and related variables (hostility, empathy, impulsivity, etc.) at baseline, post-test, and 8-week follow-up across 208 statistical comparisons. Only 3 of 208 comparisons showed a significant effect in the hypothesized direction — fewer than the ~10 expected by chance alone (Type I error) — leading researchers to conclude violent gaming had no detrimental effect.",
  "link": "Because this study used a true experiment with a realistic, sustained (8-week) exposure period and both immediate and delayed measurement (correcting key limitations of earlier research), its null result challenges the assumption that violent-media exposure straightforwardly causes social learning of aggression.",
  "advantage": "True experiment with random allocation, sustained/realistic exposure duration, and delayed follow-up — addresses major limitations of earlier violent-media research.",
  "disadvantage": "Adult-only sample — effects of violent gameplay may be more pronounced in adolescents, so findings may not generalize to the age group of most concern.",
  "backup": "Stein & Friedrich (1972) — children who watched prosocial TV (\"Mister Rogers' Neighborhood\") for 4 weeks showed increased prosocial behaviour, but only children from low-SES backgrounds — illustrating that social learning effects from media are mediated by other individual/contextual variables, not universal.",
  "studyLabel": "Study",
  "id": "n28"
 }
];
const QUESTIONS = [
 {
  "id": "Q1",
  "text": "Evaluate the use of one technique used to study the brain in relation to behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q2",
  "text": "Contrast two techniques used to study the brain (in relation to behaviour).",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q3",
  "text": "Discuss localization of function in the brain.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q4",
  "text": "Discuss neuroplasticity with reference to one or more studies.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q5",
  "text": "Discuss the effects of one or more neurotransmitters on human behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q6",
  "text": "Discuss the effects of one or more hormones on human behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Hormones and Behaviour"
 },
 {
  "id": "Q7",
  "text": "Discuss the effects of one or more pheromones on human behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Hormones and Behaviour"
 },
 {
  "id": "Q8",
  "text": "To what extent does one pheromone affect human behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Hormones and Behaviour"
 },
 {
  "id": "Q9",
  "text": "To what extent do genes influence human behaviour?",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Genes and Behaviour"
 },
 {
  "id": "Q10",
  "text": "Discuss how genetic similarities affect genes and behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Genes and Behaviour"
 },
 {
  "id": "Q11",
  "text": "Discuss one or more evolutionary explanations for behaviour",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Genes and Behaviour"
 },
 {
  "id": "Q12",
  "text": "Evaluate/Discuss one or more research methods used to study the brain and behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q13",
  "text": "Evaluate/Discuss the use of one or more research method used to study hormones and/or pheromones and behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q14",
  "text": "Evaluate/Discuss the use of one or more research method used to study genes and behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q15",
  "text": "Discuss/Evaluate the use of one or more research methods used in the biological approach to understanding human behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q16",
  "text": "Discuss one (or more?) ethical considerations relevant to studies on the brain and behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q17",
  "text": "Discuss one (or more?) ethical consideration relevant to one study on hormones and/or pheromones and behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q18",
  "text": "Discuss one (or more?) ethical considerations relevant to research on genetics and behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q19",
  "text": "Discuss one (or more?) ethical considerations related to research in the biological approach to understanding human behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q20",
  "text": "Outline or Describe or Explain one technique used to study the brain (in relation to behaviour).",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q21",
  "text": "Outline or Describe or Explain the localization of function in the brain.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q22",
  "text": "Outline or Describe or Explain neuroplasticity, with reference to one study.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q23",
  "text": "Outline or Describe or Explain neural pruning, with reference to one study.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q24",
  "text": "Outline or Describe or Explain neural network, with reference to one study.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q25",
  "text": "Outline or Describe or Explain the effect of one or more neurotransmitters on behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q26",
  "text": "Outline or Describe or Explain the role of excitatory neurotransmitters.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q27",
  "text": "Outline or Describe or Explain the role of inhibitory neurotransmitters.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q28",
  "text": "Outline or Describe or Explain one or more agonists.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q29",
  "text": "Outline or Describe or Explain one or more antagonists.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q30",
  "text": "Outline or Describe or Explain the effect of hormones on human behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Hormones and Behaviour"
 },
 {
  "id": "Q31",
  "text": "Outline or Describe or Explain the effect of pheromones on human behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Hormones and Behaviour"
 },
 {
  "id": "Q32",
  "text": "Outline or Describe or Explain the role of one gene on behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Genes and Behaviour"
 },
 {
  "id": "Q33",
  "text": "Outline or Describe or Explain the role of genetic similarity for one behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Genes and Behaviour"
 },
 {
  "id": "Q34",
  "text": "Outline or Describe or Explain one twin study.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Genes and Behaviour"
 },
 {
  "id": "Q35",
  "text": "Outline or Describe or Explain one kinship study.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Genes and Behaviour"
 },
 {
  "id": "Q36",
  "text": "Outline or Describe or Explain one evolutionary explanation of behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Genes and Behaviour"
 },
 {
  "id": "Q37",
  "text": "Outline or Describe or Explain one research method used to investigate brain and behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q38",
  "text": "Outline or Describe or Explain one research method used to investigate hormones and behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q39",
  "text": "Outline or Describe or Explain one research method used to investigate genetics and behaviour",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q40",
  "text": "Outline or Describe or Explain one ethical consideration relevant to the study of brain and behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q41",
  "text": "Outline or Describe or Explain one ethical consideration relevant to the study of hormones and behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q42",
  "text": "Outline or Describe or Explain one ethical consideration relevant to the study of genetics and behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q43",
  "text": "Discuss the value of animal models in psychological research on the brain and behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour (HL Extension: Animal Research)"
 },
 {
  "id": "Q44",
  "text": "Discuss ethical considerations in animal research on the brain and behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour (HL Extension: Animal Research)"
 },
 {
  "id": "Q45",
  "text": "Discuss the value of animal models in psychological research on hormones and/or pheromones and behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Hormones and Behaviour (HL Extension: Animal Research)"
 },
 {
  "id": "Q46",
  "text": "Discuss ethical considerations in animal research on hormones and pheromones and behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Hormones and Behaviour (HL Extension: Animal Research)"
 },
 {
  "id": "Q47",
  "text": "Discuss the value of animal models in psychological research on genetics and behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Genes and Behaviour (HL Extension: Animal Research)"
 },
 {
  "id": "Q48",
  "text": "Discuss ethical considerations in animal research on genetics and behaviour.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Genes and Behaviour (HL Extension: Animal Research)"
 },
 {
  "id": "Q51",
  "text": "Outline or Describe or Explain one model of memory.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": "Cognitive Processing"
 },
 {
  "id": "Q52",
  "text": "Outline or Describe or Explain multistore memory model.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": "Cognitive Processing"
 },
 {
  "id": "Q53",
  "text": "Outline or Describe or Explain working memory model.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": "Cognitive Processing"
 },
 {
  "id": "Q54",
  "text": "Outline or Describe or Explain schema theory.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": "Cognitive Processing"
 },
 {
  "id": "Q55",
  "text": "Outline or Describe or Explain one model of thinking and/or decision-making.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": "Cognitive Processing"
 },
 {
  "id": "Q56",
  "text": "Outline or Describe or Explain intuitive thinking.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": "Cognitive Processing"
 },
 {
  "id": "Q57",
  "text": "Outline or Describe or Explain rational thinking.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": "Cognitive Processing"
 },
 {
  "id": "Q58",
  "text": "Outline or Describe or Explain reconstructive memory.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": "Cognitive Processing"
 },
 {
  "id": "Q59",
  "text": "Outline or Describe or Explain one bias in thinking and/or decision-making.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": "Cognitive Processing"
 },
 {
  "id": "Q60",
  "text": "Outline or Describe or Explain the influence of emotion on one cognitive process.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": "Emotion and Cognition"
 },
 {
  "id": "Q61",
  "text": "Outline or Describe or Explain one research method used to investigate cognitive processing.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q62",
  "text": "Outline or Describe or Explain one research method used to investigate reliability of cognitive processes.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q63",
  "text": "Outline or Describe or Explain one research method used to investigate emotion and cognition.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q64",
  "text": "Outline or Describe or Explain one ethical consideration relevant to the study into cognitive processing.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q64b",
  "text": "Outline or Describe or Explain one ethical consideration relevant to the study into reliability of cognitive processes.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q64c",
  "text": "Outline or Describe or Explain one ethical consideration relevant to the study into emotion and cognition.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q65",
  "text": "Outline or Describe or Explain social identity theory.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "The Individual and the Group"
 },
 {
  "id": "Q66",
  "text": "Outline or Describe or Explain social groups.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "The Individual and the Group"
 },
 {
  "id": "Q67",
  "text": "Outline or Describe or Explain social cognitive theory.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "The Individual and the Group"
 },
 {
  "id": "Q68",
  "text": "Outline or Describe or Explain the formation of stereotypes.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "The Individual and the Group"
 },
 {
  "id": "Q69",
  "text": "Outline or Describe or Explain the effect of stereotypes.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "The Individual and the Group"
 },
 {
  "id": "Q70",
  "text": "Outline or Describe or Explain the influence of culture on behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "Cultural Origins of Behaviour and Cognition"
 },
 {
  "id": "Q71",
  "text": "Outline or Describe or Explain the influence of culture on cognition.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "Cultural Origins of Behaviour and Cognition"
 },
 {
  "id": "Q72",
  "text": "Outline or Describe or Explain cultural groups",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "Cultural Origins of Behaviour and Cognition"
 },
 {
  "id": "Q73",
  "text": "Outline or Describe or Explain one cultural dimension.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "Cultural Origins of Behaviour and Cognition"
 },
 {
  "id": "Q74",
  "text": "Outline or Describe or Explain enculturation.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "Cultural Origins of Behaviour and Cognition"
 },
 {
  "id": "Q75",
  "text": "Outline or Describe or Explain norms.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "Cultural Origins of Behaviour and Cognition"
 },
 {
  "id": "Q76",
  "text": "Outline or Describe or Explain acculturation.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "Cultural Origins of Behaviour and Cognition"
 },
 {
  "id": "Q77",
  "text": "Outline or Describe or Explain assimilation.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "Cultural Origins of Behaviour and Cognition"
 },
 {
  "id": "Q78",
  "text": "Outline or Describe or Explain one research method used to investigate the individual and the group.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q79",
  "text": "Outline or Describe or Explain one research method used to investigate cultural origins of behaviour and cognition.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q80",
  "text": "Outline or Describe or Explain one research method used to investigate cultural influences on individual behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q81",
  "text": "Outline or Describe or Explain one ethical consideration in investigating the individual and the group.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q82",
  "text": "Outline or Describe or Explain one ethical consideration in investigating cultural origins of behaviour and cognition.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q83",
  "text": "Outline or Describe or Explain one ethical consideration in investigating cultural influences on individual behaviour.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q84",
  "text": "Discuss the prevalence rates of one or more disorders.",
  "marks": 15,
  "est": true,
  "paper": "Paper 2",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Abnormal Psychology / Etiology"
 },
 {
  "id": "Q86",
  "text": "Evaluate one explanation for one disorder using biological approach / Discuss the biological approach to understanding the etiology of abnormal psychology.",
  "marks": 15,
  "est": true,
  "paper": "Paper 2",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Abnormal Psychology / Etiology"
 },
 {
  "id": "Q88",
  "text": "Evaluate one explanation for one disorder using cognitive approach / Discuss the cognitive approach to understanding the etiology of abnormal psychology.",
  "marks": 15,
  "est": true,
  "paper": "Paper 2",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": "Abnormal Psychology / Etiology"
 },
 {
  "id": "Q90",
  "text": "Evaluate one explanation for one disorder using sociocultural approach / Evaluate the sociocultural approach to understanding the etiology of abnormal psychology.",
  "marks": 15,
  "est": true,
  "paper": "Paper 2",
  "approach": "sociocultural",
  "topic": "core",
  "subtopic": "Abnormal Psychology / Etiology"
 },
 {
  "id": "Q91",
  "text": "Contrast the biological/cognitive/sociocultural and biological/cognitive/sociocultural approaches to understanding the etiology of abnormal psychology.",
  "marks": 15,
  "est": true,
  "paper": "Paper 2",
  "approach": null,
  "topic": null,
  "subtopic": "Abnormal Psychology / Etiology"
 },
 {
  "id": "Q92",
  "text": "Evaluate the use of one or more research methods used to study the etiology of abnormal psychology.",
  "marks": 15,
  "est": true,
  "paper": "Paper 2",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q93",
  "text": "Discuss one or more ethical considerations related to research on the etiology of abnormal psychology.",
  "marks": 15,
  "est": true,
  "paper": "Paper 2",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q101",
  "text": "A group of researchers wanted to investigate the impact of cognitive load on problem-solving. They designed an experiment where participants were divided into two groups: ● High cognitive load group: Participants had to memorize a long string of numbers while solving logic puzzles. ● Low cognitive load group: Participants only had to solve the logic puzzles. Results showed that the high cognitive load group made more errors and took longer to complete the puzzles. With reference to this study, explain the role of cognitive load theory in understanding human cognition.",
  "marks": 6,
  "est": false,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "learning",
  "subtopic": null
 },
 {
  "id": "Q102",
  "text": "As part of your CAS project, you have been asked to discuss how cognitive load plays a role in exam success. Explain how the theory could be applied to improve recall on exam day.",
  "marks": 6,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "learning",
  "subtopic": null
 },
 {
  "id": "Q150",
  "text": "Describe/Explain anchoring bias with reference to one example of its role in decision-making.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q151",
  "text": "Describe/Explain classical conditioning with reference to one example of its role in behavior.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q152",
  "text": "Describe/Explain cognitive load theory with reference to one example of how it helps us to understand one cognitive process.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q153",
  "text": "Describe/Explain one cognitive model with reference to one example of how it explains human behavior.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q154",
  "text": "Describe/Explain confirmation bias with reference to one example of its role in decision-making.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q155",
  "text": "Describe/Explain the Dual Process Theory with reference to one example of how it explains decision-making.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q156",
  "text": "Describe/Explain operant conditioning with reference to one example of its role in behavior.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q157",
  "text": "Describe/Explain schema theory with reference to one example of how it helps us to understand one cognitive process.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q158",
  "text": "Next year, you are off to the Netherlands to study psychology. As the university you have chosen doesn't have student dorms, you need to find an apartment. You use a local realtor who shows you a three bedroom apartment in the center of town with a great view. The cost of the apartment is 2500 USD per month. That is too expensive for you. You finally settle on an apartment for 1900 USD per month. It is two bedrooms and it on the edge of town, but it has access to public transportation. When checking out the neighborhood, you found reviews that said it has a great sense of community, some very good restaurants, and a good fitness center. There were reviews, however, that complained about the street noise in the neighborhood from the restaurants and the problem that the public transportation runs rather infrequently on weekends. Explain how cognitive biases may have influenced your choice of an apartment.",
  "marks": 6,
  "est": false,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q159",
  "text": "Explain one example of how schema theory may be applied to the understanding of one behavior.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q160",
  "text": "Chris is highly disruptive in class. He talks a lot with his friends, often making it difficult for others to focus on the teacher's presentation. Explain how operant conditioning could be used to change Chris's behavior.",
  "marks": 6,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q162",
  "text": "Describe the Dual Process Theory of thinking and decision-making, with one example of how it affects behavior.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q163",
  "text": "Explain anchoring bias with reference to one example of human behavior.",
  "marks": 4,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q164",
  "text": "Discuss measurement with regard to environmental effects on one cognitive process in the study of learning and cognition.",
  "marks": 15,
  "est": true,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q165",
  "text": "One claim in the psychology of human development is that childhood experiences may cause the development of self. Discuss this claim with reference to social learning theory.",
  "marks": 15,
  "est": false,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "development",
  "subtopic": null
 },
 {
  "id": "Q166",
  "text": "In the context of human relationships, discuss the application of social learning theory to change group behaviour.",
  "marks": 15,
  "est": false,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "relationships",
  "subtopic": null
 },
 {
  "id": "Q167",
  "text": "Using Social Learning Theory, propose a plan to promote a higher level of environmental awareness in your school community.",
  "marks": 6,
  "est": true,
  "paper": "Paper 1",
  "approach": "sociocultural",
  "topic": "relationships",
  "subtopic": null
 },
 {
  "id": "Q168",
  "text": "Describe one example of how localization of function can explain one human behaviour",
  "marks": 4,
  "est": false,
  "paper": "Paper 1",
  "approach": "biological",
  "topic": "core",
  "subtopic": "Brain and Behaviour"
 },
 {
  "id": "Q169",
  "text": "Explain the process of classical conditioning and its role in one behaviour.",
  "marks": 4,
  "est": false,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q170",
  "text": "A school is concerned about the increasing rates of childhood obesity. To address this, they introduce a behavioral intervention program based on operant conditioning, where students earn rewards for making healthy food choices and engaging in physical activity. Explain how operant conditioning can be used to encourage healthy behaviors.",
  "marks": 6,
  "est": false,
  "paper": "Paper 1",
  "approach": "cognitive",
  "topic": "core",
  "subtopic": null
 },
 {
  "id": "Q201",
  "text": "Describe how you used an interview or focus group in your class practical and its aim and procedure.",
  "marks": 4,
  "est": false,
  "paper": "Paper 2",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q202",
  "text": "Explain the concept of responsibility in relation to the interview or focus group in your class practical.",
  "marks": 4,
  "est": false,
  "paper": "Paper 2",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q203",
  "text": "Compare and contrast the research methodology of an interview or focus group used in your class practical with the research methodology of an observation.",
  "marks": 6,
  "est": false,
  "paper": "Paper 2",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q204",
  "text": "Design an experiment to investigate the same topic you investigated in your class practical.",
  "marks": 6,
  "est": false,
  "paper": "Paper 2",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q205",
  "text": "Discuss the following study with reference to two or more of the following concepts: bias, causality, measurement, and/or responsibility. Robbins et al. (1996) investigated the role of working memory in chess expertise using Baddeley and Hitch's Working Memory Model (WMM). Twenty male chess players of varying skill levels viewed a chessboard for 10 seconds and then attempted to recreate it while subjected to different types of cognitive interference. In one condition, participants repeatedly said \"the\" to a metronome, engaging the phonological loop. In another, they typed a sequence on a hidden keyboard with one hand while arranging chess pieces with the other, engaging the visuospatial sketchpad. Results showed that visuospatial interference significantly impaired chessboard recall, with accuracy dropping to 4 out of 25 correct positions, while phonological interference had a much smaller effect (16 out of 25 correct). This suggests that chess memory relies on the visuospatial sketchpad rather than the phonological loop, supporting the WMM's assumption of distinct components for different types of cognitive processing. The study highlights how visuospatial working memory is critical for complex cognitive tasks like chess, demonstrating that different aspects of working memory can be selectively disrupted, further validating Baddeley and Hitch's model of working memory.",
  "marks": 15,
  "est": false,
  "paper": "Paper 2",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q206",
  "text": "Explain one issue that limits the interpretation of the data in source 1.",
  "marks": 3,
  "est": false,
  "paper": "Paper 3",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q207",
  "text": "Analyse the findings from Source 2 and state a conclusion linked to the claim that cultural norms influence the diagnosis and treatment of mental health disorders, leading to disparities in health outcomes.",
  "marks": 6,
  "est": false,
  "paper": "Paper 3",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q208",
  "text": "Discuss how the researcher could improve the credibility of the findings in Source 3.",
  "marks": 6,
  "est": false,
  "paper": "Paper 3",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 },
 {
  "id": "Q209",
  "text": "To what extent can we conclude that cultural norms influence the diagnosis and treatment of mental health disorders, leading to disparities in health outcomes? In your answer, use your own knowledge and at least three of sources 2–5.",
  "marks": 15,
  "est": false,
  "paper": "Paper 3",
  "approach": "methods",
  "topic": "methods",
  "subtopic": null
 }
];
