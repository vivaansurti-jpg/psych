/* Concept × content grid for Paper 1 Section C.
   Topics follow the IB Psychology guide (first assessment 2027): every area of
   study a Paper 1C question can name, grouped by context. Each written cell is
   an angle: how one concept applies to one topic, the evidence to use, and a
   counter-point. Cells with no strong link fall back to the general angle for
   that concept. Worked examples use depression (mental health disorder),
   social media addiction (health problem), memory (cognitive process),
   cognitive development and romantic relationships. */

const GRID_CONTEXTS = [
 {
  "id": "learning", "name": "Learning and cognition",
  "groups": [
   { "name": "Thinking and learning", "topics": [
     { "id": "biases", "name": "Cognitive biases", "phrase": "cognitive biases", "notes": ["n13"] },
     { "id": "conditioning", "name": "Conditioning (classical and operant)", "phrase": "classical and operant conditioning", "notes": ["n7", "n8"] },
     { "id": "dual", "name": "Dual processing model", "phrase": "the dual processing model", "notes": ["n13"] },
     { "id": "schema", "name": "Schema theory", "phrase": "schema theory", "notes": ["n9"] },
     { "id": "slt", "name": "Social learning theory", "phrase": "social learning theory", "notes": ["n17"] }
   ]},
   { "name": "Cognitive processes", "topics": [
     { "id": "biocog", "name": "Biological factors in cognitive processes", "phrase": "biological factors in one cognitive process", "notes": ["n1", "n2"] },
     { "id": "models", "name": "Cognitive models", "phrase": "cognitive models of one cognitive process", "notes": ["n10", "n11"] },
     { "id": "culturecog", "name": "Cultural factors in cognitive processes", "phrase": "cultural factors in one cognitive process", "notes": ["n19"] },
     { "id": "envcog", "name": "Environmental influences on cognitive processes", "phrase": "environmental influences on one cognitive process", "notes": [] },
     { "id": "improve", "name": "Potential for improving a cognitive process", "phrase": "strategies to improve one cognitive process", "notes": [] }
   ]}
  ]
 },
 {
  "id": "development", "name": "Human development",
  "groups": [
   { "name": "Models of development", "topics": [
     { "id": "brain", "name": "Brain development", "phrase": "brain development", "notes": ["n3"] },
     { "id": "sociodev", "name": "Sociocultural factors in development", "phrase": "sociocultural factors in development", "notes": ["n20"] },
     { "id": "stages", "name": "Stage theories and continuous models", "phrase": "stage theories and continuous models of development", "notes": ["n14"] },
     { "id": "tom", "name": "Theory of mind", "phrase": "theory of mind", "notes": ["n15"] }
   ]},
   { "name": "Development of self", "topics": [
     { "id": "attachment", "name": "Attachment", "phrase": "attachment", "notes": ["n5"] },
     { "id": "encult", "name": "Enculturation of social norms", "phrase": "the enculturation of social norms", "notes": ["n21"] },
     { "id": "peers", "name": "Peer influence", "phrase": "peer influence on development", "notes": ["n22"] },
     { "id": "childhood", "name": "Role of childhood experiences", "phrase": "the role of childhood experiences", "notes": ["n4"] }
   ]}
  ]
 },
 {
  "id": "health", "name": "Health and well-being",
  "groups": [
   { "name": "Mental health disorders", "topics": [
     { "id": "bioexp", "name": "Biological explanations", "phrase": "biological explanations of one mental health disorder", "notes": [] },
     { "id": "cogmodels", "name": "Cognitive models", "phrase": "cognitive models of one mental health disorder", "notes": [] },
     { "id": "culturemh", "name": "Cultural differences", "phrase": "cultural differences in mental health disorders", "notes": [] },
     { "id": "envmh", "name": "Environmental factors", "phrase": "environmental factors in mental health disorders", "notes": [] }
   ]},
   { "name": "Health problems", "topics": [
     { "id": "prevalence", "name": "Prevalence of health problems", "phrase": "the prevalence of one health problem", "notes": [] },
     { "id": "slthealth", "name": "Social learning and health", "phrase": "social learning in one health problem", "notes": [] },
     { "id": "stress", "name": "Stress and health", "phrase": "the role of stress in one health problem", "notes": [] }
   ]},
   { "name": "Prevention and treatment", "topics": [
     { "id": "biotreat", "name": "Biological treatment for one disorder", "phrase": "biological treatment for one mental health disorder", "notes": [] },
     { "id": "psychtreat", "name": "Psychological treatment for one disorder", "phrase": "psychological treatment for one mental health disorder", "notes": [] },
     { "id": "prevention", "name": "Prevention or treatment of one health problem", "phrase": "the prevention or treatment of one health problem", "notes": [] }
   ]}
  ]
 },
 {
  "id": "relationships", "name": "Human relationships",
  "groups": [
   { "name": "Group behaviour", "topics": [
     { "id": "accult", "name": "Acculturation", "phrase": "acculturation", "notes": ["n25"] },
     { "id": "compliance", "name": "Compliance techniques", "phrase": "compliance techniques", "notes": ["n27"] },
     { "id": "conformity", "name": "Conformity", "phrase": "conformity", "notes": ["n26"] },
     { "id": "dims", "name": "Cultural dimensions", "phrase": "cultural dimensions", "notes": ["n24"] },
     { "id": "sit", "name": "Social identity theory", "phrase": "social identity theory", "notes": ["n23"] },
     { "id": "sltgroup", "name": "Social learning", "phrase": "social learning in group behaviour", "notes": ["n28"] }
   ]},
   { "name": "Interpersonal relationships", "topics": [
     { "id": "chem", "name": "Chemical messengers", "phrase": "chemical messengers in interpersonal relationships", "notes": ["n6"] },
     { "id": "cogrel", "name": "Cognitive explanations", "phrase": "cognitive explanations of interpersonal relationships", "notes": ["n16"] },
     { "id": "comm", "name": "Communication and language", "phrase": "the role of communication in interpersonal relationships", "notes": [] },
     { "id": "strategies", "name": "Strategies for improving relationships", "phrase": "strategies for improving interpersonal relationships", "notes": [] }
   ]}
  ]
 }
];

/* Titles of the revision notes linked from grid cells (from data.js). */
const GRID_NOTE_TITLES = {
 "n1": "Localization of Function",
 "n2": "Brain Imaging Techniques (fMRI)",
 "n3": "Neuroplasticity & Critical Periods, Greenough",
 "n4": "Epigenetics & Childhood Experience",
 "n5": "Attachment (Contact Comfort & Secure Base)",
 "n6": "Chemical Messengers in Romantic Relationships, Fisher",
 "n7": "Classical Conditioning",
 "n8": "Operant Conditioning",
 "n9": "Schema Theory, Jean Piaget",
 "n10": "Cognitive Models — Multi-Store Memory Model (MSMM)",
 "n11": "Cognitive Models — Working Memory Model (WMM)",
 "n12": "Cognitive Load Theory",
 "n13": "Dual-Process Model & Cognitive Bias",
 "n14": "Stage Theory of Cognitive Development, Jean Piaget",
 "n15": "Theory of Mind",
 "n16": "Cognitive Explanations for Relationships — Investment Model",
 "n17": "Social Learning Theory (SLT)",
 "n18": "Cognitive Dissonance",
 "n19": "Emic and Etic Approaches",
 "n20": "Sociocultural Theory of Development, Lev Vygotsky",
 "n21": "Enculturation of Social Norms",
 "n22": "Peer Influence on Development",
 "n23": "Social Identity Theory (SIT)",
 "n24": "Cultural Dimensions",
 "n25": "Acculturation",
 "n26": "Conformity",
 "n27": "Compliance Techniques",
 "n28": "Social Learning in Group Behaviour — Violent Media & Aggression"
};

