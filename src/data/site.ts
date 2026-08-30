export const site = {
  name: "Rawan Magdy Ahmed",
  shortName: "Rawan Magdy",
  initials: "RM",
  role: "Frontend Engineer",
  location: "Cairo, Egypt",
  email: "rawan._.magdy@hotmail.com",
  phone: "+20 100 066 6251",
  phoneHref: "tel:+201000666251",
  linkedin: "https://www.linkedin.com/in/rawan-magdy55",
  github: "https://github.com/RawanMagdyAhmed",
  availability: "Open to remote, hybrid, and on-site roles",
  headline: "Frontend Engineer",
  tagline:
    "I am a frontend engineer. I build website interfaces with React and TypeScript, and mobile apps with React Native.",
  summary:
    "I am a frontend engineer who builds the part people actually touch: layout, interaction, state, and the connection to APIs. I like work that has to stay clear when the screen is full — forms, tables, roles, and real-time updates.",
  about: [
    "I work at the meeting point of design and engineering. I take a flow — a dashboard, a form, a mobile screen — and make it structured, consistent, and fast to use.",
    "My core tools are React, TypeScript, and React Native, with Redux Toolkit for shared state, Material UI and Tailwind for interface systems, and REST or WebSockets when the UI has to stay in sync with the backend.",
    "I studied Computer and Systems Engineering at Helwan University and completed a UI/UX diploma at ITI, Cairo University. That mix — engineering plus interface craft — is how I like to work.",
  ],
  strengths: [
    "Product interfaces in React and TypeScript",
    "Mobile UI with React Native and Expo",
    "Forms, validation, and data-heavy tables",
    "State management and REST-connected screens",
    "Reusable components and responsive layout",
    "Design handoff from Figma to production UI",
  ],
  stack: [
    "React",
    "TypeScript",
    "React Native",
    "Redux Toolkit",
    "Material UI",
    "Tailwind CSS",
    "REST APIs",
  ],
} as const;

export type Project = {
  slug: string;
  number: string;
  title: string;
  year: string;
  kind: string;
  role: string;
  group: "frontend" | "other";
  stack: string[];
  summary: string;
  problem: string;
  built: string[];
  frontend: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "quizzer",
    number: "01",
    title: "Quizzer",
    year: "2025",
    kind: "Web app",
    role: "Frontend",
    group: "frontend",
    stack: ["Vue.js", "Firebase", "Tailwind CSS", "Figma"],
    summary:
      "A quiz platform for organizations: role-based access, responsive dashboards, and a component system that started in Figma and shipped in the browser.",
    problem:
      "Organizations needed to create, assign, and review quizzes without adopting a heavy learning-management system.",
    built: [
      "Separate experiences for organizations and participants, gated by role",
      "Responsive dashboards designed first in Figma, then implemented with Tailwind",
      "Reusable interface pieces and a dark-mode-capable theme",
      "Authentication and views wired to APIs and Firebase",
    ],
    frontend: [
      "Dashboard information architecture",
      "Component library and spacing system",
      "Auth-aware navigation and empty/loading states",
    ],
  },
  {
    slug: "ecommerce",
    number: "02",
    title: "Ecommerce storefront",
    year: "2025",
    kind: "React web",
    role: "Frontend",
    group: "frontend",
    stack: ["React.js", "JavaScript (ES6+)", "Context API", "React Router", "CSS3"],
    summary:
      "A complete shop flow in React: browse, filter, open a product, and keep a cart — all client-side, with clean routing and shared state.",
    problem:
      "Demonstrate a real storefront journey in the browser without standing up a full commerce backend.",
    built: [
      "Catalog listing with category filters",
      "Product detail pages with a clear path into the cart",
      "Cart state shared through Context API",
      "Client-side routes with React Router",
    ],
    frontend: [
      "Page composition and product cards",
      "Filter and navigation patterns",
      "Persistent cart UI across routes",
    ],
  },
  {
    slug: "expense-tracker",
    number: "03",
    title: "Expense Tracker",
    year: "2025",
    kind: "React Native",
    role: "Mobile frontend",
    group: "frontend",
    stack: ["React Native", "Expo", "JavaScript (ES6+)", "Context API", "Expo Router"],
    summary:
      "A cross-platform mobile app for daily spend: add a transaction, remove it, and review what just happened — one codebase for iOS and Android.",
    problem:
      "Track everyday expenses without a large finance product, and keep the same experience on both phones.",
    built: [
      "Screens to add, delete, and review recent transactions",
      "Shared expense state with Context API",
      "Navigation with Expo Router",
      "Reusable mobile components following familiar native patterns",
    ],
    frontend: [
      "Mobile layout and touch-friendly lists",
      "Form entry and confirmation",
      "Stack navigation between flows",
    ],
  },
  {
    slug: "travel-booking",
    number: "04",
    title: "Travel booking site",
    year: "2024",
    kind: "HTML / CSS / JS",
    role: "Frontend",
    group: "other",
    stack: ["HTML5", "CSS3", "JavaScript", "Swiper.js"],
    summary:
      "A responsive marketing site with video sliders, a booking form, and reviews — built to feel visual and hold up across browsers.",
    problem:
      "A destination landing page needed motion and structure, not a full booking engine.",
    built: [
      "Responsive sections for hero, form, and social proof",
      "Video and review sliders with Swiper.js",
      "Cross-browser layout and visual polish",
    ],
    frontend: [
      "CSS layout and responsive breakpoints",
      "Form composition",
      "Carousel integration",
    ],
  },
  {
    slug: "auto-parking",
    number: "05",
    title: "Auto-parking and car vision",
    year: "2024",
    kind: "Research",
    role: "Systems engineering",
    group: "other",
    stack: ["DYNA4", "YOLOv8", "Python", "ROS2", "MATLAB", "Simulink"],
    summary:
      "Sponsored graduation work with Swift Act: auto-parking, weather-degraded vision with YOLOv8, and emergency braking inside the DYNA4 simulator.",
    problem:
      "Parking and perception needed a safe simulated ground before any hardware test, especially in poor weather.",
    built: [
      "Auto-parking behavior in DYNA4",
      "YOLOv8-based vision path for degraded conditions",
      "Emergency braking study for safety",
    ],
    frontend: [
      "This is engineering research, not a UI product. It sits here to show range beyond the browser.",
    ],
  },
];

