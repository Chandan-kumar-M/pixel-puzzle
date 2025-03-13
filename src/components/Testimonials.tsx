
import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "AA DESIGNS",
    text: "I bought running shoes and a performance t-shirt from MR Sports, and the quality is fantastic. The shoes are supportive and the team there is helpful. Great value for money!",
    image: "/lovable-uploads/dc1c8fcc-5ffb-4710-b620-014d4af7f755.png",
    rating: 5
  },
  {
    id: 2,
    name: "AA DESIGNS",
    text: "I bought running shoes and a performance t-shirt from MR Sports, and the quality is fantastic. The shoes are supportive and the team there is helpful. Great value for money!",
    image: "/lovable-uploads/dc1c8fcc-5ffb-4710-b620-014d4af7f755.png",
    rating: 5
  }
];

const Testimonials = () => {
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
        className="mr-1"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <section className="py-16 px-4 testimonial-bg">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto">CUSTOMER TESTIMONIALS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 relative">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-gold rounded-full opacity-20"></div>
          <div className="absolute top-32 left-8 w-8 h-8 bg-gold rounded-full opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-black rounded-full opacity-20"></div>
          <div className="absolute bottom-24 right-8 w-8 h-8 bg-black rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold rounded-full opacity-10"></div>
          
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-lg shadow-sm relative animate-scale-in"
              style={{ animationDelay: `${testimonial.id * 200}ms` }}
            >
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-black"></div>
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <h3 className="font-medium text-lg mb-2">So much fun</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 object-cover rounded-full border-2 border-gold mr-4" 
                />
                <p className="font-medium text-sm">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
