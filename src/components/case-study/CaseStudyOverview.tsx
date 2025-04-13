
import React from 'react';
import { ProjectData } from '@/types/project';

interface CaseStudyOverviewProps {
  project: ProjectData;
}

const CaseStudyOverview: React.FC<CaseStudyOverviewProps> = ({ project }) => {
  if (!project.overview) return null;
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-32">
              <p className="text-sm text-accent mb-2">01 | COMPANY OVERVIEW</p>
              <h2 className="text-3xl font-bold mb-6">A Glovo for recruiters and talent seekers</h2>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-300 mb-8">{project.overview}</p>
            
            {/* TLDR Box */}
            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="inline-block w-6 h-6 rounded-full bg-accent/20 text-accent text-sm flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                </span>
                TLDR
              </h3>
              <p className="text-gray-400">
                The goal was to simplify and speed up recruitment for businesses by providing access to top independent recruiters, all through a smart, intuitive platform that helps companies hire better, faster.
              </p>
            </div>
            
            {project.results && (
              <p className="text-lg text-gray-300">{project.results}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOverview;
