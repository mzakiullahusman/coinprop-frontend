const AccountSummaryCard = ({ title, day, stats, highlight, highlightColor }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-md border border-white/10 w-auto flex">
      {/* Left Section */}
      <div>
        <h3 className="text-xl text-gray-200 mb-5">{title}</h3>
        <h1 className="text-2xl font-bold text-gradient-color mb-2">{day}</h1>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center space-y-1 text-right">
        {highlight && (
          <h2
            className={`text-lg font-normal mt-12 ms-3 ${
              highlightColor === "green"
                ? "text-green-400"
                : highlightColor === "red"
                ? "text-red-400"
                : "text-cyan-400"
            }`}
          >
            {highlight}
          </h2>
        )}
        {stats.map((stat, index) => (
          <p key={index} className="text-sm text-gray-200">
            {stat}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AccountSummaryCard;


