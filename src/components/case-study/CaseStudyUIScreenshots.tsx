
import React, { useState } from 'react';
import { ProjectData } from '@/types/project';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface CaseStudyUIScreenshotsProps {
  project: ProjectData;
}

const CaseStudyUIScreenshots: React.FC<CaseStudyUIScreenshotsProps> = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  if (!project.uiScreenshots || project.uiScreenshots.length === 0) return null;
  
  // Determine section title based on project category
  const getSectionTitle = () => {
    const category = project.category.toLowerCase();
    if (category.includes('visual') || category.includes('icon')) {
      return "DESIGN SHOWCASE";
    } else if (category.includes('healthcare')) {
      return "HEALTHCARE INTERFACE";
    } else if (category.includes('fintech')) {
      return "APPLICATION SCREENS";
    } else {
      return "UI SCREENSHOTS";
    }
  };
  
  // Determine heading based on project type
  const getHeading = () => {
    if (project.category.includes('Visual')) {
      return "Icon Collection";
    } else if (project.category.includes('Healthcare')) {
      return "Telehealth Interface";
    } else if (project.category.includes('Fintech')) {
      return "Financial Platform";
    } else {
      return "Interface Showcase";
    }
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-sm text-accent mb-2">{getSectionTitle()}</p>
          <h2 className="text-3xl font-bold">{getHeading()}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.uiScreenshots.map((screenshot, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden">
              {screenshot.image && screenshot.image !== "[INSERT" && (
                <div 
                  className="cursor-pointer transition-opacity hover:opacity-90" 
                  onClick={() => openImageModal(screenshot.image!)}
                >
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title || `UI Screenshot ${index + 1}`} 
                    className="w-full h-64 object-contain py-2"
                  />
                </div>
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

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="sm:max-w-[80%] bg-gray-900 border-gray-800 p-6">
          <div className="relative w-full">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Full view" 
                className="w-full object-contain max-h-[80vh]"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CaseStudyUIScreenshots;
