
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProjectData, ProjectsDataRecord } from '@/types/project';
import { getImagePath } from '@/utils/imageUtils';

interface CaseStudyNextProjectProps {
  nextProjectSlug: string;
  nextProject: ProjectData;
}

const CaseStudyNextProject: React.FC<CaseStudyNextProjectProps> = ({ 
  nextProjectSlug, 
  nextProject 
}) => {
  return (
    <section className="py-16 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-400 mb-2">NEXT PROJECT</p>
          <h2 className="text-3xl font-bold">{nextProject.title}</h2>
        </div>
        
        <div className="rounded-xl overflow-hidden mb-8">
          <img 
            src={getImagePath(nextProject.image)} 
            alt={nextProject.title} 
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="text-center">
          <Link 
            to={`/case-study/${nextProjectSlug}`} 
            className="btn-primary inline-flex items-center"
          >
            View next project <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyNextProject;
