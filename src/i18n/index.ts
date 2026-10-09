import { ref, computed } from 'vue'

export type Language = 'EN' | 'RU' | 'UZ'

const savedLang = (typeof window !== 'undefined' ? localStorage.getItem('user_lang') : null) as Language | null
export const currentLang = ref<Language>(savedLang || 'RU')

export const setLanguage = (lang: Language) => {
  currentLang.value = lang
  if (typeof window !== 'undefined') {
    localStorage.setItem('user_lang', lang)
  }
}

export const translations = {
  RU: {
    nav: {
      work: 'Опыт и Проекты',
      capabilities: 'Стек',
      about: 'Обо мне',
      education: 'Образование',
      contact: 'Контакты',
      resume: 'РЕЗЮМЕ',
      telegram: 'ТЕЛЕГРАМ',
      downloadPdf: 'Скачать резюме PDF',
      viewDossier: 'Открыть досье'
    },
    hero: {
      statusAvailable: 'Открыт для Full-time и Remote позиций',
      location: 'Ташкент (UTC+5)',
      role: 'Frontend / Full-Stack Разработчик',
      subRole: 'Финтех и ДБО Платформы',
      pitch: 'Разрабатываю высокопроизводительные клиентские интерфейсы и внутренние панели управления для банковских систем. Экспертиза в Vue 3, React, Next.js, TypeScript и Node.js, подкрепленная тестами Vitest и Docker.',
      downloadResume: 'СКАЧАТЬ РЕЗЮМЕ (PDF)',
      viewDossier: 'ОТКРЫТЬ ДОСЬЕ',
      telegram: 'ТЕЛЕГРАМ',
      terminalTabDbo: 'ДБО Терминал',
      terminalTabVitest: 'Vitest Тесты',
      terminalTabArch: 'Архитектура',
      dboBalanceLabel: 'Доступный остаток счета',
      dboSecured: 'Защищено 2FA',
      dboTransactionsTitle: 'Последние операции ДБО',
      dboRateUsd: 'USD / UZS Курс',
      testPassed: 'Пройдено',
      testDuration: 'мс',
      fintechExp: 'ОПЫТ В ФИНТЕХЕ',
      degreeGpa: 'СБОРКА',
      englishLevel: 'АНГЛИЙСКИЙ',
      years: '2+ Года',
      c1Level: 'C1 Свободный'
    },
    ticker: [
      'ОТКРЫТ К УДАЛЕННОЙ РАБОТЕ',
      'СВОБОДНЫЙ АНГЛИЙСКИЙ C1',
      'VUE 3 (COMPOSITION API)',
      'REACT И NEXT.JS',
      'TYPESCRIPT & NODE.JS',
      'ФИНТЕХ И ЦИФРОВОЙ БАНКИНГ (ДБО)',
      'VITEST UNIT И ИНТЕГРАЦИОННЫЕ ТЕСТЫ',
      'FEATURE-SLICED DESIGN',
      'DOCKER И CI/CD',
      'ТАШКЕНТ UTC+5'
    ],
    work: {
      eyebrow: 'Продакшн Опыт и Проекты',
      titleMain: 'Опыт работы и',
      titleAccent: 'банковские системы.',
      desc: 'Подтвержденный трек разработки клиентских финансовых платформ, систем цифрового банкинга (ДБО) и внутренних порталов администрирования.',
      selectCompany: 'Выберите компанию для просмотра деталей:',
      achievementsLabel: 'Ключевые результаты и задачи:',
      techStackLabel: 'Используемый стек:',
      items: [
        {
          id: 'trustbank',
          role: 'Frontend Разработчик',
          company: 'Trustbank',
          location: 'Ташкент, Узбекистан',
          category: 'Финтех / Цифровой Банкинг',
          period: 'Окт 2025 – Наст. время',
          badge: 'Флагманский проект',
          metrics: [
            { label: 'Клиенты', value: '2 000+ бизнес' },
            { label: 'Сборка', value: '5 → 1,5 мин' },
            { label: 'Тесты', value: '20 Vitest' },
            { label: 'Жалобы', value: '−35%' }
          ],
          description: [
            'Разрабатывал клиентские функции и внутреннюю админ-панель цифровой банковской платформы для 2 000+ бизнес-клиентов (Vue 3, Vuetify, TypeScript).',
            'Перестроил проект по архитектуре Feature-Sliced Design: код стал понятнее, а онбординг новых разработчиков — быстрее.',
            'Удалил устаревший и мёртвый код (~20% кодовой базы) и сократил время сборки с 5 до 1,5 минут.',
            'Внедрил автотесты на Vitest: 20 unit- и интеграционных тестов на критичных сценариях, меньше регрессий после релизов.',
            'Проводил root-cause анализ инцидентов в продакшне: жалобы клиентов снизились на 35% за год.',
            'Работал в Agile/Scrum команде с бэкендом, QA и дизайном.'
          ],
          tags: ['Vue 3', 'Vuetify', 'TypeScript', 'Vitest', 'Docker', 'REST API']
        },
        {
          id: 'multicard',
          role: 'Frontend Разработчик',
          company: 'Multicard Payment',
          location: 'Ташкент, Узбекистан',
          category: 'Платежи / Финтех',
          period: 'Июл 2025 – Сен 2025',
          badge: 'Платежные шлюзы',
          metrics: [
            { label: 'Профиль', value: 'ДБО Платежи' },
            { label: 'Баги', value: '25 исправлено' },
            { label: 'Клиенты', value: 'Multibank & Trust' },
            { label: 'Стек', value: 'Vue 3 + Docker' }
          ],
          description: [
            'Провёл рефакторинг платёжного модуля систем ДБО Multibank и Trustbank.',
            'Поддерживал внутреннюю админ-панель (Vue 3, Vuetify, Docker).',
            'Исправил 25 багов в продакшне и отрефакторил 2–3 модуля для улучшения поддерживаемости.'
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
          badge: 'E-commerce',
          metrics: [
            { label: 'Стек', value: 'React + Router' },
            { label: 'Архитектура', value: 'Mobile-First' },
            { label: 'Интеграция', value: 'REST API' },
            { label: 'Оптимизация', value: 'Asset Cache' }
          ],
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
          badge: 'Старт карьеры',
          metrics: [
            { label: 'Направление', value: 'Web Apps' },
            { label: 'Основа', value: 'JS / HTML / CSS' },
            { label: 'Система', value: 'Git Workflow' },
            { label: 'Верстка', value: 'BEM Standard' }
          ],
          description: [
            'Разрабатывал веб-приложения и сайты в рамках программы стажировки, получил базовый практический опыт в коммерческом фронтенде.',
            'Освоил командную работу с Git, верстку по методологии БЭМ и кроссбраузерную адаптивность.'
          ],
          tags: ['HTML5', 'CSS3 / BEM', 'JavaScript', 'Git', 'Responsive Web']
        }
      ]
    },
    capabilities: {
      eyebrow: 'Технический Арсенал',
      titleMain: 'Стек технологий и',
      titleAccent: 'инженерные инструменты.',
      desc: 'Структурированный арсенал разработки: клиентские фреймворки, бэкенд и ORM, тестирование и инфраструктура.',
      columns: {
        frontend: 'Frontend & UI Core',
        backend: 'Backend & Data Layers',
        devops: 'Testing & Infrastructure'
      }
    },
    about: {
      eyebrow: 'Инженерная Философия',
      titleMain: 'Архитектура и',
      titleAccent: 'ключевые ценности.',
      summary: `Frontend-разработчик с 2 годами опыта в финтехе: разрабатываю платформу цифрового банкинга для 2 000+ бизнес-клиентов. Уверенно работаю с Vue 3, React / Next.js и TypeScript, есть практический опыт с Node.js. Внедрил Feature-Sliced Design и автотесты в продакшн-проект: время сборки сократилось на 70%, жалобы клиентов — на 35%. Ищу full-time удалённую позицию.`,
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
          desc: 'Практический опыт с Docker, GitLab CI/CD, Nginx, обеспечивающий надежный деплой.'
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
          status: 'В процессе'
        }
      ],
      languagesList: [
        { name: 'Русский', level: 'Родной', percentage: 100, description: 'Свободный носитель языка' },
        { name: 'Английский', level: 'C1 Advanced', percentage: 88, description: 'Свободное техническое и разговорное общение' }
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

  EN: {
    nav: {
      work: 'Work & Projects',
      capabilities: 'Stack',
      about: 'About',
      education: 'Education',
      contact: 'Contact',
      resume: 'RESUME',
      telegram: 'TELEGRAM',
      downloadPdf: 'Download Resume PDF',
      viewDossier: 'View Dossier'
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
      terminalTabDbo: 'DBO Terminal',
      terminalTabVitest: 'Vitest Tests',
      terminalTabArch: 'Architecture',
      dboBalanceLabel: 'Available Account Balance',
      dboSecured: '2FA Secured',
      dboTransactionsTitle: 'Recent DBO Transactions',
      dboRateUsd: 'USD / UZS Rate',
      testPassed: 'Passed',
      testDuration: 'ms',
      fintechExp: 'FINTECH EXP',
      degreeGpa: 'BUILD TIME',
      englishLevel: 'ENGLISH',
      years: '2+ Years',
      c1Level: 'C1 Fluent'
    },
    ticker: [
      'OPEN TO REMOTE WORK',
      'FLUENT ENGLISH C1',
      'VUE 3 (COMPOSITION API)',
      'REACT & NEXT.JS',
      'TYPESCRIPT & NODE.JS',
      'FINTECH & DIGITAL BANKING (DBO)',
      'VITEST UNIT & INTEGRATION TESTING',
      'FEATURE-SLICED DESIGN',
      'DOCKER & CI/CD',
      'TASHKENT UTC+5'
    ],
    work: {
      eyebrow: 'Production Track Record',
      titleMain: 'Work experience &',
      titleAccent: 'fintech systems.',
      desc: 'Proven delivery of customer-facing financial platforms, digital banking (DBO) platforms, and internal back-office administration portals.',
      selectCompany: 'Select a company to view case details:',
      achievementsLabel: 'Key Scope & Deliverables:',
      techStackLabel: 'Applied Tech Stack:',
      items: [
        {
          id: 'trustbank',
          role: 'Frontend Developer',
          company: 'Trustbank',
          location: 'Tashkent, Uzbekistan',
          category: 'Fintech / Digital Banking',
          period: 'Oct 2025 – Present',
          badge: 'Flagship System',
          metrics: [
            { label: 'Clients', value: '2,000+ Business' },
            { label: 'Build Time', value: '5 → 1.5 min' },
            { label: 'Tests', value: '20 Vitest' },
            { label: 'Complaints', value: '−35%' }
          ],
          description: [
            'Developed client-facing features and the internal admin panel for a digital banking platform serving 2,000+ business customers (Vue 3, Vuetify, TypeScript).',
            'Restructured the project with Feature-Sliced Design architecture, making the codebase easier to navigate and speeding up onboarding of new developers.',
            'Removed legacy and dead code, reducing the codebase by ~20% and cutting build time from 5 min to 1.5 min.',
            'Introduced automated testing with Vitest: 20 unit and integration tests on critical flows, reducing regressions after releases.',
            'Performed root-cause analysis of production incidents; client complaints dropped by 35% over a year.',
            'Worked in an Agile/Scrum team with backend, QA and design.'
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
          badge: 'Payment Network',
          metrics: [
            { label: 'Focus', value: 'DBO Payments' },
            { label: 'Bugs', value: '25 Fixed' },
            { label: 'Clients', value: 'Multibank & Trust' },
            { label: 'Stack', value: 'Vue 3 + Docker' }
          ],
          description: [
            'Refactored the payments module of the DBO systems of Multibank and Trustbank.',
            'Maintained the internal admin panel (Vue 3, Vuetify, Docker).',
            'Fixed 25 production bugs and refactored 2–3 modules to improve maintainability.'
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
          badge: 'E-commerce',
          metrics: [
            { label: 'Stack', value: 'React + Router' },
            { label: 'Architecture', value: 'Mobile-First' },
            { label: 'Integration', value: 'REST API' },
            { label: 'Optimization', value: 'Asset Cache' }
          ],
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
          badge: 'Career Foundation',
          metrics: [
            { label: 'Focus', value: 'Web Apps' },
            { label: 'Foundations', value: 'JS / HTML / CSS' },
            { label: 'Version Control', value: 'Git Workflow' },
            { label: 'Standards', value: 'BEM Standard' }
          ],
          description: [
            'Developed web applications and websites as part of an internship program, gaining foundational experience in frontend development.',
            'Practiced team Git workflows, BEM styling conventions, and cross-browser responsiveness.'
          ],
          tags: ['HTML5', 'CSS3 / BEM', 'JavaScript', 'Git', 'Responsive Web']
        }
      ]
    },
    capabilities: {
      eyebrow: 'Technical Capabilities',
      titleMain: 'Core stack &',
      titleAccent: 'engineering tools.',
      desc: 'Structured production arsenal: client frameworks, backend & ORM layers, testing suites, and containerized deployment.',
      columns: {
        frontend: 'Frontend & UI Core',
        backend: 'Backend & Data Layers',
        devops: 'Testing & Infrastructure'
      }
    },
    about: {
      eyebrow: 'Engineering Philosophy',
      titleMain: 'Architecture &',
      titleAccent: 'core values.',
      summary: `Frontend developer with 2 years of experience in fintech, building a digital banking platform used by 2,000+ business clients. Strong in Vue 3, React / Next.js and TypeScript, with practical Node.js experience. Introduced Feature-Sliced Design and automated testing into a production codebase, cutting build time by 70% and reducing client complaints by 35%. Seeking a full-time remote role.`,
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
          desc: 'Hands-on delivery with Docker, GitLab CI/CD, and Nginx, ensuring smooth staging-to-production pipelines.'
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
          status: 'In Progress'
        }
      ],
      languagesList: [
        { name: 'Russian', level: 'Native', percentage: 100, description: 'Fluent native speaker' },
        { name: 'English', level: 'C1 Advanced', percentage: 88, description: 'Fluent spoken & technical communication' }
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

  UZ: {
    nav: {
      work: 'Tajriba va Loyihalar',
      capabilities: 'Stek',
      about: 'Men haqimda',
      education: 'Ta\'lim',
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
      terminalTabDbo: 'DBO Terminal',
      terminalTabVitest: 'Vitest Testlar',
      terminalTabArch: 'Arxitektura',
      dboBalanceLabel: 'Hisobdagi mavjud mablag\'',
      dboSecured: '2FA Himoyalangan',
      dboTransactionsTitle: 'So\'nggi DBO operatsiyalari',
      dboRateUsd: 'USD / UZS Kursi',
      testPassed: 'Muvaffaqiyatli',
      testDuration: 'ms',
      fintechExp: 'FINTECH TAJRIBA',
      degreeGpa: 'BUILD VAQTI',
      englishLevel: 'INGLIZ TILI',
      years: '2+ Yil',
      c1Level: 'C1 Ravon'
    },
    ticker: [
      'MASOFAVIY ISHGA TAYYOR',
      'RAVON INGLIZ TILI C1',
      'VUE 3 (COMPOSITION API)',
      'REACT VA NEXT.JS',
      'TYPESCRIPT & NODE.JS',
      'FINTECH VA RAQAMLI BANKING (DBO)',
      'VITEST UNIT VA INTEGRATSION TESTLAR',
      'FEATURE-SLICED DESIGN',
      'DOCKER VA CI/CD',
      'TOSHKENT UTC+5'
    ],
    work: {
      eyebrow: 'Ish Faoliyati va Loyihalar',
      titleMain: 'Tajriba va',
      titleAccent: 'ishlagan bank tizimlarim.',
      desc: 'Mijozlarga mo\'ljallangan moliyaviy platformalar, raqamli banking (DBO) va boshqaruv panellarini ishlab chiqish bo\'yicha tasdiqlangan tajriba.',
      selectCompany: 'Kompaniyani tanlang:',
      achievementsLabel: 'Asosiy vazifalar va natijalar:',
      techStackLabel: 'Qo\'llanilgan texnologiyalar:',
      items: [
        {
          id: 'trustbank',
          role: 'Frontend Dasturchi',
          company: 'Trustbank',
          location: 'Toshkent, O\'zbekiston',
          category: 'Fintech / Raqamli Banking',
          period: 'Okt 2025 – Hozir',
          badge: 'Asosiy loyiha',
          metrics: [
            { label: 'Mijozlar', value: '2 000+ biznes' },
            { label: 'Build', value: '5 → 1,5 daq' },
            { label: 'Testlar', value: '20 Vitest' },
            { label: 'Shikoyatlar', value: '−35%' }
          ],
          description: [
            '2 000+ biznes mijozga xizmat ko\'rsatuvchi raqamli bank platformasi uchun mijoz funksiyalari va ichki admin panelni ishlab chiqish (Vue 3, Vuetify, TypeScript).',
            'Loyihani Feature-Sliced Design arxitekturasi bo\'yicha qayta tuzish: kod tushunarliroq bo\'ldi, yangi dasturchilar tezroq moslashadi.',
            'Eskirgan va keraksiz kodni olib tashlash (~20% kod bazasi), build vaqtini 5 daqiqadan 1,5 daqiqagacha qisqartirish.',
            'Vitest bilan avtotestlarni joriy qilish: muhim jarayonlar uchun 20 ta unit va integratsion test, relizlardan keyingi regressiyalar kamaydi.',
            'Productiondagi nosozliklarni root-cause tahlil qilish: bir yil davomida mijozlar shikoyatlari 35% ga kamaydi.',
            'Backend, QA va dizayn jamoalari bilan Agile/Scrum asosida ishlash.'
          ],
          tags: ['Vue 3', 'Vuetify', 'TypeScript', 'Vitest', 'Docker', 'Pinia', 'REST API']
        },
        {
          id: 'multicard',
          role: 'Frontend Dasturchi',
          company: 'Multicard Payment',
          location: 'Toshkent, O\'zbekiston',
          category: 'To\'lovlar / Fintech',
          period: 'Iyul 2025 – Sen 2025',
          badge: 'To\'lov tizimi',
          metrics: [
            { label: 'Yo\'nalish', value: 'DBO To\'lovlar' },
            { label: 'Xatolar', value: '25 ta tuzatildi' },
            { label: 'Mijozlar', value: 'Multibank & Trust' },
            { label: 'Stek', value: 'Vue 3 + Docker' }
          ],
          description: [
            'Multibank va Trustbank DBO tizimlarining to\'lov modulini refaktoring qilish.',
            'Ichki admin panelni qo\'llab-quvvatlash (Vue 3, Vuetify, Docker).',
            'Productionda 25 ta xatoni tuzatish va 2–3 modulni qayta ishlash.'
          ],
          tags: ['Vue.js', 'Vuetify', 'Docker', 'JavaScript', 'Fintech DBO', 'Agile / Scrum']
        },
        {
          id: 'anor-auto',
          role: 'Full-Stack Dasturchi',
          company: 'Anor Auto Zapchasti',
          location: 'Toshkent, O\'zbekiston',
          category: 'Avtomobil / E-commerce',
          period: 'Sen 2023 – Apr 2024',
          badge: 'E-commerce',
          metrics: [
            { label: 'Stek', value: 'React + Router' },
            { label: 'Arxitektura', value: 'Mobile-First' },
            { label: 'Integratsiya', value: 'REST API' },
            { label: 'Optimizatsiya', value: 'Asset Cache' }
          ],
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
          location: 'Toshkent, O\'zbekiston',
          category: 'IT / Dasturiy Ta\'minot',
          period: 'Iyun 2022 – Dek 2022',
          badge: 'Faoliyat boshlanishi',
          metrics: [
            { label: 'Yo\'nalish', value: 'Web Ilovalar' },
            { label: 'Baza', value: 'JS / HTML / CSS' },
            { label: 'Versiya', value: 'Git Workflow' },
            { label: 'Standart', value: 'BEM Metodologiya' }
          ],
          description: [
            'Amaliyot dasturi doirasida veb-ilovalar va saytlarni ishlab chiqish, frontend bo\'yicha asosiy amaliy tajribaga ega bo\'lish.',
            'Git bilan ishlash, BEM metodologiyasi va moslashuvchan veb dizayn amaliyotini o\'zlashtirish.'
          ],
          tags: ['HTML5', 'CSS3 / BEM', 'JavaScript', 'Git', 'Responsive Web']
        }
      ]
    },
    capabilities: {
      eyebrow: 'Texnologik Arsenal',
      titleMain: 'Asosiy stek va',
      titleAccent: 'muhandislik vositalari.',
      desc: 'Tuzilgan ishlab chiqarish vositalari: mijoz freymvorklari, backend va ORM, testlash va infratuzilma.',
      columns: {
        frontend: 'Frontend & UI Core',
        backend: 'Backend & Data Layers',
        devops: 'Testing & Infrastructure'
      }
    },
    about: {
      eyebrow: 'Muhandislik Falsafasi',
      titleMain: 'Arxitektura va',
      titleAccent: 'asosiy qadriyatlar.',
      summary: `Fintech sohasida 2 yillik tajribaga ega frontend dasturchi: 2 000+ biznes mijoz foydalanadigan raqamli bank platformasini ishlab chiqaman. Vue 3, React / Next.js va TypeScript bo\'yicha kuchli bilim, Node.js bilan amaliy tajriba. Production loyihaga Feature-Sliced Design va avtotestlarni joriy qilib, build vaqtini 70% ga, mijozlar shikoyatlarini 35% ga kamaytirdim. Full-time masofaviy ish izlayapman.`,
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
          desc: 'Docker, GitLab CI/CD, Nginx bilan ishlash, doimiy yetkazib berish jarayonini sozlash.'
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
          status: 'Jarayonda'
        }
      ],
      languagesList: [
        { name: 'Rus tili', level: 'Ona tili', percentage: 100, description: 'Mukammal ravon muloqot' },
        { name: 'Ingliz tili', level: 'C1 Advanced', percentage: 88, description: 'Erkin texnik va og\'zaki muloqot' }
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
