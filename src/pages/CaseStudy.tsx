
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

// Define a complete project type with all possible properties
interface ProjectData {
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

// Define project data (normally this would come from an API or CMS)
const projectsData: Record<string, ProjectData> = {
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

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;
  
  if (!project) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
            <p className="mb-6">The case study you're looking for doesn't exist.</p>
            <Link to="/work" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  const nextProjectSlug = project.nextProject;
  const nextProject = nextProjectSlug ? projectsData[nextProjectSlug as keyof typeof projectsData] : null;

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/work" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to all projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              {project.subtitle && (
                <p className="text-xl text-gray-300 mb-6">{project.subtitle}</p>
              )}
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Client</p>
                  <p className="font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Duration</p>
                  <p className="font-medium">{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Role</p>
                  <p className="font-medium">{project.role}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Project Type</p>
                  <p className="font-medium">{project.category}</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Overview Section */}
      {project.overview && (
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <div className="sticky top-32">
                  <p className="text-sm text-accent mb-2">01 | COMPANY OVERVIEW</p>
                  <h2 className="text-3xl font-bold mb-6">A Glovo for recruiters and talent seekers</h2>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-300 mb-8">{project.overview}</p>
                
                {/* TLDR Box */}
                <div className="bg-gray-900 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="inline-block w-6 h-6 rounded-full bg-accent/20 text-accent text-sm flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                    </span>
                    TLDR
                  </h3>
                  <p className="text-gray-400">
                    The goal was to simplify and speed up recruitment for businesses by providing access to top independent recruiters, all through a smart, intuitive platform that helps companies hire better, faster.
                  </p>
                </div>
                
                {project.results && (
                  <p className="text-lg text-gray-300">{project.results}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* My Mission Section */}
      {project.mission && (
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <div className="sticky top-32">
                  <p className="text-sm text-accent mb-2">02 | MY MISSION</p>
                  <h2 className="text-3xl font-bold mb-6">My mission</h2>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-300 mb-8">{project.mission}</p>
                
                {/* Before image or visualization would go here */}
                <div className="rounded-xl overflow-hidden mb-8">
                  <img 
                    src="public/lovable-uploads/c253dd23-a0b3-4d85-ab47-78391ec541b1.png" 
                    alt="Before state of the product" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Opportunity Section */}
      {project.opportunity && (
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <div className="sticky top-32">
                  <p className="text-sm text-accent mb-2">03 | OPPORTUNITY</p>
                  <h2 className="text-3xl font-bold mb-6">KWIKS: Fast, transparent, trusted hiring</h2>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-300 mb-8">{project.opportunity}</p>
                
                {/* Value Proposition Box */}
                {project.valueProps && (
                  <div className="bg-gray-900 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <span className="inline-block w-6 h-6 rounded-full bg-accent/20 text-accent text-sm flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78"/></svg>
                      </span>
                      VALUE PROPOSITION
                    </h3>
                    <ul className="space-y-2">
                      {project.valueProps.map((prop, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span className="text-gray-400">{prop}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* UI mockups */}
                <div className="space-y-6">
                  <img 
                    src="public/lovable-uploads/70bde27d-0e12-4d2b-86bb-f940e952e85c.png" 
                    alt="KWIKS UI Mockup" 
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Research Section */}
      {project.researchData && (
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <div className="sticky top-32">
                  <p className="text-sm text-accent mb-2">04 | RESEARCH</p>
                  <h2 className="text-3xl font-bold mb-6">Identifying users' problems.</h2>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-300 mb-8">
                  Through systematic analysis of operations data received from KWIKS management:
                </p>
                
                <ul className="space-y-3 mb-8">
                  {project.researchData.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Research image */}
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="public/lovable-uploads/e1467485-238d-419b-a09e-bd6cb4fa5688.png" 
                    alt="Research data visualization" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Results Section */}
      {project.testimonial && (
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <div className="sticky top-32">
                  <p className="text-sm text-accent mb-2">06 | RESULTS</p>
                  <h2 className="text-3xl font-bold mb-6">Client Feedback</h2>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-gray-900 rounded-xl p-8 mb-8">
                  <svg className="text-gray-700 w-12 h-12 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <p className="text-lg text-gray-300 mb-6">
                    {project.testimonial.quote}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                        alt={project.testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{project.testimonial.author}</p>
                      <p className="text-sm text-gray-400">{project.testimonial.title}</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link to="/contact" className="btn-primary">
                    Start a project together
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Next Project Navigation */}
      {nextProject && (
        <section className="py-16 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-8">
              <p className="text-sm text-gray-400 mb-2">NEXT PROJECT</p>
              <h2 className="text-3xl font-bold">{nextProject.title}</h2>
            </div>
            
            <div className="rounded-xl overflow-hidden mb-8">
              <img 
                src={nextProject.image} 
                alt={nextProject.title} 
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="text-center">
              <Link 
                to={`/case-study/${nextProjectSlug}`} 
                className="btn-primary inline-flex items-center"
              >
                View next project <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </>
  );
};

export default CaseStudy;