export const frontendProjects = projects.filter((project) => project.group === "frontend");
export const otherProjects = projects.filter((project) => project.group === "other");

export const experience = [
  {
    company: "ThoughtCraft Egypt",
    role: "Front-End Developer",
    dates: "Sep 2025 — Present",
    location: "Cairo, Egypt",
    intro:
      "I build frontend for a healthcare platform used by clinical and admin teams — web and mobile, in the same product family.",
    areas: [
      {
        label: "Web UI",
        text: "I implement Patient, Practitioner, Nurse, and Admin screens in React and TypeScript: scheduling, reporting, workflows, and configurable master data.",
      },
      {
        label: "Interface systems",
        text: "I extend Material UI into reusable pieces — multi-level forms, validation, and MUI X Data Grid Premium for dense, filterable tables.",
      },
      {
        label: "Mobile and data",
        text: "I work on the React Native app, REST integrations, Redux Toolkit, role-based access, exports, WebSocket updates, and production UI fixes.",
      },
    ],
  },
  {
    company: "Exabyte",
    role: "Software Developer Intern",
    dates: "Jul 2025 — Aug 2025",
    location: "Cairo, Egypt",
    intro:
      "I contributed to Bevi, an internal platform that benchmarks performance for food and beverage outlets.",
    areas: [
      {
        label: "Frontend",
        text: "I built React, Vite, and Material UI views, including Excel export and simple data visualization for reports.",
      },
      {
        label: "Reporting",
        text: "I helped implement REST APIs and report modules used for menu-engineering analysis.",
      },
    ],
  },
  {
    company: "PharaonX",
    role: "Full-Stack Developer Intern",
    dates: "May 2025 — Jun 2025",
    location: "Cairo, Egypt",
    intro: "I customized real ERPNext / Frappe modules used by the company.",
    areas: [
      {
        label: "Interface",
        text: "I built a custom login page and LMS certification surfaces.",
      },
      {
        label: "Workflows",
        text: "I automated support ticketing and email flows with JavaScript, Python, and REST.",
      },
    ],
  },
] as const;

export const education = [
  {
    school: "Information Technology Institute (ITI), Cairo University",
    detail: "Intensive diploma in UI/UX Development — interface structure, visual systems, and how design becomes code.",
    dates: "Nov 2024 — Apr 2025",
  },
  {
    school: "Faculty of Engineering, Helwan University",
    detail: "Bachelor’s degree in Computer and Systems Engineering.",
    dates: "2019 — 2024",
  },
] as const;

export const pages = [
  { href: "/", label: "Home", blurb: "Introduction and selected work." },
  { href: "/work", label: "Work", blurb: "Selected frontend projects." },
  { href: "/experience", label: "Experience", blurb: "Roles and education." },
  { href: "/about", label: "About", blurb: "Approach and stack." },
  { href: "/contact", label: "Contact", blurb: "How to reach me." },
] as const;

export const skillGroups = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3 / SASS",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    label: "State and APIs",
    items: ["Redux Toolkit", "Context API", "REST APIs", "Axios", "WebSockets", "Firebase"],
  },
  {
    label: "Tools",
    items: ["Figma", "Git / GitHub", "Agile", "Vite"],
  },
] as const;
