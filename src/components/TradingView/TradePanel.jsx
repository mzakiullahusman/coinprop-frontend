import React from "react";

const TradingPanel = () => {
  return (
    <div className="flex bg-gray-900 text-white">
      {/* Trading Panel */}
      <div className="flex flex-col w-auto p-4">
        {/* Dropdowns and Balance */}
        <div className="flex items-center  mb-4">
          <div className="flex space-x-4">
            <select
              className="bg-gray-800 text-white p-2 px-10 text-sm rounded cursor-pointer"
              defaultValue="Isolated"
            >
              <option value="Isolated">Isolated</option>
              <option value="Cross">Cross</option>
            </select>
            <select
              className="bg-gray-800 text-white p-2 px-10 text-sm rounded cursor-pointer"
              defaultValue="100x"
            >
              <option value="100x">100x</option>
              <option value="50x">50x</option>
              <option value="10x">10x</option>
            </select>
          </div>
        </div>
        {/* Trigger Price Section */}
        <div className="space-y-4">
          <div className="flex space-x-4">
            <button className="bg-gray-800 px-4 py-2 rounded text-white text-sm">
              Limit
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded text-white text-sm">
              Market
            </button>
            <button className="bg-gray-700 px-4 py-2 rounded text-green-400 text-sm">
              Trigger
            </button>
          </div>

          <div className="flex justify-between bg-gray-700 px-4 py-2 rounded text-sm ">
            <span className="">Available USDT</span>{" "}
            <span className="text-custom-cyan">4567.89</span>
          </div>

          <div>
            <label className="block text-white text-sm">Trigger Price</label>
            <input
              type="number"
              placeholder="Please enter your price"
              className="w-full bg-gray-800 px-4 py-2 rounded text-white placeholder-gray-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm">
              Market | Limit
            </label>
            <select className="w-full bg-gray-800 px-4 py-2 rounded text-white text-sm">
              <option value="Market">Market</option>
              <option value="Limit">Limit</option>
            </select>
          </div>
        </div>

        {/* Amount and Buttons */}
        <div className="mt-6">
          <label className="block text-gray-400 text-sm">Amount (SOL)</label>
          <input
            type="text"
            placeholder="Please enter the amount in SOL"
            className="w-full bg-gray-800 px-4 py-2 rounded text-white text-sm placeholder-gray-500"
          />
          <div className="flex items-center space-x-2 mt-4">
            <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-400">
              0.5%
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-400">
              25%
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-400">
              50%
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-400">
              75%
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-400">
              100%
            </span>
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-400">
            <span>Max Open: 0.2 SOL</span>
            <span>Cost: 0.1 USDT</span>
          </div>
        </div>
        <div className="bg-sidebar rounded-lg p-3 mt-4">
          {/* Action Buttons */}
          <div className="flex space-x-4 mt-2">
            <button className="bg-green-500 px-6 py-2 rounded text-white text-sm">
              Open Long
            </button>
            <button className="bg-red-500 px-6 py-2 rounded text-white text-sm">
              Open Short
            </button>
          </div>

          {/* Margin Info */}
          <div className="mt-8 text-sm space-y-2">
            <div className="flex justify-between text-gray-400">
              <span>Available Margin:</span>
              <span>4294.42 USDT</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Used Margin:</span>
              <span>0.00 USDT</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Total Balance:</span>
              <span>4294.42 USDT</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Unrealized P&L:</span>
              <span>0.00 USDT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPanel;
