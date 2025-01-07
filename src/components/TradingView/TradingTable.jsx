const timeConvert = (isoString) => {
  const date = new Date(isoString);
  
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const day = date.getDate().toString().padStart(2, '0');
  
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; 
  
  const formattedDateTime = `${month}/${day}/${year} ${hours}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')} ${ampm}`; 
  
  return formattedDateTime;
}

export default function TradingTable({ trades }) {
  return (
    <div className=" bg-sidebar text-white p-4">
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-1">
          <thead>
            <tr className="text-gray-400">
              <th className="text-left p-2 font-thin text-lg">Contract:</th>
              <th className="text-left p-2 font-thin text-lg">Time:</th>
              <th className="text-left p-2 font-thin text-lg">Side:</th>
              <th className="text-left p-2 font-thin text-lg">Final Price:</th>
              <th className="text-left p-2 font-thin text-lg">Amount:</th>
              <th className="text-left p-2 font-thin text-lg">Intial Price:</th>
              <th className="text-left p-2 font-thin text-lg">Leverage:</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade) => (
              <tr key={trade.id} className="bg-sidebar text-sm">
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <span>{trade.tradePair}</span>
                    <span className="text-xs text-gray-400">{">"}</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex flex-col">
                    <span>{timeConvert(trade.createdAt)}</span>
                  </div>
                </td>
                <td className="p-2">
                  <span
                    className={
                      trade.profitType === "Long" ? "text-green-500" : "text-red-500"
                    }
                  >
                    {trade.profitType}
                  </span>
                </td>
                <td className="p-2">
                  <div className="flex flex-col">
                    <span>{trade.sellingPrice}</span>
                    <span className="text-xs text-custom-cyan">USDT</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex flex-col">
                    <span>{trade.amountBought.toFixed(3)}</span>
                    <span className="text-xs text-custom-cyan">{trade.tradePair}</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex flex-col">
                    <span>{trade.intialPrice}</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex flex-col">
                    <span className="text-custom-cyan">{trade.leverage}x</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
