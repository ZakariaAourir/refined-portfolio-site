
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ProjectData } from '@/types/project';

interface CaseStudyHeroProps {
  project: ProjectData;
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ project }) => {
  return (
    <section className="pt-28 pb-16 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <Link to="/work" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to all projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            {project.subtitle && (
              <p className="text-xl text-gray-300 mb-6">{project.subtitle}</p>
            )}
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-sm text-gray-400 mb-1">Client</p>
                <p className="font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Duration</p>
                <p className="font-medium">{project.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Role</p>
                <p className="font-medium">{project.role}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Project Type</p>
                <p className="font-medium">{project.category}</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
