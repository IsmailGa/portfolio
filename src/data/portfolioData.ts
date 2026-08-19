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
  role: "FRONTEND / FULL-STACK DEVELOPER",
  location: "Tashkent, Uzbekistan",
  timezone: "UTC+5",
  availability: "Open to Full-Time & Contract Roles",
  email: "gaismail777@gmail.com",
  phone: "+998 77 488 7875",
  github: "https://github.com/IsmailGa",
  linkedin: "https://linkedin.com/in/ismail-gayratov",
  telegram: "https://t.me/theiiisssaaa",
  telegramHandle: "@theiiisssaaa",

  summary: `Frontend-leaning full-stack developer with 2+ years of experience building customer-facing and internal applications for the fintech sector, including digital banking (DBO) platforms. Strong with Vue 3 / React / Next.js, TypeScript, and Node.js, with hands-on experience in unit/integration testing, Docker, and CI/CD. Comfortable working in Agile/Scrum teams across frontend, backend, and QA. Currently completing a Bachelor's degree in Information System Engineering. Fluent in English (C1) and open to full-time remote or contract roles.`,

  keyMetrics: [
    { label: "Fintech & Banking Systems", value: "2+ Years", sub: "Production experience" },
    { label: "Core Web Stack", value: "Vue 3 / React / TS", sub: "Node.js / Vitest" },
    { label: "Engineering GPA", value: "3.61 / 5.0", sub: "KIUT Applied Informatics" },
    { label: "English Proficiency", value: "C1 Advanced", sub: "Fluent technical & spoken" },
  ],

  experiences: [
    {
      id: "trustbank",
      role: "Frontend Developer",
      company: "Trustbank",
      location: "Tashkent, Uzbekistan",
      category: "Fintech / Digital Banking",
      period: "Oct 2025 – Jun 2026",
      current: false,
      description: [
        "Built customer-facing business logic for a digital banking platform and developed and maintained the internal admin panel using Vue 3 and Vuetify.",
        "Identified and fixed bugs and refactored existing code to improve system performance, scalability, and maintainability, making onboarding easier for new engineers.",
        "Introduced unit and integration testing with Vitest to raise release stability and reduce regressions.",
        "Provided technical support to customers and performed rapid root-cause analysis of production issues.",
        "Collaborated with backend, QA, and design in an Agile/Scrum workflow to ship features aligned with business goals."
      ],
      tags: ["Vue 3", "Vuetify", "TypeScript", "Vitest", "Docker", "Pinia", "REST API"]
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
        "Developed client-facing business logic for the digital banking systems (DBO) of Multibank and Trustbank, and designed and maintained the internal admin panel (Vue.js, Vuetify, Docker).",
        "Proactively identified and resolved bugs; refactored code to improve performance, scalability, and new-developer onboarding.",
        "Delivered technical support to clients with fast troubleshooting and issue resolution.",
        "Worked closely with backend developers and QA engineers under Agile/Scrum methodology to meet shared release goals."
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
        { name: "BEM", featured: false }
      ]
    },
    {
      title: "Backend",
      code: "BE",
      skills: [
        { name: "Node.js", featured: true },
        { name: "Express.js", featured: false },
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
      title: "ORM",
      code: "ORM",
      skills: [
        { name: "TypeORM", featured: true },
        { name: "Drizzle", featured: true },
        { name: "Pydantic", featured: false }
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
        { name: "Vitest (unit & integration testing)", featured: true }
      ]
    },
    {
      title: "DevOps / Tools",
      code: "DEVOPS",
      skills: [
        { name: "Docker", featured: true },
        { name: "Nginx", featured: false },
        { name: "Apache", featured: false }
      ]
    },
    {
      title: "CMS / CRM",
      code: "CMS",
      skills: [
        { name: "WordPress", featured: false },
        { name: "amoCRM", featured: false }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      degree: "Bachelor of Information System Engineering",
      institution: "Kimyo International University in Tashkent",
      department: "School of Applied Informatics",
      period: "Sep 2023 – May 2027 (expected)",
      score: "GPA: 3.61 / 5.0",
      status: "In Progress"
    },
    {
      degree: "Secondary Education",
      institution: "School No. 10 named after Pushkin",
      department: "Tashkent, Uzbekistan",
      period: "2023",
      status: "Completed"
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
    },
    {
      name: "Korean",
      level: "A1 Beginner",
      percentage: 22,
      description: "Basic grammar & vocabulary"
    }
  ] as LanguageItem[],

  tickerItems: [
    "OPEN TO REMOTE WORK",
    "FLUENT ENGLISH C1",
    "VUE 3 & REACT",
    "NEXT.JS & TYPESCRIPT",
    "FINTECH & DIGITAL BANKING (DBO)",
    "VITEST UNIT & INTEGRATION TESTING",
    "DRIZZLE & TYPEORM",
    "DOCKER & CI/CD",
    "NODE.JS & POSTGRESQL",
    "TASHKENT UTC+5"
  ]
}
