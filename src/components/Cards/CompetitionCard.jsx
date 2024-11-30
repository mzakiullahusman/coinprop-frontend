const CompetitionCard = ({
  title,
  contestants,
  prizePool,
  status,
  progress,
  timeLeft
}) => {
  return (
    <div className="bg-sidebar text-gray-300 border border-gray-700 p-6 rounded-lg shadow-md w-auto min-w-sm my-2 mx-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-normal">{title}</h3>
        <span
          className={`px-2 py-1 text-sm font-normal rounded ${
            status === "Finished"
              ? "bg-custom-cyan text-black"
              : "bg-yellow-500 text-black"
          }`}
        >
          {status}
        </span>
      </div>
      <div className="space-y-6">
        <div className="flex justify-between mt-8">
          <p className=" border border-gray-700 mx-3 py-3 px-4 rounded-lg text-base">
            Contestants
            <span className="ms-10 text-gradient-color">{contestants}</span>
          </p>
          <p className=" border border-gray-700 mx-3 py-3 px-4 rounded-lg text-base">
            Prize Pool
            <span className="ms-10 text-gradient-color">{prizePool}</span>
          </p>
        </div>

        <div>
          <div className="relative w-full h-2 bg-gray-700 rounded">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-text rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-base mt-3 text-center">{progress}%</p>
        </div>

        <div className="text-gray-300">
          <span className="text-3xl font-normal me-5 border-r-2 border-gray-700">
            Time Left{" "}
          </span>
          <span className="text-3xl mx-3">{timeLeft}</span>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
