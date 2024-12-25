import SettingIcon from "@components/assets/SettingIcon";
import React from "react";

const Header = ({ selectedSymbol, setSelectedSymbol }) => {
  const handleSymbolChange = (event) => {
    setSelectedSymbol(event.target.value);
  };
  return (
    <div className="flex flex-wrap items-center justify-between bg-gray-800 p-4 border-b border-gray-700 space-y-4 lg:space-y-0">
      {/* Pair and Price */}
      <div className="flex items-center space-x-4">
        <div className="text-lg font-semibold flex items-center">
          <select
            className="bg-gray-700 text-white rounded px-2 py-1 mr-2 cursor-pointer"
            value={selectedSymbol}
            onChange={handleSymbolChange}
          >
            <option value="SOLUSDT">SOL/USDT</option>
            <option value="BTCUSDT">BTC/USDT</option>
            <option value="ETHUSDT">ETH/USDT</option>
            <option value="ADAUSDT">ADA/USDT</option>
            <option value="XRPUSDT">XRP/USDT</option>
          </select>
          <span className="text-xl font-bold text-green-500">258.54</span>
        </div>

        <div className="text-sm text-gray-400">
          <span className="mr-2">24h price change:</span>
          <span className="text-green-400">+3.98%</span>
        </div>
      </div>

      {/* Price Info */}
      <div className="flex items-center space-x-8">
        <div className="text-sm">
          <span className="block text-gray-400">Mark Price</span>
          <span className="text-white">258.49</span>
        </div>
        <div className="text-sm">
          <span className="block text-gray-400">Index Price</span>
          <span className="text-white">258.49</span>
        </div>
      </div>

      {/* Options and Stats */}
      <div className="flex items-center space-x-6">
        <div className="text-sm">
          <span className="block text-gray-400">Portfolio</span>
          <button className="bg-gray-700 px-4 py-1 rounded text-white">
            $50k Combine
          </button>
        </div>
        <div className="text-sm">
          <span className="block text-gray-400">Account</span>
          <select
            className="bg-gray-700 text-white px-4 py-1 rounded cursor-pointer"
            defaultValue="S1Sep4573"
          >
            <option value="S1Sep4573">Sep 2024</option>
            <option value="S2Sep1234">Oct 2024</option>
          </select>
        </div>
      </div>

      {/* Profit & Loss */}
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

      {/* Settings */}
      <button className="text-white bg-gray-700 rounded-full p-2">
        <SettingIcon />
      </button>
    </div>
  );
};

export default Header;
