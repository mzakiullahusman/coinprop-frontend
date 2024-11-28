import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import NoButtonHeroCard from "../components/PageHeroCards/NoButtonHeroCard";
import TradingHistoryCard from "../components/Cards/TradingHistoryCard";
import PageHeader from "../components/Layout/PageHeader";
import PageCardThird from "../components/PageCards/PageCardThird";
import Loader from "../components/Loader";

import certificatesBg from "@assets/images/certificatesBg.png";
import certificateOne from "../assets/images/cert1.png";
import certificateTwo from "../assets/images/cert2.png";

import {
  getUserCertificates,
  downloadCertificatePdf,
  downloadCertificateImage,
} from "../services/certificatesService";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user certificates on component mount
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data = await getUserCertificates();
        setCertificates(data.certificates);
      } catch (err) {
        console.error("Error fetching certificates:", err);
        toast.error("Failed to load certificates. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  // Handler to download PDF
  const handleDownloadPdf = async (id, title) => {
    try {
      const pdfBlob = await downloadCertificatePdf(id);
      const url = window.URL.createObjectURL(
        new Blob([pdfBlob], { type: "application/pdf" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${title}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      toast.success(`${title}.pdf downloaded successfully!`);
    } catch (err) {
      console.error("Error downloading PDF:", err);
      toast.error("Failed to download PDF. Please try again.");
    }
  };

  // Handler to download Image
  const handleDownloadImage = async (id, title) => {
    try {
      const imageBlob = await downloadCertificateImage(id);
      const url = window.URL.createObjectURL(
        new Blob([imageBlob], { type: "image/png" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${title}.png`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      toast.success(`${title}.png downloaded successfully!`);
    } catch (err) {
      console.error("Error downloading image:", err);
      toast.error("Failed to download image. Please try again.");
    }
  };

  // Handler to share certificate (Placeholder)
  const handleShare = (certificate) => {
    console.log("Sharing certificate:", certificate);
    toast.info("Share functionality is not implemented yet.");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-[16px] lg:pt-[10px]">
        <NoButtonHeroCard
          title="Certificates"
          description="Congratulations Trader on receiving your certificate, here you can download and share your success with friends!"
          bgImage={certificatesBg}
        />

        <PageCardThird>
          <h3 className="text-white font-medium mb-6">
            Your Certificates
          </h3>
          <div className="flex w-full flex-col flex-wrap lg:flex-nowrap gap-4">
            <div className="flex justify-center lg:justify-start w-full flex-wrap lg:flex-nowrap gap-4">
              {certificates?.length > 0 ? (
                certificates.map((cert) => (
                  <TradingHistoryCard
                    key={cert.id}
                    headerImg={certificateOne}
                    // htmlContent={cert.htmlTemplate}
                    title={cert.title}
                    description={cert.description}
                    buttonOne="Download PDF"
                    buttonTwo="Download Image"
                    // buttonThree="Share"
                    buttonHandlerOne={() =>
                      handleDownloadPdf(cert.id, cert.title)
                    }
                    buttonHandlerTwo={() =>
                      handleDownloadImage(cert.id, cert.title)
                    }
                    buttonHandlerThree={() => handleShare(cert)}
                  />
                ))
              ) : (
                <p className="w-full text-center text-[16px] mb-2">
                  No certificates awarded yet.
                </p>
              )}
            </div>
          </div>
        </PageCardThird>
      </div>
    </>
  );
};

export default Certificates;
