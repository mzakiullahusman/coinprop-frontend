import React, { useState } from "react";
import apiClient from "../../services/apiClient";
import toast, { Toaster } from 'react-hot-toast';

const TradingPanel = ({ account, trades, realTimeData, onTradeUpdate, selectedSymbol }) => {
  const [orderType, setOrderType] = useState("Market");
  const [marginMode, setMarginMode] = useState("Isolated");
  const [leverage, setLeverage] = useState("100x");
  const [triggerPrice, setTriggerPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [profitType, setProfitType] = useState("Long");

  const handleOpenTrade = async (e) => {
    e.preventDefault();
    if (!account) {
      toast.error("No account selected. Please select an account.");
      return;
    }
    try {
      const response = await apiClient.post("/trades", {
        accountId: account._id,
        tradePair: selectedSymbol, 
        profitType,
        orderType,
        marginMode,
        leverage: parseInt(leverage),
        triggerPrice: parseFloat(triggerPrice),
        amount: parseFloat(amount),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
      }
    );

      if (response.data.success) {
        toast.success("Trade opened successfully!");
        onTradeUpdate();
      }
    } catch (error) {
      toast.error(`Error opening trade: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleCloseTrade = async (tradeId) => {
    try {
      const response = await apiClient.post(`/trades/close/${tradeId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json",
          },
        });
      if (response.data.success) {
        toast.success(`Trade closed successfully! PNL: ${response.data.pnl.toFixed(2)} USDT`);
        onTradeUpdate();
      }
    } catch (error) {
      toast.error(`Error closing trade: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white p-4 rounded-lg">
      <div className="flex flex-col gap-4">
        {/* Trading Mode & Leverage */}
        <div className="flex gap-2">
          <select
            className="flex-1 bg-gray-800 text-white p-2 rounded text-sm"
            value={marginMode}
            onChange={(e) => setMarginMode(e.target.value)}
          >
            <option value="Isolated">Isolated</option>
            <option value="Cross">Cross</option>
          </select>
          <select
            className="flex-1 bg-gray-800 text-white p-2 rounded text-sm"
            value={leverage}
            onChange={(e) => setLeverage(e.target.value)}
          >
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
                type === orderType ? "bg-gray-700 text-green-400" : "bg-gray-800 text-white"
              }`}
              onClick={() => setOrderType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Available Balance */}
        <div className="flex justify-between bg-gray-700 p-3 rounded text-sm">
          <span>Available USDT</span>
          <span className="text-cyan-400">{account?.balance?.toFixed(2) || "N/A"}</span>
        </div>

        {/* Price Inputs */}
        <div className="space-y-3">
          {orderType === "Trigger" && (
            <div>
              <label className="text-sm mb-1 block">Trigger Price</label>
              <input
                type="number"
                placeholder="Enter price"
                className="w-full bg-gray-800 p-2 rounded text-sm"
                value={triggerPrice}
                onChange={(e) => setTriggerPrice(e.target.value)}
              />
            </div>
          )}

          {orderType === "Limit" && (
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Limit Price</label>
              <input
                type="number"
                placeholder="Enter limit price"
                className="w-full bg-gray-800 p-2 rounded text-sm"
                value={triggerPrice}
                onChange={(e) => setTriggerPrice(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* Amount Input */}
        <div>
          <label className="text-gray-400 text-sm mb-1 block">Amount (USDT)</label>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full bg-gray-800 p-2 rounded text-sm mb-2"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="grid grid-cols-5 gap-2">
            {["0.5%", "25%", "50%", "75%", "100%"].map((percent) => (
              <span
                key={percent}
                className="bg-gray-800 p-1 rounded text-center text-sm text-gray-400 cursor-pointer"
                onClick={() => setAmount((account?.balance * parseFloat(percent) / 100 || 0).toFixed(2))}
              >
                {percent}
              </span>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>Max Open: {account?.balance?.toFixed(2) || "N/A"} USDT</span>
            {/* <span>Cost: {parseFloat(amount || 0).toFixed(2)} USDT</span> */}
          </div>
        </div>

        {/* Trading Actions */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-3">
            <button
              className="bg-green-500 py-2 rounded text-sm font-medium"
              onClick={() => {
                setProfitType("Long");
                handleOpenTrade(event);
              }}
            >
              Open Long
            </button>
            <button
              className="bg-red-500 py-2 rounded text-sm font-medium"
              onClick={() => {
                setProfitType("Short");
                handleOpenTrade(event);
              }}
            >
              Open Short
            </button>
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

        {/* Open Trades */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Open Trades</h3>
          {trades.filter(trade => trade.status === "Pending").map((trade) => (
            <div key={trade._id} className="bg-gray-800 p-3 rounded mb-2 flex justify-between items-center">
              <div>
                <p className="text-lg">{trade.tradePair} - {trade.profitType}</p>
                <p className="text-sm text-gray-400">Amount: {trade.amount.toFixed(2)} USDT</p>
              </div>
              <button
                className="bg-red-500 px-3 py-1 rounded text-sm"
                onClick={() => handleCloseTrade(trade._id)}
              >
                Close
              </button>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default TradingPanel;
