import React from "react";

const OrderRow = ({ time, price, amount, isBuy }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-3 text-sm py-2 px-1 border-b-2 border-b-custom-border ${
        isBuy
          ? "text-[#27AE60] bg-[#27AE60] bg-opacity-10"
          : "text-[#EB5757] bg-[#EB5757] bg-opacity-10"
      }`}
    >
      <span className="">{time}</span>
      <span className="text-[#d1d5db] text-center">{price}</span>
      <span className="text-right text-[#d1d5db]">{amount}</span>
    </div>
  );
};

const OrderBook = ({ orders }) => {
  // Sort orders: `isBuy` orders first, then others
  const sortedOrders = [...orders].sort((a, b) => b.isBuy - a.isBuy);

  return (
    <div className="flex flex-col border-r border-gray-800 w-64">
      {/* Header */}
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

      {/* Order List */}
      <div className="flex-1 overflow-y-auto">
        {sortedOrders.map((order, index) => (
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
