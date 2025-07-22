
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { projectsData, hiddenProjects } from '@/data/projectsData';
import { getImagePath } from '@/utils/imageUtils';

const Work = () => {
  // Convert projectsData object to array for easier mapping
  const projects = Object.entries(projectsData)
    .map(([slug, data]) => ({
      id: slug,
      ...data,
      disabled: false
    }));
  
  // Add telehealth project with disabled flag
  const telehealthProject = {
    id: 'telehealth',
    ...hiddenProjects.telehealth,
    disabled: true
  };
  
  // Combined projects list
  const allProjects = [...projects, telehealthProject];

  return (
    <>
      <NavBar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Work</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my recent projects across various industries and platforms.
            Each case study explores my design process, challenges, and solutions.
          </p>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {allProjects.map((project) => (
              <div 
                key={project.id} 
                className={`card-project relative ${project.disabled ? 'opacity-60' : ''}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={getImagePath(project.image)} 
                    alt={project.title} 
                    className={`w-full h-64 object-cover ${!project.disabled ? 'transition-transform duration-500 hover:scale-105' : ''}`}
                  />
                  {project.disabled && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="bg-black/70 px-4 py-2 rounded-md flex items-center gap-2">
                        <Shield className="text-grey-500" size={20} />
                        <span className="text-white font-medium">Protected Project</span>
                      </div>
                    </div>
                  )}
                </div>
                 <div className="p-6">
                   <div className="flex justify-between items-start mb-4">
                     <div>
                       <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                       <p className="text-sm text-gray-400">{project.category}</p>
                       
                       {/* Category and tech stack tags */}
                       <div className="flex flex-wrap gap-2 mt-3">
                         {project.category.includes('UX') && (
                           <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-medium">UX</span>
                         )}
                         {project.category.includes('Frontend') && (
                           <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs font-medium">Dev</span>
                         )}
                         {project.tools && project.tools.slice(0, 3).map((tool, idx) => (
                           <span key={idx} className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs font-medium">
                             {tool}
                           </span>
                         ))}
                       </div>
                     </div>
                     <span className="text-sm font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">
                       {project.role.includes('&') ? 'UX + Dev' : project.role.split('&')[0].trim()}
                     </span>
                   </div>
                   <p className="text-gray-300 mb-4">
                     {project.subtitle || project.description}
                   </p>
                  {!project.disabled ? (
                    <Link
                      to={`/case-study/${project.id}`} 
                      className="inline-flex items-center text-accent hover:underline"
                    >
                      View case study <ArrowRight size={16} className="ml-2" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-gray-500 cursor-not-allowed">
                      Protected content <Shield size={16} className="ml-2" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 grid-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Interested in working together?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how I can help you create 
            intuitive and visually appealing digital experiences.
          </p>
          <Link to="/contact" className="btn-primary text-lg">
            Get in touch
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Work;
