export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  category: string
  period: string
  current?: boolean
  description: string[]
  tags: string[]
}

export interface SkillCategory {
  title: string
  code: string
  skills: { name: string; featured?: boolean }[]
}

export interface EducationItem {
  degree: string
  institution: string
  department: string
  period: string
  score?: string
  status?: string
}

export interface LanguageItem {
  name: string
  level: string
  percentage: number
  description: string
}

export const portfolioData = {
  name: "ISMAIL GAYRATOV",
  role: "FRONTEND DEVELOPER",
  location: "Tashkent, Uzbekistan",
  timezone: "UTC+5",
  availability: "Open to Full-Time Remote Roles",
  email: "gaismail777@gmail.com",
  phone: "+998 77 488 7875",
  github: "https://github.com/IsmailGa",
  linkedin: "https://linkedin.com/in/ismail-gayratov",
  telegram: "https://t.me/theiiisssaaa",
  telegramHandle: "@theiiisssaaa",

  summary: `Frontend developer with 2 years of experience in fintech, building a digital banking platform used by 2,000+ business clients. Strong in Vue 3, React / Next.js and TypeScript, with practical Node.js experience. Introduced Feature-Sliced Design and automated testing into a production codebase, cutting build time by 70% and reducing client complaints by 35%. Seeking a full-time remote role.`,

  keyMetrics: [
    { label: "Fintech & Banking Systems", value: "2+ Years", sub: "Production experience" },
    { label: "Core Web Stack", value: "Vue 3 / React / TS", sub: "Node.js / Vitest" },
    { label: "Build Time Reduction", value: "-70%", sub: "5 min to 1.5 min at Trustbank" },
    { label: "English Proficiency", value: "C1 Advanced", sub: "Fluent technical & spoken" },
  ],

  experiences: [
    {
      id: "trustbank",
      role: "Frontend Developer",
      company: "Trustbank",
      location: "Tashkent, Uzbekistan",
      category: "Fintech / Digital Banking",
      period: "Oct 2025 – Present",
      current: true,
      description: [
        "Developed client-facing features and the internal admin panel for a digital banking platform serving 2,000+ business customers (Vue 3, Vuetify, TypeScript).",
        "Restructured the project with Feature-Sliced Design architecture, making the codebase easier to navigate and speeding up onboarding of new developers.",
        "Removed legacy and dead code, reducing the codebase by ~20% and cutting build time from 5 min to 1.5 min.",
        "Introduced automated testing with Vitest: 20 unit and integration tests on critical flows, reducing regressions after releases.",
        "Performed root-cause analysis of production incidents; client complaints dropped by 35% over a year.",
        "Worked in an Agile/Scrum team with backend, QA and design."
      ],
      tags: ["Vue 3", "Vuetify", "TypeScript", "Vitest", "Docker", "Feature-Sliced Design"]
    },
    {
      id: "multicard",
      role: "Frontend Developer",
      company: "Multicard Payment",
      location: "Tashkent, Uzbekistan",
      category: "Payments / Fintech",
      period: "Jul 2025 – Sep 2025",
      current: false,
      description: [
        "Refactored the payments module of the DBO systems of Multibank and Trustbank.",
        "Maintained the internal admin panel (Vue 3, Vuetify, Docker).",
        "Fixed 25 production bugs and refactored 2–3 modules to improve maintainability."
      ],
      tags: ["Vue.js", "Vuetify", "Docker", "JavaScript", "Fintech DBO", "Agile / Scrum"]
    },
    {
      id: "anor-auto",
      role: "Full-Stack Developer",
      company: "Anor Auto Zapchasti",
      location: "Tashkent, Uzbekistan",
      category: "Automotive / E-commerce",
      period: "Sep 2023 – Apr 2024",
      current: false,
      description: [
        "Built a corporate website from scratch with React.js, with a strong focus on responsive, mobile-first design.",
        "Implemented multi-page interfaces with React Router and integrated them with external APIs.",
        "Improved application performance through image optimization, data caching, and efficient state management."
      ],
      tags: ["React.js", "React Router", "REST API", "State Management", "Performance"]
    },
    {
      id: "realsoft",
      role: "Frontend Developer (Internship)",
      company: "Realsoft",
      location: "Tashkent, Uzbekistan",
      category: "IT / Software Development",
      period: "Jun 2022 – Dec 2022",
      current: false,
      description: [
        "Developed web applications and websites as part of an internship program, gaining foundational experience in frontend development."
      ],
      tags: ["HTML5", "CSS3 / BEM", "JavaScript", "Git", "Responsive Web"]
    }
  ] as ExperienceItem[],

  skillCategories: [
    {
      title: "Languages",
      code: "LANG",
      skills: [
        { name: "JavaScript", featured: true },
        { name: "TypeScript", featured: true }
      ]
    },
    {
      title: "Frontend",
      code: "FE",
      skills: [
        { name: "React", featured: true },
        { name: "Next.js", featured: true },
        { name: "Vue 3", featured: true },
        { name: "Vuetify", featured: false },
        { name: "HTML5", featured: false },
        { name: "CSS3", featured: false },
        { name: "Feature-Sliced Design", featured: true }
      ]
    },
    {
      title: "Backend",
      code: "BE",
      skills: [
        { name: "Node.js", featured: true },
        { name: "Express", featured: false },
        { name: "FastAPI", featured: false },
        { name: "REST API", featured: true }
      ]
    },
    {
      title: "State Management",
      code: "STATE",
      skills: [
        { name: "Zustand", featured: true },
        { name: "Pinia", featured: true }
      ]
    },
    {
      title: "Databases",
      code: "DB",
      skills: [
        { name: "PostgreSQL", featured: true },
        { name: "MySQL", featured: false },
        { name: "MongoDB", featured: false }
      ]
    },
    {
      title: "Testing",
      code: "TEST",
      skills: [
        { name: "Vitest", featured: true }
      ]
    },
    {
      title: "DevOps / Tools",
      code: "DEVOPS",
      skills: [
        { name: "Docker", featured: true },
        { name: "Git / GitHub", featured: false },
        { name: "GitLab CI", featured: true },
        { name: "Nginx", featured: false }
      ]
    },
  ] as SkillCategory[],

  education: [
    {
      degree: "B.Sc. Information System Engineering",
      institution: "Kimyo International University in Tashkent",
      department: "School of Applied Informatics",
      period: "2023 – 2027 (expected)",
      status: "In Progress"
    }
  ] as EducationItem[],

  languages: [
    {
      name: "Russian",
      level: "Native",
      percentage: 100,
      description: "Fluent native speaker"
    },
    {
      name: "English",
      level: "C1 Advanced",
      percentage: 88,
      description: "Fluent spoken & technical communication"
    }
  ] as LanguageItem[],

  tickerItems: [
    "OPEN TO REMOTE WORK",
    "FLUENT ENGLISH C1",
    "VUE 3 & REACT",
    "NEXT.JS & TYPESCRIPT",
    "FINTECH & DIGITAL BANKING (DBO)",
    "VITEST UNIT & INTEGRATION TESTING",
    "FEATURE-SLICED DESIGN",
    "DOCKER & CI/CD",
    "NODE.JS & POSTGRESQL",
    "TASHKENT UTC+5"
  ]
}
