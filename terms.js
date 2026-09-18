/* Key terms for the six course concepts, taken from the IB Psychology guide
   (first assessment 2027): the related-terms list given for each concept,
   the wording of each concept's explanation, and the guide's glossary of
   subject-specific terms. */

const CONCEPTS = [
 {
  "id": "bias",
  "name": "Bias",
  "blurb": "A bias is a limitation in objective thinking: a tendency to perceive information through a cognitive filter of experience and preference. Psychologists create controls for bias, and recognise that bias can be implicit or explicit.",
  "terms": ["researcher-bias", "participant-bias", "sampling-bias", "confirmation-bias", "publication-bias", "gender-bias", "cultural-bias", "sampling-techniques", "determinism", "cognitive-bias", "credibility", "reflexivity", "inter-rater-reliability", "positivism", "reductionism", "holism"]
 },
 {
  "id": "causality",
  "name": "Causality",
  "blurb": "Psychologists investigate relationships between variables with the goal of determining cause and effect. Because behaviour is complex, causality is often the interaction of several variables rather than the direct effect of one.",
  "terms": ["reductionism", "correlation", "causation", "bidirectional-ambiguity", "validity", "mundane-realism", "experimental-controls", "extraneous-variable", "placebo", "double-blind-design", "wait-listing", "statistical-significance", "complexity", "influence-vs-interaction", "agency", "motivation"]
 },
 {
  "id": "change",
  "name": "Change",
  "blurb": "Psychology applies theory and findings with the goal of changing behaviour. Change can be gradual or sudden, planned or unplanned, and psychologists also recognise that there is resistance to it.",
  "terms": ["barriers-to-change", "prevalence", "longitudinal-design", "repeated-measures-design", "intervention-prevention-promotion", "effectiveness-of-treatment", "development-and-maturation", "determinism", "agency", "motivation"]
 },
 {
  "id": "measurement",
  "name": "Measurement",
  "blurb": "Human behaviour is difficult to observe and objectively measure. Psychologists must choose appropriate methods and operationalize variables so that measurement is reliable and represents the behaviour validly.",
  "terms": ["research-method", "research-methodology", "construct", "variable", "operationalization", "reliability", "validity", "self-reported-data", "anecdotal-data", "empirical-data", "quantitative-research-methodology", "qualitative-research-methodology", "statistical-significance", "type-i-error", "type-ii-error", "brain-imaging", "interpretive-approach", "content-analysis", "triangulation", "credibility", "prospective-research", "retrospective-research", "longitudinal-design", "cross-sectional-research-design", "survey-questionnaire"]
 },
 {
  "id": "perspective",
  "name": "Perspective",
  "blurb": "Psychology contains a number of approaches that have evolved to give a multi-perspective understanding of human beings. No single perspective explains behaviour sufficiently on its own.",
  "terms": ["approach-perspective", "three-approaches", "theory", "model", "deductive-research-methodology", "inductive-research-methodology", "emic", "etic", "indigenous-psychologies", "indigenous-societies", "alternative-explanations", "holism"]
 },
 {
  "id": "responsibility",
  "name": "Responsibility",
  "blurb": "Psychologists rely on humans as participants and can hold positions of power, so they should act with social responsibility. Ethical principles guide them to maximize benefits and minimize costs, and how research is applied is their responsibility too.",
  "terms": ["ethical-consideration", "ethical-standards", "social-responsibility", "deception", "informed-consent", "cost-benefit-analysis", "anonymity", "debriefing", "right-to-withdraw", "protection-from-harm", "use-of-animals", "child-participants", "research-in-public-spaces", "socially-sensitive-issues", "stigma", "publication-of-findings", "advocacy"]
 }
];

const TERMS = {
 "concept": {
  "term": "Concept",
  "def": "An organizing idea with distinct attributes that are shared across multiple areas. In DP psychology the concepts are bias, causality, change, measurement, perspective and responsibility."
 },
 "bias": {
  "term": "Bias",
  "def": "A limitation in objective thinking: a tendency to perceive information through a cognitive filter of experience and preference. Bias can be implicit or explicit, and it matters not just to recognise it but to understand how it affects the way research is conducted, analysed and interpreted."
 },
 "researcher-bias": {
  "term": "Researcher bias",
  "def": "When a researcher's personal values or expectations influence the design, data collection or interpretation of findings, potentially leading to biased results."
 },
 "participant-bias": {
  "term": "Participant bias",
  "def": "When participants alter their behaviour or responses because they are aware of being observed, or because of their expectations about the study's purpose."
 },
 "sampling-bias": {
  "term": "Sampling bias",
  "def": "When the sample used in a study is not representative of the population it was drawn from and to which the findings may be generalized."
 },
 "confirmation-bias": {
  "term": "Confirmation bias",
  "def": "The tendency to seek, interpret and remember information that confirms pre-existing beliefs, while ignoring or downplaying contradictory evidence."
 },
 "publication-bias": {
  "term": "Publication bias",
  "def": "When results are selectively published based on the direction or significance of their findings. Studies with positive or statistically significant results are more likely to be published, giving a partial picture of the research literature."
 },
 "gender-bias": {
  "term": "Gender bias",
  "def": "Bias relating to gender. The guide notes that gender bias is present in clinical psychology and can affect diagnosis, prevalence statistics and treatment."
 },
 "cultural-bias": {
  "term": "Cultural bias",
  "def": "The tendency to interpret people's behaviour based on one's own cultural norms and values, which can lead to misunderstandings and unfair judgements about people from different cultures."
 },
 "sampling-techniques": {
  "term": "Sampling techniques",
  "def": "The techniques used to select participants for a study. The guide treats sampling techniques as part of research methodology, alongside the choice of research method, data collection and analysis."
 },
 "determinism": {
  "term": "Determinism (biological and environmental)",
  "def": "The argument that events, including human actions and choices, are predetermined and inevitable. In psychology the term is used in relation to biology or environment, and implies little or no personal choice in behaviour."
 },
 "cognitive-bias": {
  "term": "Cognitive bias",
  "def": "A systematic pattern of deviation from norm or rationality in judgement. Cognitive biases may be applied when there is not enough time, information or motivation to make a decision; the guide names anchoring, representativeness and availability biases as examples that affect thinking and decision-making."
 },
 "credibility": {
  "term": "Credibility",
  "def": "The degree to which research gives a true picture of what is being investigated and the results represent the perceptions and opinions of the participants. Credibility is a factor in establishing trustworthiness in qualitative research."
 },
 "reflexivity": {
  "term": "Reflexivity",
  "def": "The researcher's awareness of their own perspectives, biases and values and how these may influence the research process and findings. Personal reflexivity is reflecting on those biases and values; epistemological reflexivity is reflecting on the process and methodology used."
 },
 "inter-rater-reliability": {
  "term": "Inter-rater reliability",
  "def": "Agreement between different researchers rating the same data. It applies the guide's idea of reliability, the consistency of measurement, to the people doing the rating."
 },
 "positivism": {
  "term": "Positivism",
  "def": "An emphasis on empirical evidence and scientific methods to gain knowledge and understand human behaviour. It contrasts with more interpretive or qualitative approaches in psychology."
 },
 "reductionism": {
  "term": "Reductionism",
  "def": "An approach that seeks to understand complex phenomena by breaking them down into simpler, more manageable components. It is the opposite of holism, and bias towards a certain perspective can result in reductionism."
 },
 "holism": {
  "term": "Holism",
  "def": "An approach that treats human behaviour as a whole integrated experience rather than separate parts. It is the opposite of reductionism; the guide describes the sociocultural approach as taking a more holistic approach."
 },

 "correlation": {
  "term": "Correlation",
  "def": "A way of measuring the relationship between two variables, which may move in the same direction (positive correlation) or in opposite directions (negative correlation). The guide pairs correlation with causation because a relationship on its own does not show that one variable causes the other."
 },
 "causation": {
  "term": "Causation",
  "def": "The relationship between cause and effect, where one event or factor directly brings about another: how changes in one variable result in changes in another."
 },
 "bidirectional-ambiguity": {
  "term": "Bidirectional ambiguity",
  "def": "When the direction of cause and effect between two variables is unclear, so it is hard to tell which variable influences the other, or whether they influence each other."
 },
 "validity": {
  "term": "Validity (internal and external)",
  "def": "Internal validity is the extent to which a measurement within a study accurately measures what it claims to measure. External validity is the extent to which findings can be generalized to a different setting or population."
 },
 "mundane-realism": {
  "term": "Mundane realism",
  "def": "The degree to which a study or experimental setting resembles real-life situations and experiences. It affects the external validity of findings."
 },
 "experimental-controls": {
  "term": "Experimental controls",
  "def": "Measures put in place during research to minimize the influence of extraneous variables, so that changes in the dependent variable can be attributed to the manipulation of the independent variable."
 },
 "extraneous-variable": {
  "term": "Extraneous variable",
  "def": "A variable other than the independent variable that could influence the dependent variable. If it is not controlled, it becomes a confounding variable."
 },
 "placebo": {
  "term": "Placebo",
  "def": "A treatment with no therapeutic effect given to participants so that researchers can compare it with an active treatment and assess that treatment's real effects."
 },
 "double-blind-design": {
  "term": "Double-blind design",
  "def": "When neither the participants nor the researchers running the study know who is in the control group and who is in the experimental group, which minimizes bias and increases the reliability of results."
 },
 "wait-listing": {
  "term": "Wait-listing",
  "def": "A design in which some participants are placed on a waiting list to receive a treatment later, so that those who have had the intervention can be compared with those who have not yet had it."
 },
 "statistical-significance": {
  "term": "Statistical significance",
  "def": "An indication that the results of a statistical test are unlikely to have occurred by chance. It is given as a level of probability, usually p<0.05 in psychology, meaning under a 5% probability that the results occurred by chance."
 },
 "complexity": {
  "term": "Complexity",
  "def": "The idea that human behaviour is rarely the product of one variable acting on another. Because behaviour is complex, causality is often the interaction of several variables."
 },
 "influence-vs-interaction": {
  "term": "Influence vs interaction",
  "def": "The distinction between one variable directly influencing another and several variables acting together. Simple relationships may be direct causal relationships, but with complex behaviour interaction is often involved."
 },
 "agency": {
  "term": "Agency",
  "def": "The extent to which a person has free will over their own behaviour. One of psychology's great debates is how far we have free will versus how far behaviour is determined."
 },
 "motivation": {
  "term": "Motivation",
  "def": "The impetus that gives purpose or direction to behaviour, operating at a conscious or unconscious level. Intrinsic motivation can make change deliberate, as when someone changes their behaviour through education or health treatment."
 },

 "barriers-to-change": {
  "term": "Barriers to change",
  "def": "What stands in the way of behaviour change. Researchers look at theories of how to promote change, but also recognise that there is resistance to change."
 },
 "prevalence": {
  "term": "Prevalence",
  "def": "The proportion or percentage of a population showing a particular condition or trait at a point in time or over a lifetime. It is commonly used in health and wellness research."
 },
 "longitudinal-design": {
  "term": "Longitudinal design",
  "def": "A design in which data is collected from the same individuals or groups over an extended period, in order to study changes or developments over time."
 },
 "repeated-measures-design": {
  "term": "Repeated measures design",
  "def": "A design in which the same group of participants is tested more than once under different conditions, allowing changes within the same individuals to be examined."
 },
 "intervention-prevention-promotion": {
  "term": "Intervention, prevention and promotion strategies",
  "def": "Planned strategies aimed at producing change, such as encouraging stress management or healthy eating, or stopping an unhealthy behaviour."
 },
 "effectiveness-of-treatment": {
  "term": "Effectiveness of treatment",
  "def": "How well a treatment or health promotion strategy actually produces change. Psychologists evaluate effectiveness at the individual, local and global levels."
 },
 "development-and-maturation": {
  "term": "Development and maturation",
  "def": "Maturation is the natural process of growth and development over time, leading to changes in physical, cognitive and emotional abilities. Change of this kind is gradual, unlike sudden change such as a shift in mood."
 },

 "research-method": {
  "term": "Research method",
  "def": "The specific technique or procedure used to collect data, such as surveys and questionnaires, case studies, experiments, interviews and observations. Psychologists must select methods appropriate to the behaviour being studied."
 },
 "research-methodology": {
  "term": "Research methodology",
  "def": "The broader framework and philosophical approach guiding the whole research process: the choice of research methods, sampling techniques, data collection, analysis techniques and overall strategy."
 },
 "construct": {
  "term": "Construct",
  "def": "An abstract idea, concept or variable that cannot be directly observed but is used to explain or measure aspects of behaviour, such as intelligence or self-esteem."
 },
 "variable": {
  "term": "Variable",
  "def": "Any factor or characteristic that can vary and can be measured or manipulated in research. In experiments these are independent (manipulated), dependent (measured) and controlled (held stable) variables."
 },
 "operationalization": {
  "term": "Operationalization of variables",
  "def": "Stating exactly how a variable will be manipulated or measured. It is what allows for reliable measurement and a valid representation of the behaviour being studied."
 },
 "reliability": {
  "term": "Reliability",
  "def": "The consistency of measurement tools or methods. A reliable measure gives consistent results when used repeatedly under similar conditions with a similar population."
 },
 "self-reported-data": {
  "term": "Self-reported data",
  "def": "Data collected directly from individuals through their own accounts, typically through surveys, questionnaires or interviews."
 },
 "anecdotal-data": {
  "term": "Anecdotal data",
  "def": "Informal data from accounts that are not systematically collected. It lacks scientific rigour or empirical support."
 },
 "empirical-data": {
  "term": "Empirical data",
  "def": "Data collected through systematic and objective methods: evidence based on direct observation or experience rather than on theory alone."
 },
 "quantitative-research-methodology": {
  "term": "Quantitative research methodology",
  "def": "The collection and analysis of numerical data to examine relationships between variables, using statistical techniques to test hypotheses and make inferences about populations."
 },
 "qualitative-research-methodology": {
  "term": "Qualitative research methodology",
  "def": "The collection and analysis of textual or verbal data to explore the meaning behind people's behaviour, using methods such as interviews, observations and content analysis."
 },
 "type-i-error": {
  "term": "Type I error",
  "def": "A false positive: rejecting a null hypothesis that is actually true, and so concluding there is a significant effect or relationship when there is not."
 },
 "type-ii-error": {
  "term": "Type II error",
  "def": "A false negative: failing to reject a null hypothesis that is actually false, and so concluding there is no significant effect or relationship when there is one."
 },
 "brain-imaging": {
  "term": "Brain imaging",
  "def": "Technology such as an MRI scanner used to measure brain activity, which makes measurement indirect: the role of a neurotransmitter in behaviour, for example, is inferred from brain activity. The guide also names twin studies, virtual reality simulations and questionnaires as measurement techniques. Artefacts are unwanted errors in brain images caused by movement, scanner malfunction or other external factors."
 },
 "interpretive-approach": {
  "term": "Interpretive approach",
  "def": "Understanding behaviour through subjective analysis and context, emphasising the role of personal meaning and cultural context."
 },
 "content-analysis": {
  "term": "Content analysis",
  "def": "A method of examining, organizing and interpreting the content of numerical, written, visual or verbal material to identify key themes. It can be used in both quantitative and qualitative research."
 },
 "triangulation": {
  "term": "Triangulation",
  "def": "Using more than one method to study the same behaviour. Triangulation of methods allows researchers to establish the credibility of their findings."
 },
 "prospective-research": {
  "term": "Prospective research",
  "def": "Research that follows individuals or groups forward over time, collecting data periodically to investigate the outcomes of specific events or conditions."
 },
 "retrospective-research": {
  "term": "Retrospective research",
  "def": "Research that examines past events, data or records, relying on historical data and participants' memories to analyse behaviour that has already occurred."
 },
 "cross-sectional-research-design": {
  "term": "Cross-sectional research design",
  "def": "A design that collects data from participants at a single point in time, often comparing different groups, giving a snapshot of behaviour."
 },
 "survey-questionnaire": {
  "term": "Survey / questionnaire",
  "def": "A set of questions used to obtain information from a respondent about attitudes, behaviours, personality or values. It may be administered on paper, face to face or online; in DP psychology the two terms are interchangeable."
 },

 "approach-perspective": {
  "term": "Approach / perspective",
  "def": "Used interchangeably: different theoretical frameworks applied to understand human behaviour. Each is based on a series of assumptions about behaviour and beliefs about research."
 },
 "three-approaches": {
  "term": "Biological, cognitive and sociocultural approaches",
  "def": "The three approaches that make up the content of DP psychology, examining how biological, cognitive and sociocultural factors influence behaviour. No single one explains behaviour sufficiently on its own."
 },
 "theory": {
  "term": "Psychological theory",
  "def": "A systematic and organized set of principles or ideas that explain and predict behaviour. Theories are tested through research to evaluate their validity."
 },
 "model": {
  "term": "Psychological model",
  "def": "A theoretical representation or framework used to explain and understand complex processes, in order to test hypotheses and make predictions."
 },
 "deductive-research-methodology": {
  "term": "Deductive research methodology",
  "def": "Starting with a general theory or hypothesis and collecting data to test or confirm it: moving from a general idea to specific conclusions."
 },
 "inductive-research-methodology": {
  "term": "Inductive research methodology",
  "def": "Starting with specific observations or data and using them to build broader theories or general principles. Grounded theory, where the theory is developed from the data, is an example."
 },
 "emic": {
  "term": "Emic perspective / approach",
  "def": "Research that studies a culture or group from within, focusing on its unique beliefs, values and norms and understanding it from the point of view of the people inside it."
 },
 "etic": {
  "term": "Etic perspective / approach",
  "def": "Research that studies cultures or groups from an outsider's perspective, often using universal criteria that apply across cultures in order to compare them."
 },
 "indigenous-psychologies": {
  "term": "Indigenous psychologies",
  "def": "Culturally relevant ways of understanding and studying behaviour and cognitive processes within specific Indigenous communities, rooted in their cultural, historical and social contexts and often incorporating traditional beliefs, practices and world views. They are distinct from mainstream Western psychology."
 },
 "indigenous-societies": {
  "term": "Indigenous societies",
  "def": "Communities native to a particular region or land with a unique cultural, historical and often ancestral connection to that place, distinct from dominant cultures that may have colonized or influenced the region."
 },
 "alternative-explanations": {
  "term": "Alternative explanations and interpretations",
  "def": "Other ways the same behaviour or finding could be explained. Because each approach rests on its own assumptions and none explains behaviour sufficiently alone, each provides a different means of interpreting and examining behaviour."
 },

 "ethical-consideration": {
  "term": "Ethical consideration",
  "def": "A consideration vital in any psychology investigation, concerning the ethics of treating participants fairly and without causing harm."
 },
 "ethical-standards": {
  "term": "Ethical standards in research",
  "def": "The principles that guide psychologists to make reasoned and responsible decisions so that benefits are maximized and costs minimized. They have developed over time and may continue to adapt depending on the context, and they can also affect the results of research."
 },
 "social-responsibility": {
  "term": "Social responsibility",
  "def": "Acting responsibly towards society. As researchers, therapists or government advisers, psychologists can hold positions of power, and the relationship between researchers and participants rests on treating each other with respect."
 },
 "deception": {
  "term": "Use of deception",
  "def": "Not telling participants the real aim of a study. In a cost-benefit analysis, the benefit of the knowledge generated is weighed against the cost to the participant of having been deceived."
 },
 "informed-consent": {
  "term": "Informed consent",
  "def": "Participants agreeing to take part on the basis of knowing what the research involves. The guide notes that informed consent can introduce participant variables."
 },
 "cost-benefit-analysis": {
  "term": "Cost-benefit analysis",
  "def": "Weighing the positive and negative consequences of a decision by comparing the costs involved with the rewards offered. In research ethics, the benefits of the knowledge generated are compared with the cost to the participant."
 },
 "anonymity": {
  "term": "Anonymity",
  "def": "Keeping participants unidentifiable in research. The guide notes that anonymity can increase the validity of self-reported data."
 },
 "debriefing": {
  "term": "Debriefing",
  "def": "Explaining the study to participants after their part in it is over. The guide lists it among the ethical standards that make research responsible."
 },
 "right-to-withdraw": {
  "term": "Right to withdraw",
  "def": "A participant's right to leave a study at any point. The guide notes that the right to withdraw can lead to sampling bias."
 },
 "protection-from-harm": {
  "term": "Protection from harm",
  "def": "The responsibility to treat participants fairly and without causing them harm, which the guide describes as central to ethical considerations in any investigation."
 },
 "use-of-animals": {
  "term": "Use of animals",
  "def": "Where animal participants are used, researchers should reduce the number of animals used, refine the conditions of the research to minimize harm, and always attempt to replace animals with alternatives."
 },
 "child-participants": {
  "term": "Use of child participants",
  "def": "Research involving children, which the guide lists among the situations calling for particular ethical responsibility."
 },
 "research-in-public-spaces": {
  "term": "Research in public spaces, including observation-only research",
  "def": "Research carried out where people are in public, including studies that only observe. The guide describes naturalistic observation as recording behaviour in a natural setting without researcher interference, and covert observation as observing participants without their knowledge."
 },
 "socially-sensitive-issues": {
  "term": "Socially sensitive issues",
  "def": "Topics where research can affect people beyond the study itself. Responsibility here includes protecting marginalized groups from stigma."
 },
 "stigma": {
  "term": "Stigma",
  "def": "Negative beliefs about and attitudes towards individuals or groups based on certain characteristics, such as mental disorders or social identity."
 },
 "publication-of-findings": {
  "term": "Publication of findings",
  "def": "How research is reported to the public. Responsibility includes making sure the public understands the level of uncertainty in a study's findings."
 },
 "advocacy": {
  "term": "Advocacy",
  "def": "Arguing for change in governmental policies in line with research findings, which the guide counts as part of the responsibility of psychologists."
 }
};
