import React, { useEffect, useRef } from 'react';
// import heroBg from './assets/hero-bg.jpg'; // Replace this with the actual image

export default function CTA() {
  const contactRef = useRef(null);

  // Add ID to the section for scroll-to functionality
  useEffect(() => {
    if (contactRef.current) {
      contactRef.current.id = "contact";
    }
  }, []);

  return (
    <section
      ref={contactRef}
      className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
      style={{ backgroundImage: `url('https://www.netscribes.com/wp-content/uploads/2020/04/Company-Analysis.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
      
      {/* Animated dots background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-black" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl transform hover:scale-[1.01] transition-all duration-500">
        
        <div className="mb-6">
          <span className="inline-flex items-center px-5 py-2 text-sm font-semibold text-[#2E81CC] border border-[#2E81CC]/30 rounded-full bg-[#2E81CC]/10 backdrop-blur-md shadow-lg">
            <div className="w-3 h-3 bg-[#2E81CC] rounded-full animate-pulse mr-2"></div>
            CONTACT US
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Start your digital journey with <br className="hidden md:block" />
          <span className="text-white">confidence</span>
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Empowering brands with innovative designs and tailored strategies to thrive and grow in the ever-evolving digital landscape.
        </p>
        <a href="#contacts" >
        <button className="bg-gradient-to-r from-[#2E81CC] to-[#1a5c9a] hover:from-[#3690de] hover:to-[#2167ad] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-[#2E81CC]/30 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          Ask for Quotations
        </button>
        </a>
      </div>
    </section>
  );
}
