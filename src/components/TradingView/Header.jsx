import React, { useEffect, useState } from "react";
import SettingIcon from "@components/assets/SettingIcon";

const symbolsArr = ["BTCUSDT", "ETHUSDT", "BNBUSDT", "ADAUSDT", "SOLUSDT"];

const Header = ({ 
  selectedSymbol, 
  setSelectedSymbol,
  portfolioBalance,
  setPortfolioBalance,
  selectedAccount,
  setSelectedAccount,
  accounts,
 }) => {
  const [symbols, setSymbols] = useState(symbolsArr);
  const [price, setPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(null);
  

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${selectedSymbol.toLowerCase()}@ticker`
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrice(parseFloat(data.c).toFixed(2));
      setPriceChange(parseFloat(data.P).toFixed(2));
    };

    return () => ws.close(); 
  }, [selectedSymbol]);

  const handleSymbolChange = (event) => {
    setSelectedSymbol(event.target.value);
  };

  const handleAccountChange = (event) => {
    const selected = accounts.find((account) => account._id === event.target.value);
    setSelectedAccount(event.target.value);
    setPortfolioBalance(selected?.balance || "N/A");
  };

  return (
    <div className="flex flex-wrap items-center justify-between bg-gray-800 p-4 border-b border-gray-700 space-y-4 lg:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-semibold flex items-center">
          <select
            className="bg-gray-700 text-white rounded px-2 py-1 mr-2 cursor-pointer"
            value={selectedSymbol}
            onChange={handleSymbolChange}
          >
            {symbols.map((symbol) => (
              <option key={symbol} value={symbol}>
                {symbol.replace("USDT", "/USDT")}
              </option>
            ))}
          </select>
          <span className="text-xl font-bold text-green-500">
            {price || "Loading..."}
          </span>
        </div>

        <div className="text-sm text-gray-400">
          <span className="mr-2">24h price change:</span>
          <span className={priceChange >= 0 ? "text-green-400" : "text-red-400"}>
            {priceChange ? `${priceChange}%` : "Loading..."}
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <div className="text-sm">
          <span className="block text-gray-400">Mark Price</span>
          <span className="text-white">{price || "Loading..."}</span>
        </div>
        <div className="text-sm">
          <span className="block text-gray-400">Index Price</span>
          <span className="text-white">{price || "Loading..."}</span>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="text-sm">
          <span className="block text-gray-400">Portfolio</span>
          <button className="bg-gray-700 px-4 py-1 rounded text-white">
            ${portfolioBalance}
          </button>
        </div>
        <div className="text-sm">
          <span className="block text-gray-400">Account</span>
          <select
            className="bg-gray-700 text-white px-4 py-1 rounded cursor-pointer"
            value={selectedAccount}
            onChange={handleAccountChange}
          >
            {accounts.map((account) => (
              <option key={account._id} value={account._id}>
                {account.accountName || `Account ${account._id}`}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <div className="text-sm">
          <span className="block text-gray-400">Mill:</span>
          <span className="text-white">$49,887.09</span>
        </div>
        <div className="text-sm">
          <span className="block text-gray-400">RP&L:</span>
          <span className="text-green-500">-$171.86</span>
        </div>
        <div className="text-sm">
          <span className="block text-gray-400">Up&L:</span>
          <span className="text-white">$0.085</span>
        </div>
      </div>

      <button className="text-white bg-gray-700 rounded-full p-2">
        <SettingIcon />
      </button>
    </div>
  );
};

export default Header;
