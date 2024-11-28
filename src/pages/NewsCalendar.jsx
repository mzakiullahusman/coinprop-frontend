import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";

import Loader from "../components/Loader";
import Table from "../components/Tables/Table";
import NewsCalendarFilter from "../components/NewsCalendarFilter";
import { getStockNewsNew } from "../services/externalService";

const NewsCalendar = () => {
  const [stockNewsData, setStockNewsData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [impactFilter, setImpactFilter] = useState([]);
  const [currenciesFilter, setCurrenciesFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [daysFilter, setDaysFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getLiveAPI = async () => {
    setLoading(true);
    let res = await getStockNewsNew();
    if (res.status === 200) {
      setStockNewsData(res?.data || []);
      setFilterData(res?.data || []);
    } else {
      setFilterData([]);
      setStockNewsData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getLiveAPI();
  }, []);

  const headers = [
    { label: "Date", key: "date" },
    { label: "Impact", key: "impact" },
    { label: "Event", key: "event" },
    { label: "Country", key: "country" },
    { label: "Currency", key: "currency" },
    { label: "Actual", key: "actual" },
    { label: "Previous", key: "previous" },
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const impacts = ["Low", "Medium", "High"];
  const daysMobile = days;
  const currencies = [
    { code: "NZD", label: "New Zealand" },
    { code: "GBP", label: "United Kingdom" },
    { code: "USD", label: "United States" },
    { code: "CAD", label: "Canada" },
    { code: "AUD", label: "Australia" },
    { code: "JPY", label: "Japan" },
    { code: "CHF", label: "Switzerland" },
    { code: "EUR", label: "Euro" },
  ];

  const toggleCheckbox = (stateSetter, currentState, value, type) => {
    if (type === "currencies") {
      if (value?.length === currencies?.length) {
        stateSetter([...value]);
        setCurrenciesFilter([...value]);
      } else if (value?.length === 0) {
        stateSetter([]);
        setCurrenciesFilter([]);
      } else {
        stateSetter(
          currentState.some((existingFilter) =>
            value?.some((newFilter) => newFilter?.code === existingFilter?.code)
          )
            ? currentState.filter(
                (v) => !value?.some((newFilter) => newFilter?.code === v?.code)
              )
            : [...currentState, ...value]
        );
        setCurrenciesFilter(
          currentState.some((existingFilter) =>
            value?.some((newFilter) => newFilter?.code === existingFilter?.code)
          )
            ? currentState.filter(
                (v) => !value?.some((newFilter) => newFilter?.code === v?.code)
              )
            : [...currentState, ...value]
        );
      }
    } else {
      stateSetter(
        currentState.includes(value)
          ? currentState.filter((v) => v !== value)
          : [...currentState, value]
      );
      if (type === "impact") {
        setImpactFilter(
          currentState.includes(value)
            ? currentState.filter((v) => v !== value)
            : [...currentState, value]
        );
      } else if (type === "days") {
        setDaysFilter(
          currentState.includes(value)
            ? currentState.filter((v) => v !== value)
            : [...currentState, value]
        );
      }
    }
  };

  useEffect(() => {
    setFilterData(
      stockNewsData
        .filter((a) =>
          impactFilter.length === 0 ? a : impactFilter.includes(a.impact)
        )
        ?.filter((a) =>
          currenciesFilter?.length === 0
            ? a
            : currenciesFilter?.some?.(
                (currency) => currency?.code === a?.currency
              )
        )
        ?.filter((a) => {
          if (daysFilter?.length === 0) {
            return a;
          } else {
            const date = dayjs(a?.date);
            const dayName = date.format("dddd");
            return daysFilter?.some?.(
              (day) => day?.toLowerCase() === dayName?.toLowerCase()
            );
          }
        })
    );
  }, [impactFilter, currenciesFilter, daysFilter, stockNewsData]);

  const totalPages = Math.ceil(filterData.length / itemsPerPage);
  const currentTableData = filterData.slice(
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
    <section className="flex flex-col gap-[24px] lg:pt-[76px]">
      <div className="rounded-[10px] text-sm border-opacity-10 p-2 md:p-6">
        <NewsCalendarFilter
          days={days}
          impacts={impacts}
          daysMobile={daysMobile}
          currencies={currencies}
          toggleCheckbox={toggleCheckbox}
        />
        <div className="rounded-[10px] text-sm">
          <div className="overflow-x-auto rounded-t-lg">
            <Table headers={headers} tableData={currentTableData} />
            <Stack spacing={2} alignItems="center" sx={{ mt: 3 }}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                sx={{button:{color: '#ffffff'}}}
              />
            </Stack>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCalendar;
