import React from "react";

const CoinPropFutures = () => {
  return (
    <div className="px-4 md:px-12 py-5 md:py-10">
      <div className="font-semibold font-poppins text-center text-[28px] leading-[40px] lg:text-[44px] lg:leading-[60px]">
        How do{" "}
        <span className="text-[#01ff9d] underline">Coinprop futures</span>{" "}
        works?
      </div>
      <div className="text-base  px-3 md:px-20 mt-5 xl:px-32 lg:text-lg font-poppins font-light text-center">
        Innovative Approaches to Propel Sales Success: Utilizing Cutting-Edge
        Strategies to
        <br /> Achieve Unparalleled Results
      </div>

      <div className="flex flex-col justify-center my-5 items-center bg-white bg-opacity-[2%]">
        <div className="rounded-[14px] border bg-white bg-opacity-[2%] border-white border-opacity-10 p-5 w-full max-w-6xl">
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="border-b border-white border-opacity-10 ">
                  <th className="text-sm md:text-2xl font-poppins font-normal px-4 py-2">
                    Instrument
                  </th>
                  <th className="text-sm md:text-2xl font-poppins font-normal px-4 py-2">
                    Description
                  </th>
                  <th className="text-sm md:text-2xl font-poppins font-normal px-4 py-2">
                    Tick Size
                  </th>
                  <th className="text-sm md:text-2xl font-poppins font-normal px-4 py-2">
                    Tick Value
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-white border-opacity-10">
                  <td className="text-sm md:text-2xl font-poppins font-normal px-4 py-2">
                    ES
                  </td>
                  <td className="text-sm md:text-2xl font-poppins font-normal px-4 py-2">
                    S&P 500
                  </td>
                  <td className="text-sm md:text-2xl font-poppins font-normal px-4 py-2">
                    .25
                  </td>
                  <td className="text-sm md:text-2xl font-poppins font-normal px-4 py-2">
                    $12.50
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="text-base  px-3 md:px-20 mt-5 xl:px-32 lg:text-lg font-poppins font-light text-center">
        Innovative Approaches to Propel Sales Success: Utilizing Cutting-Edge
        Strategies to
        <br /> Achieve Unparalleled Results
      </div>
    </div>
  );
};

export default CoinPropFutures;
