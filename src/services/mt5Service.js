// mt5Service.js
import mt5ApiClient from "./mt5ApiClient";

const getAuthToken = () => localStorage.getItem("mt5Token");

// Fetch the leaderboard
export const getLeaderboard = async () => {
  try {
    const token = getAuthToken();
    const response = await mt5ApiClient.get("/user_v3/leaderboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching leaderboard details:", error);
    throw error;
  }
};

// List all user trading accounts
export const getUserTradingAccounts = async (user_id) => {
  try {
    const token = getAuthToken();
    const response = await mt5ApiClient.get(
      `/user_v3/list-accounts/${user_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching trading account details:", error);
    throw error;
  }
};

// Get trading status by login
export const getTradingStatusByLogin = async (login) => {
  try {
    const token = getAuthToken();
    const response = await mt5ApiClient.get(
      `/user_v3/trading-status/${login}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching trading account status:", error);
    throw error;
  }
};

// Get account status by login
export const getAccountStatusByLogin = async (login) => {
  try {
    const token = getAuthToken();
    const response = await mt5ApiClient.get(
      `/user_v3/account-status/${login}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching account status:", error);
    throw error;
  }
};

// Fetch balance equity for the main dashboard graph
export const getBalanceEquity = async (user_id, login, timeframe) => {
  try {
    const token = getAuthToken();
    const response = await mt5ApiClient.get(
      `/user_v3/api/balance-equity?user_id=${user_id}&login=${login}&timeframe=${timeframe}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching balance equity:", error);
    throw error;
  }
};

// Fetch deal history for the cards and tables in the dashboard
export const getDealHistory = async (user_id, login) => {
  try {
    const token = getAuthToken();
    const response = await mt5ApiClient.get(
      `/user_v3/api/deal-history/?user_id=${user_id}&login=${login}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching deal history:", error);
    throw error;
  }
};

export const getBillingAccounts = async (user_id, limit = 10, skip = 0) => {
  try {
    const token = getAuthToken();
    const response = await mt5ApiClient.post(
      `/user_v3/billing_accounts`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          user_id,
          limit,
          skip,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching billing accounts:", error);
    throw error;
  }
};

// export const createTradingAccount = async (user_id, plan) => {
//   try {
//     const token = getAuthToken();
//     const response = await mt5ApiClient.post(
//       `/user_v3/create-account/?user_id=${user_id}&login=${login}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         params: { user_id, plan },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error creating account on MT5:", error);
//     throw error;
//   }
// };
