const logo =
  "https://res.cloudinary.com/derpoctie/image/upload/q_auto,f_auto/v1729151591/yuvaan_logo-tiny_ij6r1a.webp";

import { m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import LazyMotionWrapper from "../util/LazyMotion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to track the mobile menu

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navRef = useRef(null); // Create a reference for the navbar

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add("backdrop-blur-sm");
        } else {
          navRef.current.classList.remove("backdrop-blur-sm");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed   flex justify-center items-center w-full h-16 z-50"
    >
      <nav className="lg:container sm:mt-4 sm:bg-[#191919] sm:bg-opacity-30 xl:w-[70%] lg:min-w-[1030px] w-[100%] h-8 mx-auto flex justify-between lg:items-center lg:py-2 lg:px-6  lg:border-b-[1.25px] border-black rounded-xl">
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

        {/* framer animation */}
        <LazyMotionWrapper>
          <m.div
            animate={{
              translateY: [0, -8, 0], // Oscillating effect
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            style={{ willChange: "transform", transform: "translateZ(0)" }}
            className="ml-4 lg:ml-0 relative"
          >
            <NavLink to="/" className="z-20">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 sm:h-16 sm:w-14"
              />
            </NavLink>
          </m.div>
        </LazyMotionWrapper>

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
          <button onClick={toggleMenu}>{isOpen ? null : <Hamburger />}</button>
        </div>

        {/* Full-screen overlay for mobile menu */}
        <div
          className={`fixed inset-0 z-40  transform ${
            isOpen ? "translate-x-[40%]" : "translate-x-full"
          } transition-transform duration-300 ease-in-out `}
        >
          {/* Back arrow and navigation links */}
          <div className="p-6  bg-black bg-opacity-90 h-[100vh]">
            <button onClick={toggleMenu} className="text-white">
              {/* <HiArrowLeft size={24} /> */}
              <LeftArrow />
            </button>
            <div className="mt-10 space-y-6 text-white">
              <NavLink to="/" onClick={toggleMenu} className="block text-lg">
                HOME
              </NavLink>
              <NavLink
                to="/events"
                onClick={toggleMenu}
                className="block text-lg"
              >
                EVENTS
              </NavLink>
              <NavLink
                to="/competitions"
                onClick={toggleMenu}
                className="block text-lg"
              >
                COMPETITIONS
              </NavLink>
              <NavLink
                to="/sponsors"
                onClick={toggleMenu}
                className="block text-lg"
              >
                SPONSORS
              </NavLink>
              <NavLink
                to="/passes"
                onClick={toggleMenu}
                className="block text-lg"
              >
                PASSES
              </NavLink>
              <NavLink
                to="/accommodations"
                onClick={toggleMenu}
                className="block text-lg"
              >
                ACCOMMODATIONS
              </NavLink>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className="block text-lg"
              >
                CONTACT US
              </NavLink>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className="block text-lg"
              >
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

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10 bg-[#191919] bg-opacity-40 rounded-xl p-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const LeftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </svg>
);
