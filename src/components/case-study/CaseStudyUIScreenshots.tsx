
import React from 'react';
import { ProjectData } from '@/types/project';

interface CaseStudyUIScreenshotsProps {
  project: ProjectData;
}

const CaseStudyUIScreenshots: React.FC<CaseStudyUIScreenshotsProps> = ({ project }) => {
  if (!project.uiScreenshots || project.uiScreenshots.length === 0) return null;
  
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-sm text-accent mb-2">UI SCREENSHOTS</p>
          <h2 className="text-3xl font-bold">Interface Showcase</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.uiScreenshots.map((screenshot, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden">
              {screenshot.image && screenshot.image !== "[INSERT" && (
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title || `UI Screenshot ${index + 1}`} 
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-6">
                {screenshot.title && (
                  <h3 className="text-xl font-semibold mb-2">{screenshot.title}</h3>
                )}
                {screenshot.description && (
                  <p className="text-gray-400">{screenshot.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyUIScreenshots;
