export default {
  meta: {
    title:
      'Lebenslauf - Alexandre Tozzini : Full-Stack-Entwickler in Brasilien',
    keywords: 'Brasilien, React, Ruby, Rails, Go, Oracle, PostgreSQL',
    description:
      'Alexandre Tozzini, Softwareentwickler in Brasilien. Spezialgebiete: Golang, Ruby on Rails, React, PL/SQL, PostgreSQL, Oracle.',
  },
  firstName: 'Alexandre',
  lastName: 'Tozzini',
  emailAddress: 'tozzini@proton.me',
  headline:
    'Ruby on Rails & Golang Entwickler | Full-Stack Software Engineer | Certified Scrum Master',
  summary: `
    Softwareentwickler mit über 10 Jahren Erfahrung in den Bereichen Bildung, Gesundheitswesen, Altersvorsorge und Immobilienverwaltung. Fundierte Erfahrung mit Ruby on Rails, Golang (Clean Architecture, DDD) und React.js sowie solider Datenbankexpertise (PostgreSQL, MySQL, Oracle PL/SQL, SQL Server). Erfahrung im Deployment und Management von Anwendungen auf AWS (EC2, RDS, Amplify, Lambda, CloudFront), mit Docker, GitHub, Scrum/Kanban, automatisierten Tests und Linux-Umgebungen im Tagesgeschäft. Technologe für Systemanalyse und -entwicklung, MBA in Big Data und Datenmanagement, und Certified ScrumMaster® (CSM®).<br /><br />
    Mein bevorzugter Stack: Ruby on Rails, Golang, Docker, ReactJS, Postgres.
  `,
  pictureUrl: '/img/me.jpg',
  dateOfBirth: '1985-04-06',
  mainAddress: 'Florianópolis, Santa Catarina, Brasilien',
  websites: [
    {
      type: 'Linkedin',
      url: 'https://www.linkedin.com/in/alexandre-tozzini/',
    },
  ],
  phoneNumbers: [
    {
      type: 'Persönlich',
      number: '+55 (48) 93618-4102',
    },
  ],
  imAccounts: [
    {
      type: 'Skype',
      name: 'alexandre.tozzini',
    },
  ],
  snsAccounts: [
    {
      name: 'Linkedin',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/alexandre-tozzini/',
    },
    {
      name: 'Github',
      icon: 'github',
      url: 'https://github.com/atozzini',
    },
  ],
  locations: [
    {
      name: 'Florianópolis',
      country: 'Brasilien',
      isCurrent: true,
    },
    {
      name: 'Mogi-Guaçu',
      country: 'Brasilien',
    },
  ],
  positions: [
    {
      title: 'Software Engineer | Full-Stack-Entwickler',
      keywords: [
        { name: 'Ruby on Rails' },
        { name: 'Docker' },
        { name: 'MySQL' },
        { name: 'Linux' },
        { name: 'Sidekiq' },
        { name: 'Prometheus' },
      ],
      summary: `
        Wartung und Weiterentwicklung eines Portfolios von 4 verbundenen Rails-Systemen für ein Unternehmen zur Verwaltung von Wohnanlagen.<br />
        Pflege von Rails-2-Altsystemen parallel zu neuen Rails-7-Funktionen, Infrastruktur und Monitoring.
      `,
      more: `
        <p>
          Pflegt ein Altsystem zur Verwaltung von Wohnanlagen (Rails 2 / Ruby 1.8.7) und entwickelt neue Funktionen in modernen Rails-7-Anwendungen mit Hintergrundjobs über Sidekiq.<br />
          Integriert Schnittstellen der Steuerbehörde für die elektronische Rechnungsstellung sowie externe ERP-, CRM- und HR/Payroll-Systeme über SOAP und OAuth2.<br />
          Administriert Linux-Server sowie Docker/Docker Compose in mehreren Umgebungen und verwaltet MySQL mit Zugriffskontrolle auf Netzwerkebene.<br />
          Überwacht die Infrastruktur mit Zabbix, Loki und Prometheus und löst kritische Vorfälle, darunter Kernel-Abstürze durch Instabilität des Netzwerkdateisystems auf Altservern.
        </p>
      `,
      startDate: '2025',
      endDate: 'Heute',
      isCurrent: true,
      company: 'Plathanus Software & Design',
      picture: 'logo-plathanus.png',
    },
    {
      title: 'IT Business Analyst | Softwareentwickler',
      keywords: [
        { name: 'Golang' },
        { name: 'Clean Architecture' },
        { name: 'DDD' },
        { name: 'Angular' },
        { name: 'Oracle PL/SQL' },
        { name: 'PostgreSQL' },
      ],
      summary: `
        Golang-APIs nach Clean Architecture und DDD sowie Angular-Webanwendungen für eine Pensionskasse.<br />
        Kritische PL/SQL-Lösungen auf Oracle und PostgreSQL für hochkritische Rentensysteme.
      `,
      more: `
        <p>
          Entwicklung von Golang-APIs nach Clean Architecture und Domain-Driven Design sowie von Webanwendungen mit Angular.<br />
          Implementierung von PL/SQL-Lösungen auf Oracle-Datenbanken und Einsatz von PostgreSQL für hochkritische Rentensysteme.<br />
          Containerisierung von Anwendungen mit Docker, Versionskontrolle mit Bitbucket und GitHub, Bearbeitung von IT-Supportanfragen und automatisierte Tests während des gesamten Entwicklungszyklus.
        </p>
      `,
      startDate: '2025',
      endDate: '2025',
      isCurrent: false,
      company: 'PREVIG',
      picture: 'logo-previg.png',
    },
    {
      title: 'Full-Stack Software Engineer',
      keywords: [
        { name: 'Ruby on Rails' },
        { name: 'ReactJS' },
        { name: 'Python' },
        { name: 'PostgreSQL' },
        { name: 'Docker' },
        { name: 'AWS' },
      ],
      summary: `
        Entwicklung mit Ruby on Rails und React.js in Gesundheitsprojekten.<br />
        Backend in Rails mit PostgreSQL und AWS.
      `,
      more: `
        <p>
          Mitwirkung an Projekten im öffentlichen Gesundheitswesen.<br />
          Einsatz von Docker und Überwachung mit Sentry.<br />
          Verantwortung für robuste, skalierbare Lösungen im Backend und moderne Webschnittstellen.
        </p>
      `,
      startDate: '2024',
      endDate: '2024',
      isCurrent: false,
      company: 'Appolus Tecnologia',
      picture: 'logo-appolus.png',
    },
    {
      title: 'Full-Stack Software Engineer',
      keywords: [
        { name: 'Ruby on Rails' },
        { name: 'ExtJS' },
        { name: 'ReactJS' },
        { name: 'PostgreSQL' },
        { name: 'Azure DevOps' },
      ],
      summary: `
        Entwicklung von Lösungen für Stadtmanagement und Luftbildvermessung.<br />
        Fokus auf Performanceoptimierung und Zusammenarbeit in agilen Projekten.
      `,
      more: `
        <p>
          Beitrag zu innovativen Projekten im Bereich Katasterverwaltung und Luftaufnahmen.<br />
          Verantwortlich für Performanceverbesserungen und effektive Zusammenarbeit mit Microsoft DevOps.<br />
          Aktive Teilnahme an Sprintplanung und Code-Reviews.
        </p>
      `,
      startDate: '2023',
      endDate: '2024',
      isCurrent: false,
      company: 'Engefoto',
      picture: 'logo-engefoto.png',
    },
    {
      title: 'Full-Stack Software Engineer',
      keywords: [
        { name: 'Ruby on Rails' },
        { name: 'ReactJS' },
        { name: 'RSpec' },
      ],
      summary: `
        Entwicklung einer Online-Zahlungsplattform.<br />
        Backend mit Ruby on Rails und Tests mit RSpec.
      `,
      more: `
        <p>
          Arbeit an der Plattform Vindi Pagamentos.<br />
          Verantwortlich für Entwicklung im Backend (Rails) und Frontend (React.js).<br />
          Nutzung von GitHub Projects für Aufgabenmanagement und Teamorganisation.
        </p>
      `,
      startDate: '2022',
      endDate: '2023',
      isCurrent: false,
      company: 'Vindi',
      picture: 'logo-vindi.png',
    },
    {
      title: 'Tech Lead | Full-Stack Software Engineer',
      keywords: [
        { name: 'Ruby on Rails' },
        { name: 'MySQL' },
        { name: 'Redis' },
        { name: 'TDD' },
        { name: 'AWS' },
      ],
      summary: `
        Entwicklung von Systemen für das öffentliche Bildungswesen.<br />
        Backend mit Ruby on Rails, TDD mit RSpec.
      `,
      more: `
        <p>
          Nutzung von Redis zur Performanceverbesserung und AWS (EC2, RDS) für Infrastruktur.<br />
          Verantwortlich für robuste und wartbare Systeme in einer agilen Umgebung.<br />
          Beteiligung an fast zweijähriger kontinuierlicher Lieferung von Bildungssoftware.
        </p>
      `,
      startDate: '2020',
      endDate: '2022',
      isCurrent: false,
      company: 'Caiena',
      picture: 'logo-caiena.png',
    },
    {
      title: 'Back-End Developer',
      keywords: [
        { name: 'Ruby on Rails' },
        { name: 'PostgreSQL' },
        { name: 'Jasper Reports' },
      ],
      summary: `
        Entwicklung von Projekten für das öffentliche Gesundheits- und Bildungswesen.<br />
        Schwerpunkt auf PostgreSQL und erweiterte Berichte.
      `,
      more: `
        <p>
          Entwicklung von kritischen Funktionen und komplexen Berichten mit Jasper Reports.<br />
          Einsatz agiler Methoden (Scrum/Kanban).<br />
          Beitrag zur Lieferung innovativer Lösungen für den öffentlichen Sektor.
        </p>
      `,
      startDate: '2017',
      endDate: '2020',
      isCurrent: false,
      company: 'Kazap Tecnologia',
      picture: 'logo-kazap.png',
    },
    {
      title: 'Software Development Intern',
      keywords: [{ name: 'Delphi' }, { name: 'Java' }, { name: 'Oracle 11g' }],
      summary: `
        Entwicklung interner Systeme für Hafenbetriebe.<br />
        Praktische Erfahrung mit PL/SQL und Delphi.
      `,
      more: `
        <p>
          Einsatz von Oracle-Funktionen und Delphi in täglichen Prozessen.<br />
          Anwendung agiler Methoden (Scrum/Kanban).<br />
          Mitwirkung an stabilen internen Lösungen in einem dynamischen Umfeld.
        </p>
      `,
      startDate: '2016',
      endDate: '2017',
      isCurrent: false,
      company: 'CI&T',
      picture: 'logo-cit.png',
    },
  ],
  interests: '',
  languages: [
    { name: 'Portugiesisch', level: 'Muttersprache', levelNumber: 10 },
    { name: 'Englisch', level: 'Berufliche Kenntnisse', levelNumber: 7 },
    { name: 'Deutsch', level: 'Berufliche Kenntnisse', levelNumber: 7 },
    { name: 'Italienisch', level: 'Grundkenntnisse', levelNumber: 2 },
  ],
  skills: [
    {
      name: 'Ruby on Rails',
      language: { name: 'Ruby', style: 'ruby' },
      category: { name: 'Frameworks / SDK / CMS' },
    },
    {
      name: 'React',
      language: { name: 'Javascript', style: 'javascript' },
      category: { name: 'Frameworks / SDK / CMS' },
    },
    {
      name: 'Golang',
      language: { name: 'Go', style: 'go' },
      category: { name: 'Sprachen' },
    },
    {
      name: 'Python',
      language: { name: 'Python', style: 'python' },
      category: { name: 'Sprachen' },
    },
    {
      name: 'PL/SQL',
      language: { name: 'SQL', style: 'others' },
      category: { name: 'Sprachen' },
    },
    {
      name: 'PostgreSQL',
      language: { name: 'SQL', style: 'others' },
      category: { name: 'Datenbanken' },
    },
    {
      name: 'MySQL',
      language: { name: 'SQL', style: 'others' },
      category: { name: 'Datenbanken' },
    },
  ],
  tools:
    'Betriebssysteme: Linux (über 10 Jahre)<br />IDE: VSCode / PhpStorm / RubyMine<br />Containerisierung: Docker<br />Continuous Integration: GitHub Actions / Gitlab-CI<br />Projektmanagement: Jira / Gitlab<br />Versionskontrolle: GitHub / Gitlab / Bitbucket',
  educations: [
    {
      schoolName: 'Faculdade FACINT',
      fieldOfStudy: 'MBA in Big Data und Datenmanagement-Intelligenz',
      picture: 'logo-facint.png',
      startDate: '2020',
      endDate: '2023',
      degree: 'MBA',
      activities: [
        { name: 'Big Data' },
        { name: 'Künstliche Intelligenz' },
        { name: 'Datenmanagement' },
      ],
      summary: 'Schwerpunkt auf Big-Data-Strategien für Managementanwendungen.',
    },
    {
      schoolName: 'Fatec Mogi Mirim',
      fieldOfStudy:
        'Technologie in Analyse und Entwicklung von Softwaresystemen',
      picture: 'logo-fatec.png',
      startDate: '2014',
      endDate: '2016',
      degree: 'Bachelor',
      activities: [
        { name: 'Programmierung' },
        { name: 'Datenbanken' },
        { name: 'Systemanalyse' },
      ],
      summary: 'Technische Ausbildung mit Fokus auf Softwareentwicklung.',
    },
    {
      schoolName: 'UNASP',
      fieldOfStudy: 'Bauingenieurwesen (nicht abgeschlossen)',
      picture: 'logo-unasp.jpeg',
      startDate: '2007',
      endDate: '2010',
      degree: 'Bachelor',
      activities: [
        { name: 'Mathematik' },
        { name: 'Physik' },
        { name: 'Strukturen' },
      ],
      summary: 'Studium abgebrochen, um eine Karriere in der IT zu verfolgen.',
    },
  ],
  certifications: [
    {
      name: 'Certified ScrumMaster® (CSM®)',
      issuer: 'Scrum Alliance',
      year: '2021',
      picture: 'logo-scrum-alliance.png',
      credentialId: '1420227',
      credentialUrl: 'https://app.badgecert.com/public/badges/yzlqasmo',
    },
  ],
  volunteer: [],
  hobbies: [
    {
      name: 'Jiu-Jitsu',
      icon: 'fitness_center',
      description: 'Kampfsport und Lebensstil.',
    },
    {
      name: 'Judo',
      icon: 'sports_kabaddi',
      description: 'Kontinuierliches Training und Lernen.',
    },
    {
      name: 'Aquaristik',
      icon: 'pets',
      description: 'Pflege und Beobachtung von Zierfischen.',
    },
    {
      name: 'Wandern',
      icon: 'terrain',
      description: 'Spaziergänge in der Natur und Kontakt mit der Umwelt.',
    },
  ],
};
