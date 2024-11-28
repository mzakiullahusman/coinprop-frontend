import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Loader from "../components/Loader";
import NewsSearch from "../components/Filter/NewsFilter";
import LiveCard from "../components/Cards/LiveCard";
import { getLiveNews } from "../services/externalService";

const LiveNews = () => {
  const [search, setSearch] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  const getLiveAPI = async () => {
    setLoading(true);
    let res = await getLiveNews({ search });
    if (res.status === 200) setNewsData(res.data?.data || []);
    else setNewsData([]);
    setLoading(false);
  };

  useEffect(() => {
    getLiveAPI();
  }, [search]);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const currentData = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex flex-col gap-[24px] lg:pt-[76px]">
        <NewsSearch search={search} setSearch={setSearch} />
        <LiveCard data={currentData} />
        <Stack spacing={2} alignItems="center" sx={{ mt: 3 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            sx={{button:{color: '#ffffff'}, div:{color: "#ffffff"}}}
          />
        </Stack>
      </div>
    </>
  );
};

export default LiveNews;
