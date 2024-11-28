import { useState } from "react";
import { Button } from "@mui/material";
import toast from "react-hot-toast";

import Loader from "../components/Loader";
import { sendTicket } from "../services/userService";
import { useAuth } from "../context/AuthContext";
import PageHeader from "../components/Layout/PageHeader";
import PageCardMain from "../components/PageCards/PageCardMain";
import UserInputField from "../components/UserInputs/UserInputField";
import UserRichTextInput from "../components/UserInputs/UserRichTextInput";
import UploadButton from "../components/Buttons/UploadButton";

const CustomerSupport = () => {
  const { user, selectedAccount } = useAuth();
  const [subject, setSubject] = useState("");
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendTicket = async () => {
    setLoading(true);

    const modifiedSubject = `[${selectedAccount.label}] ${subject}`;

    try {
      const response = await sendTicket({
        email: user?.email,
        subject: modifiedSubject,
        html,
      });
      console.log(response.message);
      toast.success("Ticket sent successfully!");
    } catch (error) {
      toast.error("Error sending support ticket");
      console.error("Error sending support ticket:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-[24px] lg:pt-[10px]">
        <PageHeader
          title="Customer Support"
          selectPlaceholder="Select Account"
          isNovaTheme={true}
        />
        <PageCardMain>
          <div className="flex flex-col gap-[6px] w-full">
            <h2 className="text-[14px] font-medium">Email</h2>
            <UserInputField
              type="text"
              value={user?.email || ""}
              placeholder="Email"
              readOnly={true}
            />
          </div>
          <div className="flex flex-col gap-[6px] w-full">
            <h2 className="text-[14px] font-medium">Subject</h2>
            <UserInputField
              placeholder="Enter Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <UserRichTextInput onChange={setHtml} />
          <div className="flex flex-col gap-[6px] w-full">
            <span className="flex gap-2">
              <h2 className="text-[14px] font-medium">Attachment</h2>
              <p className="text-[14px]">
                (You can add a Google Drive link with any screenshots and/or
                screen recordings to complement your message.)
              </p>
            </span>
          </div>
          <div className="w-full lg:w-[25%]">
            <Button variant="containedGradient" onClick={handleSendTicket}>
              {loading && <Loader isWrapper={false} />}
              Send Ticket
            </Button>
          </div>
        </PageCardMain>
      </div>
    </>
  );
};

export default CustomerSupport;
