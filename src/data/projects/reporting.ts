
import { ProjectData } from "@/types/project";

export const reportingProject: ProjectData = {
  title: "Beyond InSite GED Module Redesign",
  subtitle: "Improving Document Management Through User Research",
  category: "Construction Management / Industrial",
  client: "Sixense Digital",
  duration: "6 Weeks",
  role: "UX Researcher, Information Architect",
  tools: ["User Interviews", "Observation", "Data Analysis", "Information Architecture", "Hypothesis Testing"],
  image: "/reporting/pres.png",
  overview: "I led the UX research phase for the redesign of a critical document management module (GED - Gestion Electronique des Documents) within Beyond InSite, a construction management platform. The module was essential for collaborative report generation but suffered from complexity issues that extended the time required to complete tasks. Through user interviews, direct observation, and rigorous analysis, I identified key pain points and developed actionable insights to streamline the user experience.",
  mission: "The GED module was used daily by multiple stakeholders across construction projects, but its complex interface and workflow were causing inefficiencies. My mission was to conduct comprehensive user research to identify specific pain points in the current system, validate a set of hypotheses about potential improvements, and provide clear recommendations for redesigning the module to significantly reduce the time and effort required to generate reports.",
  opportunity: "By redesigning the GED module based on actual user needs and behaviors, we could create a more intuitive document management system that would reduce report generation time, minimize errors, and improve collaboration between different stakeholders in construction projects. This would directly impact productivity on construction sites and potentially become a competitive advantage for Beyond InSite in the construction management software market.",
  researchData: [
    "Conducted direct analysis of the current system through a 2-day immersive testing session with colleagues",
    "Developed a detailed panel grid to identify and recruit diverse user types across different roles and experience levels",
    "Created comprehensive interview guides with both detailed (V1) and focused (V2) question sets",
    "Performed 5 semi-structured interviews with users from various roles including project directors, site managers, and document controllers",
    "Combined interviews with direct observation of users interacting with the system to capture both stated and unstated pain points",
    "Analyzed current module features and developed 6 specific hypotheses about potential improvements"
  ],
  interviewFindings: [
    "Navigation confusion: 3 out of 5 interviewees reported difficulties navigating between the 'List' and 'Search' tabs, confirming my hypothesis about combining these functions",
    "Lost work during report generation: 4 out of 5 users experienced losing their document selections after being redirected during the report generation process",
    "Validation workflow issues: 75% of participants expressed frustration with the validation process, particularly the need to navigate away from document details to request validation",
    "Permission complexity: Most users found the process of adding approver groups and setting permissions to be unnecessarily complex and time-consuming",
    "Redundant report generation: 3 users mentioned the need to generate multiple reports when a single consolidated report would be more efficient",
    "Interface inconsistencies: Users frequently mentioned inconsistent terminology and button placements across different sections of the module"
  ],
  valueProps: [
    "Combined List and Search functionality to create a unified, intuitive document discovery experience",
    "Preserved user selections during report generation to eliminate redundant work",
    "Integrated validation functionality directly into document detail pages",
    "Streamlined approver group management with role-based automation",
    "Consolidated report generation capabilities for multiple documents"
  ],
  designProcess: "My research process began with a thorough analysis of the existing solution, spending two days with colleagues testing real-world scenarios from role assignment to final report generation. This hands-on experience allowed me to identify key module features and develop initial hypotheses about potential improvements.\n\nI then created a structured panel grid to ensure representation across different professional roles, experience levels, and system usage patterns. For the interviews themselves, I developed two interview guides: a comprehensive version covering all aspects of the system and a more focused version targeting my specific research objectives.\n\nMy methodology combined semi-structured interviews with direct observation, asking users to demonstrate how they used the system while explaining their process. This approach revealed both articulated pain points and unconscious workarounds that users had developed to cope with system limitations. The dual approach was particularly valuable for identifying discrepancies between what users said and what they actually did while using the system.",
  uiResearch: "My research specifically examined how users interacted with four key areas of the interface: the document list view, search functionality, document details page, and report generation workflow. I identified several critical UI issues affecting user experience:\n\nThe tab-based separation between 'List' and 'Search' created artificial barriers in what users saw as a single task - finding documents. Users frequently needed to switch between tabs, losing context and selections in the process.\n\nThe document details page lacked key functionality users expected to find there, particularly validation actions, forcing users to navigate away and potentially lose their place in their workflow.\n\nThe report generation interface failed to preserve user selections during the processing step, resulting in lost work and repeated actions.\n\nThe validation workflow spread related actions across different parts of the interface, making it difficult for users to track the status of documents requiring their input.\n\nThese findings pointed toward a need to reorganize the interface around user tasks rather than system functions, creating a more intuitive information architecture that would reduce cognitive load and eliminate unnecessary steps.",
  results: "My research provided clear evidence supporting five of my six initial hypotheses and revealed additional pain points I hadn't anticipated. The findings were presented to the design and development teams with specific recommendations for interface improvements that would address the validated pain points. Based on my research, the team prioritized redesigning the document discovery experience by merging the List and Search tabs, implementing state preservation during report generation, and integrating validation functions into the document details page.",
  metrics: [
    "Identified 8 critical user pain points with supporting evidence from multiple interviews",
    "Validated 5 of 6 initial improvement hypotheses",
    "Developed 12 specific recommendations for interface improvements",
    "Created 4 user personas representing key user types based on interview data",
    "Generated a prioritized list of 5 high-impact, low-effort improvements for immediate implementation"
  ],
  testimonial: {
    quote: "Les entretiens ont été très bien menés, nous permettant de comprendre clairement les difficultés rencontrées par nos utilisateurs. Les recommandations qui en découlent sont précises et actionables, ce qui nous donne une feuille de route claire pour améliorer le module GED.",
    author: "Julien Heddou",
    title: "Product Manager, Sixense Digital",
    image: "/reporting/heddou.png"
  },
  reflection: "This project reinforced the critical importance of combining different research methodologies. While the interviews provided valuable insights into user perceptions and frustrations, the direct observation revealed workarounds and inefficiencies that users had normalized and might not have mentioned explicitly.",
  reflectionPoints: [
    "Combined methodologies yield deeper insights: The combination of interviews and observation revealed both conscious and unconscious pain points",
    "Testing with real scenarios is essential: The initial two-day immersion with colleagues using real-world scenarios was invaluable for understanding the system holistically",
    "User-specific interview guides improve data quality: Tailoring interview questions based on user roles and experience levels yielded more relevant and actionable insights",
    "Hypothesis testing provides structure: Starting with specific hypotheses helped focus the research while still allowing for unexpected discoveries",
    "Technical understanding enhances UX research: Having a good grasp of the technical constraints and possibilities allowed me to develop more feasible recommendations"
  ],
  nextProject: "tontina",
  userInsights: [
    {
      quote: "Je perds constamment mes sélections quand je génère un rapport. C'est frustrant de devoir tout recommencer à chaque fois.",
      persona: "Conducteur de travaux, 3 ans d'expérience"
    },
    {
      quote: "Pourquoi dois-je aller dans un autre onglet pour valider un document que je suis déjà en train de consulter? Ça n'a aucun sens.",
      persona: "Directeur de projet, 5 ans d'expérience"
    },
    {
      quote: "Je passe la moitié de mon temps à basculer entre l'onglet Liste et l'onglet Recherche. Ce serait tellement plus simple s'ils étaient combinés.",
      persona: "Gestionnaire documentaire, 2 ans d'expérience"
    },
    {
      quote: "La configuration des groupes d'approbation prend un temps fou. Le système devrait proposer des configurations automatiques basées sur les rôles.",
      persona: "Administrateur système, 1 an d'expérience"
    }
  ],
  overViewImages: ["/reporting/reporting.PNG", "/reporting/validation.jpg", "/reporting/search.jpg", "/reporting/validation-visa.jpg"],
  financialMission: ["/reporting/persona-grid.png"],
  opportunityImages: ["/reporting/workflow.jpg"],
  designImages:  ["/reporting/timeline.png"],
  researchDataImage: ["/reporting/grillpanel.PNG", "/reporting/grillpanel2.PNG", "/reporting/questions.PNG", "/reporting/questions2.PNG", "/reporting/questions3.PNG"]
};
