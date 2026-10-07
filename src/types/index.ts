export interface Profile {
  name: string;
  role: string;
  headline: string;
  location: string;
  availability: string;
  email: string;
  summary: string;
  photo?: string;
  github?: string;
  linkedin?: string;
  resumeUrl?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Focus {
  title: string;
  description: string;
  tools: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  employmentType: string;
  location: string;
  period: string;
  current?: boolean;
  description: string[];
  tech?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  summary: string;
  tech_stack: string[];
  description: string[];
  link?: string;
  image?: string;
  images?: string[];
  /** Use 'contain' for portrait (mobile) screenshots so they aren't cropped. */
  imageFit?: 'cover' | 'contain';
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period?: string;
  gpa?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image?: string;
}

export interface Organization {
  id: string;
  name: string;
  role: string;
  description: string;
}

export interface PortfolioData {
  profile: Profile;
  stats: Stat[];
  focus: Focus[];
  experiences: Experience[];
  projects: Project[];
  techStack: string[];
  skills: SkillGroup[];
  education: Education[];
  certifications: Certification[];
  organizations: Organization[];
}
