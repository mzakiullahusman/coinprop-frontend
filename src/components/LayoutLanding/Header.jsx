import React, { useState } from "react";
import Logo from "@assets/icons/Logo.svg";
import BgStar from "@assets/images/BgStar.png";
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
    <div
      className="bg-[#020621] px-4 lg:px-20 py-5 2xl:px-24 md:py-10 flex flex-col xl:flex-row justify-between items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgStar})`,
      }}
    >
      <div className="flex justify-between items-center w-full xl:w-auto">
        <img src={Logo} alt="Logo" className="h-12 w-12" />

        <button
          className="text-white xl:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>
      <div className="flex items-center gap-12">
        <div className="hidden xl:flex items-center gap-1 gradient-header gap-y-4 md:gap-y-0 gap-x-6 xl:gap-x-12 text-center md:text-left">
          {navLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-2">
              <Link
                to={link.path}
                className="text-white hover:text-blue-400 transition duration-300 font-poppins font-light text-sm md:text-lg"
              >
                {link.name}
              </Link>

              <img src={PlusIcon} alt="PlusIcon" className="w-3 h-3" />
            </div>
          ))}
        </div>

        <div className="hidden xl:flex  items-center gap-y-4 md:gap-y-0 gap-x-4 mt-4 md:mt-0">
          <Link
            to="/auth/sign-in"
            className=" text-white text-sm md:text-base font-poppins font-light hover:opacity-90 transition"
          >
            Log in
          </Link>
          <button
            onClick={() => router("/auth/sign-up")}
            className=" text-white border border-white border-opacity-20 px-4 py-3 text-sm md:text-base font-poppins font-light rounded-full shadow-lg hover:opacity-90 transition"
          >
            Sign up
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col xl:hidden gap-y-4  gap-x-6 text-center ">
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
        <div className="flex flex-col xl:hidden items-center gap-y-4  gap-x-4 mt-4 ">
          <Link
            to="/login"
            className=" text-white text-sm md:text-base font-poppins font-light hover:opacity-90 transition"
          >
            Log in
          </Link>
          <button className=" text-white border border-white border-opacity-20 px-4 py-3 text-sm md:text-base font-poppins font-light rounded-full shadow-lg hover:opacity-90 transition">
            Sign up
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
