
import React from 'react';
import { Link } from 'react-router-dom';

interface Collection {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const collections: Collection[] = [
  {
    id: 1,
    title: "BOXING KIT",
    price: 70,
    image: "/uploads/boxer.jpeg",
    category: "Boxing",
    rating: 4
  },
  {
    id: 2,
    title: "TENNIS KIT",
    price: 70,
    image: "/uploads/tennis.jpeg",
    category: "Tennis",
    rating: 4
  },
  {
    id: 3,
    title: "CRICKET KIT",
    price: 70,
    image: "/uploads/kit.jpeg",
    category: "Cricket",
    rating: 5
  },
  {
    id: 4,
    title: "CUSTOMIZED TROPHIES",
    price: 70,
    image: "/uploads/trophy.jpeg",
    category: "Trophies",
    rating: 4
  },
  {
    id: 5,
    title: "BASKETBALL KIT",
    price: 70,
    image: "/uploads/man.jpeg",
    category: "Basketball",
    rating: 5
  },
  {
    id: 6,
    title: "SWIMMING EQUIPMENTS",
    price: 70,
    image: "/uploads/pink.jpeg",
    category: "Swimming",
    rating: 4
  }
];

const Collections = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill={i < rating ? "#c8a964" : "none"} 
        stroke={i < rating ? "#c8a964" : "currentColor"} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title relative">
          <span className="relative z-10">FEATURED COLLECTIONS</span>
          <span className="absolute top-0 left-0 -mt-1 h-6 w-16 bg-gold opacity-20"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-100 p-4 rounded-md mb-4 overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg">{collection.title}</h3>
                <p className="font-medium">AED {collection.price.toFixed(2)}</p>
              </div>
              <hr className="w-full mb-2 border-gray-300" />
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">{collection.category}</p>
                <div className="flex">
                  {renderStars(collection.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
