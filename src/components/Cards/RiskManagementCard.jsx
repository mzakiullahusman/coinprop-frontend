export default function RiskManagementCard() {
  return (
    <div className="flex flex-col lg:flex-row items-center p-5 bg-sidebar text-white rounded-lg shadow-md mt-2 border border-white/10 space-y-2 lg:space-y-0 lg:space-x-2">
      <span className="w-2 h-2 rounded-full bg-custom-cyan hidden lg:block lg:mr-2"></span>
      <p className="text-sm text-center lg:text-left">
        Risk Management is knowing that you can’t take every opportunity, but
        that you understand which opportunity you take.
      </p>
    </div>
  );
}
