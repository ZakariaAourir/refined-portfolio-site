
import React from 'react';
import { ProjectData } from '@/types/project';

interface CaseStudyReflectionProps {
  project: ProjectData;
}

const CaseStudyReflection: React.FC<CaseStudyReflectionProps> = ({ project }) => {
  if (!project.reflection) return null;
  
  // Determine section title based on project category
  const getSectionTitle = () => {
    const category = project.category.toLowerCase();
    if (category.includes('research') || category.includes('industrial')) {
      return "RESEARCH REFLECTION";
    } else if (category.includes('visual') || category.includes('icon')) {
      return "DESIGN REFLECTION";
    } else if (category.includes('healthcare')) {
      return "HEALTHCARE INSIGHTS";
    } else if (category.includes('fintech')) {
      return "PROJECT LEARNINGS";
    } else {
      return "REFLECTION";
    }
  };
  
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-32">
              <p className="text-sm text-accent mb-2">07 | {getSectionTitle()}</p>
              <h2 className="text-3xl font-bold mb-6">Lessons Learned</h2>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-300 mb-8">{project.reflection}</p>
            
            {project.reflectionPoints && (
              <ul className="space-y-3 mb-8">
                {project.reflectionPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-400">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyReflection;
