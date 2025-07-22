import React from 'react';
import { ProjectData } from '@/types/project';
import { getImagePath } from '@/utils/imageUtils';

interface CaseStudyAiBobbyIdentityProps {
  project: ProjectData;
}

const CaseStudyAiBobbyIdentity: React.FC<CaseStudyAiBobbyIdentityProps> = ({ project }) => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-32">
              <p className="text-sm text-accent mb-2">05 | FINAL IDENTITY</p>
              <h2 className="text-3xl font-bold mb-6">Brand Identity System</h2>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-300 mb-12">
              {project.uiDesign}
            </p>
            
            {/* Logo Breakdown - 3 column layout */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8">Logo Breakdown</h3>
              <div className="bg-gray-900 rounded-xl p-8">
                <img 
                  src={getImagePath("public/aibobby/logo-symbol-exploded.png")}
                  alt="Ai Bobby logo breakdown: Dog (agility), Protein (expertise), Data (AI insight)"
                  className="w-full mb-8"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="text-lg font-medium text-accent mb-2">Dog</h4>
                    <p className="text-gray-400">Represents agility and responsiveness in AI solutions</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-accent mb-2">Protein</h4>
                    <p className="text-gray-400">Symbolizes food science expertise and knowledge</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-accent mb-2">Data</h4>
                    <p className="text-gray-400">Embodies AI insight and predictive capabilities</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Color Palette */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8">Color Palette</h3>
              <div className="bg-gray-900 rounded-xl p-8">
                <img 
                  src={getImagePath("public/aibobby/color-swatches.png")}
                  alt="Ai Bobby color palette: Deep Green (#153A44) and Fresh Green (#3C7D51)"
                  className="w-full mb-6"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <div 
                      className="w-16 h-16 rounded-lg mr-4" 
                      style={{ backgroundColor: '#153A44' }}
                    ></div>
                    <div>
                      <h4 className="text-lg font-medium">Deep Green</h4>
                      <p className="text-gray-400 font-mono">#153A44</p>
                      <p className="text-sm text-gray-500">Primary brand color</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div 
                      className="w-16 h-16 rounded-lg mr-4" 
                      style={{ backgroundColor: '#3C7D51' }}
                    ></div>
                    <div>
                      <h4 className="text-lg font-medium">Fresh Green</h4>
                      <p className="text-gray-400 font-mono">#3C7D51</p>
                      <p className="text-sm text-gray-500">Accent color</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Typography */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Typography</h3>
              <div className="bg-gray-900 rounded-xl p-8">
                <img 
                  src={getImagePath("public/aibobby/typography-sample.png")}
                  alt="Ai Bobby typography samples: Product Sans (Regular, Bold)"
                  className="w-full mb-6"
                />
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Product Sans Regular</h4>
                    <p className="text-gray-400">Used for body text and supporting information</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Product Sans Bold</h4>
                    <p className="text-gray-400">Used for headings and emphasis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyAiBobbyIdentity;