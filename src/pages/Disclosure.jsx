import React from "react";
import AceFundedTrader from "@components/AceFundedTrader";

const Disclosure = () => {
  const contentData = [
    {
      description: `1. Introduction [Coinprop.io] provides simulated trading challenges and evaluations. We do not handle, store, or manage any actual cryptocurrency or client funds. Our identity verification requirements are designed to ensure fair participation and prevent abuse of our challenge program. 2. Purpose of Verification Weverify trader identity to: ● Prevent multiple accounts/challenge attempts ● Ensure fair competition ● Prevent fraud and gaming of the challenge system ● Maintain program integrity ● Process challenge payments securely 3. Verification Requirements 3.1 Basic Verification All traders must provide: ● Full legal name ● Valid email address ● Dateof birth ● Country of residence 3.2 Identity Verification through Veriff Before receiving challenge results or rewards, traders must complete verification via Veriff by providing: ● Valid government-issued photo ID ● Selfie for biometric matching Supported documents include: ● Passport ● National ID card ● Driver's license ● Other government-issued photo ID 4. When Verification is Required Verification is required: ● Before receiving challenge results ● Whenclaiming challenge rewards ● Whenupgrading account tiers ● Ifsuspicious activity is detected ● Whenchanging payout methods 5. Prohibited Activities ● Creating multiple accounts ● Sharing accounts ● Usingfalse identification ● Attempting to bypass verification ● Gamingormanipulating challenges 6. Data Protection Weprotect your data by: ● UsingVeriff's secure verification platform ● Encrypting all personal information ● Limiting data access ● Storing only essential information ● Following data protection best practices 7. Privacy Protection Wecommit to: ● Collecting only necessary information ● Notsharing data with third parties ● Secure data storage ● Regular security updates ● Clear privacy practices 8. Non-Compliance Failure to comply may result in: ● Challenge disqualification ● Account suspension ● Forfeiture of simulated results ● Account termination ● Banfromfuture participation 9. Contact Information For verification support: ● Email: [support@company.com] ● Support Hours: [Hours] ● Response Time: Within 24 hours This policy may be updated periodically. Users will be notified of significant changes`,
    },
  ];
  const filteredContent = Array(1).fill(contentData[0]);
  return (
    <>
      <div className="py-5  md:py-10 ">
        <div className="px-4 md:px-12  text-[32px] capitalize tracking-[-1px] mb-6 xl:leading-[80px] text-white  lg:text-[64px]  font-poppins font-bold">
          Disclosure
        </div>
        <div className="px-4 md:px-12  space-y-8">
          {filteredContent.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-6 font-poppins font-medium text-white text-base capitalize lg:text-[20px]"
            >
              <span className="leading-[54px]">{item.description}</span>
            </div>
          ))}
        </div>
        <AceFundedTrader />
      </div>
    </>
  );
};

export default Disclosure;
