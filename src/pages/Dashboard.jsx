// Dashboard.jsx
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { DoubleLineAreaChart, HalfDonutChart } from "../components/Charts";
import TableDataGridHeadingFilters from "../components/Tables/TableDataGridHeadingFilters";
import BasicInfoCard from "../components/Cards/BasicInfoCard";
import BasicInfoActiveCard from "../components/Cards/BasicInfoActiveCard";
import PageHeader from "../components/Layout/PageHeader";
import BasicInfoCardPlus from "../components/Cards/BasicInfoCardPlus";
import { useAuth } from "../context/AuthContext";
import {
  getAccountStatusByLogin,
  getDealHistory,
  getBalanceEquity,
} from "../services/mt5Service";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TableNoData from "../components/Tables/TableNoData";
import AccountBalance from "@components/PerformanceStatsComponent/AccountBalance";
import DailyAccountBalance from "@components/PerformanceStatsComponent/DailyAccountBalanceChart";
import GaugeCard from "@components/PerformanceStatsComponent/GaugeCard";
import RiskManagementCard from "@components/Cards/RiskManagementCard";
import ProbabilityCard from "@components/PerformanceStatsComponent/ProbabilityCard";
// TODO: known issue: refresh required on login

const Dashboard = () => {
  const navigate = useNavigate();
  const { selectedAccount, user, accountOptions, handleMt5ApiLogoutOnTimeout } =
    useAuth();
  const [loading, setLoading] = useState(true);
  const [dateValue, setDateValue] = useState(null);
  const [openTimeValue, setOpenTimeValue] = useState(null);
  const [closeTimeValue, setCloseTimeValue] = useState(null);

  const [accountStatusData, setAccountStatusData] = useState(null);
  const [dealHistoryData, setDealHistoryData] = useState(null);
  const [balanceEquityData, setBalanceEquityData] = useState([]);
  const [timeframe, setTimeframe] = useState("monthly");

  const [profitTarget, setProfitTarget] = useState(0);
  const [netProfitLoss, setNetProfitLoss] = useState(0);
  const [accountStatusText, setAccountStatusText] = useState("");
  const [profitLossToday, setProfitLossToday] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountStatus = await getAccountStatusByLogin(
          selectedAccount.value
        );
        setAccountStatusData(accountStatus);
        const balanceEquity = await getBalanceEquity(
          user.id,
          selectedAccount.value,
          timeframe
        );
        setProfitTarget(accountStatus.profit_target || 0);
        setAccountStatusText(accountStatus.account_status || "N/A");
        setNetProfitLoss(
          accountStatus.balance - accountStatus.account_size || 0
        );
        setBalanceEquityData(balanceEquity);
        const dealHistory = await getDealHistory(
          user.id,
          selectedAccount.value
        );
        setDealHistoryData(dealHistory);

        // Assuming 'Profit' in 'summary' is the profit/loss for today
        setProfitLossToday(dealHistory.summary.Profit || 0);
      } catch (error) {
        console.error("Error fetching data:", error);
        handleMt5ApiLogoutOnTimeout(error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedAccount && user) {
      setLoading(true);
      fetchData();
    } else {
      // No selected account; stop loading and render the prompt message
      setLoading(false);
    }
  }, [selectedAccount, user, timeframe]);

  const handleSelectOne = (selectedOption) => {
    console.log(selectedOption);
  };

  const handleSelectTwo = (selectedOption) => {
    console.log(selectedOption);
  };

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };

  const handleOpenTimeChange = (newValue) => {
    setOpenTimeValue(newValue);
  };

  const handleCloseTimeChange = (newValue) => {
    setCloseTimeValue(newValue);
  };

  // Handle timeframe change from the chart component
  const handleTimeframeChange = (selectedOption) => {
    setTimeframe(selectedOption.value);
  };

  // Map deal history data to rows for the Trades table
  const rowsTrades = dealHistoryData
    ? dealHistoryData.deal_history.map((deal, index) => ({
        id: index + 1,
        col1: deal.Ticket,
        col2: deal.Type,
        col3: deal["Open Time"],
        col4: deal["Close Time"],
        col5: deal.Symbol,
        col6: deal.Lots,
        col7: `$${deal["Net Profit"].toFixed(2)}`,
      }))
    : [];

  const columnsTrades = [
    { field: "col1", headerName: "Ticket", flex: 1 },
    { field: "col2", headerName: "Type", flex: 1 },
    { field: "col3", headerName: "Open Time", flex: 1 },
    { field: "col4", headerName: "Close Time", flex: 1 },
    { field: "col5", headerName: "Symbol", flex: 1 },
    { field: "col6", headerName: "Lots", flex: 1 },
    { field: "col7", headerName: "Net Profit", flex: 1 },
  ];

  // Map summary data to rows for the Trading Days table
  const rowsTradingDays = dealHistoryData
    ? [
        {
          id: 1,
          col1: dealHistoryData.summary["Report Date"],
          col2: dealHistoryData.summary["Trades Opened"],
          col3: dealHistoryData.summary["Lots Traded"],
          col4: `$${dealHistoryData.summary.Profit.toFixed(2)}`,
          col5: `$${dealHistoryData.summary["Starting Equity"].toFixed(2)}`,
          col6: `$${dealHistoryData.summary["Ending Equity"].toFixed(2)}`,
          col7: `$${dealHistoryData.summary["Ending Balance"].toFixed(2)}`,
        },
      ]
    : [];

  const columnsTradingDays = [
    { field: "col1", headerName: "Report Date", flex: 1 },
    { field: "col2", headerName: "Trades Opened", flex: 1 },
    { field: "col3", headerName: "Lots Traded", flex: 1 },
    { field: "col4", headerName: "Profit", flex: 1 },
    { field: "col5", headerName: "Starting Equity", flex: 1 },
    { field: "col6", headerName: "Ending Equity", flex: 1 },
    { field: "col7", headerName: "Ending Balance", flex: 1 },
  ];

  const handleStartChallenge = () => {
    navigate("/trading-account");
  };

  // Check if the user has no trading accounts
  // if (!loading && accountOptions.length === 0) {
  //   return (
  //     <>
  //       <PageHeader
  //         title="Account Details"
  //         selectPlaceholder="Select Account"
  //         isNovaTheme={true}
  //       />
  //       <div className="flex flex-col gap-4 justify-center items-center h-[50vh] mt-8">
  //         <p className="text-center text-lg">
  //           Please purchase an account to start getting your stats.
  //         </p>
  //         <div className="w-full md:w-1/4">
  //           <Button variant="containedGradient" onClick={handleStartChallenge}>
  //             Start Challenge
  //           </Button>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
