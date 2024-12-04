import React from "react";

const AccountBalance = () => {
  // Dummy data
  const accountBalance = {
    high: 50000.0,
    current: 47580.57,
    low: 47480.21,
    weeklyNetPnl: -157.24,
    bestDayOfMonth: 82.4,
    worstDayOfMonth: -784.2,
    avgWinningDay: 455.01,
    avgLosingDay: -155.01,
  };

  const {
    high,
    current,
    low,
    weeklyNetPnl,
    bestDayOfMonth,
    worstDayOfMonth,
    avgWinningDay,
    avgLosingDay,
  } = accountBalance;

  const target = 4000;
  const currentProgress = 2016.32; // Example current progress value

  return (
    <div className="grid grid-cols-2 gap-8 p-8 min-h-2 bg-sidebar rounded-lg text-white">
      {/* Account Balance Section */}
      <div className="grid grid-cols-2 gap-9">
        <div className="text-lg">
          <h2 className="text-xl mb-4">Account balance</h2>
          <div className="flex justify-between pb-3 border-b-2 border-b-custom-border pt-3">
            <span>High:</span>
            <span>${high.toFixed(2)}</span>
          </div>

          <div className="flex justify-between pb-3 border-b-2 border-b-custom-border pt-3">
            <span>Current:</span>
            <span>${current.toFixed(2)}</span>
          </div>

          <div className="flex justify-between pb-3 border-b-2 border-b-custom-border pt-3">
            <span>Low:</span>
            <span>${low.toFixed(2)}</span>
          </div>

          <div className="flex justify-between pb-3 border-b-2 border-b-custom-border pt-3">
            <span>Weekly Net P&L:</span>
            <span>${weeklyNetPnl.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-lg">
          <h2 className="text-xl mb-4 text-transparent">Ac</h2>
          <div className="flex justify-between pb-3 border-b-2 border-b-custom-border pt-3">
            <span>Best Day of Month:</span>
            <span>${bestDayOfMonth.toFixed(2)}</span>
          </div>

          <div className="flex justify-between pb-3 border-b-2 border-b-custom-border pt-3">
            <span>Worst Day of Month:</span>
            <span>${worstDayOfMonth.toFixed(2)}</span>
          </div>

          <div className="flex justify-between pb-3 border-b-2 border-b-custom-border pt-3">
            <span>AVG. winning day:</span>
            <span>${avgWinningDay.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pb-3 border-b-2 border-b-custom-border pt-3">
            <span>AVG. losing day:</span>
            <span>${avgLosingDay.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Objectives and Rules Section */}
      <div>
        <h2 className="text-xl mb-4">Objectives</h2>
        <ul className="list-none pl-0 mb-4 space-y-4">
          <li className="flex items-center text-xl">
            <span className="mr-2 text-custom-cyan">✔</span>
            <span>
              Reach & maintain the target of{" "}
              <span className="text-custom-cyan">
                ${target.toLocaleString()}
              </span>
            </span>
          </li>
          <div className="w-full bg-gray-700 rounded-full h-2 my-2">
            <div
              className="bg-custom-cyan h-2 rounded-full"
              style={{
                width: `${Math.max((currentProgress / target) * 100, 0)}%`,
              }}
            ></div>
          </div>
          <span className="text-sm text-gray-300">
            {currentProgress.toLocaleString()}/${target.toLocaleString()}
          </span>
          <li className="flex items-center text-xl">
            <span className="mr-2 text-custom-cyan ">✔</span>
            <span>
              Reach & maintain the target of{" "}
              <span className="text-custom-cyan">
                ${target.toLocaleString()}
              </span>
            </span>
          </li>
        </ul>
        <h2 className="text-xl mb-4">Rules:</h2>
        <ul className="list-none pl-0 space-y-2">
          <li className="flex items-center">
            <span className="mr-2 text-red-500 text-xl">✖</span>
            <span className="text-lg mr-2">
              Do not let your account balance hit or go below{" "}
              <span className="text-custom-cyan">
                ${target.toLocaleString()}
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountBalance;
