import React from 'react';
import { ProjectData } from '@/types/project';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImagePath } from '@/utils/imageUtils';

interface CaseStudyAiBobbyHeroProps {
  project: ProjectData;
}

const CaseStudyAiBobbyHero: React.FC<CaseStudyAiBobbyHeroProps> = ({ project }) => {
  return (
    <section className="relative min-h-screen" style={{ backgroundColor: '#153A44' }}>
      {/* Back button */}
      <div className="absolute top-8 left-8 z-10">
        <Link 
          to="/work" 
          className="inline-flex items-center text-white hover:text-white/80 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to all projects
        </Link>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 md:px-8 flex flex-col justify-center items-center min-h-screen text-center">
        {/* Logo placeholder */}
        <div className="mb-8">
          <img 
            src={getImagePath("public/aibobby/ai-bobby-logo.svg")}
            alt="Ai Bobby Logo"
            className="h-24 md:h-32 w-auto mx-auto"
          />
        </div>
        
        {/* Title and subtitle */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 max-w-4xl">
          {project.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
          {project.subtitle}
        </p>
        
        {/* Project details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/80 max-w-2xl w-full">
          <div>
            <p className="text-sm font-medium mb-1">Client</p>
            <p className="text-lg">{project.client}</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Duration</p>
            <p className="text-lg">{project.duration}</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Role</p>
            <p className="text-lg">{project.role}</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Category</p>
            <p className="text-lg">{project.category}</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyAiBobbyHero;