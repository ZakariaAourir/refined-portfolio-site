
import React from 'react';
import { ProjectData } from '@/types/project';

interface CaseStudyOpportunityProps {
  project: ProjectData;
}

const CaseStudyOpportunity: React.FC<CaseStudyOpportunityProps> = ({ project }) => {
  if (!project.opportunity) return null;
  
  // Determine section title based on project category
  const getSectionTitle = () => {
    const category = project.category.toLowerCase();
    if (category.includes('research') || category.includes('industrial')) {
      return "PROBLEM SPACE";
    } else if (category.includes('visual') || category.includes('icon')) {
      return "DESIGN CHALLENGE";
    } else if (category.includes('healthcare')) {
      return "HEALTHCARE GAP";
    } else if (category.includes('fintech')) {
      return "MARKET OPPORTUNITY";
    } else {
      return "OPPORTUNITY";
    }
  };
  
  // Determine heading based on project title
  const getHeading = () => {
    if (project.title.includes('Tontina')) {
      return "Modern financial solutions for students";
    } else if (project.title.includes('Telehealth')) {
      return "Bringing care to underserved communities";
    } else if (project.title.includes('Icon')) {
      return "Scientific visualization through design";
    } else if (project.title.includes('GED') || project.title.includes('Beyond InSite')) {
      return "Enhancing document workflow efficiency";
    } else {
      return "KWIKS: Fast, transparent, trusted hiring";
    }
  };
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-32">
              <p className="text-sm text-accent mb-2">03 | {getSectionTitle()}</p>
              <h2 className="text-3xl font-bold mb-6">{getHeading()}</h2>
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
  );
};

export default CaseStudyOpportunity;
