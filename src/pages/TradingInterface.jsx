import React from "react";
import Sidebar from "@components/TradingView/Sidebar";
import CandleChart from "@components/TradingView/CandleChart";
import TradePanel from "@components/TradingView/TradePanel";
import Header from "@components/TradingView/Header";
import OrderBook from "@components/TradingView/OrderBook";
import TradingTable from "@components/TradingView/TradingTable";
const dummyOrders = [
  { time: "16:59:32", price: "420.56", amount: "25", isBuy: false },
  { time: "16:59:32", price: "258.54", amount: "220.46", isBuy: true },
  { time: "17:00:01", price: "430.00", amount: "15", isBuy: false },
  { time: "17:00:15", price: "260.12", amount: "210.30", isBuy: true },
  { time: "17:00:01", price: "430.00", amount: "15", isBuy: false },
  { time: "17:00:15", price: "260.12", amount: "210.30", isBuy: true },
  { time: "17:00:01", price: "430.00", amount: "15", isBuy: false },
  { time: "17:00:15", price: "260.12", amount: "210.30", isBuy: true },
  { time: "17:00:01", price: "430.00", amount: "15", isBuy: false },
  { time: "17:00:15", price: "260.12", amount: "210.30", isBuy: true },
];
const TradingInterface = () => {
  return (
    <div className="flex bg-[#0F1827] text-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Header */}
        <Header />

        {/* Main Trading Area */}
        <div className="flex flex-1">
          {/* Left Column - Chart */}
          <div className="flex flex-row border-b-2 border-b-custom-border h-auto">
            <CandleChart />
            <OrderBook orders={dummyOrders} />
          </div>

          {/* Right Column - Trade Panel and Order Book */}
          <div className="flex flex-col">
            <TradePanel />
          </div>
        </div>
        <TradingTable />
      </div>
    </div>
  );
};

export default TradingInterface;
