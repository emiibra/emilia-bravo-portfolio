export const en = {
  languageName: "English",
  nav: { start: "Start", about: "About", projects: "Projects", rides: "Rides", contact: "Contact" },
  home: {
    kicker: "SOFTWARE ENGINEERING • DATA PIPELINES • ATLANTA, GA",
    titleLineOne: "Building software &",
    titleLineTwo: "data systems",
    titleLineThree: "people actually use.",
    description: "I'm Emilia Bravo, originally from Peru, a Computer Science & Data Science senior at Georgia State University, and a Software Engineer Intern at Floreo Labs. I build full-stack web platforms, grounded RAG systems, and public-health data pipelines.",
    explore: "Explore my work",
    connect: "Let's connect",
    chooseFocus: "Choose a focus",
    buildHeading: "What I build",
    softwareEyebrow: "FOCUS · FULL-STACK",
    dataEyebrow: "FOCUS · DATA ENGINEERING",
    softwareTitle: "Production platforms with real users.",
    dataTitle: "Spatially validated pipelines for public health.",
    softwareItems: ["Fry Goehring Event Logistics", "Teresita HR Platform", "Voice-Only AI Messaging", "VR Golf Training Tool"],
    dataItems: ["Counties That Beat the Odds", "Multi-Node Apache Spark", "Floreo Document Analytics", "Strava Ride Telemetry"],
    stats: { events: "events powered", registrations: "registrations", manualOps: "less manual ops", hackHers: "HackHers 2025", cdcRows: "CDC PLACES rows", counties: "U.S. counties", spark: "Spark cluster", diligence: "faster due diligence" },
    careLabel: "What I care about",
    careTitle: "Clear tools for real problems.",
    careBody: "I work across health, public data, civic infrastructure, climate tech, and projects for Latin American teams while finishing my degree.",
    seeAll: "See all work",
    openLabel: "Open to new work.",
    openBody: "New-grad software engineering, full-stack, and data engineering roles.",
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? readonly Widen<Item>[]
    : T extends object
      ? { -readonly [Key in keyof T]: Widen<T[Key]> }
      : T;

export type Translation = Widen<typeof en>;
