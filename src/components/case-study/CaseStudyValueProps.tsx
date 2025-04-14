
import React from 'react';
import { ProjectData } from '@/types/project';
import { ShieldCheck } from 'lucide-react';

interface CaseStudyValuePropsProps {
  project: ProjectData;
}

const CaseStudyValueProps: React.FC<CaseStudyValuePropsProps> = ({ project }) => {
  if (!project.valueProps || project.valueProps.length === 0) return null;
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10">
          <p className="text-sm text-accent mb-2">VALUE PROPOSITION</p>
          <h2 className="text-3xl font-bold">Key Benefits</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.valueProps.map((prop, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 flex">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <ShieldCheck className="text-accent" size={20} />
                </div>
              </div>
              <div>
                <p className="text-gray-300">{prop}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyValueProps;
