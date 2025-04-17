
import React from 'react';
import { ProjectData } from '@/types/project';
import { ShieldCheck, Lightbulb, AlertCircle } from 'lucide-react';

interface CaseStudyValuePropsProps {
  project: ProjectData;
}

const CaseStudyValueProps: React.FC<CaseStudyValuePropsProps> = ({ project }) => {
  // Check if we have the new opportunities format or fall back to valueProps
  const hasOpportunities = project.opportunities && project.opportunities.length > 0;
  const hasChallenges = project.designChallenges && project.designChallenges.length > 0;
  const hasLegacyValueProps = project.valueProps && project.valueProps.length > 0;
  
  if (!hasOpportunities && !hasChallenges && !hasLegacyValueProps) return null;
  
  // Determine section title based on project category
  const getSectionTitle = () => {
    const category = project.category.toLowerCase();
    if (category.includes('research') || category.includes('industrial')) {
      return "SOLUTION CRITERIA";
    } else if (category.includes('visual') || category.includes('icon')) {
      return "DESIGN PRINCIPLES";
    } else if (category.includes('healthcare')) {
      return "CARE INNOVATIONS";
    } else if (category.includes('fintech')) {
      return "PLATFORM ADVANTAGES";
    } else if (category.includes('ux') || category.includes('user experience')) {
      return "OPPORTUNITIES & CHALLENGES";
    } else {
      return "VALUE PROPOSITION";
    }
  };
  
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10">
          <p className="text-sm text-accent mb-2">{getSectionTitle()}</p>
          <h2 className="text-3xl font-bold">
            {hasOpportunities && hasChallenges 
              ? "Opportunities & Challenges" 
              : hasOpportunities 
                ? "Key Opportunities" 
                : hasChallenges 
                  ? "Design Challenges" 
                  : "Key Benefits"}
          </h2>
        </div>
        
        {/* Display Opportunities if available */}
        {hasOpportunities && (
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-6">Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.opportunities.map((opportunity) => (
                <div key={opportunity.number} className="bg-gray-900 rounded-xl p-6 flex">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Lightbulb className="text-accent" size={20} />
                    </div>
                  </div>
                  <div>
                    <p className="text-accent font-medium mb-2">Opportunity #{opportunity.number}</p>
                    <p className="text-gray-300">{opportunity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Display Challenges if available */}
        {hasChallenges && (
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-6">Challenges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.designChallenges.map((challenge) => (
                <div key={challenge.number} className="bg-gray-900 rounded-xl p-6 flex">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <AlertCircle className="text-red-500" size={20} />
                    </div>
                  </div>
                  <div>
                    <p className="text-red-500 font-medium mb-2">Challenge #{challenge.number}</p>
                    <p className="text-gray-300">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Display legacy value props if no new format data is available */}
        {!hasOpportunities && !hasChallenges && hasLegacyValueProps && (
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
        )}
      </div>
    </section>
  );
};

export default CaseStudyValueProps;
