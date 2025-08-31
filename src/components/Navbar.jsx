import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png'; // Import your logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    // Close mobile menu if open
    handleCloseMenu();

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
    <nav className="text-black max-md:text-black z-100 absolute w-full top-0 left-0 right-0">
      <div className="md:backdrop-filter md:bg-white p-1  z-50 md:w-[95%] md:mx-auto md:mt-10 md:rounded-2xl mx-auto top-0 left-0 right-0 max-md:bg-white max-md:px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Logo Name */}
          <div className="flex items-center space-x-2 max-md:bg-transparent rounded-full p-2">
            <img
              src={Logo}
              alt="TrueFind Logo"
              className="h-23 w-36"
            />
            {/* <span className="font-bold text-xl">TrueFind</span> */}
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-xl mr-10 text-black">
            <li>
            <a
                onClick={() => scrollToSection('home')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#home' ? 'text-[#2E81CC]' : 'text-black'}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection('about')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#about' ? 'text-[#2E81CC]' : 'text-black'}`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection('portfolio')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#portfolio' ? 'text-[#2E81CC]' : 'text-black'}`}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection('services')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#services' ? 'text-[#2E81CC]' : 'text-black'}`}
              >
                Services
              </a>
            </li>
            {/* <li>
              <a
                onClick={() => scrollToSection('pricing')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#pricing' ? 'text-[#2E81CC]' : ''}`}
              >
                Pricing
              </a>
            </li> */}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-4xl text-black"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Overlay Background (blur and close on click) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"
          onClick={handleCloseMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Header Section with Logo and Cancel Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 text-black">
          <div className="flex items-center space-x-2">
            <NavLink to="/" className="text-xl font-bold text-black" onClick={handleCloseMenu}>
              TRUEFIND SOLUTIONS
            </NavLink>
          </div>

          <button
            onClick={handleCloseMenu}
            className="text-2xl text-black"
          >
            ✖
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-8 p-6">
          <li>
          <a
                onClick={() => scrollToSection('home')}
                className={`hover:text-red-600 cursor-pointer ${location.hash === '#home' ? 'text-red-600' : 'text-black'}`}
              >
                Home
              </a>
          </li>
          <li>
          <a
                onClick={() => scrollToSection('about')}
                className={`hover:text-red-600 cursor-pointer ${location.hash === '#about' ? 'text-red-600' : 'text-black'}`}
              >
                About Us
              </a>
          </li>
          <li>
          <a
                onClick={() => scrollToSection('portfolio')}
                className={`hover:text-red-600 cursor-pointer ${location.hash === '#portfolio' ? 'text-red-600' : 'text-black'}`}
              >
                Portfolio
              </a>
          </li>
          <li>
          <a
                onClick={() => scrollToSection('services')}
                className={`hover:text-red-600 cursor-pointer ${location.hash === '#services' ? 'text-red-600' : 'text-black'}`}
              >
               Services
              </a>
          </li>
          {/* <li>
          <a
                onClick={() => scrollToSection('pricing')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#pricing' ? 'text-[#2E81CC]' : ''}`}
              >
             Pricing
              </a>
          </li> */}



          <li>
            {/* <NavLink to="/contact" onClick={handleCloseMenu}> */}
            <a
                onClick={() => scrollToSection('contacts')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#contacts' ? 'text-[#2E81CC]' : 'text-black'}`}
              >
              <button className="bg-[#2E81CC] text-white px-4 py-2 rounded hover:bg-[#2569a3]">
                Contact Us
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;