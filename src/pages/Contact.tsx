
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!", {
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <NavBar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about my services? 
            I'd love to hear from you. Get in touch and let's create something amazing together.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="youremail@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Tell me about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center min-w-[150px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="bg-gray-900 rounded-xl p-6 mb-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <a href="mailto:hello@alexmorgan.design" className="text-white hover:text-accent transition-colors">
                        hello@alexmorgan.design
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <a href="tel:+11234567890" className="text-white hover:text-accent transition-colors">
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Location</p>
                      <p className="text-white">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Schedule a Call</h3>
                <p className="text-gray-400 mb-4">
                  Prefer to discuss your project directly? Schedule a free 30-minute consultation call.
                </p>
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary block text-center"
                >
                  Book a free 30-min call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section (Optional) */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">What is your design process?</h3>
              <p className="text-gray-400">
                My design process typically follows these steps: Research & Discovery, Information Architecture, Wireframing, Visual Design, Prototyping, and Testing. I adapt this process based on the specific needs of each project.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">How long does a typical project take?</h3>
              <p className="text-gray-400">
                Project timelines vary depending on scope and complexity. A simple website redesign might take 2-4 weeks, while a complex application could take 2-3 months or more. I'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">What information do you need to start a project?</h3>
              <p className="text-gray-400">
                To get started, I typically need a clear understanding of your business goals, target audience, project requirements, timeline, and budget. The more information you can provide, the better I can tailor my approach to meet your needs.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Do you work with clients remotely?</h3>
              <p className="text-gray-400">
                Yes, I work with clients globally and have established efficient remote collaboration processes using tools like Figma, Slack, and Zoom to ensure seamless communication and project management.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
