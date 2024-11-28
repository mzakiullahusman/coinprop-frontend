import apiClient from "./apiClient";

const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const addWithdrawal = async (withDrawalData) => {
  const token = getAuthToken();
  try {
    const response = await apiClient.post(
      "withdrawal/createWithdrawalRequest",
      withDrawalData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Creating Withdrawal", error);
    throw error;
  }
};

export const getWithdrawals = async (tradingLogin) => {
  const token = getAuthToken();
  try {
    const response = await apiClient.get(
      `withdrawal/getUserWithdrawlRequests?tID=${tradingLogin}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Getting Withdrawal", error);
    throw error;
  }
};

export const getAffiliateWithdrawals = async () => {
  const token = getAuthToken();
  try {
    const response = await apiClient.get(
      `withdrawal/getUserWithdrawlRequests?aw=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Getting Affiliate Withdrawals", error);
    throw error;
  }
};
