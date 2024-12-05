import AceFundedTrader from "@components/AceFundedTrader";
import React from "react";

const TermsOfService = () => {
  const contentData = [
    {
      title: "Where can I get some?",
      description: `There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable. If you
        are going to use a passage of Lorem Ipsum, you need to be sure there
        isn't anything embarrassing hidden in the middle of text. All the Lorem
        Ipsum generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.`,
    },
  ];
  const filteredContent = Array(4).fill(contentData[0]);
  return (
    <>
      <div className="bg-[#0f1827]  px-4 md:px-12 py-5  md:py-10">
        <div className="text-[32px] capitalize tracking-[-1px] mb-6 xl:leading-[80px] text-white  lg:text-[64px]  font-poppins font-bold">
          Terms & Conditions
        </div>
        <div className="space-y-8">
          {filteredContent.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-6 font-redhat font-medium text-white text-base capitalize lg:text-[20px]"
            >
              <span>{item.title}</span>
              <span className="leading-[54px]">{item.description}</span>
            </div>
          ))}
        </div>
        <AceFundedTrader />
      </div>
    </>
  );
};

export default TermsOfService;
