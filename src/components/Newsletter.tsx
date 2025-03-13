
import React, { useState } from 'react';
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing!");
      setEmail('');
    }
  };

  return (
    <section className="py-16 px-4 bg-[url('/lovable-uploads/dc1c8fcc-5ffb-4710-b620-014d4af7f755.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto text-center max-w-2xl animate-fade-in relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-white">Subscribe</h2>
        <p className="text-white mb-8">
          Get the Latest Sports Trends, Exclusive Deals & Game-Changing Updates Straight to Your Inbox!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email Address"
            className="flex-grow py-3 px-4 outline-none text-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 font-medium hover:bg-gray-900 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
