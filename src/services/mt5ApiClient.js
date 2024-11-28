// mt5ApiClient.js
import axios from "axios";
import qs from "qs";

const mt5ApiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_FAST_API,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to get the token
export const getToken = async () => {
  const credentials = {
    username: import.meta.env.VITE_APP_MT5_USERNAME,
    password: import.meta.env.VITE_APP_MT5_PASSWORD,
  };
  const urlEncodedCredentials = qs.stringify(credentials);

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_APP_FAST_API}/auth/token`,
      urlEncodedCredentials,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const token = res?.data?.access_token;
    localStorage.setItem("mt5Token", res?.data?.access_token);
    return token;
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
};

export default mt5ApiClient;
