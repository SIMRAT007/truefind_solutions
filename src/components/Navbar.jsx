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
    <nav className="text-white max-md:text-black z-100">
      <div className="md:backdrop-filter backdrop-blur bg-opacity-80 p-1 shadow-lg z-50 md:w-[95%] md:mx-auto md:mt-10 md:rounded-2xl fixed mx-auto top-0 left-0 right-0 md:border-2 border-gray-300 max-md:bg-gradient-to-t from-[#0E0E12] to-[#0E0E12] max-md:px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Logo Name */}
          <div className="flex items-center space-x-2 max-md:bg-[#0E0E10] rounded-full p-2 text-white">
            <img
              src={Logo}
              alt="TrueFind Logo"
              className="h-16 w-28 brightness-0 invert"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            {/* <span className="font-bold text-xl">TrueFind</span> */}
          </div>

          {/* <div className="flex items-center space-x-2 p-2 text-white relative">
            <div className="absolute -inset-1 rounded-full bg-[#2E81CC]/30 blur-md"></div>
            <div className="relative flex items-center space-x-2">
              <img src={Logo} alt="TrueFind Logo" className="h-10 w-10" />
              <span className="font-bold text-xl">TrueFind</span>
            </div> */}

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-xl">
            <li>
            <a
                onClick={() => scrollToSection('home')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#home' ? 'text-[#2E81CC]' : ''}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection('about')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#about' ? 'text-[#2E81CC]' : ''}`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection('portfolio')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#portfolio' ? 'text-[#2E81CC]' : ''}`}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection('services')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#services' ? 'text-[#2E81CC]' : ''}`}
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

          {/* Button */}
          <div className="hidden md:flex items-center">
          <a
                onClick={() => scrollToSection('contacts')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#contacts' ? 'text-[#2E81CC]' : ''}`}
              >
              <button className="bg-[#2E81CC] text-white px-4 py-3 px-10 rounded hover:bg-white rounded-full text-lg cursor-pointer border-2 border-[#2E81CC] hover:border-white hover:text-[#2E81CC] transition duration-300 ease-in-out">
                Contact Us
              </button>
              </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-4xl text-white"
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
        className={`fixed top-0 right-0 h-full w-64 bg-[#0E0E12] text-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Header Section with Logo and Cancel Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700 text-white">
          <div className="flex items-center space-x-2">
            <NavLink to="/" className="text-xl font-bold" onClick={handleCloseMenu}>
              TRUEFIND SOLUTIONS
            </NavLink>
          </div>

          <button
            onClick={handleCloseMenu}
            className="text-2xl text-white"
          >
            ✖
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-8 p-6">
          <li>
          <a
                onClick={() => scrollToSection('home')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#home' ? 'text-[#2E81CC]' : ''}`}
              >
                Home
              </a>
          </li>
          <li>
          <a
                onClick={() => scrollToSection('about')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#about' ? 'text-[#2E81CC]' : ''}`}
              >
                About Us
              </a>
          </li>
          

          <li>
          <a
                onClick={() => scrollToSection('portfolio')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#portfolio' ? 'text-[#2E81CC]' : ''}`}
              >
                Portfolio
              </a>
          </li>
          <li>
          <a
                onClick={() => scrollToSection('services')}
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#services' ? 'text-[#2E81CC]' : ''}`}
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
                className={`hover:text-[#2E81CC] cursor-pointer ${location.hash === '#contacts' ? 'text-[#2E81CC]' : ''}`}
              >
              <button className="bg-[#2E81CC] text-gray-800 px-4 py-2 rounded hover:bg-red-500">
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