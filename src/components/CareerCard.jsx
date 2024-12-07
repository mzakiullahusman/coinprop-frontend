import React from "react";
import ArrowGradient from "./assets/ArrowGradient";
const CareerCard = () => {
  const careerData = [
    {
      jobTitle: "Blockchain Developer",
      location: "San Francisco, CA",
      jobType: "Fulltime",
    },
    {
      jobTitle: "Cryptocurrency Analyst",
      location: "New York, NY",
      jobType: "Fulltime",
    },
    {
      jobTitle: "Marketing Manager",
      location: "London, UK",
      jobType: "Fulltime",
    },
    {
      jobTitle: "Product Manager",
      location: "Singapore",
      jobType: "Fulltime",
    },
    {
      jobTitle: "Customer Support",
      location: "Toronto, Canada",
      jobType: "Fulltime",
    },
    {
      jobTitle: "Security Engineer",
      location: "Zurich, Switzerland",
      jobType: "Fulltime",
    },
    {
      jobTitle: "DeFi Product Manager",
      location: "San Francisco, CA",
      jobType: "Fulltime",
    },
    {
      jobTitle: "Crypto Content Writer",
      location: "Austin, TX",
      jobType: "Remote",
    },
    {
      jobTitle: "Marketing Specialist",
      location: "New York, NY",
      jobType: "Fulltime",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-8 text-white">
      {careerData.map((job, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-[2%] rounded-[20px] border border-white border-opacity-20 p-5 xl:p-8"
        >
          <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-y-2">
              <div className="font-poppins font-semibold text-lg text-white">
                {job?.jobTitle}
              </div>
              <div className="font-poppins font-normal text-sm text-[#888d98]">
                {job?.location}
              </div>
            </div>
            <div className="text-white bg-white bg-opacity-10 font-poppins text-xs p-[10px] rounded-[3px]">
              {job?.jobType}
            </div>
          </div>

          <button className="flex items-center mt-6 font-normal text-sm font-poppins bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] gap-2 bg-clip-text text-transparent">
            View & Apply
            <ArrowGradient />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CareerCard;
