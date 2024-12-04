
import { FaQuestionCircle } from "react-icons/fa";

const ProbabilityCard = ({ title, value }) => {
  const isNegative = value < 0; // Check if the value is negative

  return (
    <div className="bg-sidebar p-4 rounded-lg flex justify-between items-center text-white border border-gray-700 w-[350px]">
      <div className="flex items-center space-x-2">
        <FaQuestionCircle className="text-custom-cyan text-lg" title="Information" />
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <div
        className={`text-sm font-semibold ${
          isNegative ? "text-red-500" : "text-custom-cyan"
        }`}
      >
        {isNegative ? "-" : "+"}${Math.abs(value).toFixed(2)}
      </div>
    </div>
  );
};

export default ProbabilityCard;
