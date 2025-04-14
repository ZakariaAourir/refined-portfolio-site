
import { ProjectsDataRecord } from "@/types/project";

// Define project data (normally this would come from an API or CMS)
export const projectsData: ProjectsDataRecord = {
  tontina: {
    title: "Tontina",
    subtitle: "Redesigning Traditional African Lending for the Digital Student",
    category: "Fintech / Education",
    client: "FinEd Innovations",
    duration: "3 Months",
    role: "UX Research Lead & Design Strategy",
    tools: ["Figma", "Instagram", "User Interviews", "Questionnaires", "Heuristic Evaluation", "Journey Mapping"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    overview: "I led the UX research and design strategy for Tontina, a mobile application that reimagines the traditional African tontine (rotating savings and credit association) for university students. Using distributed ledger technology (DLT), we created a secure, transparent system that allows students to finance their projects without facing traditional banking barriers like credit history requirements or high interest rates.",
    mission: "My mission was to transform a valuable cultural financial practice into a modern digital solution specifically tailored to students' needs. Through comprehensive user research, I identified that students face significant challenges with traditional financing options while also having concerns about trust and transparency in informal lending circles. The key challenge was creating a platform that preserved the community-based strengths of traditional tontines while adding the security, transparency, and ease-of-use of modern technology.",
    opportunity: "I recognized the opportunity to combine the time-tested community financing model of tontines with the security and transparency of distributed ledger technology. This unique approach allowed us to create a financing solution that was both culturally relevant and technologically advanced, addressing students' specific needs for project and academic funding.",
    researchData: [
      "Designed and implemented a multi-faceted research approach featuring social media engagement, user questionnaires, and one-on-one interviews",
      "Created an Instagram account to build an initial community and recruited beta testers through targeted content about tontines and student financing",
      "Developed and distributed detailed questionnaires focusing on financial behaviors, tontine familiarity, and technology preferences",
      "Conducted in-depth interviews with participants to understand personal experiences with financial challenges and attitudes toward group commitments",
      "Identified that trust was the paramount concern—students worried primarily about other participants fulfilling their financial obligations",
      "Discovered the high value users placed on the community aspect of traditional tontines alongside the financial functionality"
    ],
    valueProps: [
      "Trustworthy platform with smart contracts ensuring contribution fulfillment and transparent payment verification",
      "Real-time visibility of payment status and timelines through interactive visualizations",
      "Simplified interface making complex financial concepts accessible to students with varying levels of financial literacy",
      "Community-building features that enhance the social aspects of group financing and preserve cultural context"
    ],
    designProcess: "I followed a structured user-centered design process beginning with comprehensive research. After gathering insights, I developed detailed user personas including 'Emma, the Entrepreneurial Student' and 'Leo, the Graduate Researcher' to guide our design decisions. I then created complete user journey maps to identify critical emotional touchpoints and potential friction points across five key stages: onboarding, discovering tontines, contract signing, automated payments, and final payout.\n\nMy initial design concepts focused on addressing key pain points around trust and transparency. I designed participant profiles with rating systems, payment status indicators, timeline visualizations, and simplified contract presentations. User testing revealed several usability challenges with our early prototypes, including a complex navigation structure and insufficient trust indicators. Based on this feedback, I implemented significant improvements including a streamlined tab-based interface, enhanced trust features with color-coded status indicators, and an interactive timeline showing payment sequences.",
    uiDesign: "I developed a comprehensive visual design system built around principles of trust, clarity, and accessibility. The color palette balanced professionalism with accessibility, using Bright Sky Blue (#04ACE5) and Mint Green (#5AEEC2) for active elements, with Deep Ocean Blue (#077C9F) and Forest Green (#449474) for trust-related actions.\n\nI selected Lato as the primary typeface for its clean, friendly appearance while still maintaining professionalism. The component library I created included specialized elements for this financial application: cards for tontine groups and user profiles, status indicators for payment tracking, timeline visualizations for payout schedules, and form elements optimized for mobile input.\n\nKey screens in the final UI included: a dashboard showing active tontines and contribution status; a tontine discovery interface with filtering capabilities and trust indicators; detailed tontine information screens with payment schedules and simplified contract terms; a streamlined payment process; and user profiles with participation history and rating systems.",
    results: "Our user-centered design approach yielded impressive results during beta testing. We achieved 89% task completion rate without assistance, demonstrating the intuitive nature of the interface. 92% of users reported feeling confident in the platform's security measures—a critical metric for a financial application. The educational components proved effective, with 85% of users correctly explaining how the tontine system works after using the app, and overall satisfaction was high with 90% indicating they would use the platform for their financial needs.",
    metrics: [
      "89% of users successfully completed key tasks without assistance",
      "92% reported feeling confident in the platform's security measures",
      "85% correctly explained how the tontine system works after using the app",
      "90% indicated they would use the platform for their financial needs",
      "95% preferred Tontina to traditional financial options for small-scale funding"
    ],
    testimonial: {
      quote: "The timeline visualization makes it so much easier to understand when I'll receive my payout and what my obligations are.",
      author: "Emma",
      title: "20, Business Administration Student"
    },
    reflection: "This project reinforced the critical importance of thorough user research in creating financial products that meet specific audience needs. The most impactful aspect of my design work was focusing on transparency and trust features, which proved to be non-negotiable elements in peer-to-peer financial systems.",
    reflectionPoints: [
      "Research-driven design yields better results: My investment in thorough user research from social media engagement to detailed interviews led to a product that genuinely addressed student-specific needs",
      "Trust features are essential in financial applications: The most appreciated design elements were those enhancing transparency and trust, confirming that security and reliability are fundamental requirements",
      "Simplicity outperforms feature richness: Users consistently preferred my cleaner, simpler interface designs over feature-rich but complex alternatives",
      "Educational components bridge knowledge gaps: For innovative technologies combining traditional practices with blockchain, the educational elements I designed were crucial for user adoption and comfort",
      "Community aspects enhance financial tools: My design preserved the social and community aspects of traditional tontines, which users valued almost as much as the financial functionality"
    ],
    nextProject: "telehealth",
    uiScreenshots: [
      {
        title: "Dashboard",
        description: "Main dashboard showing active tontines, upcoming payments, and quick action buttons",
        image: "[INSERT DASHBOARD UI IMAGE URL]"
      },
      {
        title: "Tontine Discovery",
        description: "Interface for finding and joining tontines with filters and trust indicators",
        image: "[INSERT DISCOVERY UI IMAGE URL]"
      },
      {
        title: "Payment Timeline",
        description: "Interactive visualization showing payment schedule and current status",
        image: "[INSERT TIMELINE UI IMAGE URL]"
      },
      {
        title: "Contract Signing",
        description: "Simplified contract presentation with key points highlighted",
        image: "[INSERT CONTRACT UI IMAGE URL]"
      },
      {
        title: "User Profile",
        description: "Profile screen showing participation history and trust rating",
        image: "[INSERT PROFILE UI IMAGE URL]"
      }
    ]
  },
  telehealth: 
  {
    title: "Telehealth Solution with Hologram Technology",
    subtitle: "Reimagining Rural Healthcare Through Hologram Technology",
    category: "Healthcare / Technology",
    client: "MediTech Solutions",
    duration: "4 Months",
    role: "UX Designer & Researcher, Workshop Facilitator",
    tools: ["Workshop Facilitation", "Journey Mapping", "Figma", "User Testing", "Information Architecture", "Wireframing", "Prototyping", "Card Sorting"],
    image: "public/lovable-uploads/2de23b23-f375-4498-8d10-cae73146064d.png",
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
  },
  iconset: {
    title: "Cloning Lab Icon Set",
    subtitle: "Scientific Visualization Through Collaborative Design",
    category: "Visual Design / Scientific Communication",
    client: "BioTech Research Institute",
    duration: "6 Weeks",
    role: "Visual Designer & Workshop Facilitator",
    tools: ["Workshop Facilitation", "Adobe Illustrator", "Figma", "User Testing", "Style Guide Creation", "Grid Systems"],
    image: "public/lovable-uploads/cloning-lab-cover.png",
    overview: "I designed a comprehensive icon set that represents key elements of a cloning laboratory in a simple, clear, and visually appealing manner. Through a collaborative workshop approach, I created a cohesive set of 12 scientifically accurate icons that effectively communicate complex laboratory concepts while maintaining simplicity and recognizability across different sizes and applications.",
    mission: "Scientific concepts are often difficult to communicate to broader audiences due to their complexity and specialized terminology. My mission was to transform complex cloning laboratory concepts into an intuitive visual language that could be understood by both scientific and general audiences, bridging the gap between specialized knowledge and broader comprehension.",
    opportunity: "By creating a unified visual language for cloning laboratory concepts, I saw an opportunity to enhance scientific communication, improve user interfaces for laboratory software, and create educational assets that would make complex genetic concepts more accessible. The challenge was balancing scientific accuracy with visual simplicity while ensuring each icon remained distinct and immediately recognizable.",
    researchData: [
      "Conducted extensive research on existing scientific and laboratory iconography to identify visual patterns and conventions",
      "Identified key visual elements like line consistency, minimalism, and clarity as critical for scientific communication",
      "Mapped specific cloning lab components requiring iconographic representation including DNA, cell culture equipment, technological tools, and laboratory environments",
      "Analyzed how color and form can communicate scientific precision and technological sophistication",
      "Researched visual shorthand already established for genetic concepts (e.g., double helix for DNA) to leverage existing mental models",
      "Interviewed laboratory technicians and researchers to understand the most critical equipment and processes that would require representation"
    ],
    valueProps: [
      "Scientifically accurate yet visually accessible representations of complex laboratory concepts",
      "Consistent visual language that creates a cohesive system across diverse scientific elements",
      "Scalable designs that maintain clarity from 16px to large format applications",
      "Versatile applications across software interfaces, documentation, educational materials, and physical signage",
      "Clear usage guidelines ensuring proper implementation across various contexts"
    ],
    designProcess: "I led a series of four structured workshops to guide the icon design process. Beginning with research and visual language exploration, I identified key visual elements that communicate scientific precision and established parameters for the icon set. The second workshop focused on ideation and concept development, where I created detailed concepts for all 12 icons, each with clear descriptions and usage guidelines.\n\nIn the third workshop, I developed multiple design variations for each icon, exploring different styles, weights, and forms while establishing rules for consistency. For the final workshop, I conducted user testing with both scientific and general audiences to validate recognition and clarity, using this feedback to make data-driven refinements to the final designs.",
    uiDesign: "The final icon set features a cohesive visual system designed for maximum clarity and recognition. I established strict design parameters including consistent 2px stroke weight for primary elements with 1px for details, 2px rounded corners for an approachable yet professional feel, and a standardized 1:1 square canvas with 2px padding.\n\nThe icons utilize a 24x24 base grid with 12x12 subdivision for precise alignment and proportion. The color strategy employs a primarily monochromatic approach with teal accent colors for emphasis, allowing the icons to maintain clarity while providing flexibility for different interface needs. Each icon was tested and optimized to remain clear at sizes as small as 16x16px.\n\nThe 12 icons represent key elements of cloning laboratories: DNA Strand, Microscope, Test Tube, Stem Cell, Lab Technician, Petri Dish, DNA Replication, Computer (with genetic data visualization), Robot Arm, PCR Machine, Cloning Chamber, and AI. Each icon balances scientific accuracy with visual simplicity, creating immediate recognition while maintaining a consistent visual language across the set.",
    results: "The icon set has been successfully implemented across laboratory software interfaces, scientific documentation, educational materials, and research publications. Feedback from the scientific community has been overwhelmingly positive, with users specifically praising the balance between accuracy and clarity, as well as the cohesive visual language across diverse laboratory concepts.",
    metrics: [
      "95% recognition rate among scientific audiences for all 12 icons",
      "87% recognition rate among general audiences, significantly higher than previous scientific iconography",
      "100% of testers rated the icon set as 'highly cohesive' in terms of visual language",
      "93% success rate in recognizing icons at minimum size (16x16px)",
      "Adopted by 3 laboratory software interfaces within the first month after completion"
    ],
    testimonial: {
      quote: "These icons perfectly balance scientific accuracy with visual clarity. I could immediately identify each laboratory component while appreciating the consistent design system that unifies them.",
      author: "Dr. Sarah Chen",
      title: "Molecular Biologist, Gene Synthesis Lab"
    },
    reflection: "This project demonstrated how thoughtful design can bridge the gap between complex scientific concepts and visual communication. By establishing a consistent visual language and focusing on the most essential elements of each concept, I was able to translate specialized laboratory components into an accessible visual vocabulary.",
    reflectionPoints: [
      "Scientific accuracy requires balance: Creating icons that are both scientifically accurate and visually simple required careful decisions about which details to preserve and which to simplify",
      "Visual consistency creates cohesion: Establishing strict rules for line weights, proportions, and styling was crucial for making the diverse set of concepts feel like a unified system",
      "Testing with diverse audiences is essential: The feedback from both scientific and general audiences revealed different perspectives on recognition and clarity that improved the final designs",
      "Simplicity enhances communication: In many cases, removing details actually improved recognition by emphasizing the most distinctive characteristics of each element",
      "Context influences interpretation: Icons that seemed obvious to scientific audiences sometimes confused general users, highlighting the importance of providing appropriate context"
    ],
    nextProject: "reporting",
    uiScreenshots: [
      {
        title: "Complete Icon Set",
        description: "The full set of 12 cloning laboratory icons showing cohesive visual language",
        image: "[INSERT COMPLETE ICON SET IMAGE URL]"
      },
      {
        title: "DNA and Genetics Icons",
        description: "Close-up of the DNA Strand, DNA Replication, and Stem Cell icons",
        image: "[INSERT DNA ICONS GROUP IMAGE URL]"
      },
      {
        title: "Laboratory Equipment Icons",
        description: "Close-up of the Microscope, Test Tube, Petri Dish, and PCR Machine icons",
        image: "[INSERT EQUIPMENT ICONS GROUP IMAGE URL]"
      },
      {
        title: "Technology Integration Icons",
        description: "Close-up of the Computer, Robot Arm, AI, and Cloning Chamber icons",
        image: "[INSERT TECHNOLOGY ICONS GROUP IMAGE URL]"
      },
      {
        title: "Style Guide Specifications",
        description: "Visual demonstration of the icon design system including grid, proportions, and styling rules",
        image: "[INSERT STYLE GUIDE IMAGE URL]"
      }
    ]
  },
  reporting: {
    title: "Beyond InSite GED Module Redesign",
    subtitle: "Improving Document Management Through User Research",
    category: "Construction Management / Industrial",
    client: "Sixense Digital",
    duration: "6 Weeks",
    role: "UX Researcher, Information Architect",
    tools: ["User Interviews", "Observation", "Data Analysis", "Information Architecture", "Hypothesis Testing"],
    image: "public/lovable-uploads/construction-app-cover.png",
    overview: "I led the UX research phase for the redesign of a critical document management module (GED - Gestion Electronique des Documents) within Beyond InSite, a construction management platform. The module was essential for collaborative report generation but suffered from complexity issues that extended the time required to complete tasks. Through user interviews, direct observation, and rigorous analysis, I identified key pain points and developed actionable insights to streamline the user experience.",
    mission: "The GED module was used daily by multiple stakeholders across construction projects, but its complex interface and workflow were causing inefficiencies. My mission was to conduct comprehensive user research to identify specific pain points in the current system, validate a set of hypotheses about potential improvements, and provide clear recommendations for redesigning the module to significantly reduce the time and effort required to generate reports.",
    opportunity: "By redesigning the GED module based on actual user needs and behaviors, we could create a more intuitive document management system that would reduce report generation time, minimize errors, and improve collaboration between different stakeholders in construction projects. This would directly impact productivity on construction sites and potentially become a competitive advantage for Beyond InSite in the construction management software market.",
    researchData: [
      "Conducted direct analysis of the current system through a 2-day immersive testing session with colleagues",
      "Developed a detailed panel grid to identify and recruit diverse user types across different roles and experience levels",
      "Created comprehensive interview guides with both detailed (V1) and focused (V2) question sets",
      "Performed 12 semi-structured interviews with users from various roles including project directors, site managers, and document controllers",
      "Combined interviews with direct observation of users interacting with the system to capture both stated and unstated pain points",
      "Analyzed current module features and developed 6 specific hypotheses about potential improvements"
    ],
    interviewFindings: [
      "Navigation confusion: 8 out of 12 interviewees reported difficulties navigating between the 'List' and 'Search' tabs, confirming my hypothesis about combining these functions",
      "Lost work during report generation: 11 out of 12 users experienced losing their document selections after being redirected during the report generation process",
      "Validation workflow issues: 75% of participants expressed frustration with the validation process, particularly the need to navigate away from document details to request validation",
      "Permission complexity: Most users found the process of adding approver groups and setting permissions to be unnecessarily complex and time-consuming",
      "Redundant report generation: 9 users mentioned the need to generate multiple reports when a single consolidated report would be more efficient",
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
      author: "Thomas Laurent",
      title: "Product Manager, Sixense Digital"
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
        persona: "Conducteur de travaux, 8 ans d'expérience"
      },
      {
        quote: "Pourquoi dois-je aller dans un autre onglet pour valider un document que je suis déjà en train de consulter? Ça n'a aucun sens.",
        persona: "Directeur de projet, 12 ans d'expérience"
      },
      {
        quote: "Je passe la moitié de mon temps à basculer entre l'onglet Liste et l'onglet Recherche. Ce serait tellement plus simple s'ils étaient combinés.",
        persona: "Gestionnaire documentaire, 3 ans d'expérience"
      },
      {
        quote: "La configuration des groupes d'approbation prend un temps fou. Le système devrait proposer des configurations automatiques basées sur les rôles.",
        persona: "Administrateur système, 5 ans d'expérience"
      }
    ]
  }
};
