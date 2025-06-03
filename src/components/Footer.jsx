import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // Check if we're already on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page and then scroll to section
      // Store the section to scroll to in sessionStorage
      sessionStorage.setItem('scrollToSection', sectionId);
    }
  };

  return (
    <footer className="relative bg-[#0E0E11] text-white px-8 py-12 overflow-hidden border-t-3 border-gray-800">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
          {/* Menu */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#2E81CC]">MENU</h3>
            <ul className="space-y-2 text-lg">
              <li><a onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-[#2E81CC]">About us</a></li>
              <li><a onClick={() => scrollToSection('portfolio')} className="cursor-pointer hover:text-[#2E81CC]">Portfolio</a></li>
              <li><a onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-[#2E81CC]">Services</a></li>
              {/* <li><a onClick={() => scrollToSection('pricing')} className="cursor-pointer hover:text-[#2E81CC]">Pricing</a></li> */}
            </ul>
          </div>

          {/* Office */}
          <div>
            <h3 className="text-sm font-semibold text-[#2E81CC] mb-4">OFFICE</h3>
            <p className="text-lg mb-2">
              3891 Ranchview Dr. Richardson, <br />
              California 62639
            </p>
            <p className="text-lg flex items-center gap-2 mt-2">
              📱 +1-780-851-0652 | +44-770-3101-853
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-semibold text-[#2E81CC] mb-4">FOLLOW US</h3>
            <div className="flex space-x-4 text-lg">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="">Instagram</a>
              <span className="text-gray-500">|</span>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="">Facebook</a>
              <span className="text-gray-500">|</span>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="">Youtube</a>
              <span className="text-gray-500">|</span>
              {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="">Whatsapp</a> */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400 z-10 relative">
          <span>Copyright by @TrueFind Solutions</span>
          <a onClick={() => scrollToSection('terms')} className="cursor-pointer hover:text-[#2E81CC] mt-2 md:mt-0">Terms & Condition Applied</a>
        </div>
      </div>

      {/* Digital Agency Background Text */}
      <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 text-[250px] leading-none font-black text-white opacity-[0.02] z-0 pointer-events-none select-none whitespace-nowrap">
      Digital Agency
      </h1>
    </footer>
  );
}
