import React, { useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import { getReferralLink } from "../../services/userService";
import getAffiliateTier from "../../utils/getUserAffiliateTier";
import Loader from "../Loader";
import NovaAffiliateTiersModal from "../AffiliateTiers";

const AffiliateHeroCard = ({
  title,
  description,
  bgImage,
  lineBreakAfterPeriod,
}) => {
  const textRef = useRef();
  const [referralCode, setReferralCode] = useState("");
  const [isAffiliate, setIsAffiliate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { image: tierImage, tierName } = getAffiliateTier();

  const imageVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 3 },
    tap: { scale: 0.95, rotate: -3 },
  };

  useEffect(() => {
    const storedReferralLink = localStorage.getItem("referralLink");
    if (storedReferralLink) {
      setReferralCode(storedReferralLink);
      setIsAffiliate(true);
    }
  }, []);

  const formatDescription = (text) => {
    return text.split(". ").map((sentence, index, arr) => (
      <React.Fragment key={index}>
        {sentence}
        {index < arr.length - 1 && ". "}
        {lineBreakAfterPeriod && <br />}
      </React.Fragment>
    ));
  };

  const copyToClipboard = () => {
    if (referralCode) {
      navigator.clipboard.writeText(referralCode);
      toast.success("Referral link copied to clipboard!");
    }
  };

  const handleAffiliateRequest = async () => {
    setLoading(true);
    try {
      const data = await getReferralLink();
      if (data?.refLink) {
        setReferralCode(data.refLink);
        setIsAffiliate(true);
        localStorage.setItem("referralLink", data.refLink);
        toast.success("Successfully became an affiliate!");
      } else {
        throw new Error("No referral link found in the response.");
      }
    } catch (error) {
      toast.error("Failed to get referral link. Please try again.");
      console.error("Error fetching referral link:", error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full rounded-xl bg-sidebar border border-[#3d4054] p-[20px] flex flex-col justify-center items-center lg:items-start">
      <div className="w-full md:w-[70%] lg:w-full text-center lg:text-start">
        <div className="w-full flex justify-between items-center mb-6">
          <h2 className="text-white text-[24px] xl:text-[34px] font-medium">
            {title}
          </h2>
        </div>
        <p className="text-[16px] mt-[12px]">
          {formatDescription(description)}
        </p>
      </div>

      <div className="flex items-center gap-[10px] mt-2 lg:mt-3 w-full flex-wrap md:flex-nowrap justify-center md:justify-start">
        <div
          className="flex flex-col justify-center items-start gap-1.5 w-[75%] sm:w-[45%] xl:w-[30%] h-[60px] p-3 rounded-lg bg-sidebar"
          style={{ border: "1px solid #2B312F" }}
        >
          <input
            ref={textRef}
            className="w-full bg-transparent border-none focus:outline-none text-white text-[12px] font-medium"
            type="text"
            value={referralCode || "Referral link will appear here..."}
            readOnly
          />
        </div>
        {referralCode && (
          <div className="w-[70%] sm:w-[45%] xl:w-[25%] hover:bg-transparent">
            <Button
              variant="outlined"
              onClick={copyToClipboard}
              sx={{
                borderRadius: "0.3rem",
                textTransform: "capitalize",
                fontWeight: "medium",
                borderColor: "#2A80B3",
                background: "linear-gradient(to right, #00FC9E, #1C7EF0)",
                color: "#000000",
                height: "3.5rem",
                width: "10rem",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(to left, #00FC9E, #1C7EF0)", // Reverse gradient on hover
                  transform: "scale(1.05)", // Slightly enlarge on hover
                  boxShadow: "0 0 1px rgba(0, 252, 158, 0.5)", // Add a soft glow effect
                  borderColor: "#1C7EF0",
                  color:"white"
                },
              }}
            >
              Copy Affiliate Code
            </Button>
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-2 flex-wrap justify-center lg:justify-start">
        {!isAffiliate && (
          <Button
            variant="contained"
            onClick={handleAffiliateRequest}
            disabled={loading}
            sx={{
              backgroundColor: "#2A80B3",
              color: "white",
              textTransform: "capitalize",
              fontWeight: "medium",
              "&:hover": {
                backgroundColor: "#4B80B3",
              },
            }}
          >
            {loading ? (
              <Loader isWrapper={false} />
            ) : (
              "Request to be an Affiliate"
            )}
          </Button>
        )}
        <Button
          variant="text"
          onClick={openModal}
          sx={{
            color: "#2A80B3",
            textTransform: "capitalize",
            fontWeight: "medium",
            borderRadius: "12px",
            "&:hover": {
              color: "#fff",
            },
          }}
        >
          Learn About Affiliate Tiers
        </Button>
      </div>

      <NovaAffiliateTiersModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AffiliateHeroCard;
