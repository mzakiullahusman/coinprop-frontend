// components/ProfitAndShare.jsx

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import withdrawalHeaderBg from "../assets/images/withdrawalHeaderBg.png";
import BasicInfoCardPlus from "../components/Cards/BasicInfoCardPlus";
import PageHeader from "../components/Layout/PageHeader";
import WithdrawalHeroCard from "../components/PageHeroCards/WithdrawalHeroCard";
import TableDataGridHeading from "../components/Tables/TableDataGridHeading";
import { useAuth } from "../context/AuthContext";
import { getWithdrawals } from "../services/withdrawalService";
import Loader from "../components/Loader";
import TableNoData from "../components/Tables/TableNoData";

const columns = [
  { field: "ticket", headerName: "Ticket", flex: 1 },
  { field: "user", headerName: "User", flex: 1 },
  { field: "amount", headerName: "Amount", flex: 1 },
  { field: "cryptoWallet", headerName: "Crypto Wallet", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  { field: "createdAt", headerName: "Created At", flex: 1 },
];

const ProfitAndShare = () => {
  const {
    selectedAccount,
    currentAccountDetails,
    loadingAccountDetails,
    accountProfit,
    withdrawableProfit,
    totalAccountGrowth,
  } = useAuth();

  const [isProfitWithdrawalAllowed, setIsProfitWithdrawalAllowed] =
    useState(false);

  // State for withdrawals
  const [withdrawals, setWithdrawals] = useState([]);
  const [loadingWithdrawals, setLoadingWithdrawals] = useState(false);
  const [errorWithdrawals, setErrorWithdrawals] = useState(null);

  // Function to fetch withdrawals
  const fetchWithdrawals = async () => {
    setLoadingWithdrawals(true);
    setErrorWithdrawals(null);
    try {
      const data = await getWithdrawals(selectedAccount?.value);
      if (data.success) {
        const mappedWithdrawals = data.withdrawals.map((withdrawal) => ({
          id: withdrawal._id,
          ticket: withdrawal._id,
          user: `${withdrawal.user.firstName} ${withdrawal.user.lastName}`,
          amount: `$${withdrawal.withdrawalAmount.toLocaleString()}`,
          cryptoWallet: withdrawal.cryptoWallet,
          status:
            withdrawal.status.charAt(0).toUpperCase() +
            withdrawal.status.slice(1),
          createdAt: new Date(withdrawal.created_at).toLocaleString(),
        }));
        setWithdrawals(mappedWithdrawals);
      } else {
        toast.error(data.message || "Failed to fetch withdrawals.");
      }
    } catch (error) {
      console.error("Error fetching withdrawals:", error);
      setErrorWithdrawals("Failed to fetch withdrawal history.");
      // toast.error("Failed to fetch withdrawal history.");
    } finally {
      setLoadingWithdrawals(false);
    }
  };

  // Effect to determine if profit withdrawal is allowed based on account details
  useEffect(() => {
    if (currentAccountDetails && currentAccountDetails.account_status) {
      const status = currentAccountDetails.account_status.toLowerCase();
      if (status === "funded active" || status === "funded") {
        setIsProfitWithdrawalAllowed(true);
        fetchWithdrawals();
      } else {
        setIsProfitWithdrawalAllowed(false);
        setWithdrawals([]);
      }
    } else {
      setIsProfitWithdrawalAllowed(false);
      setWithdrawals([]);
    }
  }, [currentAccountDetails]);

  if (loadingAccountDetails) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-[24px] xl:gap-[36px] lg:pt-[76px]">
        <PageHeader
          title="Withdrawals"
          selectPlaceholder="Select Account"
          isNovaTheme={true}
        />
        {isProfitWithdrawalAllowed && currentAccountDetails && (
          <div
            id="funded-stats"
            className="flex w-full flex-wrap lg:flex-nowrap gap-4"
          >
            <BasicInfoCardPlus
              title="Account Profit"
              body="Your account profit from your current trading cycle."
              number={`$${accountProfit.toLocaleString()}`}
              isPlainBorder={true}
            />
            <BasicInfoCardPlus
              title="Withdrawable Profit"
              body="Withdrawable profit at the end of your trading cycle."
              number={`$${withdrawableProfit.toLocaleString()}`}
              isPlainBorder={true}
            />
            <BasicInfoCardPlus
              title="Total Account Growth"
              body="Total account growth percentage you've reached."
              number={`${totalAccountGrowth}%`}
              isPlainBorder={true}
            />
          </div>
        )}
        <WithdrawalHeroCard
          title="Account Withdrawal"
          description="Withdrawal your trading profits and affiliate payouts extremely easy, with many options to choose from!"
          bgImage={withdrawalHeaderBg}
          isProfitWithdrawalAllowed={isProfitWithdrawalAllowed}
        />
        {isProfitWithdrawalAllowed && (
          <div className="mt-6 lg:mt-8">
            {loadingWithdrawals ? (
              <Loader />
            ) : errorWithdrawals ? (
              <TableNoData emptyMessage={errorWithdrawals} />
            ) : withdrawals.length > 0 ? (
              <TableDataGridHeading
                heading="Withdrawal History"
                rows={withdrawals}
                columns={columns}
              />
            ) : (
              <TableNoData emptyMessage="No withdrawal records found." />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ProfitAndShare;
