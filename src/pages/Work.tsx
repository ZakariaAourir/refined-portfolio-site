
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Work = () => {
  const projects = [
    {
      id: 'kwiks',
      title: 'KWIKS',
      category: 'SaaS Recruitment Platform',
      duration: '3 Months',
      role: 'Lead Product Designer',
      image: 'public/lovable-uploads/2de23b23-f375-4498-8d10-cae73146064d.png',
      description: 'Redesigning their platform\'s UI/UX and integrating AI features to enhance user experience and streamline recruitment.',
    },
    {
      id: 'healthconnect',
      title: 'HealthConnect',
      category: 'Healthcare Mobile App',
      duration: '4 Months',
      role: 'UX Researcher & UI Designer',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description: 'Creating an intuitive interface for patients to manage appointments, medications, and communicate with healthcare providers.',
    },
    {
      id: 'financeflow',
      title: 'FinanceFlow',
      category: 'Fintech Dashboard',
      duration: '2 Months',
      role: 'UI Designer',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description: 'Designing a complex financial dashboard that simplifies data visualization and transaction management for users.',
    },
    {
      id: 'cybershield',
      title: 'CyberShield',
      category: 'Cyber Security Platform',
      duration: '3 Months',
      role: 'Product Designer',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description: 'Reimagining the user experience for a complex cyber security solution, making it accessible to non-technical users.',
    },
    {
      id: 'autoconnect',
      title: 'AutoConnect',
      category: 'Automotive Mobile App',
      duration: '3 Months',
      role: 'Product Designer',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description: 'Creating a mobile app that connects car owners with service providers for maintenance, repairs, and roadside assistance.',
    },
    {
      id: 'travelease',
      title: 'TravelEase',
      category: 'Travel Planning Platform',
      duration: '5 Months',
      role: 'UX Designer',
      image: 'https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description: 'Designing a travel planning platform that helps users discover, plan, and book personalized trips with ease.',
    },
  ];

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
            {projects.map((project) => (
              <div key={project.id} className="card-project">
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
                      {project.role}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <Link 
                    to={`/case-study/${project.id}`} 
                    className="inline-flex items-center text-accent hover:underline"
                  >
                    View case study <ArrowRight size={16} className="ml-2" />
                  </Link>
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
