export interface Profile {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  summary: string;
  photo?: string;
  github?: string;
  linkedin?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  tech_stack: string[];
  description: string[];
  link?: string;
  image?: string;
  images?: string[];
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

export interface PortfolioData {
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
}
