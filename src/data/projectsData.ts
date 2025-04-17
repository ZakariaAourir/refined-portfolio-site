
import { ProjectsDataRecord } from "@/types/project";
import { tontinaProject } from "./projects/tontina";
import { telehealthProject } from "./projects/telehealth";
import { iconsetProject } from "./projects/iconset";
import { reportingProject } from "./projects/reporting";

// Define project data (normally this would come from an API or CMS)
export const projectsData: ProjectsDataRecord = {
  tontina: tontinaProject,
  telehealth: telehealthProject,
  iconset: iconsetProject,
  reporting: reportingProject
};
