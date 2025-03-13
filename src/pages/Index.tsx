
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NewArrivals from '@/components/NewArrivals';
import Services from '@/components/Services';
import Collections from '@/components/Collections';
import Promo from '@/components/Promo';
import TopDeals from '@/components/TopDeals';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <NewArrivals />
        <Services />
        <Collections />
        <Promo />
        <TopDeals />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
