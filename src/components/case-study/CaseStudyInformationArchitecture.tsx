
import React from 'react';
import { ProjectData } from '@/types/project';
import { Network, LayoutGrid, FileText, Workflow } from 'lucide-react';

interface CaseStudyInformationArchitectureProps {
  project: ProjectData;
}

const CaseStudyInformationArchitecture: React.FC<CaseStudyInformationArchitectureProps> = ({ project }) => {
  // Check if we have any IA content
  const hasTaskModels = !!project.taskModels;
  const hasExperienceMaps = !!project.userExperienceMaps;
  const hasSiteMaps = !!project.siteMaps;
  const hasContentStructure = !!project.contentStructure;
  const hasImages = project.informationArchitectureImages && project.informationArchitectureImages.length > 0;
  
  // Return null if no IA content exists
  if (!hasTaskModels && !hasExperienceMaps && !hasSiteMaps && !hasContentStructure && !hasImages) {
    return null;
  }
  
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-32">
              <p className="text-sm text-accent mb-2">04 | INFORMATION ARCHITECTURE</p>
              <h2 className="text-3xl font-bold mb-6">Planning & Structure</h2>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Task Models */}
              {hasTaskModels && (
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                      <Workflow className="text-accent" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">Task Models</h3>
                  </div>
                  <p className="text-gray-300">{project.taskModels}</p>
                </div>
              )}
              
              {/* User Experience Maps */}
              {hasExperienceMaps && (
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                      <Network className="text-accent" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">Experience Maps</h3>
                  </div>
                  <p className="text-gray-300">{project.userExperienceMaps}</p>
                </div>
              )}
              
              {/* Site Maps */}
              {hasSiteMaps && (
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                      <LayoutGrid className="text-accent" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">Site Maps</h3>
                  </div>
                  <p className="text-gray-300">{project.siteMaps}</p>
                </div>
              )}
              
              {/* Content Structure */}
              {hasContentStructure && (
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                      <FileText className="text-accent" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">Content Structure</h3>
                  </div>
                  <p className="text-gray-300">{project.contentStructure}</p>
                </div>
              )}
            </div>
            
            {/* Display architecture images if available */}
            {hasImages && (
              <div className="space-y-6">
                {project.informationArchitectureImages.map((image, index) => (
                  <div key={index} className="rounded-xl overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Information architecture visual ${index + 1}`} 
                      className="w-full" 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyInformationArchitecture;
