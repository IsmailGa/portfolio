import { ref, computed } from 'vue'

export type Language = 'EN' | 'RU' | 'UZ'

const savedLang = (typeof window !== 'undefined' ? localStorage.getItem('user_lang') : null) as Language | null
export const currentLang = ref<Language>(savedLang || 'EN')

export const setLanguage = (lang: Language) => {
  currentLang.value = lang
  if (typeof window !== 'undefined') {
    localStorage.setItem('user_lang', lang)
  }
}

export const translations = {
  EN: {
    nav: {
      systems: 'Systems',
      experience: 'Experience',
      capabilities: 'Capabilities',
      about: 'About',
      contact: 'Contact',
      resume: 'RESUME',
      telegram: 'TELEGRAM',
      downloadPdf: 'Download Resume PDF',
      viewDossier: 'View Resume Dossier'
    },
    hero: {
      statusAvailable: 'Available for Full-time & Remote Roles',
      location: 'Tashkent (UTC+5)',
      role: 'Frontend / Full-Stack Developer',
      subRole: 'Fintech & DBO Platforms',
      pitch: 'Building high-performance client interfaces and internal operations portals for digital banking platforms. Strong with Vue 3, React, Next.js, TypeScript, and Node.js, backed by rigorous Vitest testing suites and Docker deployment.',
      downloadResume: 'DOWNLOAD RESUME (PDF)',
      viewDossier: 'VIEW DOSSIER',
      telegram: 'TELEGRAM',
      synthTitle: 'SYNTH PULSE CONSOLE',
      synthPadsNote: 'Interactive Pads (Click to test audio)',
      fintechExp: 'FINTECH EXP',
      degreeGpa: 'DEGREE GPA',
      englishLevel: 'ENGLISH',
      years: '2+ Years',
      c1Level: 'C1 Fluent'
    },
    ticker: [
      'OPEN TO REMOTE WORK',
      'FLUENT ENGLISH C1',
      'VUE 3 & REACT',
      'NEXT.JS & TYPESCRIPT',
      'FINTECH & DIGITAL BANKING (DBO)',
      'VITEST UNIT & INTEGRATION TESTING',
      'DRIZZLE & TYPEORM',
      'DOCKER & CI/CD',
      'NODE.JS & POSTGRESQL',
      'TASHKENT UTC+5'
    ],
    systems: {
      eyebrow: 'Selected Production Systems',
      titleMain: 'Digital banking &',
      titleAccent: 'fintech architecture.',
      desc: 'Engineered client interfaces and internal operations portals for licensed digital banking platforms, with focus on zero-regression test coverage and high runtime performance.',
      tabTrustbank: 'Trustbank Digital Banking (DBO)',
      tabMulticard: 'Multicard Payment Processing',
      trustbankSubtitle: 'Fintech / Digital Banking Platform',
      trustbankTitle: 'Trustbank DBO & Admin',
      trustbankPeriod: 'Tashkent, Uzbekistan · Oct 2025 – Jun 2026',
      trustbankSummary: 'Built customer-facing business logic for digital banking and maintained internal admin portals using Vue 3 and Vuetify in an Agile Scrum workflow.',
      multicardSubtitle: 'Payment Gateways & Networks',
      multicardTitle: 'Multicard Payment System',
      multicardPeriod: 'Tashkent, Uzbekistan · Jul 2025 – Sep 2025',
      multicardSummary: 'Delivered client-facing payment transaction logic for Multibank and Trustbank DBO networks and maintained containerized admin tools.',
      scopeHeader: 'Engineering Scope & Achievements',
      trustbankBullets: [
        'Built customer-facing business logic for a digital banking platform and developed and maintained the internal admin panel using Vue 3 and Vuetify.',
        'Identified and fixed bugs and refactored existing code to improve system performance, scalability, and maintainability, making onboarding easier for new engineers.',
        'Introduced unit and integration testing with Vitest to raise release stability and reduce regressions.',
        'Provided technical support to customers and performed rapid root-cause analysis of production issues.',
        'Collaborated with backend, QA, and design in an Agile/Scrum workflow to ship features aligned with business goals.'
      ],
      multicardBullets: [
        'Developed client-facing business logic for the digital banking systems (DBO) of Multibank and Trustbank, and designed and maintained the internal admin panel (Vue.js, Vuetify, Docker).',
        'Proactively identified and resolved bugs; refactored code to improve performance, scalability, and new-developer onboarding.',
        'Delivered technical support to clients with fast troubleshooting and issue resolution.',
        'Worked closely with backend developers and QA engineers under Agile/Scrum methodology to meet shared release goals.'
      ],
      metricTest: 'Vitest Coverage',
      metricArch: 'Vue 3 + Pinia',
      metricEnv: 'Docker Containers',
      metricMethod: 'Agile / Scrum'
    },
    experience: {
      eyebrow: 'Career History',
      titleMain: 'Experience &',
      titleAccent: 'production roles.',
      desc: 'A progressive track record delivering customer-facing financial platforms, internal management portals, and e-commerce applications.',
      items: [
        {
          id: 'trustbank',
          role: 'Frontend Developer',
          company: 'Trustbank',
          location: 'Tashkent, Uzbekistan',
          category: 'Fintech / Digital Banking',
          period: 'Oct 2025 – Jun 2026',
          description: [
            'Built customer-facing business logic for a digital banking platform and developed and maintained the internal admin panel using Vue 3 and Vuetify.',
            'Identified and fixed bugs and refactored existing code to improve system performance, scalability, and maintainability, making onboarding easier for new engineers.',
            'Introduced unit and integration testing with Vitest to raise release stability and reduce regressions.',
            'Provided technical support to customers and performed rapid root-cause analysis of production issues.',
            'Collaborated with backend, QA, and design in an Agile/Scrum workflow to ship features aligned with business goals.'
          ],
          tags: ['Vue 3', 'Vuetify', 'TypeScript', 'Vitest', 'Docker', 'Pinia', 'REST API']
        },
        {
          id: 'multicard',
          role: 'Frontend Developer',
          company: 'Multicard Payment',
          location: 'Tashkent, Uzbekistan',
          category: 'Payments / Fintech',
          period: 'Jul 2025 – Sep 2025',
          description: [
            'Developed client-facing business logic for the digital banking systems (DBO) of Multibank and Trustbank, and designed and maintained the internal admin panel (Vue.js, Vuetify, Docker).',
            'Proactively identified and resolved bugs; refactored code to improve performance, scalability, and new-developer onboarding.',
            'Delivered technical support to clients with fast troubleshooting and issue resolution.',
            'Worked closely with backend developers and QA engineers under Agile/Scrum methodology to meet shared release goals.'
          ],
          tags: ['Vue.js', 'Vuetify', 'Docker', 'JavaScript', 'Fintech DBO', 'Agile / Scrum']
        },
        {
          id: 'anor-auto',
          role: 'Full-Stack Developer',
          company: 'Anor Auto Zapchasti',
          location: 'Tashkent, Uzbekistan',
          category: 'Automotive / E-commerce',
          period: 'Sep 2023 – Apr 2024',
          description: [
            'Built a corporate website from scratch with React.js, with a strong focus on responsive, mobile-first design.',
            'Implemented multi-page interfaces with React Router and integrated them with external APIs.',
            'Improved application performance through image optimization, data caching, and efficient state management.'
          ],
          tags: ['React.js', 'React Router', 'REST API', 'State Management', 'Performance']
        },
        {
          id: 'realsoft',
          role: 'Frontend Developer (Internship)',
          company: 'Realsoft',
          location: 'Tashkent, Uzbekistan',
          category: 'IT / Software Development',
          period: 'Jun 2022 – Dec 2022',
          description: [
            'Developed web applications and websites as part of an internship program, gaining foundational experience in frontend development.'
          ],
          tags: ['HTML5', 'CSS3 / BEM', 'JavaScript', 'Git', 'Responsive Web']
        }
      ]
    },
    capabilities: {
      eyebrow: 'Technical Capabilities',
      titleMain: 'Core stack &',
      titleAccent: 'engineering tools.',
      desc: 'A hands-on production toolkit spanning reactive UI frameworks, ORM & state layers, unit testing, and relational databases.',
      allModules: 'All Modules',
      itemsCount: 'items',
      prodReady: 'Production Ready',
      verified: 'Verified'
    },
    about: {
      eyebrow: 'Engineering Philosophy',
      titleMain: 'Architecture &',
      titleAccent: 'core values.',
      summary: `Frontend-leaning full-stack developer with 2+ years of experience building customer-facing and internal applications for the fintech sector, including digital banking (DBO) platforms. Strong with Vue 3 / React / Next.js, TypeScript, and Node.js, with hands-on experience in unit/integration testing, Docker, and CI/CD. Comfortable working in Agile/Scrum teams across frontend, backend, and QA. Currently completing a Bachelor's degree in Information System Engineering. Fluent in English (C1) and open to full-time remote or contract roles.`,
      quote: 'Building software that scales reliably under load.',
      degreeLabel: 'Academic Degree:',
      englishLabel: 'English Proficiency:',
      specializationLabel: 'Specialization:',
      specializationValue: 'Fintech / DBO Platforms',
      highlights: [
        {
          title: 'Fintech & Banking Systems',
          desc: 'Deep domain experience in banking business logic, multi-role admin panels (Trustbank & Multibank), payment gateway flows, and compliance-grade interfaces.'
        },
        {
          title: 'Modern Vue 3 & React Architecture',
          desc: 'Expertise with Composition API, TypeScript, Pinia/Zustand, Next.js, and Vuetify, engineered for clean modularity and 60 FPS runtime performance.'
        },
        {
          title: 'Test-Driven Reliability',
          desc: 'Proactive test-driven approach with unit & integration test coverage in Vitest, minimizing production regressions and speeding up release velocity.'
        },
        {
          title: 'Containerization & CI/CD',
          desc: 'Hands-on delivery with Docker, GitLab CI/CD, Nginx, and cloud virtualized environments, ensuring smooth staging-to-production pipelines.'
        }
      ]
    },
    education: {
      eyebrow: 'Academic & Linguistic Background',
      titleMain: 'Education &',
      titleAccent: 'languages.',
      degreesTitle: 'Degrees & Education',
      languagesTitle: 'Language Fluency',
      internationalBadge: 'International Readiness:',
      internationalDesc: 'English C1 verified for technical documentation, daily standups, and cross-border Scrum.',
      inProgress: 'In Progress',
      completed: 'Completed',
      items: [
        {
          degree: 'Bachelor of Information System Engineering',
          institution: 'Kimyo International University in Tashkent',
          department: 'School of Applied Informatics',
          period: 'Sep 2023 – May 2027 (expected)',
          score: 'GPA: 3.61 / 5.0',
          status: 'In Progress'
        },
        {
          degree: 'Secondary Education',
          institution: 'School No. 10 named after Pushkin',
          department: 'Tashkent, Uzbekistan',
          period: '2023',
          status: 'Completed'
        }
      ],
      languagesList: [
        { name: 'Russian', level: 'Native', percentage: 100, description: 'Fluent native speaker' },
        { name: 'English', level: 'C1 Advanced', percentage: 88, description: 'Fluent spoken & technical communication' },
        { name: 'Korean', level: 'A1 Beginner', percentage: 22, description: 'Basic grammar & vocabulary' }
      ]
    },
    contact: {
      eyebrow: 'Direct Inquiries & Collaboration',
      titleMain: 'Have a fintech product that needs a',
      titleAccent: 'high-craft frontend?',
      desc: 'Currently open to full-time engineering positions, contract development, and technical consulting.',
      tashkentTime: 'Tashkent Time:',
      copyright: '© 2026 · Frontend & Full-Stack Engineer · Built in Tashkent.',
      designMotif: 'Design Motif:'
    },
    modal: {
      fileName: 'Ismail_Gayratov_Resume.pdf',
      dossierSub: 'Verified Candidate Dossier · 2026 Edition',
      downloadPdf: 'Download PDF',
      copyText: 'Copy',
      copied: 'Copied',
      print: 'Print',
      summary: '// SUMMARY',
      experience: '// EXPERIENCE',
      skills: '// SKILLS & TOOLS',
      education: '// EDUCATION',
      languages: '// LANGUAGES'
    }
  },

  RU: {
    nav: {
      systems: 'Системы',
      experience: 'Опыт',
      capabilities: 'Стек',
      about: 'Обо мне',
      contact: 'Контакты',
      resume: 'РЕЗЮМЕ',
      telegram: 'ТЕЛЕГРАМ',
      downloadPdf: 'Скачать резюме PDF',
      viewDossier: 'Открыть резюме'
    },
    hero: {
      statusAvailable: 'Открыт для Full-time и Remote позиций',
      location: 'Ташкент (UTC+5)',
      role: 'Frontend / Full-Stack Разработчик',
      subRole: 'Финтех и ДБО Платформы',
      pitch: 'Разработка высоконагруженных клиентских интерфейсов и внутренних панелей управления для систем цифрового банкинга. Экспертиза в Vue 3, React, Next.js, TypeScript и Node.js, подтвержденная тестами Vitest и Docker-контейнеризацией.',
      downloadResume: 'СКАЧАТЬ РЕЗЮМЕ (PDF)',
      viewDossier: 'ОТКРЫТЬ ДОСЬЕ',
      telegram: 'ТЕЛЕГРАМ',
      synthTitle: 'СИНТЕЗАТОР PULSE CONSOLE',
      synthPadsNote: 'Интерактивные пэды (кликните для звука)',
      fintechExp: 'ОПЫТ В ФИНТЕХЕ',
      degreeGpa: 'СРЕДНИЙ БАЛЛ',
      englishLevel: 'АНГЛИЙСКИЙ',
      years: '2+ Года',
      c1Level: 'C1 Свободный'
    },
    ticker: [
      'ОТКРЫТ К УДАЛЕННОЙ РАБОТЕ',
      'СВОБОДНЫЙ АНГЛИЙСКИЙ C1',
      'VUE 3 & REACT',
      'NEXT.JS & TYPESCRIPT',
      'ФИНТЕХ И ЦИФРОВОЙ БАНКИНГ (ДБО)',
      'VITEST UNIT И ИНТЕГРАЦИОННЫЕ ТЕСТЫ',
      'DRIZZLE & TYPEORM',
      'DOCKER И CI/CD',
      'NODE.JS И POSTGRESQL',
      'ТАШКЕНТ UTC+5'
    ],
    systems: {
      eyebrow: 'Ключевые Продакшн Системы',
      titleMain: 'Цифровой банкинг и',
      titleAccent: 'финтех архитектура.',
      desc: 'Проектирование клиентских интерфейсов и внутренних административных порталов для банковских платформ с фокусом на стабильность, Vitest-тесты и высокую производительность.',
      tabTrustbank: 'ДБО Платформа Trustbank',
      tabMulticard: 'Платежная Система Multicard',
      trustbankSubtitle: 'Финтех / Цифровой Банкинг',
      trustbankTitle: 'Trustbank ДБО и Админ-панель',
      trustbankPeriod: 'Ташкент, Узбекистан · Окт 2025 – Июн 2026',
      trustbankSummary: 'Разработка клиентской бизнес-логики цифрового банкинга и поддержка внутренних админ-панелей на Vue 3 и Vuetify в Agile/Scrum команде.',
      multicardSubtitle: 'Платежные Шлюзы и Сети',
      multicardTitle: 'Multicard Payment System',
      multicardPeriod: 'Ташкент, Узбекистан · Июл 2025 – Сен 2025',
      multicardSummary: 'Реализация платежной логики для систем ДБО банков Multibank и Trustbank, поддержка Docker-инфраструктуры.',
      scopeHeader: 'Задачи и Достижения',
      trustbankBullets: [
        'Разрабатывал клиентскую бизнес-логику для цифрового банкинга, проектировал и поддерживал внутреннюю админ-панель на Vue 3 и Vuetify.',
        'Выявлял и исправлял баги, проводил рефакторинг кодовой базы для повышения производительности, масштабируемости и ускорения онбординга новых инженеров.',
        'Внедрил модульное и интеграционное тестирование с Vitest, повысив стабильность релизов и сократив число регрессий.',
        'Оказывал техподдержку клиентам и проводил оперативный root-cause анализ инцидентов в продакшне.',
        'Сотрудничал с командами бэкенда, QA и дизайна в Scrum-спринтах для своевременного выпуска банковского функционала.'
      ],
      multicardBullets: [
        'Разрабатывал клиентскую бизнес-логику для систем ДБО банков Multibank и Trustbank, проектировал и поддерживал внутреннюю админ-панель (Vue.js, Vuetify, Docker).',
        'Проактивно устранял баги и рефакторил код для улучшения производительности и ускорения адаптации новых разработчиков.',
        'Обеспечивал техническую поддержку клиентов с быстрым устранением неполадок.',
        'Работал в тесной связке с бэкенд-разработчиками и QA-инженерами по методологии Agile/Scrum.'
      ],
      metricTest: 'Покрытие Vitest',
      metricArch: 'Vue 3 + Pinia',
      metricEnv: 'Docker Среда',
      metricMethod: 'Agile / Scrum'
    },
    experience: {
      eyebrow: 'Карьерный Трек',
      titleMain: 'Опыт работы и',
      titleAccent: 'продакшн роли.',
      desc: 'Подтвержденный опыт создания клиентских финансовых платформ, систем управления и веб-приложений.',
      items: [
        {
          id: 'trustbank',
          role: 'Frontend Разработчик',
          company: 'Trustbank',
          location: 'Ташкент, Узбекистан',
          category: 'Финтех / Цифровой Банкинг',
          period: 'Окт 2025 – Июн 2026',
          description: [
            'Разрабатывал клиентскую бизнес-логику для цифрового банкинга, проектировал и поддерживал внутреннюю админ-панель на Vue 3 и Vuetify.',
            'Выявлял и исправлял баги, проводил рефакторинг кодовой базы для повышения производительности, масштабируемости и ускорения онбординга новых инженеров.',
            'Внедрил модульное и интеграционное тестирование с Vitest, повысив стабильность релизов и сократив число регрессий.',
            'Оказывал техподдержку клиентам и проводил оперативный root-cause анализ инцидентов в продакшне.',
            'Сотрудничал с командами бэкенда, QA и дизайна в Scrum-спринтах для своевременного выпуска фичей.'
          ],
          tags: ['Vue 3', 'Vuetify', 'TypeScript', 'Vitest', 'Docker', 'Pinia', 'REST API']
        },
        {
          id: 'multicard',
          role: 'Frontend Разработчик',
          company: 'Multicard Payment',
          location: 'Ташкент, Узбекистан',
          category: 'Платежи / Финтех',
          period: 'Июл 2025 – Сен 2025',
          description: [
            'Разрабатывал клиентскую бизнес-логику для систем ДБО банков Multibank и Trustbank, проектировал и поддерживал внутреннюю админ-панель (Vue.js, Vuetify, Docker).',
            'Проактивно устранял баги и рефакторил код для улучшения производительности и ускорения адаптации новых разработчиков.',
            'Обеспечивал техническую поддержку клиентов с быстрым устранением неполадок.',
            'Работал в тесной связке с бэкенд-разработчиками и QA-инженерами по методологии Agile/Scrum.'
          ],
          tags: ['Vue.js', 'Vuetify', 'Docker', 'JavaScript', 'Fintech DBO', 'Agile / Scrum']
        },
        {
          id: 'anor-auto',
          role: 'Full-Stack Разработчик',
          company: 'Anor Auto Zapchasti',
          location: 'Ташкент, Узбекистан',
          category: 'Автобизнес / E-commerce',
          period: 'Сен 2023 – Апр 2024',
          description: [
            'Создал корпоративный сайт с нуля на React.js с акцентом на адаптивный, mobile-first дизайн.',
            'Реализовал многостраничный интерфейс с React Router и интеграцией внешних REST API.',
            'Оптимизировал производительность приложения через сжатие ассетов, кэширование и эффективный state management.'
          ],
          tags: ['React.js', 'React Router', 'REST API', 'State Management', 'Performance']
        },
        {
          id: 'realsoft',
          role: 'Frontend Разработчик (Стажировка)',
          company: 'Realsoft',
          location: 'Ташкент, Узбекистан',
          category: 'IT / Разработка ПО',
          period: 'Июн 2022 – Дек 2022',
          description: [
            'Разрабатывал веб-приложения и сайты в рамках программы стажировки, получил базовый практический опыт в коммерческом фронтенде.'
          ],
          tags: ['HTML5', 'CSS3 / BEM', 'JavaScript', 'Git', 'Responsive Web']
        }
      ]
    },
    capabilities: {
      eyebrow: 'Технический Арсенал',
      titleMain: 'Стек технологий и',
      titleAccent: 'инженерные инструменты.',
      desc: 'Практический стек разработки: реактивные фреймворки, ORM, интеграционное тестирование, контейнеризация и базы данных.',
      allModules: 'Все Модули',
      itemsCount: 'технологий',
      prodReady: 'Продакшн Стек',
      verified: 'Проверено'
    },
    about: {
      eyebrow: 'Инженерная Философия',
      titleMain: 'Архитектура и',
      titleAccent: 'ключевые ценности.',
      summary: `Frontend-разработчик с уклоном в full-stack с 2+ годами опыта создания клиентских и внутренних приложений в финтех-секторе, включая платформы цифрового банкинга (ДБО). Экспертиза в Vue 3 / React / Next.js, TypeScript и Node.js с практическим опытом тестирования на Vitest, Docker и CI/CD. Опыт работы в Agile/Scrum командах вместе с бэкендом и QA. Заканчивает бакалавриат по направлению «Инженерия информационных систем». Свободный английский (C1), открыт к предложениям о full-time и контрактной работе.`,
      quote: 'Создание надежных веб-систем, выдерживающих высокие нагрузки.',
      degreeLabel: 'Высшее образование:',
      englishLabel: 'Уровень английского:',
      specializationLabel: 'Специализация:',
      specializationValue: 'Финтех / ДБО Платформы',
      highlights: [
        {
          title: 'Финтех и Банковские Системы',
          desc: 'Глубокий опыт реализации банковской логики, ролевых админ-панелей (Trustbank, Multibank) и безопасных платежных сценариев.'
        },
        {
          title: 'Современный стек Vue 3 и React',
          desc: 'Экспертиза в Composition API, TypeScript, Pinia/Zustand, Next.js и Vuetify с упором на чистую модульность и 60 FPS.'
        },
        {
          title: 'Надежность и Тестирование с Vitest',
          desc: 'Проактивный подход с юнит и интеграционными тестами на Vitest, исключающий регрессии в релизных циклах.'
        },
        {
          title: 'Контейнеризация и CI/CD',
          desc: 'Практический опыт с Docker, GitLab CI/CD, Nginx и виртуализацией, обеспечивающий надежный деплой.'
        }
      ]
    },
    education: {
      eyebrow: 'Образование и Языки',
      titleMain: 'Академическая база и',
      titleAccent: 'языковая мобильность.',
      degreesTitle: 'Дипломы и Образование',
      languagesTitle: 'Владение Языками',
      internationalBadge: 'Международный уровень:',
      internationalDesc: 'Английский C1 верифицирован для ведения технической документации, митингов и работы в международных Scrum-командах.',
      inProgress: 'В процессе',
      completed: 'Завершено',
      items: [
        {
          degree: 'Бакалавр Инженерии Информационных Систем',
          institution: 'Международный университет Кимё в Ташкенте (KIUT)',
          department: 'Факультет прикладной информатики',
          period: 'Сен 2023 – Май 2027 (ожидается)',
          score: 'GPA: 3.61 / 5.0',
          status: 'В процессе'
        },
        {
          degree: 'Среднее Образование',
          institution: 'Школа №10 им. А.С. Пушкина',
          department: 'Ташкент, Узбекистан',
          period: '2023',
          status: 'Завершено'
        }
      ],
      languagesList: [
        { name: 'Русский', level: 'Родной', percentage: 100, description: 'Свободный носитель языка' },
        { name: 'Английский', level: 'C1 Advanced', percentage: 88, description: 'Свободное техническое и разговорное общение' },
        { name: 'Корейский', level: 'A1 Beginner', percentage: 22, description: 'Базовая грамматика и лексика' }
      ]
    },
    contact: {
      eyebrow: 'Связь и Сотрудничество',
      titleMain: 'Ищете инженера для',
      titleAccent: 'финтех-продукта?',
      desc: 'Открыт к предложениям о постоянной работе (Full-time), контрактной разработке и техническому консультированию.',
      tashkentTime: 'Время в Ташкенте:',
      copyright: '© 2026 · Frontend & Full-Stack Инженер · Сделано в Ташкенте.',
      designMotif: 'Стиль:'
    },
    modal: {
      fileName: 'Ismail_Gayratov_Resume.pdf',
      dossierSub: 'Верифицированное досье кандидата · Редакция 2026',
      downloadPdf: 'Скачать PDF',
      copyText: 'Копировать',
      copied: 'Скопировано',
      print: 'Печать',
      summary: '// О СЕБЕ',
      experience: '// ОПЫТ РАБОТЫ',
      skills: '// НАВЫКИ И СТЕК',
      education: '// ОБРАЗОВАНИЕ',
      languages: '// ЯЗЫКИ'
    }
  },

  UZ: {
    nav: {
      systems: 'Tizimlar',
      experience: 'Tajriba',
      capabilities: 'Texnologiyalar',
      about: 'Men haqimda',
      contact: 'Aloqa',
      resume: 'REZYUME',
      telegram: 'TELEGRAM',
      downloadPdf: 'Rezyume PDF yuklash',
      viewDossier: 'Rezyumeni ko\'rish'
    },
    hero: {
      statusAvailable: 'Full-time va Masofaviy ishga tayyorman',
      location: 'Toshkent (UTC+5)',
      role: 'Frontend / Full-Stack Dasturchi',
      subRole: 'Fintech va DBO Tizimlari',
      pitch: 'Raqamli bank platformalari uchun yuqori unumdorlikka ega mijoz interfeyslari va boshqaruv panellarini ishlab chiqish. Vue 3, React, Next.js, TypeScript va Node.js bo\'yicha chuqur tajriba, Vitest testlari va Docker infratuzilmasi.',
      downloadResume: 'REZYUMENI YUKLASH (PDF)',
      viewDossier: 'REZYUMENI KO\'RISH',
      telegram: 'TELEGRAM',
      synthTitle: 'SYNTH PULSE CONSOLE',
      synthPadsNote: 'Interaktiv tugmalar (ovozni sinash uchun bosing)',
      fintechExp: 'FINTECH TAJRIBA',
      degreeGpa: 'O\'RTACHA BALL',
      englishLevel: 'INGLIZ TILI',
      years: '2+ Yil',
      c1Level: 'C1 Ravon'
    },
    ticker: [
      'MASOFAVIY ISHGA TAYYOR',
      'RAVON INGLIZ TILI C1',
      'VUE 3 & REACT',
      'NEXT.JS & TYPESCRIPT',
      'FINTECH VA RAQAMLI BANKING (DBO)',
      'VITEST UNIT VA INTEGRATSION TESTLAR',
      'DRIZZLE & TYPEORM',
      'DOCKER VA CI/CD',
      'NODE.JS VA POSTGRESQL',
      'TOSHKENT UTC+5'
    ],
    systems: {
      eyebrow: 'Ishlab Chiqilgan Asosiy Tizimlar',
      titleMain: 'Raqamli banking va',
      titleAccent: 'fintech arxitekturasi.',
      desc: 'Litsenziyalangan bank platformalari uchun mijozlar interfeysi va ichki boshqaruv panellari, Vitest testlari va yuqori tezlik.',
      tabTrustbank: 'Trustbank DBO Platformasi',
      tabMulticard: 'Multicard To\'lov Tizimi',
      trustbankSubtitle: 'Fintech / Raqamli Banking',
      trustbankTitle: 'Trustbank DBO va Admin Tizimi',
      trustbankPeriod: 'Toshkent, O\'zbekiston · Okt 2025 – Iyun 2026',
      trustbankSummary: 'Vue 3 va Vuetify yordamida raqamli banking mijoz mantiqi va ichki admin panellarini ishlab chiqish hamda qo\'llab-quvvatlash.',
      multicardSubtitle: 'To\'lov Shlyuzlari va Tarmog\'i',
      multicardTitle: 'Multicard To\'lov Tizimi',
      multicardPeriod: 'Toshkent, O\'zbekiston · Iyul 2025 – Sen 2025',
      multicardSummary: 'Multibank va Trustbank DBO tizimlari uchun to\'lov logikasini ishlab chiqish, Docker muhitida admin panellarni yuritish.',
      scopeHeader: 'Vazifalar va Natijalar',
      trustbankBullets: [
        'Raqamli banking uchun mijozlar biznes-mantiqini yaratish, Vue 3 va Vuetify asosida ichki admin panelni ishlab chiqish va qo\'llab-quvvatlash.',
        'Tizim unumdorligi va kengayishini oshirish uchun mavjud kodni refaktoring qilish, yangi dasturchilar integratsiyasini tezlashtirish.',
        'Vitest yordamida unit va integratsion testlarni joriy qilish, relizlar barqarorligini oshirish.',
        'Backend, QA va dizayn jamoalari bilan Agile/Scrum asosida sifatli bank funksionalini yetkazib berish.'
      ],
      multicardBullets: [
        'Multibank va Trustbank DBO tizimlari uchun tranzaksiyalar va to\'lov logikasini yaratish.',
        'Vue.js, Vuetify va Docker yordamida ichki boshqaruv interfeyslarini ishlab chiqish.',
        'Mijozlarga tezkor texnik yordam ko\'rsatish va yuzaga kelgan muammolarni bartaraf etish.'
      ],
      metricTest: 'Vitest Qamrovi',
      metricArch: 'Vue 3 + Pinia',
      metricEnv: 'Docker Muhiti',
      metricMethod: 'Agile / Scrum'
    },
    experience: {
      eyebrow: 'Ish Faoliyati',
      titleMain: 'Tajriba va',
      titleAccent: 'ishlagan loyihalarim.',
      desc: 'Mijozlarga mo\'ljallangan moliyaviy platformalar, boshqaruv tizimlari va e-commerce loyihalarida amaliy tajriba.',
      items: [
        {
          id: 'trustbank',
          role: 'Frontend Dasturchi',
          company: 'Trustbank',
          location: 'Tashkent, O\'zbekiston',
          category: 'Fintech / Raqamli Banking',
          period: 'Okt 2025 – Iyun 2026',
          description: [
            'Raqamli bank platformasi uchun mijoz biznes mantiqini yaratish, Vue 3 va Vuetify yordamida ichki admin panelni ishlab chiqish va qo\'llab-quvvatlash.',
            'Tizim unumdorligi va kengayishini yaxshilash uchun kodni refaktoring qilish, yangi muhandislar integratsiyasini osonlashtirish.',
            'Relizlar barqarorligini oshirish va regressiyalarni kamaytirish uchun Vitest bilan unit va integratsion testlarni joriy qilish.',
            'Mijozlarga tezkor texnik yordam ko\'rsatish va yuzaga kelgan nosozliklarni tahlil qilish.',
            'Biznes maqsadlariga mos funksiyalarni Agile/Scrum asosida backend, QA va dizayn jamoalari bilan birga yetkazib berish.'
          ],
          tags: ['Vue 3', 'Vuetify', 'TypeScript', 'Vitest', 'Docker', 'Pinia', 'REST API']
        },
        {
          id: 'multicard',
          role: 'Frontend Dasturchi',
          company: 'Multicard Payment',
          location: 'Tashkent, O\'zbekiston',
          category: 'To\'lovlar / Fintech',
          period: 'Iyul 2025 – Sen 2025',
          description: [
            'Multibank va Trustbank DBO tizimlari uchun mijozlar biznes mantiqini ishlab chiqish, admin panelni yaratish (Vue.js, Vuetify, Docker).',
            'Xatoliklarni proaktiv aniqlash va bartaraf etish, dasturchilar qo\'shilishini tezlashtirish.',
            'Mijozlarga tezkor nosozliklarni bartaraf etish bo\'yicha texnik yordam ko\'rsatish.',
            'Agile/Scrum metodologiyasi asosida backend dasturchilar va QA muhandislari bilan yaqindan ishlash.'
          ],
          tags: ['Vue.js', 'Vuetify', 'Docker', 'JavaScript', 'Fintech DBO', 'Agile / Scrum']
        },
        {
          id: 'anor-auto',
          role: 'Full-Stack Dasturchi',
          company: 'Anor Auto Zapchasti',
          location: 'Tashkent, O\'zbekiston',
          category: 'Avtomobil / E-commerce',
          period: 'Sen 2023 – Apr 2024',
          description: [
            'React.js asosida noldan korporativ veb-sayt yaratish, responsive va mobile-first dizaynga alohida e\'tibor qaratish.',
            'React Router yordamida ko\'p sahifali interfeyslarni amalga oshirish va tashqi API\'lar bilan integratsiya qilish.',
            'Tasvirlarni optimallashtirish, kesh va samarali holat boshqaruvi orqali ilova tezligini oshirish.'
          ],
          tags: ['React.js', 'React Router', 'REST API', 'State Management', 'Performance']
        },
        {
          id: 'realsoft',
          role: 'Frontend Dasturchi (Stajirovka)',
          company: 'Realsoft',
          location: 'Tashkent, O\'zbekiston',
          category: 'IT / Dasturiy Ta\'minot',
          period: 'Iyun 2022 – Dek 2022',
          description: [
            'Amaliyot dasturi doirasida veb-ilovalar va saytlarni ishlab chiqish, frontend bo\'yicha asosiy amaliy tajribaga ega bo\'lish.'
          ],
          tags: ['HTML5', 'CSS3 / BEM', 'JavaScript', 'Git', 'Responsive Web']
        }
      ]
    },
    capabilities: {
      eyebrow: 'Texnologik Arsenal',
      titleMain: 'Asosiy stek va',
      titleAccent: 'muhandislik vositalari.',
      desc: 'Reaktiv freymvorklar, ORM, integratsion testlar, konteynerlash va ma\'lumotlar bazalarini qamrab olgan amaliy vositalar.',
      allModules: 'Barcha Modullar',
      itemsCount: 'texnologiya',
      prodReady: 'Ishlab Chiqarish Steki',
      verified: 'Tasdiqlangan'
    },
    about: {
      eyebrow: 'Muhandislik Falsafasi',
      titleMain: 'Arxitektura va',
      titleAccent: 'asosiy qadriyatlar.',
      summary: `Fintech va raqamli bank (DBO) tizimlarida 2+ yillik tajribaga ega frontend/full-stack dasturchi. Vue 3 / React / Next.js, TypeScript va Node.js bo\'yicha chuqur amaliy bilim, Vitest testlari, Docker va CI/CD tajribasi. Axborot tizimlari muhandisligi yo\'nalishida bakalavr bosqichini yakunlamoqda. Ingliz tili C1 (ravon), full-time va masofaviy ish takliflariga tayyor.`,
      quote: 'Yuqori yuklamalarda ishonchli va barqaror ishlaydigan tizimlar yaratish.',
      degreeLabel: 'Oliy Ma\'lumot:',
      englishLabel: 'Ingliz Tili:',
      specializationLabel: 'Mutaxassislik:',
      specializationValue: 'Fintech / DBO Tizimlari',
      highlights: [
        {
          title: 'Fintech va Bank Tizimlari',
          desc: 'Bank biznes mantiqi, ko\'p rolli admin panellar (Trustbank, Multibank) va xavfsiz to\'lov integratsiyalari bo\'yicha chuqur tajriba.'
        },
        {
          title: 'Zamonaviy Vue 3 va React Steki',
          desc: 'Composition API, TypeScript, Pinia/Zustand, Next.js va Vuetify yordamida toza va 60 FPS tezlikda ishlovchi arxitektura.'
        },
        {
          title: 'Vitest Bilan Ishonchli Testlash',
          desc: 'Unit va integratsion testlar orqali relizlardagi xatoliklarni oldini olish va barqarorlikni ta\'minlash.'
        },
        {
          title: 'Konteynerlash va CI/CD',
          desc: 'Docker, GitLab CI/CD, Nginx va VMware bilan ishlash, doimiy yetkazib berish jarayonini sozlash.'
        }
      ]
    },
    education: {
      eyebrow: 'Ta\'lim va Tillar',
      titleMain: 'Akademik poydevor va',
      titleAccent: 'tillar bilish darajasi.',
      degreesTitle: 'Diplomlar va Ta\'lim',
      languagesTitle: 'Tillar Bilish Darajasi',
      internationalBadge: 'Xalqaro Tayyorgarlik:',
      internationalDesc: 'Ingliz tili C1 darajasi texnik hujjatlar, xalqaro uchrashuvlar va Scrum jamoalarida ishlash uchun tasdiqlangan.',
      inProgress: 'Jarayonda',
      completed: 'Tugallangan',
      items: [
        {
          degree: 'Axborot Tizimlari Muhandisligi Bakalavri',
          institution: 'Toshkent shahridagi Kimyo Xalqaro Universiteti (KIUT)',
          department: 'Amaliy Informatika fakulteti',
          period: 'Sen 2023 – May 2027 (kutilmoqda)',
          score: 'GPA: 3.61 / 5.0',
          status: 'Jarayonda'
        },
        {
          degree: 'O\'rta Ta\'lim',
          institution: 'A.S. Pushkin nomidagi 10-sonli maktab',
          department: 'Toshkent, O\'zbekiston',
          period: '2023',
          status: 'Tugallangan'
        }
      ],
      languagesList: [
        { name: 'Rus tili', level: 'Ona tili', percentage: 100, description: 'Mukammal ravon muloqot' },
        { name: 'Ingliz tili', level: 'C1 Advanced', percentage: 88, description: 'Erkin texnik va og\'zaki muloqot' },
        { name: 'Koreys tili', level: 'A1 Beginner', percentage: 22, description: 'Boshlang\'ich grammatika va so\'zlar' }
      ]
    },
    contact: {
      eyebrow: 'Bog\'lanish va Hamkorlik',
      titleMain: 'Fintech loyihangiz uchun kuchli',
      titleAccent: 'frontend dasturchi kerakmi?',
      desc: 'Full-time ish takliflari, shartnoma asosidagi loyihalar va texnik konsultatsiyalar uchun ochiqman.',
      tashkentTime: 'Toshkent Vaqti:',
      copyright: '© 2026 · Frontend & Full-Stack Dasturchi · Toshkentda yaratilgan.',
      designMotif: 'Uslub:'
    },
    modal: {
      fileName: 'Ismail_Gayratov_Resume.pdf',
      dossierSub: 'Tasdiqlangan nomzod rezyumesi · 2026 Tahriri',
      downloadPdf: 'PDF yuklab olish',
      copyText: 'Nusxalash',
      copied: 'Nusxalandi',
      print: 'Chop etish',
      summary: '// MEN HAQIMDA',
      experience: '// ISH TAJRIBASI',
      skills: '// KO\'NIKMALAR VA STEK',
      education: '// TA\'LIM',
      languages: '// TILLAR'
    }
  }
}

export const t = computed(() => translations[currentLang.value])
