import apiClient from "./apiClient";

const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const getAccounts = async () => {
  const token = getAuthToken();
  try {
    const response = await apiClient.get(`/accounts`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response.data;
  } catch (error) {
    console.error("Error fetching account:", error.message);
    throw error;
  }
};

export const getAccount = async (accountId) => {
  const token = getAuthToken();
  try {
    const response = await apiClient.get(`/accounts/${accountId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response.data;
  } catch (error) {
    console.error("Error fetching account:", error.message);
    throw error;
  }
};

export const getTrades = async (accountId) => {
  const token = getAuthToken();
  try {
    const response = await apiClient.get(`/trades?accountId=${accountId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response.data;
  } catch (error) {
    console.error("Error fetching trades:", error.message);
    throw error;
  }
};
