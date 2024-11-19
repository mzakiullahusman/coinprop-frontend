import React from "react";
import BgImage1 from "../assets/Images/BgImage1.png";
import Logo from "../assets/Icons/DiscordIcon.svg";
import Footer1 from "../assets/Icons/Footer1.svg";
import Footer2 from "../assets/Icons/Footer2.svg";
import Footer3 from "../assets/Icons/Footer3.svg";
import Footer4 from "../assets/Icons/Footer4.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerIcons = [
    { src: Footer1, alt: "Icon 1" },
    { src: Footer2, alt: "Icon 2" },
    { src: Footer3, alt: "Icon 3" },
    { src: Footer4, alt: "Icon 4" },
  ];
  return (
    <div
      className="bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgImage1})`,
      }}
    >
      <div className="px-4 md:px-12 py-5 md:py-10">
        <div className="flex flex-col gap-y-8 xl:flex-row justify-between items-start">
          <div className="flex flex-col items-start gap-y-6 ">
            <img src={Logo} alt="Logo" />
            <div className="font-redhat text-base font-normal text-[#8d8d8d]">
              It is a long established fact that a reader will be distracted by
              the readable content
            </div>
            <div className="flex items-center gap-4">
              {footerIcons.map((icon, index) => (
                <div key={index} className="hover:opacity-80">
                  <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-x-20 justify-between mt-8 md:mt-[0px]">
            <div className="flex flex-col gap-y-8">
              <Link
                to="/"
                className="font-medium text-white font-redhat text-base"
              >
                Quick Links
              </Link>
              <Link
                to="/products"
                className="font-medium text-[#8d8d8d] font-redhat text-base"
              >
                Products
              </Link>
              <Link
                to="/products"
                className="font-medium text-[#8d8d8d] font-redhat text-base"
              >
                Use Cases
              </Link>
              <Link
                to="/blog"
                className="font-medium text-[#8d8d8d] font-redhat text-base"
              >
                Blog
              </Link>
              <Link
                to="/about-us"
                className="font-medium text-[#8d8d8d] font-redhat text-base"
              >
                About Us
              </Link>
            </div>
            <div className="flex flex-col gap-y-8">
              <Link
                to="/contact"
                className="font-medium text-white font-redhat text-base"
              >
                Contact Us
              </Link>
              <Link
                to="/support-portal"
                className="font-medium text-[#8d8d8d] font-redhat text-base"
              >
                Support Portal
              </Link>
              <Link
                to="/live-chat"
                className="font-medium text-[#8d8d8d] font-redhat text-base"
              >
                Live Chat
              </Link>
              <Link
                to="/partner"
                className="font-medium text-[#8d8d8d] font-redhat text-base"
              >
                Partner
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="text-[32px] font-redhat lg:text-[44px] font-medium text-white">
              Join the Community
            </div>
          </div>
        </div>
        <hr className="border-t border-white border-opacity-10 my-4" />

        <div className="flex flex-col md:flex-row items-center gap-y-4 justify-between">
          <div className="text-white font-normal font-redhat text-[20px]">
            Copyright @fastfund.com 2024
          </div>

          <div className="flex flex-col sm:flex-row gap-5 text-white">
            <Link to="/terms-of-service" className="font-normal text-base ">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="font-normal text-base ">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
