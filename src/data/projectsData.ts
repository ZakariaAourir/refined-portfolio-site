
import { ProjectsDataRecord } from "@/types/project";

// Define project data (normally this would come from an API or CMS)
export const projectsData: ProjectsDataRecord = {
  kwiks: {
    title: "KWIKS",
    subtitle: "A Glovo for recruiters and talent seekers",
    category: "SaaS Recruitment Platform",
    client: "KWIKS",
    duration: "3 Months",
    role: "Lead Product Designer",
    image: "public/lovable-uploads/2de23b23-f375-4498-8d10-cae73146064d.png",
    overview: "The KWIKS team set out to reinvent how companies hire talent by creating a recruitment marketplace that connects businesses with specialized headhunters and freelance recruiters around the world. They partnered with us to build their platform from the ground up—focusing on a complete user journey, AI-powered hiring tools, and a more transparent recruiter experience.",
    mission: "The previous version was unstable and slow, leading to frequent crashes and a frustrating user experience for customers. Additionally, the team struggled to implement new features due to the platform's outdated infrastructure. This made the project critical, necessitating a redesign within the shortest possible timeframe to stabilize the platform, enhance user satisfaction, and enable future scalability.",
    opportunity: "Hiring is often slow, expensive, and frustrating—especially for growing businesses that need to rapidly build teams but don't have access to trusted recruitment resources. The KWIKS platform aims to solve this by connecting companies with vetted, specialized recruiters through a seamless digital experience.",
    researchData: [
      "Evaluated detailed Excel datasets from Operations and Management teams",
      "Extracted actionable patterns from quantitative user behavior metrics",
      "Identified critical pain points revealed through structured user analysis",
      "Translated complex operational feedback into clear user requirements",
      "Prioritized improvements based on data-supported impact assessments",
      "Delivered evidence-based recommendations that enhanced platform usability"
    ],
    valueProps: [
      "AI-powered recruiter matching tailored to each hiring mission",
      "Transparent commissions and upfront collaboration terms",
      "Real-time mission tracking with simplified workflows",
      "Global network of independent headhunters, all in one platform"
    ],
    results: "By the end of the project, we redesigned the full platform experience, restructured the sitemap, and delivered an entirely new visual identity—touching everything from the product UI and prototyping to the investor pitch deck and developer handoff.",
    testimonial: {
      quote: "I had the pleasure of working with Youssef on the new version of the KWIKS app, where he was in charge of creating the new UX/UI environment. Youssef did an outstanding job, consistently delivering high-quality work and respecting all the deadlines set for him.",
      author: "Karim Rassaoui",
      title: "Co-founder and CPO @KWIKS"
    },
    nextProject: "healthconnect"
  },
  healthconnect: {
    title: "HealthConnect",
    subtitle: "Simplified healthcare access for everyone",
    category: "Healthcare Mobile App",
    client: "MediTech Solutions",
    duration: "4 Months",
    role: "UX Researcher & UI Designer",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    overview: "MediTech Solutions aimed to revolutionize how patients access healthcare services through a mobile-first approach, making appointment scheduling, medication management, and provider communication seamless and accessible.",
    mission: "The market was flooded with complicated healthcare apps that confused elderly users and those with limited tech experience. Our mission was to create an intuitive, accessible interface that anyone could use, regardless of their technical proficiency.",
    opportunity: "By simplifying the healthcare experience, we could improve medication adherence, reduce missed appointments, and create better health outcomes through improved patient-provider communication.",
    results: "The app launched with a 96% user satisfaction rate and reduced appointment no-shows by 42% in partner clinics within the first three months of deployment.",
    valueProps: [
      "One-tap appointment scheduling and reminders",
      "Secure messaging with healthcare providers",
      "Medication tracking with customizable reminders",
      "Integrated telehealth capabilities"
    ],
    researchData: [
      "Conducted interviews with 45 patients across diverse demographics",
      "Analyzed usage patterns of competing healthcare applications",
      "Performed usability testing with focus on elderly participants",
      "Created user journey maps highlighting key pain points"
    ],
    testimonial: {
      quote: "Working with Alex transformed our vision into a reality. The intuitive design has made healthcare accessible to our patients who previously struggled with technology.",
      author: "Dr. Emily Chen",
      title: "Chief Medical Officer, MediTech Solutions"
    },
    nextProject: "financeflow"
  },
  financeflow: {
    title: "FinanceFlow",
    subtitle: "Simplifying complex financial data",
    category: "Fintech Dashboard",
    client: "NextGen Financial",
    duration: "2 Months",
    role: "UI Designer",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    overview: "NextGen Financial needed to transform their complex financial dashboard into an intuitive interface that both financial experts and everyday users could navigate with ease.",
    mission: "Users were overwhelmed by data-heavy screens that required financial expertise to interpret. Our challenge was to present complex financial information in a visually digestible way that empowered rather than confused users.",
    opportunity: "By redesigning the dashboard with intuitive data visualization and clear user flows, we could help users make better financial decisions and increase platform engagement.",
    results: "After redesign, user time-on-platform increased by 37% and task completion rates improved by 28%, with financial advisors reporting higher client satisfaction.",
    valueProps: [
      "AI-powered financial insights in plain language",
      "Customizable dashboard with drag-and-drop widgets",
      "Predictive spending and saving visualizations",
      "One-click financial report generation"
    ],
    researchData: [
      "Conducted competitive analysis of leading fintech interfaces",
      "Performed card sorting exercises to optimize information architecture",
      "Analyzed heat maps of user interactions with the existing platform",
      "Tested various data visualization approaches with target users"
    ],
    testimonial: {
      quote: "Alex took our data-heavy platform and transformed it into something beautiful yet functional. Our clients now understand their finances at a glance.",
      author: "Michael Finch",
      title: "Product Lead, NextGen Financial"
    },
    nextProject: "cybershield"
  },
  cybershield: {
    title: "CyberShield",
    subtitle: "Making cybersecurity accessible",
    category: "Cyber Security Platform",
    client: "SecureTech Inc.",
    duration: "3 Months",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    overview: "SecureTech Inc. wanted to demystify cybersecurity for small businesses and non-technical users by creating an intuitive platform that simplified threat detection and protection.",
    mission: "Cybersecurity tools have traditionally been designed for IT professionals, leaving small businesses vulnerable. Our mission was to create an interface that translated complex security concepts into actionable insights for non-technical users.",
    opportunity: "By making cybersecurity accessible to everyone, we could help protect more small businesses from increasingly sophisticated cyber threats and data breaches.",
    results: "The redesigned platform saw a 65% increase in user adoption and helped prevent over 1,200 potential security breaches for small business customers within the first year.",
    valueProps: [
      "Real-time threat visualization in non-technical language",
      "One-click security improvements based on personalized recommendations",
      "Automated vulnerability scanning with visual results",
      "Security health score with actionable improvement steps"
    ],
    researchData: [
      "Interviewed small business owners about their cybersecurity concerns",
      "Analyzed key user friction points in existing security tools",
      "Tested security visualization concepts with non-technical users",
      "Conducted comparative usability testing against leading products"
    ],
    testimonial: {
      quote: "Alex translated our complex security technology into a user experience that even my least technical clients can understand and use effectively.",
      author: "Sarah Jenkins",
      title: "CEO, SecureTech Inc."
    },
    nextProject: "kwiks"
  }
};
