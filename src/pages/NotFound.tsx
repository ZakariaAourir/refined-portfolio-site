
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <>
      <NavBar />
      
      <section className="min-h-[80vh] flex items-center justify-center bg-black">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold mb-6">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Oops! The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default NotFound;
