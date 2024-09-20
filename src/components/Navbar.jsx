import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/yuvaan_logo_1.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import hamburger and close icons
import { HiArrowLeft } from "react-icons/hi"; // Import back arrow icon

function Navbar() {
  const [logoPosition, setLogoPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // State to track the mobile menu

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoPosition((prevPosition) => (prevPosition + 0.05) % (2 * Math.PI));
    }, 10); // 60 FPS for smoother animation

    return () => clearInterval(interval);
  }, []);

  const translateY = Math.sin(logoPosition) * 4; // Oscillates between -10 and +10

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-4 flex justify-center items-center w-full h-16 z-50">
      <nav className="lg:container sm:bg-[#191919] sm:bg-opacity-30 xl:w-[70%] lg:min-w-[1030px] w-[100%] h-8 mx-auto flex justify-between lg:items-center lg:py-2 lg:px-6  lg:border-b-[1.25px] border-black rounded-xl">
        {/* Left-side links */}
        <div className="ml-5 hidden lg:flex space-x-9">
          <NavLink to="/" className="text-white hover:text-gray-400">
            HOME
          </NavLink>
          <NavLink to="/events" className="text-white hover:text-gray-400">
            EVENTS
          </NavLink>
          <NavLink
            to="/competitions"
            className="text-white hover:text-gray-400"
          >
            COMPETITIONS
          </NavLink>
          <NavLink to="/sponsors" className="text-white hover:text-gray-400">
            SPONSORS
          </NavLink>
        </div>

        {/* Logo in the center with vertical movement */}
        <div
          className="ml-4 lg:ml-0 relative"
          style={{ transform: `translateY(${translateY}px)` }}
        >
          <img src={logo} alt="Logo" className="h-16 w-14" />
        </div>

        {/* Right-side links for large screens */}
        <div className="hidden lg:flex space-x-5">
          <NavLink to="/passes" className="text-white hover:text-gray-400">
            PASSES
          </NavLink>
          <NavLink
            to="/accommodations"
            className="text-white hover:text-gray-400"
          >
            ACCOMMODATIONS
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-400">
            CONTACT US
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-400">
            ABOUT US
          </NavLink>
        </div>

        {/* Hamburger Icon for mobile screens */}
        <div className="lg:hidden absolute top-4 right-4 text-white">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose size={24} /> // Close icon when menu is open
            ) : (
              <AiOutlineMenu
                className="bg-[#191919] bg-opacity-40 p-2 w-10 h-10 rounded-xl "
                size={24}
              /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>

        {/* Full-screen overlay for mobile menu */}
        <div
          className={`fixed inset-0 z-40 bg-black bg-opacity-90 transform ${
            isOpen ? "translate-x-[40%]" : "translate-x-full"
          } transition-transform duration-300 ease-in-out `}
        >
          {/* Back arrow and navigation links */}
          <div className="p-6  ">
            <button onClick={toggleMenu} className="text-white">
              <HiArrowLeft size={24} /> {/* Back arrow icon */}
            </button>
            <div className="mt-10 space-y-6 text-white">
              <NavLink to="/" className="block text-lg">
                HOME
              </NavLink>
              <NavLink to="/events" className="block text-lg">
                EVENTS
              </NavLink>
              <NavLink to="/competitions" className="block text-lg">
                COMPETITIONS
              </NavLink>
              <NavLink to="/sponsors" className="block text-lg">
                SPONSORS
              </NavLink>
              <NavLink to="/passes" className="block text-lg">
                PASSES
              </NavLink>
              <NavLink to="/accommodations" className="block text-lg">
                ACCOMMODATIONS
              </NavLink>
              <NavLink to="/contact" className="block text-lg">
                CONTACT US
              </NavLink>
              <NavLink to="/about" className="block text-lg">
                ABOUT US
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
