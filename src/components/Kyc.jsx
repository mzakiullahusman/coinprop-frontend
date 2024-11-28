import { useState } from "react";
import { Button } from "@mui/material";

import Loader from "./Loader";
import { userKyc } from "../services/authService";
import VeriffComponent from "./VeriffComponent";

const Kyc = () => {
  const [sessionId, setSessionId] = useState(null);
  const [sessionUrl, setSessionUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleKycVerification = async () => {
    setLoading(true);
    try {
      const session = await userKyc();
      setSessionId(session.data.verification.sessionToken);
      setSessionUrl(session.data.verification.url);
    } catch (error) {
      console.error("Error initiating KYC verification:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        variant="containedGradient"
        onClick={() => handleKycVerification()}
        sx={{ borderRadius: "12px", textWrap: "nowrap" }}
      >
        {loading && <Loader isWrapper={false} />}
        Start KYC Verification
      </Button>
      {sessionId && (
        <VeriffComponent sessionId={sessionId} sessionUrl={sessionUrl} />
      )}
    </div>
  );
};

export default Kyc;
