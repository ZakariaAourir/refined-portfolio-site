
import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectData } from '@/types/project';

interface CaseStudyResultsProps {
  project: ProjectData;
}

const CaseStudyResults: React.FC<CaseStudyResultsProps> = ({ project }) => {
  if (!project.testimonial) return null;
  
  // Determine section title based on project category
  const getSectionTitle = () => {
    const category = project.category.toLowerCase();
    if (category.includes('research') || category.includes('industrial')) {
      return "RESEARCH IMPACT";
    } else if (category.includes('visual') || category.includes('icon')) {
      return "DESIGN IMPACT";
    } else if (category.includes('healthcare')) {
      return "HEALTHCARE OUTCOMES";
    } else if (category.includes('fintech')) {
      return "FINANCIAL IMPACT";
    } else {
      return "RESULTS";
    }
  };
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-32">
              <p className="text-sm text-accent mb-2">06 | {getSectionTitle()}</p>
              <h2 className="text-3xl font-bold mb-6">
                {project.category.includes('Management') ? "Stakeholder Feedback" : "Client Feedback"}
              </h2>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <svg className="text-gray-700 w-12 h-12 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-lg text-gray-300 mb-6">
                {project.testimonial.quote}
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt={project.testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{project.testimonial.author}</p>
                  <p className="text-sm text-gray-400">{project.testimonial.title}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact" className="btn-primary">
                Start a project together
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyResults;
