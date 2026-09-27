import { PortfolioData } from '../types';

// Profile
import profilePhoto from './assets/profile/riski-hidayat.webp';

// PEMIRA e-voting images
import evoting1 from './assets/evoting/1.png';
import evoting2 from './assets/evoting/2.png';
import evoting3 from './assets/evoting/3.png';
import evoting4 from './assets/evoting/4.png';
import evoting5 from './assets/evoting/image.png';

// AITeC VI images
import aitec1 from './assets/aitec/1.png';
import aitec2 from './assets/aitec/2.png';
import aitec3 from './assets/aitec/3.png';
import aitec4 from './assets/aitec/4.png';

// E-Kuliah images
import ekuliah1 from './assets/ekuliah/1.png';
import ekuliah2 from './assets/ekuliah/2.png';

// LastBite images
import lastbite1 from './assets/lastbite/1.jpg';
import lastbite2 from './assets/lastbite/2.jpg';
import lastbite3 from './assets/lastbite/3.jpg';
import lastbite4 from './assets/lastbite/4.jpg';
import lastbite5 from './assets/lastbite/5.jpg';

// LearningTech images
import learningtech1 from './assets/learningtech/1.png';

// Simple Restaurant API images
import apiresto1 from './assets/apiresto/1.png';
import apiresto2 from './assets/apiresto/2.png';
import apiresto3 from './assets/apiresto/3.png';
import apiresto4 from './assets/apiresto/4.png';
import apiresto5 from './assets/apiresto/5.png';
import apiresto6 from './assets/apiresto/6.png';

