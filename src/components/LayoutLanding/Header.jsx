import React, { useState } from "react";
import Logo from "@assets/images/coinprop-logo.png";
import PlusIcon from "@assets/icons/PlusIcon.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useNavigate();
  
  const navLinks = [
    { name: "How It Works", path: "/landing/how-it-works" },
    { name: "About", path: "/landing/about-us" },
    { name: "Tools", path: "/landing/trading-combine" },
    { name: "Affiliate", path: "/landing/careers" },
    { name: "Resources", path: "/landing/help-center" },
    { name: "Earn Funding Button", path: "/landing/forex-vs-future" },
  ];

  return (
    <div className="px-4 sm:px-4 lg:px-4 2xl:px-20 pt-6 pb-10 flex flex-col xl:flex-row justify-between items-center relative z-50">
      {/* Logo and Mobile Menu Button */}
      <div className="flex w-full xl:w-auto justify-between items-center">
        <Link to="/">
          <img 
            src={Logo} 
            alt="Logo" 
            className="h-[45px] w-auto sm:h-[55px] lg:h-[65px] xl:h-[70px] object-contain transition-all duration-300" 
          />
        </Link>
        <button
          className="text-white xl:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="hidden xl:flex items-center gap-6 2xl:gap-12">
        <div className="flex items-center gap-1 gradient-header gap-y-4 md:gap-y-0 gap-x-6 xl:gap-x-6 2xl:gap-x-12 text-center md:text-left">
          {navLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-2">
              <Link
                to={link.path}
                className="text-white hover:text-blue-400 transition duration-300 font-poppins font-light text-sm md:text-base whitespace-nowrap"
              >
                {link.name}
              </Link>
              <img src={PlusIcon} alt="PlusIcon" className="w-3 h-3" />
            </div>
          ))}
        </div>
      </div>

      {/* Auth Buttons - Desktop */}
      <div className="hidden xl:flex items-center space-x-6">
        <Link
          to="/auth/sign-in"
          className="text-white text-sm md:text-base font-poppins hover:text-blue-400 transition-colors duration-300"
        >
          Log in
        </Link>
        <button
          onClick={() => router("/auth/sign-up")}
          className="bg-transparent hover:bg-white text-white hover:text-black border border-white/30 px-6 py-2.5 text-sm md:text-base font-poppins rounded-full transition-all duration-300 transform hover:scale-[1.02]"
        >
          Sign up
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full xl:hidden">
          {/* Navigation Links - Mobile */}
          <div className="flex flex-col gap-y-4 text-center mt-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-white hover:text-blue-400 font-normal transition duration-300 text-sm md:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Mobile */}
          <div className="flex flex-col items-center gap-y-4 mt-6">
            <Link
              to="/auth/sign-in"
              className="text-white text-sm md:text-base font-poppins hover:text-blue-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <button
              onClick={() => {
                router("/auth/sign-up");
                setIsMenuOpen(false);
              }}
              className="bg-transparent hover:bg-white text-white hover:text-black border border-white/30 px-6 py-2.5 text-sm md:text-base font-poppins rounded-full w-full max-w-[200px] transition-all duration-300 transform hover:scale-[1.02]"
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;