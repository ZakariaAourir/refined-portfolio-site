
import React from 'react';
import { ProjectData } from '@/types/project';

interface CaseStudyUIDesignProps {
  project: ProjectData;
}

const CaseStudyUIDesign: React.FC<CaseStudyUIDesignProps> = ({ project }) => {
  if (!project.uiDesign) return null;
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-32">
              <p className="text-sm text-accent mb-2">06 | UI DESIGN</p>
              <h2 className="text-3xl font-bold mb-6">User Interface Design</h2>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-300 mb-8">{project.uiDesign}</p>
            
            {/* UI Screenshots grid will be handled by a separate component */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyUIDesign;
