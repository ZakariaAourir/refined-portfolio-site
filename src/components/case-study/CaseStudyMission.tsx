
import React from 'react';
import { ProjectData } from '@/types/project';

interface CaseStudyMissionProps {
  project: ProjectData;
}

const CaseStudyMission: React.FC<CaseStudyMissionProps> = ({ project }) => {
  if (!project.mission) return null;
  
  // Determine section title based on project category and properties
  const getSectionTitle = () => {
    const category = project.category.toLowerCase();
    if (category.includes('research') || category.includes('industrial')) {
      return "RESEARCH OBJECTIVE";
    } else if (category.includes('visual') || category.includes('icon')) {
      return "DESIGN OBJECTIVE";
    } else if (category.includes('healthcare')) {
      return "CARE MISSION";
    } else if (category.includes('fintech')) {
      return "FINANCIAL MISSION";
    } else {
      return "MY MISSION";
    }
  };
  
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-32">
              <p className="text-sm text-accent mb-2">02 | {getSectionTitle()}</p>
              <h2 className="text-3xl font-bold mb-6">{getSectionTitle()}</h2>
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
  );
};

export default CaseStudyMission;
