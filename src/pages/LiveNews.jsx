import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Loader from "../components/Loader";
import NewsSearch from "../components/Filter/NewsFilter";
import LiveCard from "../components/Cards/LiveCard";
import { getLiveNews } from "../services/externalService";

const LiveNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  const [totalCount, setTotalCount] = useState(0);

  // Adjusted getLiveAPI function
  const getLiveAPI = async () => {
    setLoading(true);
    try {
      const res = await getLiveNews();
      if (res) {
        const { count, results } = res;
        setTotalCount(count);
        // Transform API data to fit `LiveCard` expectations
        const transformedData = results.map((item) => ({
          source_name: item.source?.title || "Unknown Source",
          title: item.title,
          date: new Date(item.published_at).toLocaleDateString(),
          text: `Read about ${item.title} on ${item.domain}`,
          news_url: item.url,
        }));
        setNewsData(transformedData);
      }
    } catch (error) {
      console.error("Failed to fetch live news:", error);
      setNewsData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLiveAPI();
  }, [ currentPage]);

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-[24px] lg:pt-[76px]">
      <NewsSearch />
      <LiveCard data={newsData} />
      <Stack spacing={2} alignItems="center" sx={{ mt: 3 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{ button: { color: "#FFFFFF" }, div: { color: "#FFFFFF" } }}
        />
      </Stack>
    </div>
  );
};

export default LiveNews;
