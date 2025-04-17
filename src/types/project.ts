
export interface ProjectData {
  title: string;
  subtitle?: string;
  category: string;
  client: string;
  duration: string;
  role: string;
  tools?: string[];
  image: string;
  overview?: string;
  mission?: string;
  opportunity?: string;
  researchData?: string[];
  valueProps?: string[];
  designProcess?: string;
  designImages?: string[];
  results?: string;
  metrics?: string[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    image?: string;
  };
  reflection?: string;
  reflectionPoints?: string[];
  nextProject?: string;
  description?: string;
  uiDesign?: string;
  uiScreenshots?: {
    title?: string;
    description?: string;
    image?: string;
  }[];
  interviewFindings?: string[];
  uiResearch?: string;
  userInsights?: {
    quote: string;
    persona: string;
  }[];
  overViewImages?: string[];
  financialMission?: string[];
  opportunityImages?: string[];
}

export type ProjectsDataRecord = Record<string, ProjectData>;
