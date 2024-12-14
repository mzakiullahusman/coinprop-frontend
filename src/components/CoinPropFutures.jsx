import React from "react";

const CoinPropFutures = () => {
  const tableData = [
    { code: "ES", name: "S&P 500", value: ".25", amount: "$12.50" },
    { code: "NQ", name: "NASDAQ 100", value: ".50", amount: "$25.00" },
    { code: "YM", name: "Dow Jones", value: ".20", amount: "$10.00" },
    { code: "RTY", name: "Russell 2000", value: ".10", amount: "$5.00" },
  ];
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

      <div className="rounded-[14px] mx-auto mt-6 xl:mt-10 border bg-white bg-opacity-[2%] border-white border-opacity-10 p-2 w-full max-w-6xl">
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b border-white border-opacity-10 ">
                <th className="text-sm md:text-2xl font-poppins font-normal p-4">
                  Instrument
                </th>
                <th className="text-sm md:text-2xl font-poppins font-normal p-4">
                  Description
                </th>
                <th className="text-sm md:text-2xl font-poppins font-normal p-4">
                  Tick Size
                </th>
                <th className="text-sm md:text-2xl font-poppins font-normal p-4">
                  Tick Value
                </th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index !== tableData.length - 1
                      ? "border-b border-white border-opacity-10"
                      : ""
                  }`}
                >
                  <td className="text-sm md:text-2xl font-poppins font-normal p-4">
                    {item?.code}
                  </td>
                  <td className="text-sm md:text-2xl font-poppins font-normal p-4">
                    {item?.name}
                  </td>
                  <td className="text-sm md:text-2xl font-poppins font-normal p-4">
                    {item?.value}
                  </td>
                  <td className="text-sm md:text-2xl font-poppins font-normal p-4">
                    {item?.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-base  px-3 md:px-20 mt-5 xl:mt-10 xl:px-32 lg:text-lg font-poppins font-light text-center">
        Innovative Approaches to Propel Sales Success: Utilizing Cutting-Edge
        Strategies to
        <br /> Achieve Unparalleled Results
      </div>
    </div>
  );
};

export default CoinPropFutures;
