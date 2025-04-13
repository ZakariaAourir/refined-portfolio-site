
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const About = () => {
  const skills = [
    { category: "UX Research", items: ["User Interviews", "Usability Testing", "Competitor Analysis", "Survey Design", "A/B Testing"] },
    { category: "Design Tools", items: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "After Effects"] },
    { category: "Other Skills", items: ["Information Architecture", "Wireframing", "Prototyping", "User Personas", "Design Systems"] }
  ];
  
  const experiences = [
    {
      position: "Senior Product Designer",
      company: "TechFront Solutions",
      period: "2021 - Present",
      description: "Leading the design of enterprise SaaS platforms, focusing on complex workflow optimization and data visualization."
    },
    {
      position: "UX/UI Designer",
      company: "Creative Digital Agency",
      period: "2018 - 2021",
      description: "Designed user experiences for mobile apps and web platforms across fintech, healthcare, and e-commerce sectors."
    },
    {
      position: "Junior UI Designer",
      company: "StartUp Studio",
      period: "2016 - 2018",
      description: "Created visual designs for websites and mobile applications, collaborating with development teams to ensure design integrity."
    }
  ];
  
  const education = [
    {
      degree: "Master of Human-Computer Interaction",
      institution: "Carnegie Mellon University",
      year: "2016"
    },
    {
      degree: "Bachelor of Fine Arts, Graphic Design",
      institution: "Rhode Island School of Design",
      year: "2014"
    }
  ];
  
  const certifications = [
    "Google UX Design Professional Certificate",
    "Nielsen Norman Group UX Certification",
    "Interaction Design Foundation UX Master Certification"
  ];

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hi, I'm Zakaria Aourir
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                A product designer and UX researcher with a passion for creating intuitive, user-centered digital experiences.
              </p>
              <div className="flex space-x-4">
                <Link to="/contact" className="btn-primary">
                  Get in touch
                </Link>
                <a 
                  href="/resume.pdf" 
                  className="px-6 py-3 border border-white/20 rounded-md hover:bg-white/5 transition-colors duration-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80" 
                alt="Zakaria Aourir" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Professional Background */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-accent pl-8 py-2 relative">
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-5"></div>
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                </div>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills & Expertise */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education & Certifications */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-accent pl-6 py-2 relative">
                    <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-5"></div>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-gray-300">{edu.institution}</p>
                    <p className="text-sm text-gray-400">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-4">
                    <p className="font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Personal Touch */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Design Philosophy</h2>
              <p className="text-gray-300 mb-4">
                I believe that great design is about solving real problems for real people. Every pixel, every interaction, and every feature should serve a purpose and enhance the user's experience.
              </p>
              <p className="text-gray-300 mb-4">
                My approach combines strategic thinking with empathy, focusing on understanding users' needs, behaviors, and pain points before diving into solutions. I strive to create designs that are not only visually appealing but also intuitive, accessible, and impactful.
              </p>
              <p className="text-gray-300">
                Beyond design tools and methodologies, I value collaboration, continuous learning, and a healthy dose of curiosity. I'm passionate about staying on top of industry trends and best practices, always looking for ways to grow and improve as a designer.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Design process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8659b8e77b27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Research" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Design thinking" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 grid-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Let's create something amazing together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you're looking for a designer who is passionate about creating 
            intuitive and impactful digital experiences, I'd love to hear from you.
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

export default About;
