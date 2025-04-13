
export interface ProjectData {
  title: string;
  subtitle?: string;
  category: string;
  client: string;
  duration: string;
  role: string;
  image: string;
  overview?: string;
  mission?: string;
  opportunity?: string;
  researchData?: string[];
  valueProps?: string[];
  results?: string;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  nextProject: string;
  description?: string;
}

export type ProjectsDataRecord = Record<string, ProjectData>;
