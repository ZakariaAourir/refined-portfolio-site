
import React from 'react';
import { ProjectData } from '@/types/project';
import { Quote } from 'lucide-react';

interface CaseStudyUserInsightsProps {
  project: ProjectData;
}

const CaseStudyUserInsights: React.FC<CaseStudyUserInsightsProps> = ({ project }) => {
  if (!project.userInsights || project.userInsights.length === 0) return null;
  
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10">
          <p className="text-sm text-accent mb-2">USER INSIGHTS</p>
          <h2 className="text-3xl font-bold">Voice of the Users</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.userInsights.map((insight, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6">
              <div className="mb-4">
                <Quote className="text-accent" size={32} />
              </div>
              <p className="text-xl italic mb-4">{insight.quote}</p>
              <p className="text-sm text-gray-400">{insight.persona}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyUserInsights;
