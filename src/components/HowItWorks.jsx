// import React from "react";

// const HowItWorks = ({ mainData }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//       {mainData.map((feature, i) => (
//         <div
//           key={i}
//           className="bg-[#08122a] border  border-white border-opacity-20 rounded-[14px] p-5 xl:p-8 hover:shadow-lg transition"
//         >
//           <img src={feature.icon} alt={`${feature.title} Icon`} />

//           <div className="font-poppins text-2xl lg:text-[28px] font-semibold text-white mt-4">
//             {feature.title}
//           </div>
//           <div className="flex items-center justify-between mt-3">
//             <div className=" font-normal text-lg font-poppins text-[#8a8a8a]">
//               {feature.description}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HowItWorks;

import React from "react";

const HowItWorks = ({ mainData }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {mainData.map((feature, i) => (
        <div
          key={i}
          className={`
              bg-white bg-opacity-[2%] border border-white border-opacity-20 
              rounded-[14px] p-5 xl:p-8 hover:shadow-lg transition 
              ${i > 2 ? "lg:w-[48.7%] w-full" : "lg:w-[32%] w-full"}
            `}
        >
          <img src={feature.icon} alt={`${feature.title} Icon`} />

          <div className="font-poppins text-2xl lg:text-[28px] font-semibold text-white mt-4">
            {feature.title}
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="font-normal text-lg font-poppins text-[#8a8a8a]">
              {feature.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
