
import React from 'react';
import { ProjectData } from '@/types/project';

interface CaseStudyDesignProcessProps {
  project: ProjectData;
}

const CaseStudyDesignProcess: React.FC<CaseStudyDesignProcessProps> = ({ project }) => {
  if (!project.designProcess) return null;
  
  // Determine section title based on project category and properties
  const getSectionTitle = () => {
    const category = project.category.toLowerCase();
    if (category.includes('research') || category.includes('industrial')) {
      return "RESEARCH PROCESS";
    } else if (category.includes('visual') || category.includes('icon')) {
      return "VISUAL DESIGN PROCESS";
    } else if (category.includes('healthcare')) {
      return "SOLUTION DEVELOPMENT";
    } else if (category.includes('fintech')) {
      return "PRODUCT DEVELOPMENT";
    } else {
      return "DESIGN PROCESS";
    }
  };
  
  // Determine heading based on project focus
  const getHeading = () => {
    if (project.category.includes('Management') || project.category.includes('Industrial')) {
      return "From investigation to recommendation";
    } else if (project.category.includes('Visual') || project.category.includes('icon')) {
      return "From concept to visual system";
    } else if (project.tools && project.tools.includes("Workshop Facilitation")) {
      return "Workshop-led design process";
    } else {
      return "From concept to implementation";
    }
  };
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-32">
              <p className="text-sm text-accent mb-2">05 | {getSectionTitle()}</p>
              <h2 className="text-3xl font-bold mb-6">{getHeading()}</h2>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-300 mb-8">{project.designProcess}</p>
            
            {/* Design process images */}
            {project.designImages && (
              <div className="space-y-6">
                {project.designImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Design process step ${index + 1}`}
                    className="w-full rounded-xl"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDesignProcess;
