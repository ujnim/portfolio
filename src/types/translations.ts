export interface Project {
    name: string;
    period: string;
    description: string;
    highlights: string[];
}

export interface Job {
    period: string;
    position: string;
    description: string;
    achievements: string[];
    projects?: Project[];
}

export interface ExperienceTranslations {
    title: string;
    stats: {
        years: string;
        projects: string;
        technologies: string;
    };
    projectsLabel: string;
    jobs: Job[];
}

export interface NavTranslations {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
}

export interface HeroTranslations {
    greeting: string;
    role: string;
    company: string;
    cta: {
        primary: string;
        secondary: string;
        resume: string;
    };
}

export interface AboutTranslations {
    title: string;
    description1: string;
    description2: string;
}

export interface SkillsTranslations {
    title: string;
    categories: {
        frontend: string;
        backend: string;
        tools: string;
    };
}

export interface ProjectsTranslations {
    title: string;
    viewDetails: string;
}

export interface ContactTranslations {
    title: string;
    description: string;
    cta: string;
}

export interface Translations {
    nav: NavTranslations;
    hero: HeroTranslations;
    about: AboutTranslations;
    skills: SkillsTranslations;
    experience: ExperienceTranslations;
    projects: ProjectsTranslations;
    contact: ContactTranslations;
    // Add other sections as needed
} 