
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { getImagePath } from '@/utils/imageUtils';

const About = () => {
  const skills = [
    { category: "UX Research", items: ["User Interviews", "Brainwriting", "Observation", "User Testing"] },
    { category: "UX Design", items: ["Wireframing", "Prototyping", "Information Architecture", "Problem Definition & Ideation"] },
    { category: "Design Tools", items: ["Figma", "Illustrator", "Photoshop", "Miro", "FigJam"] },
    { category: "Technical Implementation", items: ["Angular", "React", "JavaScript/TypeScript"] },
    { category: "Languages", items: ["English (Professional)", "Arabic (Native)", "French (Professional)"] }
  ];
  
  const experiences = [
    {
      position: "Front-end/UX Research Consultant",
      company: "Davidson Consulting",
      period: "2022 - Present",
      description: "Working on multiple projects across various clients, developing and designing intuitive digital solutions."
    },
    {
      position: "Front-end Engineer",
      company: "Freterium",
      period: "2021 - 2022",
      description: "Designed and developed web application interfaces from concept to implementation, enhancing performance, design principles across key front-end features and user experience."
    },
    {
      position: "Front-end & UX/UI Consultant",
      company: "Sowit",
      period: "2020 - 2021",
      description: "Created visual designs for websites , and helped developing UI features to ensure design integrity."
    }
  ];
  
  const education = [
    {
      degree: "Software Engineering Degree",
      institution: "National Institute of Posts and Telecommunications",
      year: "2020"
    }
  ];
  
  const certifications = [
    "UX Research Certification | Le Laptop Course",
    "Udemy Certificate | The Complete Prompt Engineering for AI Bootcamp",
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
                I'm a Front-End Engineer who codes like a designer. I use Angular, React, and a deep understanding of UX to create clean, scalable, and user-friendly interfaces for complex domains—manufacturing, infrastructure, and enterprise software.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                My work starts before the code: user interviews, journey mapping, and prototyping help me ship features that people actually love using. I've led workshops, audited design systems, and reduced onboarding times by 30% through empathetic design.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                I'm especially curious about the intersection of AI and interface design—how prompts, intelligent defaults, and LLMs can simplify workflows.
              </p>
              
              {/* Company logos */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <p className="text-sm text-gray-500 font-medium">Worked with:</p>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-gray-800 rounded text-sm font-medium">Sixense</span>
                  <span className="px-3 py-1 bg-gray-800 rounded text-sm font-medium">Dassault Systèmes</span>
                  <span className="px-3 py-1 bg-gray-800 rounded text-sm font-medium">Interpipe</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get in touch
                </Link>
                <a 
                  href="https://linkedin.com/in/zakaria-aourir" 
                  className="px-6 py-3 border border-white/20 rounded-md hover:bg-white/5 transition-colors duration-200 inline-flex items-center gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/zakaria-aourir" 
                  className="px-6 py-3 border border-white/20 rounded-md hover:bg-white/5 transition-colors duration-200 inline-flex items-center gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="/resume/Zakaria_Aourir_Frontend_UX_Engineer_2025.pdf" 
                  className="px-6 py-3 border border-white/20 rounded-md hover:bg-white/5 transition-colors duration-200 inline-flex items-center gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden h-[500px]">
              <img 
                src={getImagePath("me/me.jpg")}
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
              <h2 className="text-3xl font-bold mb-6">My Development Philosophy</h2>
              <p className="text-gray-300 mb-4">
                I believe that great interfaces are about solving real problems for real people. Every component, every interaction, and every feature should serve a purpose and enhance the user's experience.
              </p>
              <p className="text-gray-300 mb-4">
                My approach combines technical expertise with empathy, focusing on understanding users' needs, behaviors, and pain points before diving into code. I strive to create interfaces that are not only performant but also intuitive, accessible, and impactful.
              </p>
              <p className="text-gray-300">
                Beyond development tools and frameworks, I value collaboration, continuous learning, and a healthy dose of curiosity. I'm passionate about staying on top of industry trends and best practices, always looking for ways to grow and improve as an engineer.
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
                  src="/reporting/research.png" 
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
            If you're looking for an engineer who is passionate about creating 
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
