import React from "react";

const TradingPanel = ({ account, trades, realTimeData }) => {
  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white p-4 rounded-lg">
      <div className="flex flex-col gap-4">
        {/* Trading Mode & Leverage */}
        <div className="flex gap-2">
          <select className="flex-1 bg-gray-800 text-white p-2 rounded text-sm" defaultValue="Isolated">
            <option value="Isolated">Isolated</option>
            <option value="Cross">Cross</option>
          </select>
          <select className="flex-1 bg-gray-800 text-white p-2 rounded text-sm" defaultValue="100x">
            <option value="100x">100x</option>
            <option value="50x">50x</option>
            <option value="10x">10x</option>
          </select>
        </div>

        {/* Order Type Buttons */}
        <div className="flex gap-2">
          {["Limit", "Market", "Trigger"].map((type) => (
            <button
              key={type}
              className={`flex-1 py-2 rounded text-sm ${
                type === "Trigger" ? "bg-gray-700 text-green-400" : "bg-gray-800 text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Available Balance */}
        <div className="flex justify-between bg-gray-700 p-3 rounded text-sm">
          <span>Available USDT</span>
          <span className="text-cyan-400">4567.89</span>
        </div>

        {/* Price Inputs */}
        <div className="space-y-3">
          <div>
            <label className="text-sm mb-1 block">Trigger Price</label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full bg-gray-800 p-2 rounded text-sm"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm mb-1 block">Market | Limit</label>
            <select className="w-full bg-gray-800 p-2 rounded text-sm">
              <option>Market</option>
              <option>Limit</option>
            </select>
          </div>
        </div>

        {/* Amount Input */}
        <div>
          <label className="text-gray-400 text-sm mb-1 block">Amount (SOL)</label>
          <input
            type="text"
            placeholder="Enter amount"
            className="w-full bg-gray-800 p-2 rounded text-sm mb-2"
          />
          <div className="grid grid-cols-5 gap-2">
            {["0.5%", "25%", "50%", "75%", "100%"].map((percent) => (
              <span key={percent} className="bg-gray-800 p-1 rounded text-center text-sm text-gray-400">
                {percent}
              </span>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>Max Open: 0.2 SOL</span>
            <span>Cost: 0.1 USDT</span>
          </div>
        </div>

        {/* Trading Actions */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-green-500 py-2 rounded text-sm font-medium">Open Long</button>
            <button className="bg-red-500 py-2 rounded text-sm font-medium">Open Short</button>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            {[
              ["Available Margin", `${realTimeData.availableMargin.toFixed(2)} USDT`],
              ["Used Margin", `${realTimeData.usedMargin.toFixed(2)} USDT`],
              ["Total Balance", `${realTimeData.totalBalance.toFixed(2)} USDT`],
              ["Unrealized P&L", `${realTimeData.unrealizedPnL.toFixed(2)} USDT`],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between text-gray-400">
                <span>{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPanel;