import React, { useState } from "react";
import Logo from "../assets/Icons/DiscordIcon.svg";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../assets/Icons/ArrowRightIcon.svg";
import HeaderBg from "../assets/Images/HeaderBg.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How it works", path: "/how-it-works" },
    { name: "About Us", path: "/about-us" },
    { name: "FAQs", path: "/faq" },
  ];

  return (
    <div
      className="bg-[#020621] bg-opacity-90 px-4 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${HeaderBg})`,
      }}
    >
      {/* Logo */}
      {/* <div className="hidden md:block mb-4 md:mb-0">
        <img src={Logo} alt="Logo" className="h-12 w-12" />
      </div> */}

      <div className="flex justify-between items-center w-full md:w-auto">
        <img src={Logo} alt="Logo" className="h-12 w-12" />

        <button
          className="text-white md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Center Navigation Links */}

      <div className="hidden md:flex gap-y-4 md:gap-y-0 gap-x-6 text-center md:text-left">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-white hover:text-blue-400 font-normal transition duration-300 text-sm md:text-base"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex  items-center gap-y-4 md:gap-y-0 gap-x-4 mt-4 md:mt-0">
        <Link
          to="/start-challenge"
          className="bg-gradient-to-b from-[#2A80B3] via-[#236191] to-[#142738] text-white text-sm md:text-lg px-6 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition"
        >
          Start Challenge
        </Link>
        <button className="text-white flex items-center gap-x-2 text-sm md:text-lg">
          Login
          <img
            src={ArrowRightIcon}
            alt="Arrow"
            className="w-4 h-4 md:w-6 md:h-6"
          />
        </button>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col md:hidden gap-y-4  gap-x-6 text-center ">
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
      )}

      {isMenuOpen && (
        <div className="flex flex-col md:hidden items-center gap-y-4  gap-x-4 mt-4 ">
          <Link
            to="/start-challenge"
            className="bg-gradient-to-b from-[#2A80B3] via-[#236191] to-[#142738] text-white text-sm md:text-lg px-6 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition"
          >
            Start Challenge
          </Link>
          <button className="text-white flex items-center gap-x-2 text-sm md:text-lg">
            Login
            <img
              src={ArrowRightIcon}
              alt="Arrow"
              className="w-4 h-4 md:w-6 md:h-6"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
