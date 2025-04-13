import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/projectsData';

const Index = () => {
  // Featured projects to show on homepage
  const featuredProjects = [
    projectsData.telehealth,
    projectsData.reporting,
    projectsData.freterium,
    projectsData.cybershield
  ];

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="grid-background min-h-screen flex items-center pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="flex justify-center mb-3">
            <div className="flex space-x-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`} 
                    alt="Client avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="ml-3 text-sm text-gray-400">Trusted by 10+ clients</p>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight max-w-4xl mx-auto">
            Crafting Delightful Digital Experiences
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            👋 I'm Zakaria, a UX Designer and Front-end Developer with 5+ years of experience creating intuitive, accessible digital experiences. I specialize in combining thorough user research with technical implementation skills to deliver meaningful solutions.
          </p>
          
          <Link to="/contact" className="btn-primary text-lg">
            Book a free 30-min call
          </Link>
        </div>
      </section>
      
      {/* Clients/Partners Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="sr-only">Trusted Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[
              'public/lovable-uploads/70bde27d-0e12-4d2b-86bb-f940e952e85c.png',
              'public/lovable-uploads/80b4effd-6b6b-46ba-9ec0-50d71b62bcd0.png',
              'public/lovable-uploads/b089eca0-1fda-4d58-9e17-778885e796cf.png',
              'public/lovable-uploads/e1467485-238d-419b-a09e-bd6cb4fa5688.png',
              'public/lovable-uploads/ae9fda9a-a285-40e8-8113-11c4ff9f4c1b.png',
            ].map((logo, idx) => (
              <div key={idx} className="opacity-50 hover:opacity-100 transition-opacity duration-300 w-24 md:w-36">
                <img src={logo} alt={`Client logo ${idx + 1}`} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Selected Works Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Selected Works</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {featuredProjects.map((project, index) => {
              const projectSlug = Object.entries(projectsData).find(([_, data]) => data.title === project.title)?.[0];
              
              return (
                <div key={index} className="card-project">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-400">{project.category}</p>
                      </div>
                      <span className="text-sm font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">
                        {project.role.split('&')[0].trim()}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      {project.overview || project.description}
                    </p>
                    {projectSlug && (
                      <Link 
                        to={`/case-study/${projectSlug}`} 
                        className="inline-flex items-center text-accent hover:underline"
                      >
                        View case study <ArrowRight size={16} className="ml-2" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <Link to="/work" className="btn-primary">
              View all projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Me Snapshot */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Turning complex problems into elegant, user-friendly solutions
              </h2>
              <p className="text-gray-300 mb-8">
                My approach merges analytical thinking with creative problem-solving to transform complex challenges into user-friendly experiences. Whether conducting user interviews, crafting wireframes, or implementing front-end code, I focus on creating products that are both beautiful and functional.
              </p>
              
              <p className="text-gray-300 mb-8">
                With experience across healthcare, fintech, and supply chain industries, I bring a versatile perspective that balances business objectives with genuine user needs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 18 7-7-7-7"/></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">User-Centered Design</h3>
                    <p className="text-gray-400">I put users at the heart of every design decision, creating experiences that are intuitive and delightful.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m14.5 9-5 5"/><path d="m9.5 9 5 5"/></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Research-Driven Approach</h3>
                    <p className="text-gray-400">I base design decisions on solid research and data, ensuring solutions that address real user needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Collaborative Process</h3>
                    <p className="text-gray-400">I work closely with developers, stakeholders, and users to ensure effective communication and alignment.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="inline-flex items-center text-accent hover:underline">
                Learn more about my approach <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80" 
                  alt="Alex Morgan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-black p-4 rounded-lg shadow-xl">
                <p className="text-sm text-gray-400 mb-1">Experience</p>
                <p className="text-xl font-bold">5+ Years</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-black p-4 rounded-lg shadow-xl">
                <p className="text-sm text-gray-400 mb-1">Projects</p>
                <p className="text-xl font-bold">30+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-24 grid-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Let's talk about your project in person
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have any questions or need further details, I'm here to help.
          </p>
          <Link to="/contact" className="btn-primary text-lg">
            Book a free 30-min call
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
