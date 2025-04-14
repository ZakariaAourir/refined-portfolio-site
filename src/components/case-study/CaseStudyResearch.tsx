
import React from 'react';
import { ProjectData } from '@/types/project';

interface CaseStudyResearchProps {
  project: ProjectData;
}

const CaseStudyResearch: React.FC<CaseStudyResearchProps> = ({ project }) => {
  if (!project.researchData) return null;
  
  // Determine section title based on project category and properties
  const getSectionTitle = () => {
    const category = project.category.toLowerCase();
    if (category.includes('research') || category.includes('industrial')) {
      return "RESEARCH METHODOLOGY";
    } else if (category.includes('visual') || category.includes('icon')) {
      return "VISUAL RESEARCH";
    } else if (category.includes('healthcare')) {
      return "HEALTHCARE INSIGHTS";
    } else if (category.includes('fintech')) {
      return "USER NEEDS ANALYSIS";
    } else {
      return "RESEARCH";
    }
  };
  
  // Determine heading based on project focus
  const getHeading = () => {
    if (project.interviewFindings && project.interviewFindings.length > 0) {
      return "Uncovering user pain points.";
    } else if (project.userInsights && project.userInsights.length > 0) {
      return "Understanding user perspectives.";
    } else if (project.category.includes('Visual')) {
      return "Establishing visual foundations.";
    } else {
      return "Identifying users' problems.";
    }
  };
  
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-32">
              <p className="text-sm text-accent mb-2">04 | {getSectionTitle()}</p>
              <h2 className="text-3xl font-bold mb-6">{getHeading()}</h2>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-300 mb-8">
              {project.category.includes('Management') ? 
                "Through systematic user interviews and direct observation:" : 
                "Through systematic analysis of operations data received from KWIKS management:"}
            </p>
            
            <ul className="space-y-3 mb-8">
              {project.researchData.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
            
            {/* Research image */}
            <div className="rounded-xl overflow-hidden">
              <img 
                src="public/lovable-uploads/e1467485-238d-419b-a09e-bd6cb4fa5688.png" 
                alt="Research data visualization" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyResearch;
