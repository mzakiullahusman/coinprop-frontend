import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import TableStandings from "../components/Tables/TableStandings";
import { getLeaderboard } from "../services/mt5Service";
import Loader from "../components/Loader";
import { useAuth } from "../context/AuthContext";
const leaderboardData = [
  {
    rank: 1,
    name: "John Smith",
    profit: "$45,678.90",
    account_size: "$100,000",
    percent_gain: "45.68%",
    country: "US",
  },
  {
    rank: 2,
    name: "Emma Johnson",
    profit: "$38,245.60",
    account_size: "$85,000",
    percent_gain: "45.00%",
    country: "CA",
  },
  {
    rank: 3,
    name: "Carlos Rodriguez",
    profit: "$32,567.45",
    account_size: "$75,000",
    percent_gain: "43.42%",
    country: "MX",
  },
  {
    rank: 4,
    name: "Sophia Lee",
    profit: "$28,901.23",
    account_size: "$65,000",
    percent_gain: "44.46%",
    country: "JP",
  },
  {
    rank: 5,
    name: "Ahmed Hassan",
    profit: "$25,678.90",
    account_size: "$60,000",
    percent_gain: "42.80%",
    country: "AE",
  },
  {
    rank: 6,
    name: "Ivan Petrov",
    profit: "$22,345.67",
    account_size: "$55,000",
    percent_gain: "40.63%",
    country: "RU",
  },
  {
    rank: 7,
    name: "Maria Silva",
    profit: "$19,876.54",
    account_size: "$50,000",
    percent_gain: "39.75%",
    country: "BR",
  },
  {
    rank: 8,
    name: "David Kim",
    profit: "$16,543.21",
    account_size: "$45,000",
    percent_gain: "36.76%",
    country: "KR",
  },
  {
    rank: 9,
    name: "Anna Mueller",
    profit: "$13,210.98",
    account_size: "$40,000",
    percent_gain: "33.03%",
    country: "DE",
  },
  {
    rank: 10,
    name: "Mohammed Al-Fayed",
    profit: "$10,987.65",
    account_size: "$35,000",
    percent_gain: "31.39%",
    country: "SA",
  },
];
const Leaderboard = () => {
  const { handleMt5ApiLogoutOnTimeout } = useAuth();
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLeaderboard();
        // setTableData(data);
        setTableData(leaderboardData)
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
        <h2 className="text-white text-[28px] xl:text-[44px] font-medium">
          Leaderboard
        </h2>
      </div>
      <TableStandings
        data={tableData?tableData:[]}
        error={error}
        emptyMessage="No leaderboard data available"
      />
    </div>
  );
};

export default Leaderboard;
