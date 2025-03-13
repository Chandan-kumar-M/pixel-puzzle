
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full hero-pattern overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-white z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ALL THE <span className="gold-text">JERSEYS</span> <br />
            YOU NEED, <span className="gold-text">IN ONE</span> <br />
            <span className="gold-text">PLACE!</span>
          </h1>
          <p className="text-gray-300 mb-8 max-w-md">
            Get the perfect jersey for any sport, any team, and any occasion—all in one place! We offer a wide range of high-quality jerseys to match your style and performance needs.
          </p>
          <Link to="/collections" className="btn-primary">
            Shop More
          </Link>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center animate-scale-in">
          <img 
            src="/lovable-uploads/f04baf1b-0f47-45b7-bf29-3c893ff5e483.png" 
            alt="Sports Jersey" 
            className="max-w-full md:max-w-md h-auto object-contain rounded-md"
          />
        </div>
      </div>
      
      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-20">
        <ChevronLeft size={24} />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-20">
        <ChevronRight size={24} />
      </button>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Cpath fill=\"%23ffffff\" fill-opacity=\"0.05\" d=\"M0 0 L50 0 L50 50 L0 50 Z M50 50 L100 50 L100 100 L50 100 Z\"%3E%3C/path%3E%3C/svg%3E')] opacity-10"></div>
    </section>
  );
};

export default Hero;
