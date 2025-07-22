import { ProjectsDataRecord } from "@/types/project";
import { tontinaProject } from "./projects/tontina";
import { telehealthProject } from "./projects/telehealth";
import { iconsetProject } from "./projects/iconset";
import { reportingProject } from "./projects/reporting";
import { aiBobbyProject } from "./projects/aibobby";

// Define project data (normally this would come from an API or CMS)
export const projectsData: ProjectsDataRecord = {
  tontina: tontinaProject,
  // telehealth: telehealthProject, // Removed from public display
  iconset: iconsetProject,
  reporting: reportingProject,
  aibobby: aiBobbyProject
};

// Keep the project data available but separate from the main export
// This way the data is still in the codebase but not publicly accessible
export const hiddenProjects: ProjectsDataRecord = {
  telehealth: telehealthProject
};
