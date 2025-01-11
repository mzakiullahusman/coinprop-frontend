import React, { useEffect, useRef, useState } from "react";
import TradePanel from "@components/TradingView/TradePanel";
import Header from "@components/TradingView/Header";
import OrderBook from "@components/TradingView/OrderBook";
import TradingTable from "@components/TradingView/TradingTable";
import setupApp from "@components/TradingView/KLineChartProComponent";
import { getAccount, getTrades, getAccounts } from "@services/tradingService";
import "@klinecharts/pro/dist/klinecharts-pro.css";

const TradingInterface = () => {
  const myContainer = useRef(null);
  const wsRef = useRef(null); // Ref to store WebSocket instance
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
    fetchAccountsData();
  }, []);

  useEffect(() => {
    if (selectedAccount) {
      fetchAccountData();
      fetchTrades();
      setupWebSocket();
    }

    return () => {
      // Cleanup WebSocket connection when the component unmounts or selectedAccount changes
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [selectedAccount]);

  const fetchAccountsData = async () => {
    try {
      const accountResponse = await getAccounts();
      setAccounts(accountResponse.accounts);
      if (accountResponse.accounts.length > 0) {
        setSelectedAccount(accountResponse.accounts[0]._id);
      }
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  const fetchAccountData = async () => {
    try {
      const accountData = await getAccount(selectedAccount);
      setAccount(accountData.account);
      setPortfolioBalance(accountData.account.balance);
    } catch (error) {
      console.error("Error fetching account data:", error);
    }
  };

  const fetchTrades = async () => {
    try {
      const tradesData = await getTrades(selectedAccount);
      setTrades(tradesData.trades);
    } catch (error) {
      console.error("Error fetching trades:", error.message);
    }
  };

  const setupWebSocket = () => {
    // Close the existing WebSocket connection if it exists
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      throw new Error('No auth token found');
    }

    const ws = new WebSocket(`${import.meta.env.VITE_API_BASE_URL_WS}?token=${authToken}`);
    wsRef.current = ws; // Store the new WebSocket instance in the ref

    ws.onopen = () => {
      ws.send(JSON.stringify({ accountId: selectedAccount }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.error) {
        console.error('WebSocket error:', data.error);
      } else {
        setRealTimeData(data);
      }
    };

    ws.onerror = (error) => console.error("WebSocket error:", error.message);

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };
  };

  const onTradeUpdate = async () => {
    await Promise.all([
      fetchAccountData(),
      fetchTrades(),
    ]);
    // The real-time data will be updated automatically through the WebSocket connection
  };

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
          realTimeData={realTimeData}
        />

        <div className="flex flex-1 flex-wrap gap-y-8">
          <div id="container" ref={myContainer}></div>
          <OrderBook symbol={selectedSymbol.toLowerCase()} />
          <TradePanel
            account={account}
            trades={trades}
            realTimeData={realTimeData}
            onTradeUpdate={onTradeUpdate}
            selectedSymbol={selectedSymbol}
          />
        </div>

        <TradingTable trades={trades} />
      </div>
    </div>
  );
};

export default TradingInterface;
