import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompetitionCard from "../components/Cards/CompetitionCardPrev";

import goldTrophy from "../assets/icons/goldTrophy.svg";
import unknownTrophy from "../assets/icons/unknownTrophy.svg";
import CompetitionModal from "../components/Modals/CompetitionModal";

const CompetitionsPrev = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignupClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleRulesClick = () => {
    console.log("Rules clicked");
  };

  const handleStandingsClick = () => {
    navigate("/competition-standings");
  };

  return (
    <>
      <div>
        <div className="w-full flex justify-between items-center">
          <h2 className="text-white text-[28px] xl:text-[44px]">
            CompetitionsPrev
          </h2>
        </div>
        <div
          id="info-cards"
          className="flex flex-col gap-4 w-full flex-wrap md:flex-nowrap lg:pt-[76px]"
        >
          <div className="flex justify-center gap-4 flex-wrap md:flex-nowrap">
            <CompetitionCard
              name="October Competition"
              status="Finished"
              trophyImg={goldTrophy}
              isActive={false}
              contestants="10024"
              percentageCompletion={100}
              buttonOne="Signup to Competition"
              buttonHandlerOne={handleSignupClick}
              buttonTwo="Rules"
              buttonHandlerTwo={handleRulesClick}
              buttonThree="Standings"
              buttonHandlerThree={handleStandingsClick}
            />
            <CompetitionCard
              name="October Competition"
              status="Finished"
              trophyImg={goldTrophy}
              isActive={false}
              contestants="10024"
              percentageCompletion={100}
              buttonOne="Signup to Competition"
              buttonHandlerOne={handleSignupClick}
              buttonTwo="Rules"
              buttonHandlerTwo={handleRulesClick}
              buttonThree="Standings"
              buttonHandlerThree={handleStandingsClick}
            />
            <CompetitionCard
              name="October Competition"
              status="Finished"
              trophyImg={goldTrophy}
              isActive={false}
              contestants="10024"
              percentageCompletion={100}
              buttonOne="Signup to Competition"
              buttonHandlerOne={handleSignupClick}
              buttonTwo="Rules"
              buttonHandlerTwo={handleRulesClick}
              buttonThree="Standings"
              buttonHandlerThree={handleStandingsClick}
            />
          </div>
          <div className="flex justify-center gap-4 flex-wrap md:flex-nowrap">
            <CompetitionCard
              name="October Competition"
              status="Finished"
              trophyImg={goldTrophy}
              isActive={false}
              contestants="10024"
              percentageCompletion={100}
              buttonOne="Signup to Competition"
              buttonHandlerOne={handleSignupClick}
              buttonTwo="Rules"
              buttonHandlerTwo={handleRulesClick}
              buttonThree="Standings"
              buttonHandlerThree={handleStandingsClick}
            />
            <CompetitionCard
              name="October Competition"
              status="In Progress"
              trophyImg={goldTrophy}
              isActive={true}
              contestants="10024"
              percentageCompletion={50}
              buttonOne="Signup to Competition"
              buttonHandlerOne={handleSignupClick}
              buttonTwo="Rules"
              buttonHandlerTwo={handleRulesClick}
              buttonThree="Standings"
              buttonHandlerThree={handleStandingsClick}
            />
            <CompetitionCard
              name="October Competition"
              status="Waiting"
              trophyImg={unknownTrophy}
              isActive={false}
              contestants="10024"
              percentageCompletion={0}
              buttonOne="Signup to Competition"
              buttonHandlerOne={handleSignupClick}
              buttonTwo="Rules"
              buttonHandlerTwo={handleRulesClick}
              buttonThree="Standings"
              buttonHandlerThree={handleStandingsClick}
            />
          </div>
        </div>
      </div>
      {isModalOpen && <CompetitionModal onClose={handleModalClose} />}
    </>
  );
};

export default CompetitionsPrev;
