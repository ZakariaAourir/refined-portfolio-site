
export interface ProjectData {
  title: string;
  subtitle?: string;
  category: string;
  client: string;
  duration: string;
  role: string;
  tools?: string[];
  image: string;
  
  // Project Overview & Background
  overview?: string;
  projectGoals?: string[];
  challenges?: string[];
  educationalContext?: string;
  
  // Research Phase
  competitiveAnalysis?: string;
  researchMethodology?: string;
  researchData?: string[];
  interviewInsights?: {
    number: number;
    insight: string;
    quote?: string;
  }[];
  userPersonas?: string[];
  personaPdfs?: string[];
  
  // Information Architecture & Planning
  taskModels?: string;
  userExperienceMaps?: string;
  siteMaps?: string;
  contentStructure?: string;
  informationArchitectureImages?: string[];
  
  // Design Process
  designProcess?: string;
  lowFiPrototyping?: string;
  wireframing?: string;
  highFiPrototyping?: string;
  usabilityTesting?: string;
  visualDesign?: string;
  abTesting?: string;
  designImages?: string[];
  
  // Opportunities and Challenges
  opportunities?: {
    number: number;
    description: string;
  }[];
  designChallenges?: {
    number: number;
    description: string;
  }[];
  
  // Results & Conclusion
  results?: string;
  projectOutcomes?: string[];
  limitations?: string[];
  futureImprovements?: string[];
  keyLearnings?: {
    number: number;
    learning: string;
  }[];
  relevantResources?: string[];
  
  // UI Research specific field
  uiResearch?: string;
  
  // Legacy fields maintained for backward compatibility
  mission?: string;
  opportunity?: string;
  valueProps?: string[];
  interviewFindings?: string[];
  userInsights?: {
    quote: string;
    persona: string;
  }[];
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
  overViewImages?: string[];
  financialMission?: string[];
  opportunityImages?: string[];
  researchDataImage? :string[];
  uiDesignImages?: string[];
}

export type ProjectsDataRecord = Record<string, ProjectData>;
