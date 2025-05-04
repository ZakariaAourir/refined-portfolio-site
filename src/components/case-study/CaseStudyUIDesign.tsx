
import React from 'react';
import { ProjectData } from '@/types/project';
import { getImagePath } from '@/utils/imageUtils';

interface CaseStudyUIDesignProps {
  project: ProjectData;
}

const CaseStudyUIDesign: React.FC<CaseStudyUIDesignProps> = ({ project }) => {
  if (!project.uiDesign) return null;
  
  // Determine section title based on project category
  const getSectionTitle = () => {
    const category = project.category.toLowerCase();
    if (category.includes('visual') || category.includes('icon')) {
      return "VISUAL DESIGN SYSTEM";
    } else if (category.includes('healthcare')) {
      return "INTERFACE DESIGN";
    } else if (category.includes('fintech')) {
      return "FINANCIAL INTERFACE";
    } else {
      return "UI DESIGN";
    }
  };
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-32">
              <p className="text-sm text-accent mb-2">06 | {getSectionTitle()}</p>
              <h2 className="text-3xl font-bold mb-6">
                {project.category.includes('Visual') ? "Visual Design System" : "User Interface Design"}
              </h2>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-300 mb-8">{project.uiDesign}</p>
            
            {/* UI Screenshots grid */}
            <div className="rounded-xl overflow-hidden">
              {project.uiDesignImages && project.uiDesignImages.map((image, index) => (
                <img 
                  key={index}
                  src={getImagePath(image)}
                  alt={`Design visualization ${index + 1}`}
                  className="w-full mb-4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyUIDesign;
