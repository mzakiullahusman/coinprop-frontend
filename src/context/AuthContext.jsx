// context/AuthContext.js

import { createContext, useContext, useState, useEffect } from "react";
import {
  getUserTradingAccounts,
  getAccountStatusByLogin,
  getDealHistory,
} from "../services/mt5Service";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [accountOptions, setAccountOptions] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(() => {
    const storedAccount = localStorage.getItem("selectedAccount");
    return storedAccount ? JSON.parse(storedAccount) : null;
  });
  const [currentAccountDetails, setCurrentAccountDetails] = useState(() => {
    const storedDetails = localStorage.getItem("currentAccountDetails");
    return storedDetails ? JSON.parse(storedDetails) : null;
  });
  const [loadingAccountDetails, setLoadingAccountDetails] = useState(false);
  const [accountProfit, setAccountProfit] = useState(0);
  const [withdrawableProfit, setWithdrawableProfit] = useState(0);
  const [totalAccountGrowth, setTotalAccountGrowth] = useState(0);

  const login = (userDetails) => {
    const { token, referralLink, ...userInfo } = userDetails;

    localStorage.setItem("authToken", token);
    localStorage.setItem("userDetails", JSON.stringify(userInfo));
    if (referralLink) {
      localStorage.setItem("referralLink", referralLink);
      userInfo.referralLink = referralLink;
    }
    setIsAuthenticated(true);
    setUser(userInfo);
    // fetchAccounts(userInfo.id);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("accountOptions");
    localStorage.removeItem("selectedAccount");
    localStorage.removeItem("currentAccountDetails");
    localStorage.removeItem("mt5Token");

    setIsAuthenticated(false);
    setUser(null);
    setAccountOptions([]);
    setSelectedAccount(null);
    setCurrentAccountDetails(null);
    setAccountProfit(0);
    setWithdrawableProfit(0);
    setTotalAccountGrowth(0);
  };

  const handleMt5ApiLogoutOnTimeout = (error) => {
    if (error?.response?.status === 401) {
      logout();
      toast.info("Session expired. Logging out.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("userDetails");
    const storedAccounts = localStorage.getItem("accountOptions");
    const storedAccountDetails = localStorage.getItem("currentAccountDetails");

    if (token && storedUser) {
      setIsAuthenticated(true);
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      if (storedAccounts) {
        const parsedAccounts = JSON.parse(storedAccounts);
        setAccountOptions(parsedAccounts);

        if (!selectedAccount && parsedAccounts.length > 0) {
          setSelectedAccount(parsedAccounts[0]);
        }
      } else {
        // fetchAccounts(parsedUser.id);
      }

      if (storedAccountDetails) {
        setCurrentAccountDetails(JSON.parse(storedAccountDetails));
      }
    }
  }, []);

  // const fetchAccounts = async (userId) => {
  //   try {
  //     const accounts = await getUserTradingAccounts(userId);
  //     const formattedAccounts = accounts.map((account) => ({
  //       value: account.login,
  //       label: "MT5 Account: " + account.login,
  //     }));
  //     setAccountOptions(formattedAccounts);
  //     localStorage.setItem("accountOptions", JSON.stringify(formattedAccounts));

  //     if (formattedAccounts.length > 0) {
  //       const defaultAccount = formattedAccounts[0];
  //       setSelectedAccount(defaultAccount);
  //       localStorage.setItem("selectedAccount", JSON.stringify(defaultAccount));
  //     } else {
  //       setSelectedAccount(null);
  //       localStorage.removeItem("selectedAccount");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching accounts:", error);
  //     // handleMt5ApiLogoutOnTimeout(error);
  //     toast.error("Failed to fetch trading accounts.");
  //   }
  // };

  // const fetchAccountDetailsAndDealHistory = async (login, userId) => {
  //   if (!userId) {
  //     console.error("User ID is not provided.");
  //     return;
  //   }

  //   setLoadingAccountDetails(true);
  //   try {
  //     // Fetch account details
  //     const accountDetails = await getAccountStatusByLogin(login);
  //     setCurrentAccountDetails(accountDetails);
  //     localStorage.setItem(
  //       "currentAccountDetails",
  //       JSON.stringify(accountDetails)
  //     );

  //     // Fetch deal history
  //     const dealHistoryData = await getDealHistory(userId, login);

  //     // Extract profit from deal history
  //     const profit = dealHistoryData.summary?.Profit || 0;

  //     const calculatedWithdrawableProfit = Math.max(
  //       accountDetails.account_size - profit,
  //       0
  //     );

  //     // Calculate Total Account Growth: (Profit / Account Size) * 100
  //     // TODO: (profit - accountDetails.account_size) is possibly temporary until the profit is corrected from the backend
  //     const calculatedTotalAccountGrowth =
  //       accountDetails.account_size > 0
  //         ? (
  //             ((profit - accountDetails.account_size) /
  //               accountDetails.account_size) *
  //             100
  //           ).toFixed(2)
  //         : "0.00";

  //     setAccountProfit(calculatedWithdrawableProfit);
  //     setWithdrawableProfit(calculatedWithdrawableProfit);
  //     setTotalAccountGrowth(calculatedTotalAccountGrowth);
  //   } catch (error) {
  //     console.error("Error fetching account details or deal history:", error);
  //     setCurrentAccountDetails(null);
  //     setAccountProfit(0);
  //     setWithdrawableProfit(0);
  //     setTotalAccountGrowth(0);
  //     handleMt5ApiLogoutOnTimeout(error);
  //     // toast.error("Failed to fetch account details or deal history.");
  //   } finally {
  //     setLoadingAccountDetails(false);
  //   }
  // };

  // Effect to fetch account details and deal history whenever selectedAccount or user changes
  useEffect(() => {
    if (user && selectedAccount && selectedAccount.value) {
      // fetchAccountDetailsAndDealHistory(selectedAccount.value, user.id);
    } else {
      setCurrentAccountDetails(null);
      localStorage.removeItem("currentAccountDetails");
      setAccountProfit(0);
      setWithdrawableProfit(0);
      setTotalAccountGrowth(0);
    }
  }, [selectedAccount, user]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        // fetchAccounts,
        accountOptions,
        setAccountOptions,
        selectedAccount,
        setSelectedAccount,
        currentAccountDetails,
        loadingAccountDetails,
        accountProfit,
        withdrawableProfit,
        totalAccountGrowth,
        login,
        handleMt5ApiLogoutOnTimeout,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