/* Shown when a cell has no written angle. */
const GRID_GENERAL = {
 "bias": "Ask where bias could enter the key research: the sample (who was studied and who was not), the researcher (expectations, interpretation) or the participants (demand characteristics, social desirability). Then explain how that bias limits the conclusion you can draw.",
 "causality": "Ask what kind of evidence the topic rests on. Experimental evidence can support a causal claim; correlational, self-report or case-study evidence cannot, so discuss bidirectional ambiguity and third variables.",
 "change": "Ask whether the topic describes natural change (development, maturation) or deliberate change (an intervention or treatment), and how a researcher would know that a change happened and lasted.",
 "measurement": "Ask how the key construct was operationalized and whether that operationalization really captures it (construct validity). Is the measure direct or indirect, self-reported or observed, quantitative or qualitative?",
 "perspective": "Ask how the biological, cognitive and sociocultural approaches would each explain the behaviour, and what the dominant explanation leaves out. Competing theories or interpretations of the same findings also count.",
 "responsibility": "Every topic rests on research, so discuss the ethics of the key study (consent, harm, deception, debriefing) and the ethics of applying or publishing its findings."
};

/* key: topicId + ":" + conceptId */
const GRID_ANGLES = {

 /* ---------- Learning and cognition ---------- */

 "biases:bias": {
  "hook": "Bias as the behaviour itself",
  "angle": "Here bias is not a flaw in the research but the thing being studied. A cognitive bias is a systematic deviation from a normative model of thinking (expected utility, formal logic), so to call a choice biased you first need a standard of what rational would look like.",
  "use": "Tversky and Kahneman (1981): the same disease problem framed as lives saved led 72% to choose the certain option; framed as deaths, only 22% did.",
  "but": "Labelling a heuristic as biased assumes the normative model is the right yardstick. Under time pressure, shortcuts are often adaptive rather than irrational."
 },
 "biases:measurement": {
  "hook": "Needs a known correct answer",
  "angle": "A bias can only be measured against a known correct answer, so researchers design tasks where the rational response is clear and then count deviations. That makes the measurement precise, but it also makes the tasks artificial.",
  "use": "Strack and Mussweiler (1997): an irrelevant anchor (did Gandhi die before or after 9, or 140?) shifted age estimates from about 50 to about 67.",
  "but": "Englich, Mussweiler and Strack (2006) found anchoring in practising judges using dice-generated sentences, which answers some of the artificiality criticism."
 },
 "biases:change": {
  "hook": "Debiasing works, partly",
  "angle": "If biases are systematic, they should be predictable and so correctable. Debiasing strategies are motivational (accountability, incentives), cognitive (consider the opposite) or technological (decision aids).",
  "use": "Ludolph and Schulz (2018) reviewed 87 medical studies: 69% of debiasing interventions were partly or fully successful, with technological strategies the most effective.",
  "but": "Publication bias may inflate the success rate, and most studies measure short-term effects, so it is unclear whether the change lasts."
 },
 "biases:causality": {
  "hook": "Framing causes the shift",
  "angle": "Bias experiments manipulate one feature (the frame, the anchor) while keeping the problem identical, so they can show that the feature causes the change in judgement.",
  "use": "In Tversky and Kahneman (1981) the two groups received logically identical options; only the wording differed, so the reversal in choices can be attributed to framing.",
  "but": "The experiment shows that framing changes choices, not why. The explanation (a shift in reference point) is an interpretation, not something the study measured."
 },
 "conditioning:causality": {
  "hook": "Causal links you can observe",
  "angle": "Behaviourism reduces learning to causal links between stimuli, responses and consequences that can be shown in tightly controlled conditions. Operant conditioning even shows that reinforcement can create behaviour when no real causal link exists.",
  "use": "Skinner (1948): food delivered at fixed intervals regardless of behaviour led 6 of 8 pigeons to develop ritual-like ‘superstitious’ behaviours.",
  "but": "Findings come from animals in artificial chambers; extending them to deliberate human behaviour ignores the thinking that cognitive psychology later put back into the ‘black box’."
 },
 "conditioning:measurement": {
  "hook": "Only what can be observed",
  "angle": "Behaviourists insisted on measuring only observable, objectively recorded responses (drops of saliva, lever presses on a cumulative recorder). This gave psychology reliable, replicable data.",
  "use": "Pavlov collected saliva through a surgically redirected tube; Skinner’s independent observers agreed perfectly on the pigeons’ behaviours.",
  "but": "Excluding mental processes left things unexplained. Tolman (1948) showed rats forming a mental map of a maze, which required an unobservable construct."
 },
 "conditioning:responsibility": {
  "hook": "A tool for controlling behaviour",
  "angle": "Conditioning is a powerful way to control behaviour, which raises questions about how it is used in research and in real life (classrooms, apps, advertising).",
  "use": "Watson and Rayner (1920) conditioned fear in a nine-month-old baby, ‘Little Albert’, and the fear generalized to other furry objects; it was not reversed.",
  "but": "Animal research also raises welfare issues: Skinner kept pigeons at 75% of their normal body weight to keep food reinforcing."
 },
 "conditioning:change": {
  "hook": "Changing behaviour on purpose",
  "angle": "Operant conditioning can be applied deliberately to change behaviour: reinforcement schedules, token systems and personalised rewards in education.",
  "use": "Skinner’s schedules of reinforcement showed that how often and how regularly a behaviour is reinforced changes how quickly it is learned and how long it lasts.",
  "but": "Extinction shows the change is not permanent once reinforcement stops, and external rewards can undermine intrinsic motivation."
 },
 "dual:measurement": {
  "hook": "Systems inferred, not observed",
  "angle": "System 1 and System 2 are constructs: nobody observes them directly. Their existence is inferred from patterns of responses, such as fast intuitive errors on problems that careful reasoning would solve.",
  "use": "Wason (1968): most people turned the cards that could confirm the rule rather than the ones that could falsify it, which is read as System 1 thinking.",
  "but": "There is a risk of circular reasoning: a biased answer is taken as evidence of System 1, and System 1 is used to explain the biased answer."
 },
 "dual:perspective": {
  "hook": "One model among several",
  "angle": "Kahneman’s model is one version of an old idea (automatic versus controlled processing, back to William James). It separates descriptive models of how people think from normative models of how they should think.",
  "use": "Kahneman (2011): System 1 is fast and automatic, System 2 is slow and effortful; System 2 can override System 1’s first answer.",
  "but": "Other researchers argue heuristics are ‘ecologically rational’ rather than errors, so the same findings can be read as smart shortcuts rather than failures."
 },
 "dual:causality": {
  "hook": "System 1 first, then override",
  "angle": "The model makes a causal claim about sequence: intuition always comes first and controlled analysis may then correct it. That is hard to test directly because both systems are inferred.",
  "use": "Evidence that debiasing works (Ludolph and Schulz, 2018) is indirect support: prompting more deliberate thinking changes decisions.",
  "but": "Showing that a prompt improves accuracy does not prove two separate systems exist; a single process with varying effort could produce the same results."
 },
 "schema:causality": {
  "hook": "Two-way causality",
  "angle": "Schemas shape how we perceive and remember, but experience also shapes schemas (assimilation and accommodation). The causality runs both ways and develops over time.",
  "use": "Bower, Black and Turner (1979): participants recalling a doctor’s visit story added script-typical details that were never in the text.",
  "but": "A schema is a construct inferred from its effects, so there is a risk of circular explanation: the memory error proves the schema, and the schema explains the error."
 },
 "schema:bias": {
  "hook": "Distortion and efficiency",
  "angle": "Schemas are a source of bias in perception and memory (stereotypes, false recall), but the same mechanism lets us process huge amounts of information efficiently.",
  "use": "Brewer and Treyens (1981): after waiting in an office, some participants drew a window that was not there because it fitted their office schema.",
  "but": "Participants recognised items they had failed to recall (such as a skull), suggesting the schema affected retrieval rather than encoding. One finding, two explanations."
 },
 "schema:measurement": {
  "hook": "Measured through its effects",
  "angle": "Schemas cannot be observed, so they are measured indirectly through their effects on recall or recognition. The choice of task decides what you can conclude.",
  "use": "Brewer and Treyens (1981) combined a recall task with a recognition task, which allowed them to separate encoding effects from retrieval effects.",
  "but": "Construct validity is the issue: memory errors could have other causes (guessing, demand characteristics), so the link back to ‘schema’ is always a theoretical leap."
 },
 "slt:causality": {
  "hook": "Modelling causes imitation",
  "angle": "SLT’s core causal claim is that observing a model can cause learning without direct reinforcement. Later versions add reciprocal determinism: person, behaviour and environment influence each other.",
  "use": "Bandura, Ross and Ross (1961): children who watched an adult attack a Bobo doll imitated the aggression, especially with a same-sex model.",
  "but": "Effects were measured straight after exposure in an artificial setting, with a doll designed to be hit; whether this is ‘aggression’ is debated."
 },
 "slt:responsibility": {
  "hook": "Ethics of studies and policy",
  "angle": "Responsibility applies twice: exposing children to aggressive models in research, and using SLT findings to justify real policies such as restricting violent media.",
  "use": "Kühn et al. (2019) had adults play a violent game for two months and found no increase in aggression, in contrast with short lab studies.",
  "but": "Acting on weak or short-term evidence risks a Type I error with real consequences; not acting risks harm if the effect is real."
 },
 "slt:change": {
  "hook": "Designing interventions",
  "angle": "SLT is widely used to change behaviour on purpose, mainly by building self-efficacy through performance accomplishments, vicarious experience and verbal persuasion.",
  "use": "Prosocial TV increased children’s helping behaviour, but more so when paired with classroom activities (Friedrich-Cofer et al., 1979).",
  "but": "When an SLT-based programme works, it is often unclear which component caused the change, so success does not fully confirm the theory."
 },
 "biocog:perspective": {
  "hook": "Reductionism as a method",
  "angle": "The biological, cognitive and sociocultural split is a way of studying behaviour, not three separate realities. Biological reductionism is a deliberate step: researchers isolate brain variables to see how much they can explain.",
  "use": "Sharot et al. (2007): recalling 9/11 selectively activated the left amygdala in 83% of people who had been close to the attacks.",
  "but": "Reducing flashbulb memory to amygdala activity ignores rehearsal and social retelling, which also make memories vivid."
 },
 "biocog:measurement": {
  "hook": "fMRI’s resolution trade-off",
  "angle": "Brain imaging measures activity indirectly (blood oxygen, not neurons firing) and trades spatial against temporal resolution. What it can show depends on these limits.",
  "use": "fMRI resolves 1 to 5 mm voxels (millions of neurons each) at about one second; EEG is fast but cannot locate the source well.",
  "but": "Case studies avoid the scanner’s limits but bring others: H.M.’s damage was not controlled and affected several areas at once."
 },
 "biocog:causality": {
  "hook": "Activation is not causation",
  "angle": "Localization logic says that if damage to an area removes a function, that area is necessary for it. Imaging shows which areas are active, which is correlational.",
  "use": "Scoville and Milner (1957): after surgery H.M. could not form new declarative memories but still learned motor skills, so the two memory types depend on different structures.",
  "but": "In Sharot et al. (2007), amygdala activation correlated with proximity to the attack (r = 0.45), but this does not show the amygdala causes vividness."
 },
 "models:measurement": {
  "hook": "Tested one prediction at a time",
  "angle": "A cognitive model is tested through the predictions it makes. Each experiment tests one prediction, so no single study can confirm a whole model.",
  "use": "Glanzer and Cunitz (1966): a 30-second counting task removed the recency effect but not the primacy effect, supporting separate short-term and long-term stores.",
  "but": "The same data can often fit more than one model, so support for a prediction is not proof of the model."
 },
 "models:perspective": {
  "hook": "Competing models, parsimony",
  "angle": "Different models of the same process are competing perspectives. They are judged on how well they fit the evidence and on parsimony (explaining a lot with few parts).",
  "use": "The phonological similarity effect (Conrad and Hull, 1964) is explained by the working memory model but not by the multi-store model.",
  "but": "The working memory model explains more but is less parsimonious, and the role of the central executive and episodic buffer is still unclear."
 },
 "models:causality": {
  "hook": "Models are causal claims",
  "angle": "Models make causal claims (attention moves information into short-term memory; rehearsal moves it into long-term memory), which is why experiments are the natural way to test them.",
  "use": "Blocking rehearsal with a filler task (Glanzer and Cunitz, 1966) is a manipulation of the proposed cause, and the predicted effect followed.",
  "but": "The stores are constructs, so the experiment shows that rehearsal matters, not that the stores physically exist."
 },
 "culturecog:perspective": {
  "hook": "Emic versus etic",
  "angle": "Culture can be studied from outside (etic, comparing on shared measures) or inside (emic, on the culture’s own terms). Berry (1989) proposed moving from imposed etic to emic to derived etic.",
  "use": "Cole and Scribner (1974): Kpelle participants did poorly on Western-style list recall but recalled much better when the same items were embedded in a story.",
  "but": "Emic findings are deep but hard to compare across cultures, so researchers still need some common measures."
 },
 "culturecog:bias": {
  "hook": "Imposed etic bias",
  "angle": "Using tasks or concepts from the researcher’s own culture can make another culture look deficient when the task, not the people, is the problem.",
  "use": "Cole and Scribner (1974): the Kpelle never recalled items in the presented order, so they were organising material, just not by the categories the researchers expected.",
  "but": "Some biases are hard to remove completely; even a ‘culturally relevant’ task is designed by an outsider."
 },
 "culturecog:measurement": {
  "hook": "Is the task equivalent?",
  "angle": "Cross-cultural measurement assumes a task means the same thing in every culture. If it does not, differences in scores reflect the task, not cognition.",
  "use": "IQ-style categorisation tasks reflect what Western schooling trains, so they measure schooling as much as memory or intelligence.",
  "but": "Using country of origin as a stand-in for culture ignores variation within a country."
 },
 "envcog:causality": {
  "hook": "Bundled variables",
  "angle": "Direction is rarely in doubt (the environment affects cognition, not the reverse), but environmental factors come bundled, so isolating the cause is the problem.",
  "use": "Dickerson and Popli (2016) followed 19,000 UK children and statistically separated parental investment from family stress as routes from poverty to slower cognitive development.",
  "but": "Statistical separation is still correlational; no one can randomly assign children to poverty."
 },
 "envcog:measurement": {
  "hook": "Lab isolation versus real life",
  "angle": "Lab studies isolate one variable (noise, temperature, breakfast), but in real life these factors act together, so lab results may not transfer.",
  "use": "Breakfast studies depend on what is eaten (glycaemic index) and when testing happens, and long-term studies are scarce.",
  "but": "Large cohort studies are realistic but cannot control variables, which is the opposite trade-off."
 },
 "envcog:change": {
  "hook": "Are effects reversible?",
  "angle": "If the environment shapes cognition, changing the environment should change cognition, which makes this topic directly useful for policy.",
  "use": "Dickerson and Popli (2016): poverty early in life had a larger effect than poverty later, so timing matters for when to intervene.",
  "but": "Showing that an effect exists does not show that it can be reversed once it has happened."
 },
 "improve:change": {
  "hook": "Restore, enhance, augment",
  "angle": "Improving a cognitive process can mean restoring a lost function, improving normal performance (such as reducing bias), or adding new abilities through technology.",
  "use": "Willett et al. (2021): a brain–computer interface decoded imagined handwriting into text for a paralysed participant.",
  "but": "Many results come from one or two participants or from animals, so how far they generalise is unclear."
 },
 "improve:measurement": {
  "hook": "Implicit versus explicit",
  "angle": "To show improvement you need a measure that captures the process itself. Implicit association tests capture implicit bias that self-report misses.",
  "use": "Columb and Plant (2011): exposure to counter-stereotypical information (the ‘Obama effect’) reduced implicit prejudice scores.",
  "but": "The IAT’s reliability is debated, so a change in score may not mean a lasting change in behaviour."
 },
 "improve:responsibility": {
  "hook": "Brain–computer ethics",
  "angle": "Technologies that read or alter brain activity raise new ethical questions: consent from people who struggle to communicate, privacy of thought, and animal welfare in early research.",
  "use": "Early neuroprosthetics research trained monkeys to feed themselves with a robotic arm controlled by brain signals (Velliste et al., 2008).",
  "but": "The potential benefit for people with locked-in syndrome is large, which is the cost–benefit case for continuing."
 },

 /* ---------- Human development ---------- */

 "brain:causality": {
  "hook": "Experience shapes wiring",
  "angle": "Neuroplasticity means experience causes physical change in the brain. Experience-expectant plasticity relies on critical periods; experience-dependent plasticity reflects each person’s own history.",
  "use": "Werker et al. (1981): infants told apart Hindi sounds as well as Hindi-speaking adults, while English-speaking adults could not.",
  "but": "No synapses were measured; pruning is an inference from behaviour."
 },
 "brain:measurement": {
  "hook": "Scanning young brains",
  "angle": "Measuring brain development is technically hard: young children cannot lie still for long scans, and the contrast between grey and white matter changes with age, which affects imaging.",
  "use": "This is why developmental neuroscience relies on triangulation: animal studies, imaging and behavioural tasks together.",
  "but": "Animal evidence such as Blakemore and Cooper’s (1970) stripe-reared kittens is controlled but has to be generalised across species."
 },
 "brain:change": {
  "hook": "Windows that close",
  "angle": "Development is change in brain structure over time, and critical periods mean some changes are only possible at certain ages.",
  "use": "Greenough, Black and Wallace (1987): the brain overproduces connections and prunes those that are not used.",
  "but": "Lifelong experience-dependent plasticity means change is still possible later, just by different mechanisms."
 },
 "sociodev:perspective": {
  "hook": "Vygotsky versus Piaget",
  "angle": "Vygotsky argued that learning drives development (the zone of proximal development), while Piaget argued that biological maturation sets the pace and learning follows.",
  "use": "Nedospasova (1985): with adult scaffolding, preschoolers overcame egocentrism on tasks Piaget’s theory says they should fail.",
  "but": "Both positions have support; few studies test maturation and social input together."
 },
 "sociodev:measurement": {
  "hook": "Formative experiments",
  "angle": "Vygotsky rejected the standard experiment for development and used formative experiments, which measure what a child can do with help rather than alone.",
  "use": "Leontyev (1931): school-age children learned to use picture cards as a memory tool, showing adult performance was within their zone of proximal development.",
  "but": "Formative experiments are less standardised, which makes them harder to replicate and compare."
 },
 "sociodev:causality": {
  "hook": "Social before individual",
  "angle": "Vygotsky’s causal claim is that every higher function appears twice: first between people, then within the child. Social interaction is the cause, not just a support.",
  "use": "Leontyev’s (1931) memory studies show external tools (signs) becoming internal strategies with age.",
  "but": "Age differences could also reflect maturation, so the social cause is hard to separate from the biological one."
 },
 "stages:measurement": {
  "hook": "Task design decides the stage",
  "angle": "Stages are inferred from performance on tasks, so the stage a child appears to be in depends on how the task is designed.",
  "use": "Borke (1975) changed the instructions of Piaget and Inhelder’s three mountains task, and young children succeeded a stage earlier than predicted.",
  "but": "If small changes in instructions shift performance, it is unclear whether Piaget measured egocentrism or comprehension of the task."
 },
 "stages:perspective": {
  "hook": "Staircase or slope?",
  "angle": "Stage theories see development as a staircase of qualitative leaps; continuous models see a slope with fuzzy boundaries and large individual differences.",
  "use": "If stages are real, differences between age groups should be larger than differences within an age group. Research often finds wide variation within ages.",
  "but": "The truth is likely somewhere in between, and few studies examine maturation and individual differences together."
 },
 "stages:change": {
  "hook": "How development changes",
  "angle": "The topic is about the shape of change itself: sudden reorganisation (stages) or gradual accumulation (continuous).",
  "use": "Scaffolding studies show performance can move up with support, which fits a continuous view better.",
  "but": "Cross-cultural research suggests the timing of some abilities depends on what a culture practises, which complicates universal stages."
 },
 "tom:measurement": {
  "hook": "Measuring other minds",
  "angle": "Theory of mind cannot be asked about directly, especially in young children and animals, so researchers design behavioural tests of false belief.",
  "use": "Baron-Cohen, Leslie and Frith (1985): 86% of typically developing children and 85% of children with Down syndrome passed the Sally–Anne task; 80% of autistic children failed.",
  "but": "Verbal tasks may underestimate ability; eye-tracking studies (e.g. Krupenye et al., 2016) found evidence of false-belief understanding in apes."
 },
 "tom:perspective": {
  "hook": "Mind-reading or association?",
  "angle": "The same behaviour can be explained by mental-state understanding or by simpler learned associations, so evidence is always open to alternative interpretations.",
  "use": "Premack and Woodruff (1978): a chimpanzee chose the right tool for a struggling human, which might reflect understanding intentions or just a learned link.",
  "but": "Call and Tomasello (2008) concluded, after 30 years of research, that chimpanzees understand goals and intentions but not false beliefs."
 },
 "tom:causality": {
  "hook": "A brain basis?",
  "angle": "Imaging suggests theory of mind has a specific neural basis, but activation alone does not show the region causes the ability.",
  "use": "Saxe and Kanwisher (2003): the temporo-parietal junction was active when people thought about others’ beliefs.",
  "but": "The region could be involved in a broader process (attention, perspective-taking) rather than theory of mind specifically."
 },
 "attachment:responsibility": {
  "hook": "Harlow’s monkeys",
  "angle": "Some of the most influential attachment evidence would not pass an ethics committee today, which raises the question of whether the knowledge gained justified the harm.",
  "use": "Harlow (1958): infant rhesus monkeys separated from their mothers preferred a cloth surrogate to a wire one that gave milk, and showed severe distress.",
  "but": "The findings changed childcare and hospital practices for human infants, which is the benefit side of the cost–benefit argument."
 },
 "attachment:bias": {
  "hook": "Culture-bound categories",
  "angle": "Attachment types were developed using the Strange Situation with American samples, so applying them elsewhere risks imposed etic bias.",
  "use": "Van IJzendoorn and Kroonenberg (1988): variation in attachment types within a country was nearly 1.5 times the variation between countries.",
  "but": "Emic research such as Tronick, Morelli and Winn (1987) on the Efe, where infants are cared for by many adults, shows attachment practices are not universal."
 },
 "attachment:causality": {
  "hook": "Comfort, not food",
  "angle": "Early theories said attachment is caused by feeding. Harlow’s experiment tested this directly and found contact comfort mattered more.",
  "use": "Harlow (1958): monkeys spent most of their time on the cloth mother even when only the wire mother provided milk.",
  "but": "Claims that infant attachment causes adult relationship styles (Hazan and Shaver, 1987) rest on correlational, self-report evidence."
 },
 "encult:measurement": {
  "hook": "Measuring norm understanding",
  "angle": "Researchers operationalize a child’s grasp of a social norm as whether they protest or correct someone who breaks it.",
  "use": "Göckeritz, Schmidt and Tomasello (2014): five-year-olds invented rules for a marble-run game and taught them to newcomers using normative language.",
  "but": "Protest is an indirect measure; a child may object because something is unfamiliar rather than because they understand a norm."
 },
 "encult:perspective": {
  "hook": "How cultures transmit norms",
  "angle": "Western research suggests participatory learning is the main route of enculturation, but emic research shows this is not universal.",
  "use": "Odden and Rochat (2004): in a Samoan village, where a researcher lived for 20 months, children learned mainly by observing.",
  "but": "A single village studied by an outsider has limited transferability, even with long immersion."
 },
 "peers:causality": {
  "hook": "Influence or selection?",
  "angle": "Adolescents resemble their friends, but this could be influence (friends change you) or selection (you choose similar friends). Separating them is the central problem.",
  "use": "Meta-analyses such as Giletta et al. (2021) pool longitudinal studies to estimate influence over and above selection effects.",
  "but": "Only experiments can fully show cause and effect, and most peer research is correlational."
 },
 "peers:measurement": {
  "hook": "Perceived versus actual",
  "angle": "Peer behaviour is often measured by asking adolescents what their friends do, which mixes real behaviour with perception.",
  "use": "The false consensus effect means people overestimate how much others share their behaviour, which inflates apparent peer similarity.",
  "but": "Asking friends to report directly is more accurate but harder to collect, which shrinks samples."
 },
 "childhood:causality": {
  "hook": "Epigenetic mechanism",
  "angle": "Adverse experiences are linked to later problems, and epigenetics offers a mechanism: experience changes how genes are expressed.",
  "use": "Weaver et al. (2004): rat pups that received little licking and grooming showed methylation of a stress-related gene and bigger stress responses; cross-fostering reversed this.",
  "but": "The strongest evidence is from rats; human evidence is mostly correlational."
 },
 "childhood:change": {
  "hook": "Resilience and reversibility",
  "angle": "A key question is whether the effects of adversity can be reversed, and what makes some children recover.",
  "use": "McFarlane (1987): after an Australian bushfire, children’s later symptoms were predicted more by separation from parents and the mother’s ongoing preoccupation than by the fire itself.",
  "but": "Children were not interviewed directly; data came from parents and teachers, who may themselves be affected."
 },
 "childhood:responsibility": {
  "hook": "Researching trauma in children",
  "angle": "Studying adversity in children means balancing useful knowledge against the risk of distressing vulnerable participants.",
  "use": "McFarlane (1987) relied on parent and teacher reports partly to avoid re-traumatising children.",
  "but": "Protecting children this way reduces the credibility of the data, a trade-off between ethics and measurement."
 },

 /* ---------- Health and well-being ---------- */

 "bioexp:causality": {
  "hook": "Diathesis–stress",
  "angle": "Genes rarely cause a disorder on their own. The diathesis–stress model says biology creates vulnerability and environmental stress triggers the disorder.",
  "use": "Caspi et al. (2003): people with a short 5-HTT allele and four or more stressful events were far more likely to develop depression (about 43%) than those with two long alleles (about 17%).",
  "but": "The study was correlational and stressful events were self-reported, and later replications have been mixed."
 },
 "bioexp:measurement": {
  "hook": "Separating genes and environment",
  "angle": "Heritability is estimated by comparing people who share different amounts of DNA (twin and family studies) or by molecular genetics, but genes and environment are hard to separate.",
  "use": "Kendler et al. (2006): in about 42,000 Swedish twins, heritability of depression was about 42% in women and 29% in men.",
  "but": "Twins also share environments, so heritability estimates can include environmental effects."
 },
 "bioexp:bias": {
  "hook": "Biological reductionism",
  "angle": "Biological explanations can be accused of determinism, but reductionism is a necessary research step: to study one variable, researchers have to hold others constant.",
  "use": "Neurotransmitter research often relies on drug effects, which trigger many changes in the brain at once, so a single cause is hard to pin down.",
  "but": "The risk is in how findings are reported: ‘a chemical imbalance’ oversimplifies what the evidence shows."
 },
 "bioexp:responsibility": {
  "hook": "What to do with genetic risk",
  "angle": "Being able to identify genetic risk raises ethical questions about who should know, and what they should do with the information.",
  "use": "Molecular genetics can show that someone carries alleles linked to higher risk, as in Caspi et al. (2003).",
  "but": "Risk is not destiny; labelling people as vulnerable may cause stigma or anxiety without improving outcomes."
 },
 "cogmodels:causality": {
  "hook": "Cause or symptom?",
  "angle": "Beck’s theory says negative automatic thoughts cause depression, but they could equally be a symptom of it.",
  "use": "Alloy, Abramson and Francis (1999): students with negative cognitive styles were far more likely to develop a first episode of depression over 2.5 years (17% versus 1%).",
  "but": "The groups were not randomly assigned, so another difference between them could explain the result."
 },
 "cogmodels:measurement": {
  "hook": "Measuring thoughts",
  "angle": "Thoughts are measured through self-report questionnaires about cognitive style, which depend on insight and honesty.",
  "use": "Alloy et al. (1999) combined questionnaires with interviews at regular follow-ups, a form of method triangulation.",
  "but": "If someone is already depressed, their reports of their own thinking may be coloured by the depression."
 },
 "cogmodels:perspective": {
  "hook": "What the model leaves out",
  "angle": "The cognitive model focuses on thinking and leaves out biological and social factors. It also cannot explain depression-like behaviour in animals.",
  "use": "The success of CBT is often taken as support, but that is the treatment–aetiology fallacy: a treatment working does not prove what caused the disorder.",
  "but": "Combining it with the diathesis–stress model (cognitive style as the diathesis) gives a more complete picture."
 },
 "culturemh:bias": {
  "hook": "Clinician bias",
  "angle": "Diagnosis is a judgement made by a person, and when patient and clinician come from different cultures, symptoms can be misread.",
  "use": "Kleinman (1977) described Chinese patients presenting depression as physical complaints (somatization); Payne (2012) studied how race and symptom expression affected clinicians’ identification of depression in African American men.",
  "but": "Some argue that objective markers such as vocal biomarkers could reduce clinician bias, though they are still experimental."
 },
 "culturemh:measurement": {
  "hook": "Are prevalence rates real?",
  "angle": "Differences in prevalence between cultures may reflect differences in reporting and diagnosis rather than real differences in the disorder.",
  "use": "Reporting bias: stigma in some cultures makes people less likely to tell a professional about mental health symptoms.",
  "but": "Some differences may be real, which is what gene–culture explanations try to account for."
 },
 "culturemh:causality": {
  "hook": "Gene–culture coevolution",
  "angle": "One hypothesis is that collectivist values evolved partly as a buffer against genetic vulnerability to depression.",
  "use": "Chiao and Blizinsky (2010): across 29 countries, collectivist cultures had more short 5-HTTLPR alleles but not more depression.",
  "but": "This is a country-level correlation; concluding anything about individuals risks the ecological fallacy."
 },
 "envmh:causality": {
  "hook": "Additive or interactive?",
  "angle": "Environmental factors can add to genetic risk or interact with it. Epigenetics shows how the environment can change gene expression without changing the genes.",
  "use": "Brown and Harris (1978): in 458 London women, vulnerability factors such as lacking an intimate relationship made depression more likely when stress occurred.",
  "but": "The sample was working-class London women, so it cannot be generalised to men or other populations."
 },
 "envmh:measurement": {
  "hook": "Networks over time",
  "angle": "Social influences are hard to measure, so researchers use large longitudinal datasets and network analysis.",
  "use": "Rosenquist, Fowler and Christakis (2011): in the Framingham study, depressive symptoms were correlated up to three degrees of separation in a social network.",
  "but": "Friends are not randomly assigned, so similar people may simply become friends."
 },
 "envmh:responsibility": {
  "hook": "Contagion and stigma",
  "angle": "Describing depression as something that spreads between people is useful to researchers, but publishing it carelessly could stigmatise people with depression.",
  "use": "Rosenquist et al. (2011) framed their findings in terms of person-to-person spread.",
  "but": "Researchers have a responsibility to explain uncertainty clearly so findings are not misused."
 },
 "prevalence:measurement": {
  "hook": "Criteria change the number",
  "angle": "Prevalence depends on how the problem is defined and measured: different criteria and questionnaires give very different figures for the same population.",
  "use": "Cheng et al. (2021) combined 63 studies across 32 nations; social media addiction averaged about 25% but varied with diagnostic criteria, questionnaire quality and sampling.",
  "but": "Meta-analyses can only be as good as the studies they include."
 },
 "prevalence:change": {
  "hook": "Age, period, cohort",
  "angle": "Prevalence changes over time and between populations, but a change over time can reflect age effects, period effects or cohort effects.",
  "use": "Rising obesity rates are hard to interpret because these three effects are mixed together.",
  "but": "Separating them needs long-term data from several generations."
 },
 "prevalence:bias": {
  "hook": "Sampling bias",
  "angle": "Prevalence is a claim about a whole population, but it is estimated from samples, often convenience samples of students.",
  "use": "Studies of social media addiction often recruit online, which over-represents heavy users.",
  "but": "Representative samples are expensive, so most studies accept this limitation."
 },
 "slthealth:causality": {
  "hook": "Indirect evidence only",
  "angle": "It would be unethical to expose people to unhealthy models experimentally, so evidence that social learning causes health problems is mostly indirect.",
  "use": "When an intervention based on SLT reduces a health problem, that is taken as support for the role of social learning.",
  "but": "A programme working does not prove the theory; it is often unclear which component made the difference."
 },
 "slthealth:change": {
  "hook": "Building self-efficacy",
  "angle": "Health interventions based on SLT break a distant goal into smaller steps and build self-efficacy through success, watching others and encouragement.",
  "use": "Programmes for healthier eating or exercise often use role models and set achievable goals.",
  "but": "Effects may be statistically significant but small, so the practical value can be limited."
 },
 "slthealth:measurement": {
  "hook": "Significance versus effect size",
  "angle": "A result can be statistically significant without being practically important, so effect size matters when judging interventions.",
  "use": "A large sample can make a tiny change in behaviour significant.",
  "but": "Reporting only significance can mislead policymakers about how much a programme helps."
 },
 "stress:causality": {
  "hook": "Stress and addiction",
  "angle": "Stress may contribute to health problems, but most evidence is correlational and cross-sectional.",
  "use": "Zhao and Zhou (2021): stress during COVID-19 was associated with more addictive social media use, partly through active use and feelings of flow.",
  "but": "People who use social media addictively may also report more stress, so the direction is unclear."
 },
 "stress:perspective": {
  "hook": "Appraisal matters",
  "angle": "Biological accounts focus on the stress response (cortisol, fight-or-flight); the transactional model adds that a situation is only stressful if it is appraised as stressful.",
  "use": "Lazarus and Folkman (1984): primary and secondary appraisal explain why the same event stresses one person and not another.",
  "but": "Appraisal is measured by self-report, which is hard to verify."
 },
 "stress:measurement": {
  "hook": "Objective addiction markers",
  "angle": "Social media addiction is usually self-reported, so researchers look for more objective indicators.",
  "use": "Time distortion (underestimating how long you spent online) has been proposed as a supplementary measure (Turel, Brevers and Bechara, 2018).",
  "but": "No single measure is accepted as the standard, which makes studies hard to compare."
 },
 "biotreat:causality": {
  "hook": "Treatment–aetiology fallacy",
  "angle": "That an antidepressant works does not prove that depression is caused by low serotonin.",
  "use": "SSRIs reduce symptoms for many patients, but the ‘chemical imbalance’ explanation is now widely criticised as too simple.",
  "but": "A treatment can be useful even if the reason it works is not fully understood."
 },
 "biotreat:measurement": {
  "hook": "Response, remission, relapse",
  "angle": "‘Effective’ can mean response (symptoms reduce), remission (symptoms go away) or no relapse later. Which one is measured changes the conclusion.",
  "use": "Over the long term, antidepressants and talking therapies show similar effectiveness, but medication tends to work faster.",
  "but": "Randomized controlled trials are strong for internal validity but may not reflect real patients."
 },
 "biotreat:bias": {
  "hook": "Bias in drug trials",
  "angle": "Drug trials are vulnerable to several biases: poor allocation concealment, unblinding (side effects reveal who got the drug), vested interests and publication bias.",
  "use": "The CONSORT statement (Schulz et al., 2010) sets standards for reporting randomized trials.",
  "but": "Standards improve reporting but cannot remove all bias."
 },
 "biotreat:responsibility": {
  "hook": "Placebos and side effects",
  "angle": "Drug trials raise ethical issues: giving placebos to people who are unwell, side effects, and informed consent.",
  "use": "Waitlist controls and active comparisons are alternatives to placebos.",
  "but": "Without a placebo it is harder to separate the drug’s effect from expectation."
 },
 "psychtreat:measurement": {
  "hook": "Many kinds of effectiveness",
  "angle": "Judging a treatment means looking at more than symptom scores: short-term versus long-term, mild versus severe cases, adherence, cost and access.",
  "use": "Andrews et al. (2010): in a meta-analysis, computerised CBT was about as effective as face-to-face therapy for some problems.",
  "but": "Computerised and app-based CBT have higher dropout rates."
 },
 "psychtreat:change": {
  "hook": "Relies on the client",
  "angle": "CBT aims to change thinking patterns and depends on the client’s motivation and work between sessions.",
  "use": "Homework and behavioural exercises are a core part of CBT.",
  "but": "Common factors such as the therapist relationship (Wampold, 2001) may explain a large part of effectiveness regardless of technique."
 },
 "psychtreat:responsibility": {
  "hook": "Who is accountable?",
  "angle": "Therapists follow ethical codes about confidentiality and harm. App-based and AI therapy raise the question of who is responsible when something goes wrong.",
  "use": "Chatbots can widen access to support but cannot respond to a crisis the way a human therapist can.",
  "but": "Restricting such tools also has a cost for people with no access to a therapist."
 },
 "prevention:measurement": {
  "hook": "Short-term versus long-term",
  "angle": "To know whether prevention works you need longitudinal follow-up, and behaviour such as screen time is often self-reported.",
  "use": "Hunt et al. (2018): students randomly assigned to limit social media for several weeks reported less loneliness and depression than a control group, using phone screenshots to check usage.",
  "but": "A small sample of US undergraduates over a few weeks says little about long-term effects or other groups."
 },
 "prevention:change": {
  "hook": "Changing the person",
  "angle": "Prevention can target the environment or the person. Self-control, motivation and mindfulness are common individual targets.",
  "use": "Brevers and Turel (2019) found that people who used self-control strategies reported fewer social media addiction symptoms.",
  "but": "The strength model of self-control (Baumeister et al., 1998) has faced replication problems."
 },
 "prevention:causality": {
  "hook": "Mediators",
  "angle": "Prevention programmes work through mediating variables, which need to be identified to know why a programme works.",
  "use": "Mindfulness may reduce social media addiction indirectly through better attention control and less fear of missing out.",
  "but": "Most of this evidence is correlational, so the mediating chain is a hypothesis."
 },

 /* ---------- Human relationships ---------- */

 "accult:measurement": {
  "hook": "The tool assumes the model",
  "angle": "How acculturation is measured depends on which model the researcher assumes, and the measure then produces results that fit that model.",
  "use": "The original ARSMA forced a choice between Mexican and American preferences; ARSMA-II measured the two cultures separately, matching Berry’s two-dimensional model.",
  "but": "Large studies often use proxy measures such as years in the country, which assume the one-dimensional model."
 },
 "accult:perspective": {
  "hook": "One line or two axes?",
  "angle": "One-dimensional models see acculturation as losing one culture as you gain another; Berry’s model treats the two as independent, giving four strategies.",
  "use": "Berry (1992): integration (keeping both cultures) is generally associated with the best outcomes.",
  "but": "The immigrant paradox (more acculturation, worse health) may partly reflect proxy measures based on the one-dimensional model."
 },
 "accult:bias": {
  "hook": "Arbitrary cut-offs",
  "angle": "Berry’s categories depend on cut-off scores, and the strategies are assumed to be universal for all migrants and contexts.",
  "use": "Marginalisation has little empirical support as a distinct strategy.",
  "but": "Schwartz et al. (2010) extended the model to include practices, values and identifications, and the context of acculturation."
 },
 "compliance:responsibility": {
  "hook": "Deception and manipulation",
  "angle": "Compliance research often uses deception, and its findings can be used to manipulate people commercially.",
  "use": "Cialdini (1984) spent time undercover in sales and fundraising to identify six principles of persuasion.",
  "but": "The same knowledge can help people recognise and resist manipulation."
 },
 "compliance:causality": {
  "hook": "What causes foot-in-the-door?",
  "angle": "Knowing a technique works is not the same as knowing why it works. Experiments can compare possible mechanisms.",
  "use": "Freedman and Fraser (1966): 52.8% agreed to a large request after performing a small one, compared with 22.2% who were asked only once; familiarity alone gave 27.8%.",
  "but": "Agreeing without performing gave 33.3%, so both agreeing and acting seem to matter."
 },
 "compliance:measurement": {
  "hook": "Narrow operationalizations",
  "angle": "Compliance is usually measured with one specific request, which limits how far findings generalise.",
  "use": "Freedman and Fraser (1966) studied California housewives and one type of request.",
  "but": "Combining studies across many requests and settings is the only way to judge generalizability."
 },
 "conformity:measurement": {
  "hook": "The Asch paradigm",
  "angle": "Conformity is operationalized as going along with an obviously wrong group answer, which shows the effect clearly but in an artificial task.",
  "use": "Asch (1951): 35.7% of critical answers were wrong and 74% of participants conformed at least once, but 26% never conformed.",
  "but": "Interviews afterwards revealed different reasons (distortion of perception, judgement or action), so the same behaviour measured different things."
 },
 "conformity:bias": {
  "hook": "Misreported findings",
  "angle": "Asch’s findings are often reported as showing that people conform, while the fact that most answers were correct is downplayed.",
  "use": "Griggs (2015) found textbooks increasingly emphasise conformity and leave out independence.",
  "but": "The original sample was male American college students in the 1950s, which also limits generalizability."
 },
 "conformity:responsibility": {
  "hook": "Deception and discomfort",
  "angle": "Conformity experiments rely on deception and create discomfort, which is why the IB does not allow conformity studies as class practicals.",
  "use": "In Asch’s study, participants faced a unanimous group of confederates without knowing it.",
  "but": "Debriefing and the short duration reduce harm, and the findings have been very influential."
 },
 "conformity:perspective": {
  "hook": "Two kinds of influence",
  "angle": "Conformity can be informational (the group probably knows better) or normative (wanting to be accepted). Social identity theory adds that we conform most to groups we identify with.",
  "use": "Salomons et al. (2021): people conformed to robots when the robots seemed competent at the task.",
  "but": "Evolutionary explanations suggest conformity may have had survival value."
 },
 "dims:measurement": {
  "hook": "Factor analysis of surveys",
  "angle": "Cultural dimensions come from statistical analysis of large surveys: statements that correlate with each other are grouped into a dimension.",
  "use": "Hofstede surveyed about 117,000 IBM employees and identified dimensions such as individualism versus collectivism.",
  "but": "The survey instrument has been criticised for reliability and construct validity problems."
 },
 "dims:bias": {
  "hook": "Who was surveyed",
  "angle": "IBM employees are not representative of their countries, and national scores hide variation within a country.",
  "use": "Within-nation heterogeneity means many individuals do not match their country’s score.",
  "but": "Applying national scores to individuals is the ecological fallacy."
 },
 "dims:perspective": {
  "hook": "An etic tool",
  "angle": "Cultural dimensions allow etic comparison, and they also show that theories developed in one culture may not apply elsewhere.",
  "use": "Research on trust (e.g. Buchan et al., 2002) suggests that in collectivist societies, personal relationships matter more than group membership.",
  "but": "Etic dimensions may miss things that emic research would reveal."
 },
 "sit:causality": {
  "hook": "Categorization is enough",
  "angle": "SIT’s key causal claim is that simply being put into a group is enough to cause in-group favouritism, even without competition.",
  "use": "Tajfel et al. (1971): 64 Bristol schoolboys, grouped on a trivial basis, chose to maximise the difference between groups even at a cost to their own group.",
  "but": "This shows categorisation can cause discrimination, not that it is the main cause in real conflicts."
 },
 "sit:measurement": {
  "hook": "Artificial matrices",
  "angle": "In-group favouritism was measured through choices on reward matrices, which is precise but far from real intergroup behaviour.",
  "use": "Tajfel et al. (1971) used booklets of matrices allocating small amounts of money.",
  "but": "Participants may have assumed they were expected to favour their group (demand characteristics)."
 },
 "sit:perspective": {
  "hook": "Versus realistic conflict",
  "angle": "SIT challenged realistic group conflict theory by showing conflict can arise without competition for resources.",
  "use": "Minimal group studies show favouritism with no resources at stake.",
  "but": "The self-esteem part of the theory is debated, and SIT is better at explaining than predicting behaviour."
 },
 "sit:change": {
  "hook": "Reducing conflict",
  "angle": "If group identity causes discrimination, changing how people categorise themselves could reduce conflict.",
  "use": "Strategies such as creating a shared superordinate identity follow from SIT.",
  "but": "Cultural dimensions research suggests SIT may apply less well in collectivist cultures."
 },
 "sltgroup:causality": {
  "hook": "Violent games and aggression",
  "angle": "The claim that violent media causes aggression is supported by short lab studies but challenged by longer experiments.",
  "use": "Kühn et al. (2019): two months of playing a violent game did not increase aggression.",
  "but": "Most research is correlational and suffers from bidirectional ambiguity: aggressive people may choose violent games."
 },
 "sltgroup:responsibility": {
  "hook": "Evidence before policy",
  "angle": "Decisions such as banning violent games affect many people, so researchers and policymakers have a responsibility to base them on solid evidence.",
  "use": "Lab studies of violent games typically used short sessions (median 15 minutes) and measured effects immediately.",
  "but": "Waiting for perfect evidence also has costs if harm is real."
 },
 "sltgroup:change": {
  "hook": "Prosocial modelling",
  "angle": "Social learning can be used to encourage prosocial behaviour, and social media can reinforce norms.",
  "use": "Brady et al. (2021): expressions of moral outrage on social media increased when they were rewarded with likes, through both reinforcement and norm learning.",
  "but": "Effects of prosocial TV are often short-lived without other support."
 },
 "chem:causality": {
  "hook": "Is love a chemical?",
  "angle": "Chemical messengers clearly play a role in romantic relationships, but showing they cause romantic behaviour is difficult.",
  "use": "Fisher, Aron and Brown (2005): looking at a photo of a beloved activated dopamine-rich brain areas such as the ventral tegmental area in 17 people intensely in love.",
  "but": "This is correlational; activation could be a result of the feelings rather than their cause."
 },
 "chem:measurement": {
  "hook": "Hard to measure in the brain",
  "angle": "Neurotransmitter activity in the human brain cannot be measured directly, so researchers rely on indirect methods.",
  "use": "fMRI shows activity in areas rich in dopamine, not dopamine itself; hormone levels in the blood may not reflect levels in the brain.",
  "but": "Animal studies allow direct measurement but must be generalised to humans."
 },
 "chem:perspective": {
  "hook": "Evolution and animal models",
  "angle": "Fisher and colleagues argue romantic love evolved from courtship systems shared with other mammals and birds.",
  "use": "Sex drive, attraction and attachment are linked to testosterone, dopamine, and oxytocin and vasopressin respectively.",
  "but": "Biological explanations leave out cultural expectations about love."
 },
 "cogrel:measurement": {
  "hook": "Self-report over time",
  "angle": "Cognitive models of relationships rely on self-report of satisfaction, investment and alternatives, often collected repeatedly.",
  "use": "Rusbult (1983): 17 couples completed questionnaires every 17 days; commitment predicted whether relationships lasted.",
  "but": "Answering the same questions repeatedly may itself change how people think about their relationship."
 },
 "cogrel:causality": {
  "hook": "Longitudinal prediction",
  "angle": "Most evidence is correlational, but longitudinal designs show whether earlier thoughts predict later outcomes, which suggests causal direction.",
  "use": "Rusbult’s investment model predicts staying or leaving from satisfaction, alternatives and investment.",
  "but": "Prediction over time is still not proof of causation."
 },
 "comm:measurement": {
  "hook": "Microanalytic observation",
  "angle": "Communication is studied by recording couples in a lab and coding behaviour in detail, combined with long-term follow-up.",
  "use": "Gottman and Krokoff (1989) observed couples discussing conflicts and linked patterns of interaction to later satisfaction.",
  "but": "Couples may act differently in a lab than at home (demand characteristics)."
 },
 "comm:change": {
  "hook": "Patterns predict break-up",
  "angle": "Communication patterns change over a relationship and can predict its outcome.",
  "use": "The ‘four horsemen’ (criticism, contempt, defensiveness, stonewalling) are early warning signs.",
  "but": "Claims of predicting divorce with high accuracy have been criticised."
 },
 "strategies:change": {
  "hook": "Gottman couples therapy",
  "angle": "If communication patterns predict outcomes, teaching couples to replace negative patterns should improve relationships.",
  "use": "Rajaei, Daneshpour and Robertson (2019) applied the Gottman method with 14 couples in Iran.",
  "but": "A small volunteer sample limits generalisation."
 },
 "strategies:bias": {
  "hook": "Western model abroad",
  "angle": "Applying a therapy developed in Western samples to other cultures risks imposed etic bias.",
  "use": "The Iranian study tested whether the Gottman method transfers to a culture where divorce is stigmatised.",
  "but": "Positive results suggest some transfer but need replication."
 }
};
