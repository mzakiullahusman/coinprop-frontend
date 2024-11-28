import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import TableStandings from "../components/Tables/TableStandings";
import { getLeaderboard } from "../services/mt5Service";
import Loader from "../components/Loader";
import { useAuth } from "../context/AuthContext";

const Leaderboard = () => {
  const { handleMt5ApiLogoutOnTimeout } = useAuth();
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLeaderboard();
        setTableData(data);
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
