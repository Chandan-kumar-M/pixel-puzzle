
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  {
    id: 1,
    src: "/uploads/Carousal.jpeg",
    alt: "Sports Jersey 1"
  },
  {
    id: 2,
    src: "/uploads/Carousal2.jpeg",
    alt: "Sports Jersey 2"
  },
  {
    id: 3,
    src: "/uploads/Carousal3.jpeg",
    alt: "Sports Jersey 3"
  }
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative w-full hero-pattern overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-white z-10 animate-fade-in pl-4 md:pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ALL THE <span className="gold-text">JERSEYS</span> <br />
            YOU NEED, <span className="gold-text">IN ONE</span> <br />
            <span className="gold-text">PLACE!</span>
          </h1>
          <p className="text-gray-300 mb-8 max-w-md">
            Get the perfect jersey for any sport, any team, and any occasion—all in one place! We offer a wide range of high-quality jerseys to match your style and performance needs.
          </p>
          <Link to="/collections" className="btn-primary">
            Learn More
          </Link>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center animate-scale-in">
          <img 
            src={heroImages[currentImageIndex].src} 
            alt={heroImages[currentImageIndex].alt} 
            className="max-w-full md:max-w-md h-auto object-contain rounded-md"
          />
        </div>
      </div>
      
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-20"
        onClick={prevImage}
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-20"
        onClick={nextImage}
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20d%3D%22M0%200%20L50%200%20L50%2050%20L0%2050%20Z%20M50%2050%20L100%2050%20L100%20100%20L50%20100%20Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] opacity-10"></div>
    </section>
  );
};

export default Hero;