const rowsTradingDaysData = [
  {
    id: 1,
    col1: "2024-12-01",
    col2: 5,
    col3: 10,
    col4: "$500.50",
    col5: "$10,000.00",
    col6: "$10,500.50",
    col7: "$10,300.25",
  },
  {
    id: 2,
    col1: "2024-12-02",
    col2: 7,
    col3: 15,
    col4: "$-300.25",
    col5: "$10,500.50",
    col6: "$10,200.25",
    col7: "$10,150.10",
  },
];
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col gap-[20px] lg:gap-[36px]">
          <PageHeader
            title="Account Details"
            selectPlaceholder="Select Account"
            isNovaTheme={false}
          />
          <AccountBalance />

          <div className="flex justify-center items-center ">
            <ProbabilityCard
              title="AVG. Probability Day per trader"
              value={-168.21} // Negative value
            />
          </div>

          <div className="rounded-lg flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0 lg:space-x-3">
            <div className="flex-1 rounded-lg shadow-lg bg-sidebar">
              <GaugeCard
                title="Avg. Winning Trade"
                value={98}
                minValue={29}
                maxValue={123}
                color="#FF4D4D" // Red for the gauge fill
              />
            </div>
            <div className="flex-1 rounded-lg shadow-lg bg-sidebar">
              <GaugeCard
                title="Winning Trade %"
                value={50}
                minValue={29}
                maxValue={123}
                color="#01FF9D"
              />
            </div>
            <div className="flex-1 rounded-lg shadow-lg bg-sidebar">
              <GaugeCard
                title="Avg. Losing Trade"
                value={120}
                minValue={29}
                maxValue={123}
                color="#01FF9D"
              />
            </div>
          </div>

          <RiskManagementCard />
          <DailyAccountBalance />
          {/* <div
            id="charts"
            className="flex flex-wrap lg:flex-nowrap gap-4 w-full justify-center bg-sidebar"
          >
            <DoubleLineAreaChart
              balanceEquityData={balanceEquityData}
              onTimeframeChange={handleTimeframeChange}
              selectedTimeframe={timeframe}
            />
            <HalfDonutChart />
          </div> */}
          <div id="info-cards" className="flex flex-col gap-4">
            <div className="flex justify-between gap-4 flex-wrap lg:flex-nowrap">
              <BasicInfoCard
                title="Account Size"
                body={`$${accountStatusData?.account_size.toFixed(0)}`}
                isPlainBorder={true}
              />
              {/* TODO: currently shows balance  */}
              <BasicInfoCard
                title="Current Equity"
                // body={`$${accountStatusData?.starting_equity.toFixed(2)}`}
                body={`$${accountStatusData?.balance.toFixed(2)}`}
                isPlainBorder={true}
              />
            </div>
            <div className="flex justify-between gap-4 flex-wrap lg:flex-nowrap">
              <BasicInfoCard
                title="Profit target"
                body={`$${profitTarget.toFixed(2)}`}
                isPlainBorder={true}
              />
              <BasicInfoCard
                title="Net Profit / Loss"
                body={`$${netProfitLoss.toFixed(2)}`}
                isPlainBorder={true}
                // differenceAmount="N/A" // Percentage data not available
              />
              <BasicInfoCard
                title="Profit / Loss for today"
                body={`$${profitLossToday.toFixed(2)}`}
                isPlainBorder={true}
                // differenceAmount="N/A" // Percentage data not available
              />
              <BasicInfoActiveCard
                title="Account status"
                status={accountStatusText}
                isBlinkingDot={true}
                isPlainBorder={true}
              />
            </div>
          </div>
          {rowsTrades.length === 1 ? (
            <TableNoData emptyMessage={"No trade history"} />
          ) : (
            <>
              <TableDataGridHeadingFilters
                selectOnePlaceholder="Type"
                selectOneOptions={["Option 1", "Option 2"]}
                selectOneHandler={handleSelectOne}
                // selectTwoPlaceholder="Symbol"
                // selectTwoOptions={["GB", "JPY"]}
                // selectTwoHandler={handleSelectTwo}
                timeValue={openTimeValue}
                timeHandler={handleOpenTimeChange}
                timePlaceholder="Open Time"
                timeValueTwo={closeTimeValue}
                timeHandlerTwo={handleCloseTimeChange}
                timePlaceholderTwo="Close Time"
                heading="Trading History"
                rows={rowsTrades}
                columns={columnsTrades}
                height="auto"
              />
            </>
          )}
          {rowsTradingDays.length === 1 ? (
            <TableNoData emptyMessage={"No trading days"} />
          ) : (
            <TableDataGridHeadingFilters
              dateValue={dateValue}
              dateHandler={handleDateChange}
              datePlaceholder="Report Date"
              heading="Trading Days"
              rows={rowsTradingDays}
              columns={columnsTradingDays}
              height="auto"
            />
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
