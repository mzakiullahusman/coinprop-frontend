import React, { useState, useEffect } from "react";

const OrderRow = ({ time, price, amount, isBuy }) => {
  return (
    <div
      className={`grid grid-cols-3 text-xs gap-1 text-sm py-2 px-2 border-b-2 border-b-custom-border ${
        isBuy
          ? "text-[#27AE60] bg-[#27AE60] bg-opacity-10"
          : "text-[#EB5757] bg-[#EB5757] bg-opacity-10"
      }`}
    >
      <span>{time}</span>
      <span className="text-[#d1d5db] text-center">{price}</span>
      <span className="text-right text-[#d1d5db]">{amount}</span>
    </div>
  );
};


const OrderBook = ({ symbol }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@depth`
    );
  
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.b && data.a) {
          const limitedBids = data.b.slice(0, 6).map(([price, amount]) => ({
            time: new Date().toLocaleTimeString(),
            price: parseFloat(price).toFixed(2),
            amount: parseFloat(amount).toFixed(2),
            isBuy: true,
          }));
  
          const limitedAsks = data.a.slice(0, 6).map(([price, amount]) => ({
            time: new Date().toLocaleTimeString(),
            price: parseFloat(price).toFixed(2),
            amount: parseFloat(amount).toFixed(2),
            isBuy: false,
          }));
  
          const updatedOrders = [...limitedBids, ...limitedAsks];

          setOrders(updatedOrders.sort((a, b) => b.isBuy - a.isBuy));
        }
      } catch (error) {
        console.error("Error processing WebSocket message:", error);
      }
    };
  
    return () => {
      ws.close(); 
    };
  }, [symbol]);
  

  return (
    <div className="max-w-md sm:w-64 mx-auto flex flex-col border-r border-gray-800">
      <div className="flex justify-between items-center mb-4 p-2">
        <h2 className="text-lg font-semibold">Orderbook</h2>
        <button className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {orders.map((order, index) => (
          <OrderRow
            key={index}
            time={order.time}
            price={order.price}
            amount={order.amount}
            isBuy={order.isBuy}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderBook;
