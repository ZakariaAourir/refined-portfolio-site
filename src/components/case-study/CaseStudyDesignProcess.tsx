
import React from 'react';
import { ProjectData } from '@/types/project';

interface CaseStudyDesignProcessProps {
  project: ProjectData;
}

const CaseStudyDesignProcess: React.FC<CaseStudyDesignProcessProps> = ({ project }) => {
  if (!project.designProcess) return null;
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-32">
              <p className="text-sm text-accent mb-2">05 | DESIGN PROCESS</p>
              <h2 className="text-3xl font-bold mb-6">From concept to implementation</h2>
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
