import CompetitionCard from "@components/Cards/CompetitionCard";
import CompetitionWinnerCard  from "@components/Cards/CompetitionWinnerCard";

const dummyData = [
  {
    title: "October Competition",
    contestants: 10024,
    prizePool: "Challenge",
    status: "Finished",
    progress: 100,
    timeLeft: calculateTimeLeft(new Date("2024-10-31T23:59:59Z")), // example end date
  },
  {
    title: "October Competition",
    contestants: 10024,
    prizePool: "Challenge",
    status: "Finished",
    progress: 50,
    timeLeft: calculateTimeLeft(new Date("2024-10-31T23:59:59Z")), // example end date
  },
  {
    title: "October Competition",
    contestants: 10024,
    prizePool: "Challenge",
    status: "Finished",
    progress: 100,
    timeLeft: calculateTimeLeft(new Date("2024-10-31T23:59:59Z")), // example end date
  },
  {
    title: "October Competition",
    contestants: 10024,
    prizePool: "Challenge",
    status: "Finished",
    progress: 100,
    timeLeft: calculateTimeLeft(new Date("2024-12-31T23:59:59Z")), // example end date
  },
];
const winnerDummyData = [
  {
    name: "Hani",
    competitionName: "Express Challenge",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    title: "Top Ranked Trader",
    withdrawalAmount: 109841.99,
    startingBalance: 750000.0,
    daysFunded: 249,
  },
  {
    name: "Hani",
    competitionName: "Express Challenge",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    title: "Top Ranked Trader",
    withdrawalAmount: 109841.99,
    startingBalance: 750000.0,
    daysFunded: 249,
  },
  {
    name: "Hani",
    competitionName: "Express Challenge",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    title: "Top Ranked Trader",
    withdrawalAmount: 109841.99,
    startingBalance: 750000.0,
    daysFunded: 249,
  },
  {
    name: "Hani",
    competitionName: "Express Challenge",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    title: "Top Ranked Trader",
    withdrawalAmount: 109841.99,
    startingBalance: 750000.0,
    daysFunded: 249,
  },
]; 
// Function to calculate time left
function calculateTimeLeft(endDate) {
  const now = new Date();
  const timeDifference = endDate - now; // difference in milliseconds

  if (timeDifference <= 0) {
    return `${0}d ${0}h ${0}m ${0}s`;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // days
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ); // hours
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // minutes
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // seconds

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const Competitions = () => {
  return (
    <>
      <div>
        <div className="w-full flex justify-between items-center">
          <h2 className="text-white text-[20px] xl:text-[25px]">
            Competitions
          </h2>
        </div>

        <div className="bg-gray-900 min-h-screen flex flex-wrap gap-3  p-6">
          {dummyData.map((data, index) => (
            <CompetitionCard
              key={index}
              title={data.title}
              contestants={data.contestants}
              prizePool={data.prizePool}
              status={data.status}
              progress={data.progress}
              timeLeft={data.timeLeft}
            />
          ))}
        </div>

        <div className="w-full flex justify-between items-center">
          <h2 className="text-white text-[20px] xl:text-[25px]">
            Last Competitions Winners
          </h2>
        </div>

        <div className="bg-gray-900 flex flex-wrap gap-3  p-6">
          {winnerDummyData.map((data, index) => (
            <CompetitionWinnerCard key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Competitions;
