
import React from 'react';
import { Link } from 'react-router-dom';

const Promo = () => {
  return (
    <section className="hero-pattern py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 animate-slide-in-left">
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-gold opacity-20 z-0"></div>
            <img 
              src="/lovable-uploads/dc1c8fcc-5ffb-4710-b620-014d4af7f755.png" 
              alt="Sport Shoes" 
              className="max-w-xs object-contain relative z-10"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-white animate-slide-in-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FIND YOUR <br/>
            PERFECT FIT
          </h2>
          <div className="bg-gold text-white py-2 px-6 inline-block mb-6">
            Starting AED 99
          </div>
          <p className="text-gray-300 mb-8 max-w-md">
            MR Sports offers a wide range of high-quality sports shoes designed for comfort, durability, and performance.
          </p>
          <Link to="/collections" className="btn-primary">
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Promo;
