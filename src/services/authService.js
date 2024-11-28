import apiClient from "./apiClient";

const token = localStorage.getItem("authToken");

export const verifyCaptcha = async (recaptchaToken) => {
  try {
    const response = await apiClient.post(
      `auth/verify-captcha/${recaptchaToken}`
    );
    return response.data;
  } catch (error) {
    console.error("Error verifying reCAPTCHA token:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const referrerID = urlParams.get("ref");

    const requestData = { ...userData };

    if (referrerID) {
      requestData.referrerID = referrerID;
    }

    const response = await apiClient.post("auth/register", requestData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const generate2faSecret = async (userID) => {
  try {
    const response = await apiClient.get(`auth/generate2faSecret?id=${userID}`);
    return response.data;
  } catch (error) {
    console.error("Error generating 2FA secret:", error);
    throw error;
  }
};

export const verifyRegistrationOtp = async (otpToken) => {
  try {
    const response = await apiClient.post("auth/verifyRegistrationOtp ", {
      otp: otpToken,
    });
    return response.data;
  } catch (error) {
    console.error("Error verifying registration OTP:", error);
    throw error;
  }
};

export const resendRegistrationOtp = async (email) => {
  try {
    const response = await apiClient.post("auth/resendRegistrationOtp ", {
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Error verifying registration OTP:", error);
    throw error;
  }
};

export const verifyOtp = async (otpToken, email) => {
  try {
    const response = await apiClient.post("auth/verifyAuthenticatorOtp", {
      token: otpToken,
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post("auth/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

export const forgetPassword = async (email) => {
  try {
    const response = await apiClient.post("auth/forgetPassword", email);
    return response.data;
  } catch (error) {
    console.error("Error in sending otp:", error);
    throw error;
  }
};

export const resetPassword = async (resetData) => {
  try {
    const response = await apiClient.post("auth/resetPassword", resetData);
    return response.data;
  } catch (error) {
    console.error("Error in reset password:", error);
    throw error;
  }
};
export const userKycStatus = async () => {
  try {
    const response = await apiClient.get("auth/checkUserVeriffStatus", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error in veriff user status:", error);
    throw error;
  }
};

export const userKyc = async () => {
  try {
    const payload = {
      verification: {
        callback: "https://your-callback-url.com",
        vendorData: "static-vendor-data-if-needed",
        consents: [
          {
            type: "ine",
            approved: true,
          },
        ],
      },
    };

    const response = await apiClient.post("auth/createVeriffSession", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error in veriff session:", error);
    throw error;
  }
};
