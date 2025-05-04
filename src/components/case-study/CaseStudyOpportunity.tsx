
import React from 'react';
import { ProjectData } from '@/types/project';
import { getImagePath } from '@/utils/imageUtils';

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
    <section className="py-12 bg-black">
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
            
            {/* UI mockups */}
            <div className="gap-8 py-8">
            {project.opportunityImages && project.opportunityImages.map((image, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden flex items-center">
                <img 
                  src={getImagePath(image)} 
                  alt="Overview" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOpportunity;
