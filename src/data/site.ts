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

export type ProjectScreen = {
  caption: string;
  light: string;
  dark: string;
  frame?: "phone" | "web" | "wide";
  group?: string;
};

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
  apkUrl?: string;
  screens?: ProjectScreen[];
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
    liveUrl: "https://quizzer-platform.vercel.app",
    githubUrl: "https://github.com/RawanMagdyAhmed/Quizzer",
    screens: [
      {
        caption: "Home — hero and hiring pitch",
        light: "/projects/quizzer/home-light.png",
        dark: "/projects/quizzer/home-dark.png",
        frame: "web",
        group: "Guest",
      },
      {
        caption: "Categories — browse skill tracks",
        light: "/projects/quizzer/categories-light.png",
        dark: "/projects/quizzer/categories-dark.png",
        frame: "web",
        group: "Guest",
      },
      {
        caption: "Quiz — question flow for a candidate",
        light: "/projects/quizzer/quiz-light.png",
        dark: "/projects/quizzer/quiz-dark.png",
        frame: "web",
        group: "Guest",
      },
      {
        caption: "Organization — dashboard overview",
        light: "/projects/quizzer/organization-dashboard-light.png",
        dark: "/projects/quizzer/organization-dashboard-dark.png",
        frame: "web",
        group: "Organization",
      },
      {
        caption: "Organization — users and scores",
        light: "/projects/quizzer/organization-users-light.png",
        dark: "/projects/quizzer/organization-users-dark.png",
        frame: "web",
        group: "Organization",
      },
      {
        caption: "Organization — quiz management",
        light: "/projects/quizzer/organization-quizzes-light.png",
        dark: "/projects/quizzer/organization-quizzes-dark.png",
        frame: "web",
        group: "Organization",
      },
      {
        caption: "Admin — insights and charts",
        light: "/projects/quizzer/admin-dashboard-light.png",
        dark: "/projects/quizzer/admin-dashboard-dark.png",
        frame: "web",
        group: "Admin",
      },
      {
        caption: "Admin — users",
        light: "/projects/quizzer/admin-users-light.png",
        dark: "/projects/quizzer/admin-users-dark.png",
        frame: "web",
        group: "Admin",
      },
      {
        caption: "Admin — organizations",
        light: "/projects/quizzer/admin-organizations-light.png",
        dark: "/projects/quizzer/admin-organizations-dark.png",
        frame: "web",
        group: "Admin",
      },
    ],
  },
  {
    slug: "ecommerce",
    number: "02",
    title: "Velora",
    year: "2026",
    kind: "React web",
    role: "Frontend",
    group: "frontend",
    stack: [
      "React.js",
      "JavaScript (ES6+)",
      "React Router",
      "Context API",
      "CSS3",
      "Vite",
      "DummyJSON",
    ],
    summary:
      "A burgundy-themed storefront you can click through end to end: browse and filter the catalog, open a product, save a wishlist, check out, and see the order again. Catalog data comes from DummyJSON; cart, accounts, and orders stay in the browser. No real payments.",
    problem:
      "Show a complete shop journey in the browser without a custom backend or payment provider.",
    built: [
      "Shop, category, and search with filters and sort",
      "Product pages with gallery, ratings, reviews, and stock-aware cart",
      "Wishlist, recently viewed, and mock coupons",
      "Demo login/register and order history in localStorage",
      "Deployed to Vercel as a Vite SPA",
    ],
    frontend: [
      "Burgundy visual system (not the portfolio terracotta, not teal)",
      "Shared cart/wishlist/auth context",
      "Checkout shipping and payment as themed choice cards",
      "Responsive header, shop grid, and product layout",
    ],
    liveUrl: "https://velora-ecomerceapp.vercel.app/",
    githubUrl: "https://github.com/RawanMagdyAhmed/Velora-EcomerceApp",
    screens: [
      {
        caption: "Home — hero and category rails",
        light: "/projects/velora/home.png",
        dark: "/projects/velora/home.png",
        frame: "web",
      },
      {
        caption: "Shop — filters and catalog grid",
        light: "/projects/velora/shop.png",
        dark: "/projects/velora/shop.png",
        frame: "web",
      },
      {
        caption: "Product — gallery, price, and add to cart",
        light: "/projects/velora/product.png",
        dark: "/projects/velora/product.png",
        frame: "web",
      },
      {
        caption: "Cart — line items and total",
        light: "/projects/velora/cart.png",
        dark: "/projects/velora/cart.png",
        frame: "web",
      },
      {
        caption: "Checkout — shipping, payment, and summary",
        light: "/projects/velora/checkout.png",
        dark: "/projects/velora/checkout.png",
        frame: "web",
      },
    ],
  },
  {
    slug: "expense-tracker",
    number: "03",
    title: "Cashnote",
    year: "2026",
    kind: "React Native · Expo",
    role: "Mobile frontend",
    group: "frontend",
    stack: [
      "React Native",
      "Expo",
      "React Navigation",
      "Context API",
      "AsyncStorage",
    ],
    summary:
      "A personal expense app for phone and web. Log a spend with a category, search and filter the full list, and see the month at a glance — one Expo codebase, no backend.",
    problem:
      "Everyday spending is easy to lose track of. I wanted a small app that still feels like a product: this week, everything you logged, and a monthly picture, without standing up a server.",
    built: [
      "Three tabs: This week, All spending, and Insights",
      "Add, edit, and delete entries (amount, date, description, category)",
      "Search and category filters that update the running total",
      "Insights for the current month: total, category bars, and top spend",
      "Local save with AsyncStorage so data survives a reload",
      "Teal UI, list/press motion, and an Expo web export for a live demo",
      "Android APK via EAS so it can be installed on a physical device",
    ],
    frontend: [
      "Mobile-first layout, category chips, and card motion",
      "Form validation and empty states",
      "Simple View-based category bars that also run on web",
      "Shared expense state through Context",
    ],
    screens: [
      {
        caption: "This week — recent spends and a running total",
        light: "/projects/cashnote/this-week.png",
        dark: "/projects/cashnote/this-week.png",
        frame: "phone",
      },
      {
        caption: "Insights — month total, category bars, top spend",
        light: "/projects/cashnote/insights.png",
        dark: "/projects/cashnote/insights.png",
        frame: "phone",
      },
      {
        caption: "All spending — search, category chips, filtered total",
        light: "/projects/cashnote/all-filtered.png",
        dark: "/projects/cashnote/all-filtered.png",
        frame: "phone",
      },
      {
        caption: "Edit entry — amount, date, description, categories",
        light: "/projects/cashnote/edit-entry.png",
        dark: "/projects/cashnote/edit-entry.png",
        frame: "phone",
      },
    ],
  },
  {
    slug: "auto-parking",
    number: "04",
    title: "Auto-parking and car vision",
    year: "2024",
    kind: "Graduation research",
    role: "YOLOv8 · ROS2",
    group: "other",
    stack: ["DYNA4", "YOLOv8", "Python", "ROS2", "MATLAB", "Simulink"],
    summary:
      "Sponsored graduation work with Swift Act: auto-parking, weather-degraded vision with YOLOv8, and emergency braking inside the DYNA4 simulator. My focus was the vision and ROS2 path — detection under rain and snow, then brake decisions from those detections.",
    problem:
      "Parking and perception needed a safe simulated ground before any hardware test, especially in poor weather.",
    built: [
      "Auto-parking behavior in DYNA4 (team)",
      "YOLOv8 detection on DYNA4 camera frames in clear, rain, and snow",
      "ROS2 nodes wiring camera → inference → emergency brake signal",
      "Distance-based braking when a detected object crossed a safety threshold",
    ],
    frontend: [
      "This is engineering research, not a UI product. It sits here to show range beyond the browser.",
      "My slice: YOLOv8 training and inference, ROS2 graph, and the emergency-brake path.",
    ],
    screens: [
      {
        caption: "System architecture — sensing through control, with YOLOv8 in perception",
        light: "/projects/auto-parking/system-architecture.png",
        dark: "/projects/auto-parking/system-architecture.png",
        frame: "wide",
        group: "Overview",
      },
      {
        caption: "Object detection — multi-class YOLOv8 in a DYNA4 city scene",
        light: "/projects/auto-parking/object-detection.jpg",
        dark: "/projects/auto-parking/object-detection.jpg",
        frame: "wide",
        group: "Vision",
      },
      {
        caption: "YOLOv8 + ROS2 — detection driving the emergency-brake node",
        light: "/projects/auto-parking/yolo-ros-brake.png",
        dark: "/projects/auto-parking/yolo-ros-brake.png",
        frame: "wide",
        group: "Vision",
      },
      {
        caption: "Rain — person detected, brake signal when distance is under threshold",
        light: "/projects/auto-parking/yolo-rain-brake.jpg",
        dark: "/projects/auto-parking/yolo-rain-brake.jpg",
        frame: "wide",
        group: "Vision",
      },
      {
        caption: "Snow — annotated detections beside the DYNA4 live view",
        light: "/projects/auto-parking/yolo-snow-dyna.jpg",
        dark: "/projects/auto-parking/yolo-snow-dyna.jpg",
        frame: "wide",
        group: "Vision",
      },
      {
        caption: "ROS2 graph — camera to YOLOv8 inference to brake signal",
        light: "/projects/auto-parking/ros-yolo-graph.jpg",
        dark: "/projects/auto-parking/ros-yolo-graph.jpg",
        frame: "wide",
        group: "ROS",
      },
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
