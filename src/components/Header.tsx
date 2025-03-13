
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full flex flex-col animate-fade-in">
      <div className="flex justify-end items-center bg-white py-2 px-4 text-sm border-b">
        <span className="mr-2">Follow Us:</span>
        <a href="#" className="mx-1" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
        <a href="#" className="mx-1" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
        <a href="#" className="mx-1" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
      </div>
      <div className="bg-black text-white flex justify-between items-center py-4 px-8">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/88ae73b2-a98e-449b-87bc-5ae705155d44.png" alt="MR Sports Logo" className="h-12" />
        </Link>
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/" className="hover:text-gold transition-colors">HOME</Link>
          <Link to="/services" className="hover:text-gold transition-colors">SERVICES</Link>
          <Link to="/collections" className="hover:text-gold transition-colors">COLLECTIONS</Link>
          <Link to="/teams" className="hover:text-gold transition-colors">TEAMS</Link>
          <Link to="/contact" className="hover:text-gold transition-colors">CONTACT</Link>
        </nav>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
