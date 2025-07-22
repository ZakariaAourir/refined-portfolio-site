import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const CaseStudyAiBobbyNextSteps: React.FC = () => {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-accent mb-2">08 | NEXT STEPS</p>
          <h2 className="text-3xl font-bold mb-8">Explore the Full Brand</h2>
          <p className="text-lg text-gray-300 mb-12">
            Dive deeper into the complete brand guidelines and see the live implementation in action.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/assets/ai-bobby-guideline.pdf"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-black font-medium rounded-lg hover:bg-accent/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2" size={20} />
              See Full Guidelines (PDF)
            </a>
            
            <a 
              href="https://ai-bobby.com"
              className="inline-flex items-center justify-center px-8 py-4 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2" size={20} />
              Visit ai-bobby.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyAiBobbyNextSteps;