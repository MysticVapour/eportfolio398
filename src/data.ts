export type NavItem = { id: string; label: string };

export const NAV: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "venture", label: "Social Venture Plan" },
  { id: "press", label: "Press Release" },
  { id: "pitch", label: "Pitch Video" },
  { id: "guide", label: "Writing Guide" },
  { id: "artifacts", label: "Artifacts" },
  { id: "reflection", label: "Reflection" },
];

export const FEATURED_PROJECTS: { id: string; title: string; teaser: string; anchor: string }[] = [
  {
    id: "venture",
    title: "Social Venture Plan",
    teaser:
      "A full social venture proposal for Code and Reentry, a Baltimore coding studio for formerly incarcerated adults.",
    anchor: "#venture",
  },
  {
    id: "press",
    title: "Press Release",
    teaser:
      "A news-style announcement designed to make Code and Reentry feel urgent, credible, and public-facing.",
    anchor: "#press",
  },
  {
    id: "pitch",
    title: "Pitch Video",
    teaser:
      "A short persuasive pitch built to capture the problem, solution, and funding ask in under one minute.",
    anchor: "#pitch",
  },
  {
    id: "guide",
    title: "Writing Guide",
    teaser:
      "A professional communication guide focused on concise writing, clarity, tone, voice, and design.",
    anchor: "#guide",
  },
];

export const JOURNEY_STEPS = [
  { step: "01", title: "Words Are Power", note: "Treating writing as influence, not decoration." },
  { step: "02", title: "Concision", note: "Cutting fluff so meaning lands fast." },
  { step: "03", title: "Design Thinking", note: "Starting with human needs, not assumptions." },
  { step: "04", title: "Research", note: "Backing claims with credible evidence." },
  { step: "05", title: "Pitching", note: "Compressing the message until it moves people." },
];

export const VENTURE_OVERVIEW: { label: string; value: string }[] = [
  { label: "Project", value: "Code and Reentry" },
  {
    label: "Description",
    value:
      "A community coding studio in Baltimore where formerly incarcerated adults build real software for paying clients while training for careers in technology.",
  },
  { label: "Launch City", value: "Baltimore, Maryland" },
  { label: "Funding Target", value: "$25,000 to $40,000 seed grant" },
  { label: "Target Funder", value: "The Abell Foundation" },
  { label: "Model", value: "Paid training + real client work + mentorship + portfolio-building" },
  {
    label: "Pilot",
    value: "10-week cohort with 6 participants, 2 mentors, and 3 to 5 paying clients",
  },
];

export const VENTURE_STATS: { value: string; label: string }[] = [
  { value: "600K", label: "people return home from U.S. prisons every year" },
  { value: "27%", label: "unemployment rate among formerly incarcerated individuals" },
  { value: "10-week", label: "Baltimore pilot cohort" },
  { value: "$25K–$40K", label: "startup funding target" },
];

export const VENTURE_PILLARS: { title: string; body: string }[] = [
  {
    title: "Problem",
    body: "Mass incarceration creates an economic barrier long after release. Many returning citizens want to work, but employers often see a record before they see a person. Code and Reentry addresses the gap between learning skills and proving those skills through real paid work.",
  },
  {
    title: "Innovation",
    body: "Code and Reentry combines technical training, client projects, mentorship, and paid participation into one studio model. Participants build websites, digital tools, and real deliverables for local businesses and nonprofits.",
  },
  {
    title: "Ecosystem",
    body: "Baltimore already has reentry organizations supporting housing, identification, case management, and navigation. Code and Reentry does not replace that ecosystem. It fills the missing gap: a structured, income-earning pathway into skilled digital work.",
  },
  {
    title: "Impact",
    body: "The goal is not just one cohort. The model can expand from Baltimore to cities like Philadelphia, Detroit, and Richmond, creating a replicable pathway from reentry to technology careers.",
  },
];

export const VENTURE_SKILLS = [
  "Research-backed persuasion",
  "Social venture storytelling",
  "Budget justification",
  "Audience-centered structure",
  "Turning evidence into action",
  "Writing for funders, not just classmates",
];

export const PRESS_DETAILS: { label: string; value: string }[] = [
  { label: "Contact", value: "dhilan@codeandreentry.org" },
  { label: "Location", value: "Baltimore, Maryland" },
  { label: "Date", value: "April 29, 2025" },
  { label: "Status", value: "For Immediate Release" },
];

export const PRESS_SKILLS = [
  "Writing a newsworthy lead",
  "Understanding media audiences",
  "Creating urgency without overexplaining",
  "Using quotes strategically",
  "Turning a venture into a public story",
];

export const PITCH_STRUCTURE: { label: string; body: string }[] = [
  {
    label: "Problem",
    body: "600,000 people return from prison each year and face employment barriers.",
  },
  {
    label: "Solution",
    body: "A paid coding studio where participants build real software for real clients.",
  },
  {
    label: "Launch",
    body: "Baltimore, Maryland, supported by an existing reentry ecosystem.",
  },
  {
    label: "Ask",
    body: "$25,000 to $40,000 seed grant from the Abell Foundation.",
  },
];

export const PITCH_TRANSCRIPT = [
  "600,000 people walk out of prison every year in America. Most of them want to work, most of them apply, and most of them hear the same word back: no. Not because they lack skill, not because they lack drive, but because a record follows them everywhere, and most employers stop reading right there.",
  "This is where we come in. Code and Reentry is a coding studio in Baltimore where formerly incarcerated individuals build real software for real clients while they train. No waiting for a job offer. No hoping someone takes a chance. You work, you get paid, you build a portfolio.",
  "Baltimore has one of the highest incarceration rates in Maryland and an active reentry network already doing the work of housing and case management. We fill in the one gap they cannot: a paid skilled career pathway.",
  "We launch here, then Philadelphia, Detroit, and Richmond. We are seeking a seed grant of $25,000 to $40,000 from the Abell Foundation to launch our first cohort this year.",
  "Read our social venture plan. Join us in building a future where a record is not the end of the story, but the beginning of a new one.",
];

export const PITCH_SKILLS = [
  "Spoken persuasion",
  "Concise storytelling",
  "Pitch structure",
  "Emotional opening",
  "Clear funding ask",
  "Audience-centered delivery",
];

export const GUIDE_FEATURES: { title: string; body: string }[] = [
  {
    title: "Concise Writing",
    body: "Cut every word that does not carry weight. Professional readers value efficiency.",
  },
  {
    title: "Clarity",
    body: "Real-world readers do not have time to decode meaning. Clear writing builds trust.",
  },
  {
    title: "Design",
    body: "Visual hierarchy, white space, and consistency make communication easier to follow.",
  },
];

export const GUIDE_EXAMPLES: { wordy: string; concise: string }[] = [
  {
    wordy:
      "Due to the fact that the printer was not functioning properly, we were unable to successfully complete the task at this point in time.",
    concise: "Because the printer was broken, we could not finish the task.",
  },
  {
    wordy:
      "In my personal opinion, I think that many employees in the workplace feel stressed on a daily basis.",
    concise: "Many employees feel stressed daily.",
  },
];

export const GUIDE_SKILLS = [
  "Explaining communication principles",
  "Designing for readability",
  "Writing instructions for real users",
  "Using examples effectively",
  "Connecting writing, design, and credibility",
];

export const ARTIFACTS: { title: string; type: string; description: string }[] = [
  {
    title: "Words Are Power",
    type: "Discussion Post",
    description:
      "A discussion that introduced the course's central mindset: words are not just tools for expression, but tools for persuasion, influence, and professional impact.",
  },
  {
    title: "Cutting the Fluff / The Writing Process",
    type: "Discussion Post",
    description:
      "A concise writing exercise focused on eliminating unnecessary words and learning how professional communication values clarity, speed, and precision.",
  },
  {
    title: "Design Thinking for Inspiration",
    type: "Discussion Post",
    description:
      "A discussion on human-centered problem solving, using design thinking to understand real needs before building social ventures or proposing solutions.",
  },
  {
    title: "Research: Backing Up Your Words",
    type: "Discussion Post",
    description:
      "A discussion about using primary and secondary research to make social venture writing credible, measurable, and persuasive to investors and stakeholders.",
  },
  {
    title: "Pitch Video",
    type: "Final Communication Artifact",
    description:
      "A one-minute persuasive video pitch for Code and Reentry, designed to communicate the urgency of the problem, the venture's solution, the launch location, the scaling vision, and the funding ask.",
  },
];

export const COURSEWORK_HIGHLIGHTS = [
  "Defining Social Entrepreneurship",
  "Style, Tone and Voice",
  "Elements of Design",
  "Workshop: SVP Problem Section Research",
  "Workshop Innovation/Prototyping",
  "SVP Workshop: Logic Model/Scaling Impact",
  "Workshops on Startup Funds and Budget",
  "Peer Review: SVP 1st Draft",
  "Press Releases and the Media",
  "Reflection Assignment 3: Revisiting Your Expectations",
];

export const REFLECTION_PARAGRAPHS = [
  "At the beginning of the semester, I expected to do well in the parts of the course that involved persuasion, clarity, and real-world impact. Looking back, that expectation was mostly accurate. The Social Venture Plan, press release, and pitch video all matched the kind of writing I enjoy most: writing that has a purpose beyond filling pages. I liked working with a real audience in mind, whether that audience was a funder, a journalist, a stakeholder, or someone deciding whether to care about a social problem.",
  "The biggest area of growth for me was learning that strong communication is not just about having a strong idea. It is about shaping that idea so the audience can understand it quickly and believe in it. Early in the course, I already valued clear writing, but assignments like \u201CCutting the Fluff\u201D made me more aware of how often unnecessary words weaken a message. I became more intentional about removing filler, leading with the point, and making every sentence do actual work.",
  "I also grew in how I think about design and presentation. In my first reflection, I mentioned that visual layout and document design were areas I still needed to improve. That ended up being true, especially in the Writing Guide and Social Venture Plan. Those assignments forced me to think beyond the words themselves. Headings, spacing, hierarchy, and visual flow all affect whether a reader trusts and follows the message. I learned that design is not separate from writing. It is part of how writing reaches people.",
  "The course also changed how I think about research. Before, I sometimes treated research as support added after the main argument. In the SVP, research became part of the argument itself. Statistics about reentry, unemployment, incarceration, and Baltimore's ecosystem helped make Code and Reentry feel urgent and credible. At the same time, storytelling helped make the problem human. I learned that the strongest professional writing often combines both: evidence that proves the issue matters and narrative that makes people feel why it matters.",
  "Overall, I got what I wanted from this course. It sharpened skills I already cared about, especially concise and persuasive writing, while pushing me to improve areas I used to overlook, especially design, revision, and audience awareness. I leave the course with a clearer professional writing mindset: know your audience, respect their time, cut what does not matter, and make the message useful enough to move someone toward action.",
];
