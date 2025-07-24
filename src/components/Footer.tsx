
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Dribbble, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zakaria Aourir</h3>
            <p className="text-gray-400 mb-6 max-w-lg">
              A Front-End Engineer who codes like a designer, with 5+ years creating clean, scalable interfaces for complex domains.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/zakaria-aourir-851098164/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/ZackDesigns01" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:zack.designs01@gmail.com" 
                className="text-white hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/work" className="text-gray-400 hover:text-white transition-colors">Work</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">zack.designs01@gmail.com</li>
              <li className="text-gray-400">Paris, France</li>
              <li>
                <Link to="/contact" className="text-accent hover:underline">
                  Book a free consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Zakaria Aourir. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
