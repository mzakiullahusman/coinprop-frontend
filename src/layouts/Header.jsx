import React from "react";
import Logo from "../assets/Icons/DiscordIcon.svg";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../assets/Icons/ArrowRightIcon.svg";
import HeaderBg from "../assets/Images/HeaderBg.png";

const Header = () => {
  // Array for center links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How it works", path: "/how-it-works" },
    { name: "About Us", path: "/about-us" },
    { name: "FAQs", path: "/faq" },
  ];

  return (
    <div
      className="bg-[#020621] bg-opacity-90 px-4 md:px-12 py-5 flex justify-between items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${HeaderBg})`,
      }}
    >
      {/* Logo */}
      <img src={Logo} alt="Logo" className="h-12 w-12" />

      {/* Center Navigation Links */}
      <div className="flex gap-x-12">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-white hover:text-blue-400 font-normal transition duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* User or Start Challenge / Login */}
      <div className="flex items-center gap-x-4">
        {/* Example for user */}
        {/* Replace `user` with your user state or object */}

        <Link
          to="/start-challenge"
          className="bg-gradient-to-b flex flex-row gap-x-3 items-center from-[#2A80B3] via-[#236191] to-[#142738] font-redhat text-lg text-white px-6 py-3 rounded-full shadow-lg font-normal hover:opacity-90 transition"
        >
          Start Challenge
        </Link>
        <button className="text-white flex items-center gap-x-2 font-normal font-redhat text-lg">
          Login
          <img src={ArrowRightIcon} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Header;
