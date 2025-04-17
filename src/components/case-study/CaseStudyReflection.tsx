
import React from 'react';
import { ProjectData } from '@/types/project';
import { Star } from 'lucide-react';

interface CaseStudyReflectionProps {
  project: ProjectData;
}

const CaseStudyReflection: React.FC<CaseStudyReflectionProps> = ({ project }) => {
  // Check if we have the new keyLearnings format or fall back to reflectionPoints
  const hasKeyLearnings = project.keyLearnings && project.keyLearnings.length > 0;
  const hasLegacyReflection = project.reflection || (project.reflectionPoints && project.reflectionPoints.length > 0);
  
  if (!hasKeyLearnings && !hasLegacyReflection) return null;
  
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
    } else if (category.includes('ux') || category.includes('user experience')) {
      return "KEY LEARNINGS";
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
              <h2 className="text-3xl font-bold mb-6">
                {hasKeyLearnings ? "Key Learnings" : "Lessons Learned"}
              </h2>
              
              {/* Display project outcomes if available */}
              {project.projectOutcomes && project.projectOutcomes.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Project Outcomes</h3>
                  <ul className="space-y-2">
                    {project.projectOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-gray-400">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Display limitations if available */}
              {project.limitations && project.limitations.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Limitations</h3>
                  <ul className="space-y-2">
                    {project.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-400">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Display future improvements if available */}
              {project.futureImprovements && project.futureImprovements.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Future Improvements</h3>
                  <ul className="space-y-2">
                    {project.futureImprovements.map((improvement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-gray-400">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            {/* Show legacy reflection text if available */}
            {project.reflection && (
              <p className="text-lg text-gray-300 mb-8">{project.reflection}</p>
            )}
            
            {/* Display new format key learnings */}
            {hasKeyLearnings && (
              <div className="space-y-6 mb-8">
                {project.keyLearnings.map((learning) => (
                  <div key={learning.number} className="bg-gray-900 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                          <Star className="text-accent" size={20} />
                        </div>
                      </div>
                      <p className="text-accent font-medium">Learning #{learning.number}</p>
                    </div>
                    <p className="text-gray-300">{learning.learning}</p>
                  </div>
                ))}
              </div>
            )}
            
            {/* Display legacy reflection points if no key learnings but reflection points exist */}
            {!hasKeyLearnings && project.reflectionPoints && (
              <ul className="space-y-3 mb-8">
                {project.reflectionPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-400">{point}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {/* Display relevant resources if available */}
            {project.relevantResources && project.relevantResources.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Relevant Resources</h3>
                <ul className="space-y-2">
                  {project.relevantResources.map((resource, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray-400">{resource}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyReflection;
