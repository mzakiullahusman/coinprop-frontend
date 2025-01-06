import React, { useEffect, useRef, useState } from "react";
import TradePanel from "@components/TradingView/TradePanel";
import Header from "@components/TradingView/Header";
import OrderBook from "@components/TradingView/OrderBook";
import TradingTable from "@components/TradingView/TradingTable";
import setupApp from "@components/TradingView/KLineChartProComponent";
import { getAccount, getTrades } from "@services/tradingService";
import "@klinecharts/pro/dist/klinecharts-pro.css";

const TradingInterface = () => {
  const myContainer = useRef(null);
  const [selectedSymbol, setSelectedSymbol] = useState("SOLUSDT");
  const [account, setAccount] = useState(null);
  const [trades, setTrades] = useState([]);
  const [realTimeData, setRealTimeData] = useState({
    availableMargin: 0,
    usedMargin: 0,
    totalBalance: 0,
    unrealizedPnL: 0,
  });

  const [portfolioBalance, setPortfolioBalance] = useState("Loading...");
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");

  useEffect(() => {
    if (myContainer.current) {
      myContainer.current.innerHTML = "";
      setupApp(selectedSymbol);
    }
  }, [selectedSymbol]);

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const accountData = await getAccount(selectedAccount); 
        setAccount(accountData.account);
        setPortfolioBalance(accountData.account.balance);
      } catch (error) {
        console.error("Error fetching account data:", error.message);
      }
    };

    const fetchTrades = async () => {
      try {
        const tradesData = await getTrades("yourAccountId"); // Replace with account ID
        setTrades(tradesData);
      } catch (error) {
        console.error("Error fetching trades:", error.message);
      }
    };

    fetchAccountData();
    // fetchTrades();
  }, []);

  // Connect WebSocket for real-time data
  // useEffect(() => {
  //   const ws = new WebSocket("ws://localhost:5000"); // Replace with your WebSocket URL

  //   ws.onopen = () => {
  //     ws.send(
  //       JSON.stringify({
  //         userId: "yourUserId", 
  //         accountId: "yourAccountId", 
  //       })
  //     );
  //   };

  //   ws.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     setRealTimeData(data);
  //   };

  //   ws.onerror = (error) => console.error("WebSocket error:", error.message);

  //   return () => ws.close();
  // }, []);

  return (
    <div className="flex bg-[#0F1827] text-white">
      <div className="flex flex-col w-full">
        <Header 
          selectedSymbol={selectedSymbol} 
          setSelectedSymbol={setSelectedSymbol}
          portfolioBalance={portfolioBalance}
          setPortfolioBalance={setPortfolioBalance}
          selectedAccount={selectedAccount}
          setSelectedAccount={setSelectedAccount}
          accounts={accounts}
          setAccounts={setAccounts}
        />

        <div className="flex flex-1 flex-wrap gap-y-8">
          <div id="container" ref={myContainer}></div>
          <OrderBook symbol={selectedSymbol.toLowerCase()} />
          <TradePanel
            account={account}
            trades={trades}
            realTimeData={realTimeData}
          />
        </div>

        <TradingTable trades={trades} />
      </div>
    </div>
  );
};

export default TradingInterface;
