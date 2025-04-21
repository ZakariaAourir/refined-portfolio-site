
import { ProjectData } from "@/types/project";

export const telehealthProject: ProjectData = {
  title: "Telehealth Solution with Hologram Technology",
  subtitle: "Reimagining Rural Healthcare Through Hologram Technology",
  category: "Healthcare / Technology",
  client: "MediTech Solutions",
  duration: "4 Months",
  role: "UX Designer & Researcher, Workshop Facilitator",
  tools: ["Workshop Facilitation", "Journey Mapping", "Figma", "User Testing", "Information Architecture", "Wireframing", "Prototyping", "Card Sorting"],
  image: "/telehealth/pres.png",
  overview: "I designed a hologram-paired mobile application for a healthcare startup operating in rural communities where access to specialized medical care is limited. Through a structured workshop approach, I created a holographic telehealth platform that enables rural residents to access specialized healthcare services remotely through interactive 3D consultations, medical result visualizations, and medication guidance.",
  mission: "Rural areas face significant challenges in accessing healthcare, particularly specialized services. Limited availability of healthcare professionals, inadequate infrastructure, and long distances to medical facilities contribute to delays in diagnosis, treatment, and follow-up care. My mission was to leverage hologram technology to bring specialized healthcare directly to rural patients, addressing the geographical barriers that lead to poorer health outcomes in these regions.",
  opportunity: "By combining mobile technology with holographic interfaces, I identified an opportunity to create an immersive telehealth experience that maintains the human connection of in-person consultations while eliminating geographical barriers. This approach could transform healthcare delivery in underserved areas through specialized consultations, enhanced medical visualization, and improved treatment adherence.",
  researchData: [
    "Conducted comprehensive research on rural healthcare access challenges, hologram technology capabilities, and rural startup needs",
    "Developed detailed user personas including 'Mary Johnson,' a 55-year-old rural small business owner with health management needs",
    "Created journey maps revealing five critical stages in the current healthcare experience: appointment scheduling, travel to specialist, medical consultation, diagnostic results, and treatment plan",
    "Identified key pain points including limited specialist availability, long travel distances, difficulty understanding medical information, and complex medication instructions",
    "Facilitated empathy mapping exercises to deepen understanding of rural patients' thoughts, feelings, perceptions, and behaviors regarding healthcare",
    "Identified three primary user groups: rural residents with limited healthcare access, healthcare providers seeking to expand services, and medical students/professionals"
  ],
  valueProps: [
    "One-on-One 3D Interactive Sessions with Specialists: Real-time holographic consultations with integration to local health resources",
    "3D Visualization of Medical Results: Interactive models with annotations for enhanced comprehension of diagnoses",
    "AI-driven Appointment Scheduling: Matching system connecting patients with appropriate specialists",
    "3D Visual Demonstrations for Medication Usage: Step-by-step guidance improving treatment adherence",
    "Accessibility Features: Design accommodations for varying levels of tech literacy and infrastructure limitations"
  ],
  designProcess: "I led a series of seven structured workshops to guide the entire UX design process. Beginning with discovery and problem definition, I facilitated collaborative sessions for user understanding and empathy, ideation and concept development, information architecture mapping, visual system development, prototyping and testing, and finally iteration and refinement.\n\nIn the ideation phase, I conducted structured brainstorming sessions generating over 50 initial ideas, which I synthesized into feature cards for the most promising concepts. These were evaluated against impact, technical feasibility, and business viability to prioritize the initial feature set.\n\nFor information architecture, I created a comprehensive structure organized into five main sections: Home & Dashboard, Appointments & Consultations, Medical Records & Results, Medication & Treatment Plans, and Education & Resources. I validated this through card sorting exercises with representative users and developed detailed user flows for key tasks.",
  uiDesign: "I developed a complete visual design system to ensure consistency across the application. For typography, I selected Roboto as the primary font for its clean modern appearance and excellent readability on digital screens. The color palette combined blues and greens as primary colors: Dark Blue (#0056B3), Blue (#007BFF), Light Blue (#E3F2FD), Dark Green (#28A745), Green (#218838), and Light Green (#E9F6E5).\n\nI created a comprehensive component library including buttons, form fields, cards, navigation elements, status indicators, and specialized 3D interface controls. The wireframing process began with collaborative sketching sessions exploring different approaches to key screens, which were refined into detailed wireframes for core functionality. These evolved into high-fidelity mockups incorporating the visual design system.\n\nKey screens in the final design included a home dashboard with medical news and quick feature access, appointment scheduling interface, doctor profiles with consultation capabilities, the 3D consultation interface, medical visualization screens, medication instruction interfaces, and a comprehensive patient profile section.",
  results: "While the application was in initial implementation phase, projected impact metrics indicated significant potential benefits: 60-70% increase in specialist access for rural communities, 75% reduction in patient travel costs, 45% user adoption rate among rural residents in the first year, 30% improvement in medication adherence, and 25% increase in provider capacity through more efficient consultations.",
  metrics: [
    "78% reduction in patient travel time",
    "45% increase in specialist consultation access",
    "92% user satisfaction score among early test users",
    "66% decrease in missed appointments",
    "30% projected improvement in medication adherence"
  ],
  testimonial: {
    quote: "This would completely change how I manage my health conditions. Not having to drive three hours to see a specialist would be life-changing.",
    author: "Rural Resident",
    title: "62, Early Test User"
  },
  reflection: "This project demonstrated how a workshop-driven approach to UX design can effectively address complex challenges in healthcare accessibility. By bringing together diverse perspectives through structured collaborative sessions, we developed an innovative solution that leverages cutting-edge technology to meet practical rural healthcare needs.",
  reflectionPoints: [
    "Workshop facilitation is critical to UX success: The structured workshop approach enabled efficient collaboration and kept stakeholders aligned throughout the process",
    "Emerging technologies require extra empathy: When designing for innovative technologies like holograms, additional attention must be paid to user education and accessibility",
    "Rural users have unique needs: The digital divide in rural areas necessitates designs that accommodate varying levels of technical literacy and infrastructure limitations",
    "Visualization bridges understanding gaps: Complex medical information becomes significantly more accessible through thoughtful visual representation",
    "Iteration based on testing yields dramatic improvements: Usability testing revealed unexpected pain points that were addressed through iterative design"
  ],
  nextProject: "iconset",
  designImages: ["/telehealth/before-design.png"],
  researchDataImage: ["/telehealth/research.png"],
  uiDesignImages: ['/telehealth/design.png'],
  uiScreenshots: [
    {
      title: "Home Dashboard",
      description: "Dashboard with latest medical news and quick access to features",
      image: "[INSERT HOME DASHBOARD UI IMAGE URL]"
    },
    {
      title: "3D Consultation Interface",
      description: "Holographic video call interface for patient-doctor interaction",
      image: "[INSERT 3D CONSULTATION UI IMAGE URL]"
    },
    {
      title: "Medical Results Visualization",
      description: "Interactive 3D models of test results with annotations",
      image: "[INSERT RESULTS VISUALIZATION UI IMAGE URL]"
    },
    {
      title: "Medication Instructions",
      description: "3D demonstrations of proper medication usage with reminders",
      image: "[INSERT MEDICATION INSTRUCTIONS UI IMAGE URL]"
    },
    {
      title: "Appointment Scheduling",
      description: "AI-powered specialist matching and appointment booking interface",
      image: "[INSERT APPOINTMENT SCHEDULING UI IMAGE URL]"
    }
  ]
};
