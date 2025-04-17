
import React from 'react';
import { ProjectData } from '@/types/project';
import { MessageCircle, Search } from 'lucide-react';

interface CaseStudyInterviewFindingsProps {
  project: ProjectData;
}

const CaseStudyInterviewFindings: React.FC<CaseStudyInterviewFindingsProps> = ({ project }) => {
  // Check if we have the new interviewInsights format or fall back to interviewFindings
  const hasInterviewInsights = project.interviewInsights && project.interviewInsights.length > 0;
  const hasLegacyFindings = project.interviewFindings && project.interviewFindings.length > 0;
  
  if (!hasInterviewInsights && !hasLegacyFindings) return null;
  
  // Determine section title based on project category
  const getSectionTitle = () => {
    const category = project.category.toLowerCase();
    if (category.includes('research') || category.includes('industrial')) {
      return "USER INTERVIEWS";
    } else if (category.includes('healthcare')) {
      return "PATIENT FEEDBACK";
    } else if (category.includes('fintech')) {
      return "CUSTOMER INSIGHTS";
    } else if (category.includes('ux') || category.includes('user experience')) {
      return "RESEARCH INSIGHTS";
    } else {
      return "INTERVIEW FINDINGS";
    }
  };
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10">
          <p className="text-sm text-accent mb-2">{getSectionTitle()}</p>
          <h2 className="text-3xl font-bold">
            {project.category.includes('Management') ? "Key Pain Points" : 
             hasInterviewInsights ? "User Research Insights" : "What We Discovered"}
          </h2>
        </div>
        
        <div className="space-y-6">
          {/* Display new format interview insights if available */}
          {hasInterviewInsights && project.interviewInsights.map((insight) => (
            <div key={insight.number} className="bg-gray-900 rounded-xl p-6">
              <div className="flex mb-4">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Search className="text-accent" size={20} />
                  </div>
                </div>
                <div>
                  <p className="text-accent font-medium">Interview Insight #{insight.number}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{insight.insight}</p>
              
              {insight.quote && (
                <div className="pl-4 border-l-2 border-accent/50 mt-4">
                  <p className="text-gray-400 italic">"{insight.quote}"</p>
                </div>
              )}
            </div>
          ))}
          
          {/* Display legacy interview findings if no new format data is available */}
          {!hasInterviewInsights && hasLegacyFindings && project.interviewFindings.map((finding, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 flex">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <MessageCircle className="text-accent" size={20} />
                </div>
              </div>
              <div>
                <p className="text-gray-300">{finding}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyInterviewFindings;
