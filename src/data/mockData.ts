import { PortfolioData } from '../types';

// Profile
import profilePhoto from './assets/profile/Desain tanpa judul (2).svg';

// Simple Restaurant API images
import apiresto1 from './assets/apiresto/1.png';
import apiresto2 from './assets/apiresto/2.png';
import apiresto3 from './assets/apiresto/3.png';
import apiresto4 from './assets/apiresto/4.png';
import apiresto5 from './assets/apiresto/5.png';
import apiresto6 from './assets/apiresto/6.png';

// E-Voting (PEMIRA) images
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

// Certifications images
import cert1 from './assets/certification/image.png'; // Neo4j
import cert2 from './assets/certification/ACA Developer Certification.jpg';
import cert3 from './assets/certification/bnsp.jpeg';
import cert4 from './assets/certification/NDG_Linux_Essentials_certificate.jpg';

export const fallbackData: PortfolioData = {
  profile: {
    name: 'Riski Hidayat',
    role: 'Software Engineer',
    location: 'Lampung Timur, Lampung, Indonesia',
    phone: '+62 821-8125-6631',
    email: 'riski191203@gmail.com',
    photo: profilePhoto,
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/riski-hidayat-794254244/',
    summary: 'Software Engineer with hands-on experience building end-to-end web and mobile applications, from database design to user-facing interfaces. Led the redesign of PEMIRA, a university-wide e-voting platform, and developed the official website for AITeC VI, a national competition deployed live for participants across Indonesia. Proficient across the stack with Go, Java Spring Boot, Node.js, React, and React Native, backed by internship experience at PT. Enigma Cipta Humanika. Comfortable working in Agile/Scrum teams, with practical exposure to Docker, Git, and API documentation Swagger.',
  },
  experiences: [
    {
      id: 'exp-1',
      company: 'PT. Enigma Cipta Humanika',
      role: 'Backend Developer Intern',
      period: 'Nov 2025 - May 2026',
      description: [
        'Built and maintained RESTful APIs in Go across four core modules Ticket, User, Tenant, and Profile Management covering full CRUD functionality.',
        'Developed React.js frontend components and integrated them with backend APIs, stepping in to support the frontend team during a resourcing gap.',
        'Enhanced backend functionality with pagination, filtering, and role-based access control to support scalable data handling.',
        'Diagnosed and resolved application bugs across both frontend and backend to improve system stability.',
        'Took part in Agile/Scrum ceremonies (Sprint Planning, Review, Retrospective) and User Acceptance Testing (UAT) alongside the development team.',
      ],
    },
    {
      id: 'exp-2',
      company: 'PT. Enigma Cipta Humanika',
      role: 'Fullstack Developer Trainee',
      period: 'March 2025 - July 2025',
      description: [
        'Completed an intensive fullstack development bootcamp, working in Agile/Scrum teams under mentor guidance.',
        'Developed RESTful APIs using Java Spring Boot and designed relational database schemas with PostgreSQL.',
        'Built responsive web interfaces with React.js and cross-platform mobile applications with React Native.',
        'Containerized services using Docker within a Linux-based development environment, and documented API endpoints with Postman and Swagger/OpenAPI.',
      ],
    },
    {
      id: 'exp-3',
      company: 'Politeknik Negeri Lampung',
      role: 'Freelance Fullstack Developer',
      period: 'Dec 2023 - Dec 2025',
      description: [
        'Developed and maintained full-stack web applications for academic and organizational use, covering system design, feature development, and long-term maintenance across multiple ongoing projects.',
        'Collaborated directly with stakeholders to gather requirements and deliver end-to-end application features.',
        'Balanced new feature development with maintaining and improving existing systems over time.',
      ],
    }
  ],
  projects: [
    {
      id: 'prj-0',
      title: 'Simple Restaurant API',
      tech_stack: ['Spring Boot', 'PostgreSQL', 'Java', 'Swagger'],
      image: apiresto1,
      images: [apiresto1, apiresto2, apiresto3, apiresto4, apiresto5, apiresto6],
      description: [
        'Simple Restaurant API - a backend system simulating core restaurant operations, including menu management, customer records, and transaction processing.',
        'Implemented Layered Architecture (Controller-Service-Repository) for clean separation of concerns.',
        'Applied DTO (Data Transfer Object) pattern with MapStruct for secure and efficient data mapping.',
        'Built Pagination & Filtering using Spring Data JPA for scalable data handling.',
        'Designed interactive API documentation via Swagger (OpenAPI) for easier testing and integration.',
        'Overcame challenge where Swagger initially failed to parse the Pageable parameter correctly by implementing the @ParameterObject annotation, serving as a reminder that debugging often requires understanding a framework\'s internals.'
      ]
    },
    {
      id: 'prj-1',
      title: 'PEMIRA Polinela - E-Voting System',
      tech_stack: ['React', 'Node.js', 'Docker', 'PostgreSQL'],
      image: evoting1,
      images: [evoting1, evoting2, evoting3, evoting4, evoting5],
      description: [
        'Led a team of three in redesigning PEMIRA, a university-wide e-voting platform, selecting the system architecture and tech stack in consultation with the team.',
        'Developed backend systems (authentication, voting logic, vote counting) and built the admin dashboard interface, while directing additional frontend work handled by teammates.',
        'Designed the database schema to ensure accurate and transparent vote recording.',
        'Currently leading the platform\'s migration to React, Node.js, and Docker to improve scalability and maintainability.'
      ]
    },
    {
      id: 'prj-2',
      title: 'AITeC VI - Official Competition Website',
      tech_stack: ['PHP', 'CodeIgniter 4', 'MySQL'],
      image: aitec1,
      images: [aitec1, aitec2, aitec3, aitec4],
      description: [
        'Collaborated in a 3-person team to build the official registration website for the Agricultural Innovation Technology Competition (AITeC VI), a national inter-polytechnic competition, deployed live and used by around 20 polytechnics across Indonesia, including international guests from Timor-Leste.',
        'Developed the admin dashboard end-to-end both backend logic and interface for reviewing registrations and publishing competition results, while a teammate handled the public landing page.',
        'Designed the database schema and registration workflow using MySQL and CodeIgniter 4.'
      ]
    },
    {
      id: 'prj-3',
      title: 'LastBite - Food Waste Reduction Platform',
      tech_stack: ['React Native', 'Spring Boot', 'PostgreSQL', 'Docker'],
      image: lastbite1,
      images: [lastbite1, lastbite2, lastbite3, lastbite4, lastbite5],
      description: [
        'Served as mobile developer in a 5-person Agile team (daily standups, defined roles) building a food-waste reduction platform as a bootcamp capstone project.',
        'Built the mobile application using React Native, implementing user authentication, food listing, ordering, and profile management features.',
        'Integrated the app with backend REST APIs built in Spring Boot, working closely with the team\'s backend developer to align on data contracts.'
      ]
    },
    {
      id: 'prj-4',
      title: 'E-Kuliah - Academic Information System',
      tech_stack: ['PHP', 'CodeIgniter 4', 'MySQL'],
      image: ekuliah1,
      images: [ekuliah1, ekuliah2],
      description: [
        'Contributed as a team member to E-Kuliah, an academic information system used across Politeknik Negeri Lampung, following architecture and direction set by the project lead.',
        'Built CRUD functionality for core master data modules, including student, lecturer, technician, academic year, staff, class, and department/major records.',
        'Fixed bugs and assisted with maintenance of existing features under team guidance.'
      ]
    },
    {
      id: 'prj-5',
      title: 'LearningTech - Mobile Learning Application',
      tech_stack: ['Java', 'Android', 'Firebase'],
      image: learningtech1,
      images: [learningtech1],
      description: [
        'Independently developed a native Android learning application, with teammates contributing UI layouts and Figma design.',
        'Integrated Firebase Firestore and Firebase Storage for content management, user authentication, and personalized learning features.',
        'Built video streaming and article modules, applying Android UI/UX best practices to enhance the learning experience.'
      ]
    }
  ],
  skills: [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'Go', 'Java', 'PHP']
    },
    {
      category: 'Frameworks and Technologies',
      items: ['Spring Boot', 'Node.js', 'CodeIgniter 4', 'React', 'React Native']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'Firebase Firestore', 'Neo4j']
    },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'Linux', 'Postman', 'Swagger']
    }
  ],
  education: [
    {
      id: 'edu-1',
      institution: 'Asia Cyber University',
      degree: 'Bachelor of Informatics',
      period: 'Apr 2026 - Present'
    },
    {
      id: 'edu-2',
      institution: 'Politeknik Negeri Lampung',
      degree: 'Informatics Management',
      period: 'Graduated 2025',
      gpa: '3.89/4.00'
    },
    {
      id: 'edu-3',
      institution: 'SMKS Maarif Purbolinggo',
      degree: 'Computer and Network Engineering (TKJ)'
    }
  ],
  certifications: [
    {
      id: 'cert-1',
      title: 'Neo4j Certified Professional',
      issuer: 'Neo4j',
      year: 'Aug 2024',
      image: cert1
    },
    {
      id: 'cert-2',
      title: 'ACA Developer Certification',
      issuer: 'Alibaba Cloud Academy',
      year: '2025',
      image: cert2
    },
    {
      id: 'cert-3',
      title: 'Junior Web Programmer',
      issuer: 'BNSP',
      year: '2025',
      image: cert3
    },
    {
      id: 'cert-4',
      title: 'NDG Linux Essentials',
      issuer: 'Cisco Networking Academy',
      year: '2023',
      image: cert4
    }
  ]
};
