import React from "react";
// import BgImage1 from "../assets/Images/BgImage1.png";
import Logo from "@assets/icons/Logo.svg";
import Footer1 from "@assets/icons/Discord.svg";
import Footer2 from "@assets/icons/Telegram.svg";
import Footer3 from "@assets/icons/Twitter.svg";
import Footer4 from "@assets/icons/Art.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerIcons = [
    { src: Footer1, alt: "Icon 1" },
    { src: Footer2, alt: "Icon 2" },
    { src: Footer3, alt: "Icon 3" },
    { src: Footer4, alt: "Icon 4" },
  ];

  const linksData = [
    {
      title: "Quick Links",
      links: [
        { to: "/products", text: "Products" },
        { to: "/use-cases", text: "Use Cases" },
        { to: "/blog", text: "Blog" },
        { to: "/landing/about-us", text: "About Us" },
      ],
    },
    {
      title: "Contact",
      links: [
        { to: "/support-portal", text: "Support Portal" },
        { to: "/live-chat", text: "Live Chat" },
        { to: "/partner", text: "Partner" },
      ],
    },
    {
      title: "Legal",
      links: [
        { to: "/support-portal", text: "Support Portal" },
        { to: "/live-chat", text: "Live Chat" },
        { to: "/partner", text: "Partner" },
      ],
    },
    {
      title: "More",
      links: [
        { to: "/support-portal", text: "Support Portal" },
        { to: "/live-chat", text: "Live Chat" },
        { to: "/partner", text: "Partner" },
      ],
    },
  ];

  return (
    <div
      className="bg-[#020621] bg-cover bg-center bg-no-repeat"
      //   style={{
      //     backgroundImage: `url(${BgImage1})`,
      //   }}
    >
      <div className="px-4 md:px-12 py-5 md:py-10">
        <div className="flex flex-col gap-y-8 xl:flex-row justify-between items-start">
          <div className="flex flex-col items-start gap-y-6 ">
            <img src={Logo} alt="Logo" />
            <div className="font-poppins 2xl:w-full text-base font-normal text-[#8d8d8d]">
              It is a long established fact that a reader will be
              <br /> distracted by the readable content
            </div>
            <div className="flex items-center gap-4">
              {footerIcons.map((icon, index) => (
                <div key={index} className="hover:opacity-80">
                  <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-y-10 gap-x-20 justify-between mt-8 md:mt-[0px]">
            {linksData.map((section, index) => (
              <div key={index} className="flex flex-col gap-y-8">
                <Link
                  to="/"
                  className="font-medium text-white font-poppins text-base"
                >
                  {section.title}
                </Link>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.to}
                    className="font-normal text-[#8d8d8d] font-poppins text-base"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <hr className="border-t border-white border-opacity-10 my-4" />

        <div className="flex flex-col md:flex-row items-center gap-y-4 justify-between">
          <div className="text-white font-normal font-poppins text-[20px]">
            Copyright @Nexusfunding 2024
          </div>

          <div className="flex flex-col sm:flex-row gap-5 text-white">
            <Link
              to="/landing/terms-&-conditions"
              className="font-normal text-base "
            >
              Terms of Service
            </Link>
            <Link
              to="/landing/privacy-policy"
              className="font-normal text-base "
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="leading-[44px] mt-9 text-sm font-poppins font-normal text-white capitalize ">
          Legal Disclaimers and Disclosures (Footer) Allowed Trading Our
          platform allows simulated trading of cryptocurrency pairs only.
          Trading of actual cryptocurrencies, stocks, forex, options, futures,
          or other financial instruments is not provided nor permitted in our
          program. Challenge Success Rate Historical data shows that less than
          3% of participants successfully complete our trading challenges. While
          we maintain strict evaluation standards, success in our simulation
          does not guarantee success in live trading. Simulation Limitations In
          alignment with Canadian consumer protection standards and financial
          services best practices, our trading simulation platform has inherent
          limitations. Results are from simulated trading only and do not
          represent actual cryptocurrency trading. Performance in our challenges
          does not guarantee similar results in live trading. Risk Warning
          Cryptocurrency trading involves substantial risk and is not suitable
          for all investors. Market volatility can be extreme, prices can move
          rapidly, and technical issues can affect trading. Past performance
          does not guarantee future results. Prohibited Conduct To maintain
          program integrity, any gambling behavior, exploitation of the
          simulation environment, or violation of our terms will be reviewed. We
          reserve the right to delete trading days, reset accounts, terminate
          participation, or ban users from our platform. Educational Purpose Our
          platform is designed for skill development, strategy testing, and
          performance evaluation. All content and services provided are for
          simulation and educational purposes only. ©2024 [coinprop.io]. All
          Rights Reserved. Registered in British Columbia, Canada.
        </div>
      </div>
    </div>
  );
};

export default Footer;
