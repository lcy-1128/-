export type ProjectLevel = 'all' | 'beginner' | 'intermediate' | 'advanced';

export interface Project {
  id: string;
  title: string;
  bootcampLevel: '초급' | '중급' | '고급';
  levelKey: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  summary: string;
  description: string;
  highlights: string[];
  techStack: string[];
  architectureSnippet?: string;
  metrics?: { label: string; value: string }[];
  accentColor?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: string;
  status: string;
  badge: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  englishCategory: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
