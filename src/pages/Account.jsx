import React, { useEffect, useState } from "react";
import AccountSummaryCard from "@components/Cards/AccountSummaryCard";
import TableAccountsStandings from "@components/Tables/TableAccounts";
import { getLeaderboard } from "../services/mt5Service";
import Loader from "../components/Loader";
import { useAuth } from "../context/AuthContext";
const leaderboardData = [
  {
    performa_no: "12819151",
    account_size: "$100,000",
    prize: "$1,000",
    time: "8:30 am",
    status: "Active",
    account_platform: "MT5",
  },
  {
    performa_no: "12819151",
    account_size: "$100,000",
    prize: "$1,000",
    time: "8:30 am",
    status: "Inactive",
    account_platform: "MT5",
  },
  {
    performa_no: "12819151",
    account_size: "$100,000",
    prize: "$1,000",
    time: "8:30 am",
    status: "Active",
    account_platform: "MT5",
  },
  {
    performa_no: "12819151",
    account_size: "$100,000",
    prize: "$1,000",
    time: "8:30 am",
    status: "Inactive",
    account_platform: "MT5",
  },
  {
    performa_no: "12819151",
    account_size: "$100,000",
    prize: "$1,000",
    time: "8:30 am",
    status: "Active",
    account_platform: "MT5",
  },
  {
    performa_no: "12819151",
    account_size: "$100,000",
    prize: "$1,000",
    time: "8:30 am",
    status: "Inactive",
    account_platform: "MT5",
  },
  {
    performa_no: "12819151",
    account_size: "$100,000",
    prize: "$1,000",
    time: "8:30 am",
    status: "Active",
    account_platform: "MT5",
  },
  {
    performa_no: "12819151",
    account_size: "$100,000",
    prize: "$1,000",
    time: "8:30 am",
    status: "Inactive",
    account_platform: "MT5",
  },
];

const cardsData = [
  {
    title: "Most Active Days",
    day: "Tuesday",
    stats: ["4 active days", "22 total trades", "5.50 avg Trades/D"],
    highlight: null,
    highlightColor: null,
  },
  {
    title: "Most Profitable Days",
    day: "Wednesday",
    stats: [],
    highlight: "$108.88",
    highlightColor: "green",
  },
  {
    title: "Last Profitable Day",
    day: "Monday",
    stats: [],
    highlight: "-$108.88",
    highlightColor: "red",
  },
];

const Account = () => {
  const { handleMt5ApiLogoutOnTimeout } = useAuth();
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLeaderboard();
        // setTableData(data);
        setTableData(leaderboardData);
      } catch (err) {
        setError("Failed to load leaderboard data");
        handleMt5ApiLogoutOnTimeout(err);
        // toast.error("Error fetching leaderboard data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-[20px] lg:gap-[10px] lg:pt-[10px]">
      <div className="w-full flex justify-between items-center mb-6">
        <h2 className="text-white text-[28px] xl:text-[44px]">Accounts</h2>
      </div>
      <TableAccountsStandings
        data={tableData ? tableData : []}
        error={error}
        emptyMessage="No leaderboard data available"
      />

      
      <div class="flex items-center p-4 bg-sidebar text-white rounded-lg shadow-md mt-2 border border-white/10">
        <span class="w-2 h-2 rounded-full bg-teal-400 mr-2"></span>
        <p class="text-sm">
          Risk Management is knowing that you can’t take every opportunity, but
          that you understand which opportunity you take.
        </p>
      </div>

      <div className="flex space-x-4 bg-gray-900 my-6">
        {cardsData.map((card, index) => (
          <div key={index} className="flex-1">
            <AccountSummaryCard
              title={card.title}
              day={card.day}
              stats={card.stats}
              highlight={card.highlight}
              highlightColor={card.highlightColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
