import React, { useEffect, useRef, useState } from "react";
import Sidebar from "@components/TradingView/Sidebar";
import CandleChart from "@components/TradingView/CandleChart";
import TradePanel from "@components/TradingView/TradePanel";
import Header from "@components/TradingView/Header";
import OrderBook from "@components/TradingView/OrderBook";
import TradingTable from "@components/TradingView/TradingTable";
import setupApp from "@components/TradingView/KLineChartProComponent";
import '@klinecharts/pro/dist/klinecharts-pro.css'

const TradingInterface = () => {
  const myContainer = useRef(null);
  const [selectedSymbol, setSelectedSymbol] = useState("SOLUSDT");

  useEffect(() => {
    if (myContainer.current) {
      myContainer.current.innerHTML = "";
      setupApp(selectedSymbol);
    }
  }, [selectedSymbol]);
  
  return (
    <div className="flex bg-[#0F1827] text-white">
      <div className="flex flex-col w-full">
        <Header selectedSymbol={selectedSymbol} setSelectedSymbol={setSelectedSymbol} />

        <div className="flex flex-1 flex-wrap gap-y-8">
          <div id="container" ref={myContainer}></div>
          <OrderBook symbol={selectedSymbol.toLowerCase()} />
          <TradePanel />
        </div>
        
        <TradingTable />
      </div>
    </div>
  );
};

export default TradingInterface;
