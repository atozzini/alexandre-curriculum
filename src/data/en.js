export default {
  meta: {
    title:
      'Resume - Alexandre Tozzini : Full-Stack Software Engineer in Brazil',
    keywords: 'Brazil, Golang, React, Ruby on Rails, Oracle, PostgreSQL',
    description:
      'Alexandre Tozzini, software engineer in Brazil. Specialties: Golang, Ruby on Rails, React, PL/SQL, PostgreSQL, Oracle.',
  },
  firstName: 'Alexandre',
  lastName: 'Tozzini',
  emailAddress: 'alexandre.tozzini@gmail.com',
  headline:
    'Ruby on Rails & Golang Developer | Full-Stack Software Engineer | Certified Scrum Master',
  summary: `
    Software engineer with 10+ years of experience building systems for the Education, Health, Pension, and Property Management sectors. Strong background in Ruby on Rails, Golang (Clean Architecture, DDD), and React.js, with solid database expertise (PostgreSQL, MySQL, Oracle PL/SQL, SQL Server). Experienced deploying and managing applications on AWS (EC2, RDS, Amplify, Lambda, CloudFront), with Docker, GitHub, Scrum/Kanban, automated testing, and Linux environments on a daily basis. Technologist in Systems Analysis and Development, MBA in Big Data and Data Management, and Certified ScrumMaster® (CSM®).<br /><br />
    My favourite stack: Ruby on Rails, Golang, Docker, ReactJS, Postgres.
  `,
  pictureUrl: '/img/me.jpg',
  dateOfBirth: '1985-04-06',
  mainAddress: 'Florianópolis, Santa Catarina, Brazil',
  websites: [
    { type: 'Linkedin', url: 'https://www.linkedin.com/in/alexandre-tozzini/' },
  ],
  phoneNumbers: [{ type: 'Personal', number: '+55 (48) 93618-4102' }],
  imAccounts: [{ type: 'Skype', name: 'alexandre.tozzini' }],
  snsAccounts: [
    {
      name: 'Linkedin',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/alexandre-tozzini/',
    },
    { name: 'Github', icon: 'github', url: 'https://github.com/atozzini' },
  ],
  locations: [
    { name: 'Florianópolis', country: 'Brazil', isCurrent: true },
    { name: 'Mogi-Guaçu', country: 'Brazil' },
  ],

  positions: [
    {
      title: 'Software Engineer | Full Stack Developer',
      keywords: [
        { name: 'Ruby on Rails' },
        { name: 'Docker' },
        { name: 'MySQL' },
        { name: 'Linux' },
        { name: 'Sidekiq' },
        { name: 'Prometheus' },
      ],
      summary: `
        Maintenance and development across a portfolio of 4 interconnected Rails systems for a condominium management company.<br />
        Legacy Rails 2 upkeep alongside new Rails 7 features, infrastructure, and monitoring.
      `,
      more: `
        <p>
          Maintains a legacy condominium management system (Rails 2 / Ruby 1.8.7) and builds new features on modern Rails 7 applications with Sidekiq background jobs.<br />
          Integrates government tax authority APIs for electronic invoice submission, plus external ERPs, CRMs, and HR/payroll systems via SOAP and OAuth2.<br />
          Administers Linux servers and Docker/Docker Compose across multiple environments, and manages MySQL with network-level access control.<br />
          Monitors infrastructure with Zabbix, Loki, and Prometheus, and resolves critical incidents, including kernel crashes caused by legacy network file system instability.
        </p>
      `,
      startDate: '2025',
      endDate: 'Today',
      isCurrent: true,
      company: 'Plathanus Software & Design',
      picture: 'logo-plathanus.png',
    },
    {
      title: 'IT Business Analyst | Software Developer',
      keywords: [
        { name: 'Golang' },
        { name: 'Clean Architecture' },
        { name: 'DDD' },
        { name: 'Angular' },
        { name: 'Oracle PL/SQL' },
        { name: 'PostgreSQL' },
      ],
      summary: `
        Golang APIs following Clean Architecture and DDD, and Angular web applications for a pension fund company.<br />
        Critical PL/SQL solutions on Oracle and PostgreSQL for high-criticality pension systems.
      `,
      more: `
        <p>
          Built APIs in Golang using Clean Architecture and Domain-Driven Design, and developed web applications with Angular.<br />
          Implemented PL/SQL solutions on Oracle databases and used PostgreSQL for high-criticality pension systems.<br />
          Containerized applications with Docker, managed version control with Bitbucket and GitHub, handled IT support tickets, and implemented automated tests throughout the development cycle.
        </p>
      `,
      startDate: '2025',
      endDate: '2025',
      isCurrent: false,
      company: 'PREVIG',
      picture: 'logo-previg.png',
    },
    {
      title: 'Full-stack Software Engineer',
      keywords: [
        { name: 'Ruby on Rails' },
        { name: 'ReactJS' },
        { name: 'Python' },
        { name: 'PostgreSQL' },
        { name: 'Docker' },
        { name: 'AWS' },
      ],
      summary: `
        Ruby on Rails and React.js development for public health projects.
      `,
      more: `
        <p>
          Contributed to healthcare systems using Ruby on Rails, React.js, Python, and Go.<br />
          Backend built with Rails and PostgreSQL, containerized with Docker, and deployed on AWS (EC2, RDS).<br />
          Implemented error monitoring with Sentry and best practices for scalability.
        </p>
      `,
      startDate: '2024',
      endDate: '2024',
      isCurrent: false,
      company: 'Appolus Tecnologia',
      picture: 'logo-appolus.png',
    },
    {
      title: 'Full-stack Software Engineer',
      keywords: [
        { name: 'Ruby on Rails' },
        { name: 'ExtJS' },
        { name: 'ReactJS' },
        { name: 'PostgreSQL' },
        { name: 'Azure DevOps' },
      ],
      summary: `
        Web solutions with Ruby on Rails and React.js for urban management and aerial survey.
      `,
      more: `
        <p>
          Developed innovative projects in urban management and aerial photogrammetry.<br />
          Focused on performance optimization and collaboration in agile teams.<br />
          Worked with Ruby on Rails, ExtJS, React.js, PostgreSQL, and Azure DevOps.
        </p>
      `,
      startDate: '2023',
      endDate: '2024',
      isCurrent: false,
      company: 'Engefoto',
      picture: 'logo-engefoto.png',
    },
    {
      title: 'Full-stack Software Engineer',
      keywords: [
        { name: 'Ruby on Rails' },
        { name: 'ReactJS' },
        { name: 'RSpec' },
      ],
      summary: `
        Development of features for an online payment platform.
      `,
      more: `
        <p>
          Worked on the Vindi Payments platform using Ruby on Rails and React.js.<br />
          Implemented automated tests with RSpec and managed tasks with GitHub Projects.<br />
          Acted in an agile environment focused on quality and fast delivery.
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
        Public education systems built with Ruby on Rails, TDD, and AWS.
      `,
      more: `
        <p>
          Led development of public education systems.<br />
          Backend with Ruby on Rails, test-driven development with RSpec, and Redis for performance.<br />
          Infrastructure hosted on AWS (EC2, RDS).<br />
          Active participation in agile methodologies (Scrum/Kanban).
        </p>
      `,
      startDate: '2020',
      endDate: '2022',
      isCurrent: false,
      company: 'Caiena',
      picture: 'logo-caiena.png',
    },
    {
      title: 'Back End Developer',
      keywords: [
        { name: 'Ruby on Rails' },
        { name: 'PostgreSQL' },
        { name: 'Jasper Reports' },
      ],
      summary: `
        Backend development with Ruby on Rails for public health and education.
      `,
      more: `
        <p>
          Delivered critical projects in healthcare and education using Ruby on Rails and PostgreSQL.<br />
          Focused on SQL functions, reporting with JasperReports, and building robust solutions.<br />
          Worked within agile teams using Scrum and Kanban.
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
        Internship in software development for port operations systems.
      `,
      more: `
        <p>
          Developed internal systems for port operations using Delphi, Java, and Oracle 11g.<br />
          Built PL/SQL functions and integrated with legacy systems.<br />
          First hands-on experience with agile methodologies (Scrum/Kanban).
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
    {
      name: 'Portuguese',
      level: 'Native or bilingual proficiency',
      levelNumber: 10,
    },
    {
      name: 'English',
      level: 'Professional working proficiency',
      levelNumber: 7,
    },
    {
      name: 'German',
      level: 'Professional working proficiency',
      levelNumber: 7,
    },
    { name: 'Italian', level: 'Elementary proficiency', levelNumber: 2 },
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
      category: { name: 'Languages' },
    },
    {
      name: 'Python',
      language: { name: 'Python', style: 'python' },
      category: { name: 'Languages' },
    },
    {
      name: 'PL/SQL',
      language: { name: 'SQL', style: 'others' },
      category: { name: 'Languages' },
    },
    {
      name: 'PostgreSQL',
      language: { name: 'SQL', style: 'others' },
      category: { name: 'Databases' },
    },
    {
      name: 'MySQL',
      language: { name: 'SQL', style: 'others' },
      category: { name: 'Databases' },
    },
  ],
  tools:
    'Operating systems: Linux (over 10 years)<br />IDE: VSCode / PhpStorm / RubyMine<br />Containerization: Docker<br />CI/CD: GitHub Actions / Gitlab-CI<br />Project Management: Jira / Gitlab<br />Version Control: GitHub / Gitlab / Bitbucket',
  educations: [
    {
      schoolName: 'FACINT College',
      fieldOfStudy: 'MBA in Big Data and Data Management',
      picture: 'logo-facint.png',
      startDate: '2020',
      endDate: '2023',
      degree: 'MBA',
      activities: [
        { name: 'Big Data' },
        { name: 'Artificial Intelligence' },
        { name: 'Data Management' },
      ],
      summary: 'Focus on big data strategies applied to management.',
    },
    {
      schoolName: 'Fatec Mogi Mirim',
      fieldOfStudy: 'Technology in Systems Analysis and Development',
      picture: 'logo-fatec.png',
      startDate: '2014',
      endDate: '2016',
      degree: 'Bachelor of Technology',
      activities: [
        { name: 'Programming' },
        { name: 'Databases' },
        { name: 'Systems Analysis' },
      ],
      summary: 'Solid technical background for a career as a developer.',
    },
    {
      schoolName: 'UNASP',
      fieldOfStudy: 'Civil Engineering (incomplete)',
      startDate: '2007',
      endDate: '2010',
      degree: 'Undergraduate',
      activities: [
        { name: 'Mathematics' },
        { name: 'Physics' },
        { name: 'Structures' },
      ],
      summary: 'Course interrupted to migrate into IT field.',
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
      description: 'Martial art and lifestyle.',
    },
    {
      name: 'Judo',
      icon: 'sports_kabaddi',
      description: 'Training and continuous learning.',
    },
    {
      name: 'Aquarium keeping',
      icon: 'pets',
      description: 'Care and observation of ornamental fish.',
    },
    {
      name: 'Hiking',
      icon: 'terrain',
      description: 'Outdoor walks and connection with nature.',
    },
  ],
};