// Certification images
import certNeo4j from './assets/certification/image.png';
import certAca from './assets/certification/ACA Developer Certification.jpg';
import certBnsp from './assets/certification/bnsp.jpeg';
import certLinux from './assets/certification/NDG_Linux_Essentials_certificate.jpg';

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Riski Hidayat',
    role: 'Fullstack Developer',
    headline: 'Backend-focused fullstack developer building reliable web apps end to end — Go and Java Spring Boot APIs, React and TypeScript frontends.',
    location: 'Lampung Timur, Indonesia',
    availability: 'Open to opportunities · open to relocation',
    email: 'riski191203@gmail.com',
    photo: profilePhoto,
    github: 'https://github.com/Riskihidayatt',
    linkedin: 'https://www.linkedin.com/in/riski-hidayat-794254244/',
    resumeUrl: '/Riski-Hidayat_Software-Developer_CV.pdf',
    summary:
      'Fullstack Developer with 2+ years of experience designing, developing, testing and maintaining web applications, with a strong backend focus. I build RESTful APIs with Golang, Java Spring Boot, Node.js and PHP, and frontends with React and TypeScript (Zustand, Redux) on PostgreSQL, MySQL and Firebase Firestore. I enjoy translating business requirements into technical solutions, work comfortably in cross-functional Agile/Scrum teams, and use AI tools such as Claude Code and Cursor to write tests and debug faster.',
  },
  stats: [
    { value: '2+', label: 'Years building web apps' },
    { value: '6', label: 'Shipped projects' },
    { value: '~20', label: 'Polytechnics using AITeC VI' },
    { value: '3.89', label: 'GPA, D3 Informatics Mgmt.' },
  ],
  focus: [
    {
      title: 'Backend & APIs',
      description: 'RESTful services with clean layering, pagination, filtering, JWT auth and role-based access, backed by well-designed relational schemas.',
      tools: ['Go', 'Spring Boot', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Frontend & Mobile',
      description: 'Typed React interfaces with predictable state management, and React Native apps wired to real APIs with correct request/response handling.',
      tools: ['React', 'TypeScript', 'Zustand', 'React Native'],
    },
    {
      title: 'Delivery',
      description: 'From requirements, ERDs and workflows to unit tests, UAT and containerised deployments, working in Agile/Scrum teams.',
      tools: ['Docker', 'Linux', 'Git', 'Swagger'],
    },
  ],
  experiences: [
    {
      id: 'exp-polinela',
      company: 'Politeknik Negeri Lampung',
      role: 'Freelance Fullstack Developer',
      employmentType: 'Part-time · Remote & on-site',
      location: 'Lampung',
      period: 'Dec 2023 – Present',
      current: true,
      description: [
        "Analysed clients' business requirements and translated them into software solutions: system workflows, ERDs, database schemas, backend, frontend and deployment.",
        'Maintained and enhanced production systems used daily, built with Laravel and CodeIgniter 4, including investigating and fixing application issues.',
        'Worked independently with minimal supervision and full ownership of deadlines, communicating directly with non-technical users.',
      ],
      tech: ['PHP', 'Laravel', 'CodeIgniter 4', 'MySQL', 'Node.js', 'React'],
    },
    {
      id: 'exp-enigma-intern',
      company: 'PT. Enigma Cipta Humanika',
      role: 'Backend Developer Intern',
      employmentType: 'Internship',
      location: 'Jakarta Selatan',
      period: 'Nov 2025 – May 2026',
      description: [
        'Joined as a Backend Developer Intern building services in Go, then reassigned to the frontend team mid-project to support development needs.',
        'Built and maintained RESTful APIs in Go, implementing CRUD for the Ticket, User, Tenant and Profile Management modules.',
        'Enhanced data handling with pagination, filtering and role-based user management.',
        'Developed frontend features with React.js and TypeScript, managing state with Zustand and integrating them with backend APIs.',
        'Investigated and resolved application bugs to improve stability, and took part in User Acceptance Testing (UAT) before release.',
        'Worked in an Agile/Scrum team through Sprint Reviews, Retrospectives and Backlog Grooming sessions.',
      ],
      tech: ['Go', 'React', 'TypeScript', 'Zustand', 'PostgreSQL', 'Docker'],
    },
    {
      id: 'exp-enigma-camp',
      company: 'PT. Enigma Cipta Humanika (Enigma Camp)',
      role: 'Fullstack Developer Trainee',
      employmentType: 'Bootcamp',
      location: 'Kota Malang',
      period: 'Mar 2025 – Nov 2025',
      description: [
        'Built REST APIs with Java Spring Boot and JPA applying OOP principles, designed PostgreSQL schemas, and wrote unit tests to meet a minimum 80% code coverage requirement.',
        'Built web interfaces with React.js and Redux and mobile apps with React Native; containerised services with Docker on Linux.',
      ],
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Redux', 'React Native', 'Docker'],
    },
    {
      id: 'exp-itn',
      company: 'PT. Indonesia Trans Network',
      role: 'Network Operations Center (NOC)',
      employmentType: 'Full-time',
      location: 'Lampung Timur',
      period: 'May 2022 – Aug 2022',
      description: [
        'Monitored network operations and handled incident escalation and troubleshooting using MikroTik and Cisco equipment.',
      ],
      tech: ['MikroTik', 'Cisco', 'Linux'],
    },
  ],
  projects: [
    {
      id: 'prj-pemira',
      title: 'PEMIRA Polinela',
      category: 'University E-Voting System',
      role: 'Team Lead',
      summary: 'Campus-wide e-voting platform with auditable vote records, JWT auth and an admin dashboard.',
      tech_stack: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
      image: evoting1,
      images: [evoting1, evoting2, evoting3, evoting4, evoting5],
      description: [
        'Led a team of three through technical discussions and architecture decisions, designing a separated frontend and backend with JWT authentication and Cloudinary integration.',
        'Built authentication, voting logic, vote counting and the admin dashboard, with a database schema that keeps vote records accurate, transparent and auditable.',
        'Now leading its redesign to Node.js, React and Docker on a VPS for better scalability and maintainability.',
      ],
    },
    {
      id: 'prj-aitec',
      title: 'AITeC VI',
      category: 'National Competition Platform',
      role: 'Fullstack Developer',
      summary: 'Official registration platform used by around 20 polytechnics across Indonesia and Timor-Leste.',
      tech_stack: ['PHP', 'CodeIgniter 4', 'MySQL'],
      link: 'https://aitec-lampung.polinela.ac.id/',
      image: aitec1,
      images: [aitec1, aitec2, aitec3, aitec4],
      description: [
        'Built the official registration platform for a national inter-polytechnic competition in a three-person team; live and used by around 20 polytechnics across Indonesia and Timor-Leste.',
        'Designed the database schema and registration workflow, and built the admin dashboard end to end for reviewing registrations and publishing results.',
      ],
    },
    {
      id: 'prj-ekuliah',
      title: 'E-Kuliah',
      category: 'Academic Information System',
      role: 'Backend Developer',
      summary: 'Academic system used by every student at Politeknik Negeri Lampung.',
      tech_stack: ['PHP', 'CodeIgniter 4', 'MySQL'],
      link: 'https://kuliah.polinela.ac.id/',
      image: ekuliah1,
      images: [ekuliah1, ekuliah2],
      description: [
        'Built CRUD modules for core master data (students, lecturers, technicians, academic years, staff, classes, departments) in an existing codebase used by all students at Politeknik Negeri Lampung.',
        'Maintained live features and fixed issues reported by users.',
      ],
    },
    {
      id: 'prj-lastbite',
      title: 'LastBite',
      category: 'Food Waste Reduction · Capstone',
      role: 'Mobile Developer',
      summary: 'Mobile marketplace for surplus food, with Midtrans payments and a Spring Boot backend.',
      tech_stack: ['React Native', 'Spring Boot', 'PostgreSQL'],
      image: lastbite1,
      images: [lastbite1, lastbite2, lastbite3, lastbite4, lastbite5],
      imageFit: 'contain',
      description: [
        'As the mobile developer in a five-person Agile team, built authentication, food listing, ordering and profile features.',
        'Integrated Midtrans payments and Cloudinary, and agreed API contracts with the backend developer.',
      ],
    },
    {
      id: 'prj-learningtech',
      title: 'LearningTech',
      category: 'Android Learning App',
      role: 'Solo Developer',
      summary: 'Native Android app with video and article modules on Firebase.',
      tech_stack: ['Java', 'Android', 'Firebase'],
      image: learningtech1,
      images: [learningtech1],
      description: [
        'Independently built a native Android app with video and article modules.',
        'Integrated Firebase Firestore (NoSQL) and Firebase Storage for content management.',
      ],
    },
    {
      id: 'prj-resto-api',
      title: 'Simple Restaurant API',
      category: 'Backend Practice Project',
      role: 'Solo Developer',
      summary: 'Layered Spring Boot API for menus, customers and transactions, documented with Swagger.',
      tech_stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Swagger'],
      image: apiresto1,
      images: [apiresto1, apiresto2, apiresto3, apiresto4, apiresto5, apiresto6],
      description: [
        'Backend simulating core restaurant operations: menu management, customer records and transaction processing.',
        'Layered architecture (Controller–Service–Repository) with DTOs mapped via MapStruct.',
        'Pagination and filtering with Spring Data JPA, and interactive API docs with Swagger (OpenAPI).',
      ],
    },
  ],
  skills: [
    { category: 'Languages', items: ['Go', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'SQL'] },
    { category: 'Backend', items: ['Spring Boot', 'JPA', 'Node.js', 'Laravel', 'CodeIgniter 4', 'REST API', 'JWT'] },
    { category: 'Frontend & Mobile', items: ['React', 'Zustand', 'Redux', 'React Native', 'Android'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'Firebase Firestore', 'Prisma'] },
    { category: 'Practices', items: ['OOP', 'Agile/Scrum', 'Unit Testing', 'UAT', 'Swagger'] },
    { category: 'Tools & AI', items: ['Git', 'Docker', 'Linux', 'Postman', 'Claude Code', 'Cursor'] },
  ],
  education: [
    {
      id: 'edu-acu',
      institution: 'Asia Cyber University',
      degree: 'Bachelor of Informatics (S1) — in progress',
      period: 'Apr 2026 – Present',
    },
    {
      id: 'edu-polinela',
      institution: 'Politeknik Negeri Lampung',
      degree: 'D3 Informatics Management',
      period: 'Graduated 2025',
      gpa: '3.89 / 4.00',
    },
  ],
  certifications: [
    { id: 'cert-neo4j', title: 'Neo4j Certified Professional', issuer: 'Neo4j', year: '2026', image: certNeo4j },
    { id: 'cert-enigma', title: 'Fullstack Developer Bootcamp', issuer: 'Enigma Camp', year: '2025' },
    { id: 'cert-bnsp', title: 'Junior Web Programmer', issuer: 'BNSP', year: '2025', image: certBnsp },
    { id: 'cert-aca', title: 'ACA Developer Certification', issuer: 'Alibaba Cloud Academy', year: '2025', image: certAca },
    { id: 'cert-linux', title: 'NDG Linux Essentials', issuer: 'Cisco Networking Academy', year: '2023', image: certLinux },
  ],
  organizations: [
    {
      id: 'org-itc',
      name: 'Polinela IT Center — Hima Prodi Manajemen Informatika',
      role: 'Vice Chairperson',
      description: 'Organised IT knowledge-sharing sessions with external speakers and led team-bonding activities within the organisation.',
    },
  ],
};
