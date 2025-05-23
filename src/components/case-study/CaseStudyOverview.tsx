
import React from 'react';
import { ProjectData } from '@/types/project';
import { getImagePath } from '@/utils/imageUtils';

interface CaseStudyOverviewProps {
  project: ProjectData;
}

const CaseStudyOverview: React.FC<CaseStudyOverviewProps> = ({ project }) => {
  if (!project.overview) return null;
  
  // Determine section title based on project category
  const getSectionTitle = () => {
    const category = project.category.toLowerCase();
    if (category.includes('research') || category.includes('industrial')) {
      return "PROJECT CONTEXT";
    } else if (category.includes('visual') || category.includes('icon')) {
      return "VISUAL CHALLENGE";
    } else if (category.includes('healthcare')) {
      return "HEALTHCARE CHALLENGE";
    } else if (category.includes('fintech')) {
      return "FINANCIAL SOLUTION";
    } else {
      return "COMPANY OVERVIEW";
    }
  };
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-32">
              <p className="text-sm text-accent mb-2">01 | {getSectionTitle()}</p>
              <h2 className="text-3xl font-bold mb-6">
                {project.category.includes('Fintech') ? "Reimagining financial access" : 
                 project.category.includes('Healthcare') ? "Expanding healthcare reach" : 
                 project.category.includes('Visual') ? "Creating visual language" : 
                 project.category.includes('Management') ? "Streamlining workflows" : 
                 "A Glovo for recruiters and talent seekers"}
              </h2>
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
                The goal was to {
                  project.category.includes('Fintech') ? "create an accessible financial platform for students using cultural lending practices" :
                  project.category.includes('Healthcare') ? "bring specialized medical care to underserved rural communities through technology" :
                  project.category.includes('Visual') ? "translate complex scientific concepts into a cohesive visual language" :
                  project.category.includes('Management') ? "simplify document management for construction teams through user-centered design" :
                  "simplify and speed up recruitment for businesses by providing access to top independent recruiters, all through a smart, intuitive platform that helps companies hire better, faster."
                }
              </p>
            </div>
            
            {project.results && (
              <p className="text-lg text-gray-300">{project.results}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 py-8">
          {project.overViewImages && project.overViewImages.map((image, index) => (
            <div key={index} className="w-full px-4 mb-8">
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <img 
                  src={getImagePath(image)} 
                  alt="Overview" 
                  className="w-full h-84 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOverview;
