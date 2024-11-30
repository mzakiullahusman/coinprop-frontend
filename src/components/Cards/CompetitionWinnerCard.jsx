import TrophyImage from "@assets/images/trophy.png"
const CompetitionWinnerCard = ({ data }) => {
  return (
    <div className="bg-sidebar text-gray-300 border border-gray-700 p-5 rounded-lg shadow-ld w-auto min-w-sm my-2 mx-1">
      <div className="flex items-center justify-between space-x-40 my-5">

        <div className="flex items-center">
          <img
            src={data.image}
            alt={data.name}
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <h3 className="text-xl text-gray-200">{data.name}</h3>
            <p className="text-sm text-gray-400">{data.title}</p>
          </div>
        </div>

        <div className="flex items-center flex-shrink-0">
          <div>
            <div
              className={`px-2 py-1 text-sm font-normal rounded bg-custom-cyan text-black max-w-40`}
            >
              {data.competitionName}
            </div>
            <img
              src={TrophyImage}
              alt={data.name}
              className="w-8 h-8 ms-12 mt-2"
            />
          </div>
        </div>
      </div>

      
        <div className="flex justify-between border border-gray-700 p-3 rounded-lg bg-gray-800 my-8">
          <p className="text-sm text-gray-400">Withdrawal Amount</p>
          <p className="text-sm text-custom-cyan">${data.withdrawalAmount}</p>
        </div>

        <div className="flex  items-center justify-between">
          <p className="text-base text-gray-400">
            Days Funded:{" "}
            <span className="text-custom-cyan">{data.daysFunded}</span>
          </p>
          <p className="text-base text-gray-400">
            Starting Balance:{" "}
            <span className="text-custom-cyan">${data.startingBalance}</span>
          </p>
        </div>
      
    </div>
  );
};

export default CompetitionWinnerCard;
