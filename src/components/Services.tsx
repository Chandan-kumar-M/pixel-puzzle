
import React from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  grid: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Custom Sport Uniforms",
    description: "Fully customized Cricket & Football uniforms",
    image: "/lovable-uploads/dc1c8fcc-5ffb-4710-b620-014d4af7f755.png",
    grid: "col-span-2 row-span-1"
  },
  {
    id: 2,
    title: "Personalized Gift Items",
    description: "Personalized Pens, Signature Bats, Notebooks, Key Rings, Mugs, etc.",
    image: "/lovable-uploads/dc1c8fcc-5ffb-4710-b620-014d4af7f755.png",
    grid: "col-span-2 row-span-1"
  },
  {
    id: 3,
    title: "Sports Event Management",
    description: "Organizing Cricket, Football, Volleyball, and more (Indoor & Outdoor) events",
    image: "/lovable-uploads/dc1c8fcc-5ffb-4710-b620-014d4af7f755.png",
    grid: "col-span-3 row-span-1"
  },
  {
    id: 4,
    title: "Sports Tourism & Hospitality",
    description: "Experience unforgettable sports & tourism packages in the UK, Hotel Bookings & Airport Transportation services for teams and officials",
    image: "/lovable-uploads/dc1c8fcc-5ffb-4710-b620-014d4af7f755.png",
    grid: "col-span-3 row-span-1"
  },
  {
    id: 5,
    title: "Event Branding & Promotional Materials",
    description: "Accreditation Cards, Flex Banners, Flyers, Backdrops, Roll-Up Stands, etc.",
    image: "/lovable-uploads/dc1c8fcc-5ffb-4710-b620-014d4af7f755.png",
    grid: "col-span-3 row-span-1"
  }
];

const Services = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title relative">
          <span className="relative z-10">OUR SERVICES</span>
          <span className="absolute top-0 left-0 -mt-1 h-6 w-12 bg-gold opacity-20"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`relative group overflow-hidden rounded-md md:${service.grid} animate-scale-in`}
              style={{ animationDelay: `${service.id * 100}ms` }}
            >
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 p-6 text-white z-20">
                <h3 className="text-xl md:text-2xl font-bold mb-2 border-b border-gold inline-block pb-1">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-200">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
