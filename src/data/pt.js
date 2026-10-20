export default {
  meta: {
    title: 'CV - Alexandre Tozzini : Desenvolvedor Full-Stack no Brasil',
    keywords: 'Brasil, React, Ruby, Rails, Go, Oracle, PostgreSQL',
    description:
      'Alexandre Tozzini, desenvolvedor de software no Brasil. Especialidades: Golang, Ruby on Rails, React, PL/SQL, PostgreSQL, Oracle.',
  },
  firstName: 'Alexandre',
  lastName: 'Tozzini',
  emailAddress: 'tozzini@proton.me',
  headline:
    'Desenvolvedor Ruby on Rails & Golang | Engenheiro de Software Full-Stack | Certified Scrum Master',
  summary: `
    Engenheiro de software com mais de 10 anos de experiência construindo sistemas para os setores de Educação, Saúde, Previdência e Gestão de Patrimônio. Forte experiência com Ruby on Rails, Golang (Clean Architecture, DDD) e React.js, com sólido conhecimento em bancos de dados (PostgreSQL, MySQL, Oracle PL/SQL, SQL Server). Experiência implantando e gerenciando aplicações na AWS (EC2, RDS, Amplify, Lambda, CloudFront), com Docker, GitHub, Scrum/Kanban, testes automatizados e ambientes Linux no dia a dia. Tecnólogo em Análise e Desenvolvimento de Sistemas, MBA em Big Data e Gestão de Dados, e Certified ScrumMaster® (CSM®).<br /><br />
    Minha stack favorita: Ruby on Rails, Golang, Docker, ReactJS, Postgres.
  `,
  pictureUrl: '/img/me.jpg',
  dateOfBirth: '1985-04-06',
  mainAddress: 'Florianópolis, Santa Catarina, Brasil',
  websites: [
    { type: 'Linkedin', url: 'https://www.linkedin.com/in/alexandre-tozzini/' },
  ],
  phoneNumbers: [{ type: 'Pessoal', number: '+55 (48) 93618-4102' }],
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
    { name: 'Florianópolis', country: 'Brasil', isCurrent: true },
    { name: 'Mogi-Guaçu', country: 'Brasil' },
  ],

  positions: [
    {
      title: 'Engenheiro de Software | Desenvolvedor Full-Stack',
      keywords: [
        { name: 'Ruby on Rails' },
        { name: 'Docker' },
        { name: 'MySQL' },
        { name: 'Linux' },
        { name: 'Sidekiq' },
        { name: 'Prometheus' },
      ],
      summary: `
        Manutenção e evolução de um portfólio de 4 sistemas Rails interligados para uma empresa de gestão de condomínios.<br />
        Manutenção de legado em Rails 2 ao lado de novas funcionalidades em Rails 7, infraestrutura e monitoramento.
      `,
      more: `
        <p>
          Mantém um sistema legado de gestão de condomínios (Rails 2 / Ruby 1.8.7) e desenvolve novas funcionalidades em aplicações Rails 7 modernas com jobs em background via Sidekiq.<br />
          Integra APIs do fisco para emissão de notas fiscais eletrônicas, além de ERPs, CRMs e sistemas de RH/folha de pagamento externos via SOAP e OAuth2.<br />
          Administra servidores Linux e Docker/Docker Compose em múltiplos ambientes, e gerencia MySQL com controle de acesso em nível de rede.<br />
          Monitora a infraestrutura com Zabbix, Loki e Prometheus, e resolve incidentes críticos, incluindo kernel panics causados por instabilidade em sistemas de arquivos de rede legados.
        </p>
      `,
      startDate: '2025',
      endDate: 'Hoje',
      isCurrent: true,
      company: 'Plathanus Software & Design',
      picture: 'logo-plathanus.png',
    },
    {
      title: 'Analista de Negócios de TI | Desenvolvedor de Software',
      keywords: [
        { name: 'Golang' },
        { name: 'Clean Architecture' },
        { name: 'DDD' },
        { name: 'Angular' },
        { name: 'Oracle PL/SQL' },
        { name: 'PostgreSQL' },
      ],
      summary: `
        APIs em Golang seguindo Clean Architecture e DDD, e aplicações web em Angular para uma sociedade de previdência complementar.<br />
        Soluções críticas em PL/SQL em Oracle e PostgreSQL para sistemas previdenciários de alta criticidade.
      `,
      more: `
        <p>
          Construção de APIs em Golang utilizando Clean Architecture e Domain-Driven Design, e desenvolvimento de aplicações web com Angular.<br />
          Implementação de soluções em PL/SQL em bancos Oracle e uso de PostgreSQL para sistemas previdenciários de alta criticidade.<br />
          Containerização de aplicações com Docker, controle de versão com Bitbucket e GitHub, atendimento de chamados de TI e testes automatizados ao longo do ciclo de desenvolvimento.
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
        Desenvolvimento em Ruby on Rails e React.js para projetos de saúde pública.
      `,
      more: `
        <p>
          Contribuição em sistemas de saúde pública utilizando Ruby on Rails, React.js, Python e Go.<br />
          Backend em Rails com PostgreSQL, containerização com Docker e infraestrutura em AWS (EC2, RDS).<br />
          Implementação de monitoramento de erros com Sentry e boas práticas de escalabilidade.
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
        Soluções em Ruby on Rails e React.js para gestão urbana e aerolevantamento.
      `,
      more: `
        <p>
          Desenvolvimento de projetos inovadores em gestão urbana e aerofotogrametria.<br />
          Ênfase em otimização de performance e colaboração em times ágeis.<br />
          Atuação com Ruby on Rails, ExtJS, React.js, Postgres e Azure DevOps.
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
        Desenvolvimento de funcionalidades para plataforma de pagamentos online.
      `,
      more: `
        <p>
          Contribuição para a plataforma Vindi Pagamentos, desenvolvendo em Ruby on Rails e React.js.<br />
          Implementação de testes automatizados com RSpec e gestão de tarefas via GitHub Projects.<br />
          Atuação em ambiente ágil com foco em qualidade e entregas rápidas.
        </p>
      `,
      startDate: '2022',
      endDate: '2023',
      isCurrent: false,
      company: 'Vindi',
      picture: 'logo-vindi.png',
    },
    {
      title: 'Tech Lead | Engenheiro de Software Full-Stack',
      keywords: [
        { name: 'Ruby on Rails' },
        { name: 'MySQL' },
        { name: 'Redis' },
        { name: 'TDD' },
        { name: 'AWS' },
      ],
      summary: `
        Desenvolvimento de sistemas para o setor público educacional.
      `,
      more: `
        <p>
          Liderança no desenvolvimento de sistemas educacionais públicos.<br />
          Backend em Ruby on Rails, uso de RSpec para TDD e Redis para otimização.<br />
          Infraestrutura escalável em AWS (EC2, RDS).<br />
          Participação em metodologias ágeis (Scrum/Kanban).
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
        Desenvolvimento backend em Ruby on Rails para saúde e educação públicas.
      `,
      more: `
        <p>
          Atuação em projetos críticos de saúde e educação pública utilizando Ruby on Rails e PostgreSQL.<br />
          Ênfase em funções SQL, geração de relatórios com JasperReports e entrega de soluções robustas.<br />
          Forte aplicação de Scrum e Kanban em equipes ágeis.
        </p>
      `,
      startDate: '2017',
      endDate: '2020',
      isCurrent: false,
      company: 'Kazap Tecnologia',
      picture: 'logo-kazap.png',
    },
    {
      title: 'Estagiário em Desenvolvimento',
      keywords: [{ name: 'Delphi' }, { name: 'Java' }, { name: 'Oracle 11g' }],
      summary: `
        Estágio em desenvolvimento de sistemas internos para operações portuárias.
      `,
      more: `
        <p>
          Desenvolvimento em Delphi, Java e Oracle 11g no setor de operações portuárias.<br />
          Criação de funções PL/SQL e integração com sistemas legados.<br />
          Primeira experiência prática em metodologias ágeis (Scrum/Kanban).
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
    { name: 'Português', level: 'Nativo ou bilíngue', levelNumber: 10 },
    { name: 'Inglês', level: 'Profissional', levelNumber: 7 },
    { name: 'Alemão', level: 'Profissional', levelNumber: 7 },
    { name: 'Italiano', level: 'Elementar', levelNumber: 2 },
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
      category: { name: 'Linguagens' },
    },
    {
      name: 'Python',
      language: { name: 'Python', style: 'python' },
      category: { name: 'Linguagens' },
    },
    {
      name: 'PL/SQL',
      language: { name: 'SQL', style: 'others' },
      category: { name: 'Linguagens' },
    },
    {
      name: 'PostgreSQL',
      language: { name: 'SQL', style: 'others' },
      category: { name: 'Bancos de Dados' },
    },
    {
      name: 'MySQL',
      language: { name: 'SQL', style: 'others' },
      category: { name: 'Bancos de Dados' },
    },
  ],
  tools:
    'Sistemas operacionais: Linux (mais de 10 anos)<br />IDE: VSCode / PhpStorm / RubyMine<br />Containerização: Docker<br />Integração Contínua: GitHub Actions / Gitlab-CI<br />Gerenciamento de Projetos: Jira / Gitlab<br />Controle de versão: GitHub / Gitlab / Bitbucket',
  educations: [
    {
      schoolName: 'Faculdade FACINT',
      fieldOfStudy: 'MBA em Big Data e Inteligência na Gestão de Dados',
      picture: 'logo-facint.png',
      startDate: '2020',
      endDate: '2023',
      degree: 'MBA',
      activities: [
        { name: 'Big Data' },
        { name: 'Inteligência Artificial' },
        { name: 'Gestão de Dados' },
      ],
      summary: 'Foco em estratégias de big data aplicadas à gestão.',
    },
    {
      schoolName: 'Fatec Mogi Mirim',
      fieldOfStudy: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
      picture: 'logo-fatec.png',
      startDate: '2014',
      endDate: '2016',
      degree: 'Graduação Tecnológica',
      activities: [
        { name: 'Programação' },
        { name: 'Banco de Dados' },
        { name: 'Análise de Sistemas' },
      ],
      summary: 'Formação técnica sólida para atuação como desenvolvedor.',
    },
    {
      schoolName: 'UNASP',
      fieldOfStudy: 'Engenharia Civil (incompleto)',
      picture: 'logo-unasp.jpeg',
      startDate: '2007',
      endDate: '2010',
      degree: 'Graduação',
      activities: [
        { name: 'Matemática' },
        { name: 'Física' },
        { name: 'Estruturas' },
      ],
      summary: 'Formação interrompida para migração para a área de TI.',
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
      description: 'Arte marcial e estilo de vida.',
    },
    {
      name: 'Judô',
      icon: 'sports_kabaddi',
      description: 'Treino e aprendizado contínuo.',
    },
    {
      name: 'Aquarismo',
      icon: 'pets',
      description: 'Cuidado e observação de peixes ornamentais.',
    },
    {
      name: 'Trilha',
      icon: 'terrain',
      description: 'Caminhadas ao ar livre e contato com a natureza.',
    },
  ],
};
