
import { ProjectsDataRecord } from "@/types/project";

// Define project data (normally this would come from an API or CMS)
export const projectsData: ProjectsDataRecord = {
  webapplication: {
    title: "Construction Management Platform Redesign",
    subtitle: "Improving a web application through User interviews and observation",
    category: "UX Research",
    client: "ConstructTech Solutions",
    duration: "3 Months",
    role: "UX Research Lead",
    tools: ["User Interviews", "Observation Sessions", "Figma", "Miro"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    overview: "ConstructTech Solutions needed to improve their construction management platform that was experiencing high abandonment rates and negative feedback. Through comprehensive user research including interviews and observation sessions, we identified critical usability issues affecting productivity and user satisfaction.",
    mission: "Construction professionals were struggling with a complex, unintuitive platform that was hindering rather than helping their daily workflows. The interface required too many clicks for common tasks, used technical terminology unfamiliar to field workers, and had an information architecture that didn't match users' mental models of construction project management.",
    opportunity: "By reimagining the platform's structure and workflows based on actual user behavior, we could create an intuitive system that aligned with construction professionals' existing processes while leveraging technology to enhance efficiency.",
    researchData: [
      "Conducted 15 in-depth interviews with various construction team roles (project managers, supervisors, field workers)",
      "Performed 8 on-site observation sessions to document actual workflow patterns and pain points",
      "Analyzed task completion rates, identifying 4 critical workflows with >70% failure rates",
      "Created comprehensive journey maps highlighting emotional low points during platform usage",
      "Identified terminology mismatches between platform language and industry vernacular"
    ],
    valueProps: [
      "Task-oriented interface aligned with construction workflow patterns",
      "Simplified navigation reducing clicks for common actions by 60%",
      "Customizable dashboard showing project status at appropriate levels of detail",
      "Improved mobile experience for on-site data entry and access"
    ],
    designProcess: "Using research insights, we created priority matrices to identify the most impactful issues to address. We developed wireframes that drastically simplified navigation paths for common tasks and restructured the information architecture to align with users' mental models. After multiple iterations based on stakeholder feedback, we created high-fidelity prototypes for testing with actual users.",
    results: "The redesigned platform achieved a 42% increase in user engagement, 65% reduction in support tickets, and a 38% improvement in task completion rates. Time spent on daily reporting tasks decreased by 25%, representing significant time savings across the organization.",
    testimonial: {
      quote: "The research-driven approach completely transformed our platform. For the first time, we truly understand how our users work and have built something that feels intuitive to them rather than forcing them to adapt to our system.",
      author: "Michael Chen",
      title: "CTO, ConstructTech Solutions"
    },
    reflection: "This project highlighted the critical importance of observation in addition to interviews. What users said they did often differed from their actual behavior, providing invaluable insights that wouldn't have been captured through conversations alone.",
    reflectionPoints: [
      "Field research provides context that office-based interviews cannot capture",
      "Technical terminology should always align with users' everyday language",
      "Testing with actual users in their work environment reveals issues that aren't apparent in controlled settings",
      "Information architecture should reflect users' mental models rather than organizational structure"
    ],
    nextProject: "tontina"
  },
  tontina: {
    title: "Tontina",
    subtitle: "Redesigning Traditional African Lending for the Digital Student",
    category: "Fintech / Education",
    client: "FinEd Innovations",
    duration: "3 Months",
    role: "UX Research Lead & Design Strategy",
    tools: ["Figma", "Instagram", "User Interviews", "Questionnaires"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    overview: "The Tontina project addresses a critical challenge facing university students: accessing financing for academic projects and small business ideas without the barriers of traditional banking. Students often lack credit history or collateral required by banks, face prohibitively high interest rates, and struggle with complex application processes.",
    mission: "Students face significant challenges when seeking financing for their projects and ideas. Traditional banks require credit history and collateral that students simply don't have, while existing loans come with prohibitive interest rates. Informal lending circles lack the security and trust mechanisms needed for participants to feel confident.",
    opportunity: "Our approach combined the time-tested community financing model of tontines with the security and transparency of distributed ledger technology. This created an opportunity to provide students with a financing solution that was both culturally relevant and technologically advanced.",
    researchData: [
      "Created an Instagram account to build an initial community and recruit beta testers",
      "Distributed detailed questionnaires about financial behaviors and technology preferences",
      "Conducted one-on-one interviews to gain deeper insights into personal experiences",
      "Found that trust was the paramount concern—students worried about participants fulfilling obligations",
      "Discovered strong value in the community aspect of traditional tontines alongside financial function"
    ],
    valueProps: [
      "Trustworthy platform with smart contracts ensuring contribution fulfillment",
      "Transparent system showing real-time payment status and timelines",
      "Simplified interface making complex financial concepts accessible",
      "Community-building features that enhance the social aspects of group financing"
    ],
    designProcess: "Based on our research, we developed detailed user personas and mapped complete user journeys from onboarding through final payout. Our initial design concepts focused on addressing key pain points around trust and transparency. User testing revealed several challenges in our early prototypes, leading to significant improvements including a streamlined tab-based interface, enhanced trust features, and interactive timelines.",
    results: "Our beta testing phase showed promising results with 89% of users successfully completing key tasks without assistance, 92% reporting confidence in the platform's security measures, and 90% indicating they would use the platform for their financial needs.",
    metrics: [
      "89% of users successfully completed key tasks without assistance",
      "92% reported feeling confident in the platform's security measures",
      "85% correctly explained how the tontine system works after using the app",
      "90% indicated they would use the platform for their financial needs"
    ],
    testimonial: {
      quote: "The timeline visualization makes it so much easier to understand when I'll receive my payout and what my obligations are.",
      author: "Emma",
      title: "20, Business Administration Student"
    },
    reflection: "This project reinforced several important design principles while teaching valuable new lessons about research-driven design and the importance of trust features in financial applications.",
    reflectionPoints: [
      "Research-driven design pays off: Our investment in thorough user research led to a product that genuinely addressed user needs",
      "Trust features are non-negotiable: The most appreciated features were those that enhanced transparency and trust",
      "Simplicity trumps feature richness: Users consistently preferred clear, simple interfaces over feature-rich but complex alternatives",
      "Educational components are essential: For innovative technologies, building in educational elements was crucial for adoption"
    ],
    nextProject: "telehealth"
  },
  telehealth: {
    title: "Telehealth Solution with Hologram Technology",
    subtitle: "Reimagining Rural Healthcare Through Hologram Technology",
    category: "Healthcare",
    client: "MediTech Solutions",
    duration: "4 Months",
    role: "UX Designer & Researcher",
    tools: ["Workshop Facilitation", "Journey Mapping", "Figma", "User Testing"],
    image: "public/lovable-uploads/2de23b23-f375-4498-8d10-cae73146064d.png",
    overview: "Designed an innovative mobile solution to address healthcare accessibility challenges in rural areas. The project incorporated hologram technology to enable remote consultations with specialists, significantly reducing travel time for patients with limited mobility.",
    mission: "Rural communities have limited access to specialized healthcare, forcing patients to travel long distances for consultations. Our mission was to leverage emerging technologies to bring specialist care directly to patients, regardless of their location.",
    opportunity: "By combining mobile technology with holographic interfaces, we could create an immersive telehealth experience that maintains the human connection while eliminating geographical barriers to healthcare access.",
    researchData: [
      "Conducted field studies in 5 rural communities to understand healthcare access barriers",
      "Interviewed 28 patients and 15 healthcare providers about telehealth preferences",
      "Analyzed transportation limitations affecting healthcare access",
      "Tested hologram technology acceptance across different demographics",
      "Organized collaborative workshops with healthcare professionals to identify key requirements"
    ],
    valueProps: [
      "Holographic consultation environment for immersive patient-doctor interaction",
      "Simplified appointment scheduling with automated reminders",
      "Integrated medical history and prescription system",
      "Accessibility features for elderly and disabled users"
    ],
    designProcess: "We took a collaborative workshop-based approach, bringing together rural patients, doctors, and technologists to co-create the solution. Through facilitated design thinking sessions, we developed journey maps, identified pain points, and ideated on potential solutions. This participatory process ensured that the final design addressed actual needs rather than assumptions about rural healthcare challenges.",
    results: "The platform reduced average patient travel times by 78% and increased specialist consultation access by 45% in pilot communities. User satisfaction scores reached 92% among both patients and healthcare providers.",
    metrics: [
      "78% reduction in patient travel time",
      "45% increase in specialist consultation access",
      "92% user satisfaction score",
      "66% decrease in missed appointments"
    ],
    testimonial: {
      quote: "The holographic consultation feature transformed how we deliver specialized care to rural patients. For the first time, we can provide a truly immersive clinical experience without requiring vulnerable patients to travel.",
      author: "Dr. Maria Santos",
      title: "Chief of Telemedicine, Regional Health Network"
    },
    reflection: "The workshop-based approach proved invaluable in bridging the gap between technological possibilities and practical healthcare needs. By involving all stakeholders from the beginning, we avoided creating a solution that was technically impressive but practically unusable.",
    reflectionPoints: [
      "Participatory design is essential when working with diverse stakeholders across technological literacy levels",
      "Technology should enhance human connection rather than replace it, especially in healthcare",
      "Accessibility considerations must be central from the beginning, not added as an afterthought",
      "Field testing in actual usage environments reveals critical issues that lab testing misses"
    ],
    nextProject: "iconset"
  },
  iconset: {
    title: "Cloning Lab Icon Set",
    subtitle: "Building Scientific Visualization Icon System",
    category: "Scientific Visualization",
    client: "BioTech Laboratories",
    duration: "2 Months",
    role: "Visual Designer & Workshop Facilitator",
    tools: ["Adobe Illustrator", "Design Workshops", "User Testing", "Style Guide Development"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    overview: "BioTech Laboratories needed a comprehensive set of scientific icons for their cloning lab software interfaces. The challenge was creating visually consistent icons that accurately represented complex scientific concepts while being immediately recognizable to laboratory technicians.",
    mission: "Laboratory software interfaces were using inconsistent, unclear iconography that caused confusion and errors during critical procedures. Scientists were struggling to quickly identify the right tools and processes, particularly under time pressure during sensitive experiments.",
    opportunity: "By developing a cohesive icon system based on scientific accuracy and usability principles, we could significantly improve workflow efficiency while reducing errors in laboratory procedures.",
    researchData: [
      "Shadowed laboratory technicians to observe their workflows and interaction patterns",
      "Analyzed existing iconography across laboratory software interfaces",
      "Conducted card sorting exercises to understand scientists' mental categorization of processes",
      "Reviewed scientific literature to ensure accuracy of visual representations",
      "Facilitated collaborative workshops with scientists to develop initial concepts"
    ],
    valueProps: [
      "Scientifically accurate visual representations of complex procedures",
      "Consistent visual language across the entire laboratory software ecosystem",
      "Intuitive recognition based on established scientific conventions",
      "Scalable system allowing for addition of new procedures and tools"
    ],
    designProcess: "We took a collaborative approach, organizing workshops with laboratory scientists to understand both the scientific accuracy requirements and the usability needs. Initial sketches were developed during these sessions, capturing the essential visual elements that scientists associated with each concept. These were refined into a consistent visual style, maintaining scientific accuracy while ensuring visual harmony.",
    results: "The icon system reduced task identification time by 42% and decreased procedural errors by 36%. 94% of laboratory staff reported improved workflow efficiency, and the onboarding time for new technicians decreased by 28%.",
    metrics: [
      "42% reduction in task identification time",
      "36% decrease in procedural errors",
      "94% of staff reported improved workflow efficiency",
      "28% decrease in onboarding time for new technicians"
    ],
    testimonial: {
      quote: "The new icon system has transformed our laboratory interfaces from a source of frustration to a genuinely helpful tool. The icons are scientifically accurate while being immediately recognizable, which is exactly what we needed.",
      author: "Dr. James Wilson",
      title: "Head of Cloning Laboratory, BioTech Laboratories"
    },
    reflection: "This project reinforced the importance of subject matter expertise in specialized design contexts. Scientific accuracy was as important as visual design principles, requiring deep collaboration with actual scientists rather than relying solely on design best practices.",
    reflectionPoints: [
      "Domain expertise is essential when designing for specialized professional contexts",
      "Consistent visual systems improve both efficiency and error reduction in complex workflows",
      "Co-creation with subject matter experts produces more accurate and usable results than designer-only approaches",
      "Even highly technical interfaces benefit significantly from thoughtful visual design"
    ],
    nextProject: "webapplication"
  },
  reporting: {
    title: "Reporting Module Optimization",
    subtitle: "Transforming data complexity into clarity",
    category: "Enterprise Software",
    client: "DataViz Enterprise",
    duration: "3 Months",
    role: "UX Researcher & Analyst",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    overview: "Transformed a complex, inefficient reporting system into an intuitive tool that reduced task completion time by 40%. Through extensive user research and workflow analysis, I identified and eliminated key pain points while enhancing data visualization capabilities.",
    mission: "The existing reporting system was causing significant productivity losses, with users spending excessive time creating basic reports. The system's complexity led to errors and incomplete data analysis, affecting business decision-making.",
    opportunity: "By reimagining the reporting workflow from the ground up, we could create an intuitive system that empowers users to quickly generate accurate, insightful reports without requiring advanced technical knowledge.",
    results: "After implementation, users completed reporting tasks 40% faster with a 65% reduction in support tickets related to reporting functions. Data accuracy improved by 28%, and the organization saw enhanced decision-making capabilities.",
    valueProps: [
      "Simplified report generation process with guided workflows",
      "Dynamic data visualization options tailored to different user needs",
      "One-click report sharing and collaboration features",
      "Customizable dashboard with real-time data integration"
    ],
    researchData: [
      "Conducted task analysis with 18 different user roles",
      "Created journey maps highlighting 5 critical pain points in the reporting process",
      "Analyzed 300+ support tickets to identify common user struggles",
      "Performed comparative usability testing against industry-standard reporting tools"
    ],
    testimonial: {
      quote: "What previously took our team days now takes hours. The redesigned reporting module has transformed how we analyze performance data and share insights across departments.",
      author: "Jessica Chen",
      title: "Operations Director, DataViz Enterprise"
    },
    reflection: "This project reinforced the importance of deep user research before attempting redesign. By understanding the specific pain points across different user roles, we could create targeted solutions that addressed real needs rather than assumptions.",
    reflectionPoints: [
      "Detailed task analysis reveals inefficiencies that aren't apparent in general user feedback",
      "Support ticket analysis provides quantitative data about actual user struggles",
      "Cross-role usability testing is essential for enterprise tools used by different departments",
      "Performance metrics should be defined early and measured consistently throughout implementation"
    ],
    nextProject: "freterium"
  },
  freterium: {
    title: "Freterium Supply Chain Platform",
    subtitle: "Reimagining logistics workflow management",
    category: "Supply Chain",
    client: "Freterium",
    duration: "10 Months",
    role: "Front-end Engineer & UX Designer",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    overview: "Led the redesign of a cloud-based supply chain platform's interface, improving overall performance and UX by 25%. The project involved reimagining complex logistics workflows while ensuring technical feasibility through direct front-end implementation.",
    mission: "Freterium's existing platform was powerful but difficult to navigate, leading to customer frustration and reduced adoption. As logistics operations grew more complex, the interface needed to scale accordingly while remaining intuitive.",
    opportunity: "By combining UX expertise with front-end implementation skills, we could create a seamless logistics management experience that handles complexity behind the scenes while presenting users with a clean, intuitive interface.",
    results: "The redesign resulted in a 25% improvement in task completion rates, 40% reduction in onboarding time for new customers, and a significant decrease in support requirements despite increasing platform capabilities.",
    valueProps: [
      "Unified dashboard for end-to-end supply chain visibility",
      "Intelligent workflow automation with exception handling",
      "Real-time tracking and notifications system",
      "Collaborative tools for multi-stakeholder logistics coordination"
    ],
    researchData: [
      "Shadowed logistics coordinators to understand daily workflow patterns",
      "Analyzed user interaction data from the existing platform",
      "Conducted usability testing with logistics professionals across different company sizes",
      "Mapped complex supply chain processes to identify optimization opportunities"
    ],
    testimonial: {
      quote: "The redesigned platform has completely transformed how we manage our logistics operations. What used to require multiple systems and constant back-and-forth now flows seamlessly in one intuitive interface.",
      author: "Mohammed El-Khatib",
      title: "Supply Chain Director, Global Logistics Co."
    },
    reflection: "This project highlighted the value of being both a designer and developer. By understanding technical constraints while designing, and user needs while developing, I could create solutions that were both user-friendly and technically feasible.",
    reflectionPoints: [
      "Complex workflows need to be broken into intuitive steps while maintaining context",
      "Direct implementation experience leads to more feasible design solutions",
      "User-centered design principles apply even to highly specialized professional tools",
      "Cross-functional collaboration between design and development teams improves outcomes"
    ],
    nextProject: "telehealth"
  }
};
