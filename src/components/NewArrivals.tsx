
import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "JD Cricket Bats",
    price: 780,
    image: "/lovable-uploads/dc1c8fcc-5ffb-4710-b620-014d4af7f755.png",
    category: "Cricket"
  },
  {
    id: 2,
    name: "Adidas Shoes",
    price: 450,
    image: "/lovable-uploads/dc1c8fcc-5ffb-4710-b620-014d4af7f755.png",
    category: "Footwear"
  },
  {
    id: 3,
    name: "Red Rock Cricket Kit",
    price: 1350,
    image: "/lovable-uploads/dc1c8fcc-5ffb-4710-b620-014d4af7f755.png",
    category: "Cricket"
  }
];

const NewArrivals = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title relative">
          <span className="relative z-10">NEW ARRIVALS</span>
          <span className="absolute top-0 left-0 -mt-1 h-6 w-12 bg-gold opacity-20"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group cursor-pointer transition-all duration-300 animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-100 p-4 rounded-md mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-gray-700">AED {product.price.toFixed(2)}</p>
              </div>
              <hr className="w-4/5 mx-auto mb-2 border-gray-300" />
              <p className="text-gray-500 text-sm">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
