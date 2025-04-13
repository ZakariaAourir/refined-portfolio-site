
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const CaseStudyNotFound: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <p className="mb-6">The case study you're looking for doesn't exist.</p>
          <Link to="/work" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudyNotFound;
