
import React from 'react';

interface Deal {
  id: number;
  title: string;
  price: number;
  image: string;
}

const deals: Deal[] = [
  {
    id: 1,
    title: "CUSTOMIZED TROPHIES",
    price: 70,
    image: "/lovable-uploads/f62f278e-e05e-464c-bce0-ef412c1ee643.png"
  },
  {
    id: 2,
    title: "CRICKET EQUIPMENT",
    price: 120,
    image: "/lovable-uploads/83c12567-3896-467f-842e-c300139bb59a.png"
  },
  {
    id: 3,
    title: "SPORTS BALLS",
    price: 45,
    image: "/lovable-uploads/74c0dbe5-fdf6-4dbc-af09-7d9e4ff105a8.png"
  },
  {
    id: 4,
    title: "SWIMMING GEAR",
    price: 60,
    image: "/lovable-uploads/5e0e2d96-15fc-4d13-9b43-8715cbbc5b5f.png"
  }
];

const TopDeals = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title relative">
          <span className="relative z-10">TOP DEALS</span>
          <span className="absolute top-0 left-0 -mt-1 h-6 w-10 bg-gold opacity-20"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {deals.map((deal, index) => (
            <div 
              key={deal.id} 
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-100 p-4 rounded-md mb-4 overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-sm mb-1">{deal.title}</h3>
                <p className="text-gray-700">AED {deal.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDeals;
