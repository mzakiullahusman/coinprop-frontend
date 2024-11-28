import apiClient from "./apiClient";

const token = localStorage.getItem("authToken");

export const getProfile = async () => {
  try {
    const response = await apiClient.get("users/getProfile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching profile details:", error);
    throw error;
  }
};

export const updateProfile = async (updateObject) => {
  try {
    const response = await apiClient.patch(
      "users/updateProfile",
      updateObject,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user info:", error);
    throw error;
  }
};

export const updatePassword = async (updateObject) => {
  try {
    const response = await apiClient.post(
      "users/updatePassword",
      updateObject,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user info:", error);
    throw error;
  }
};

export const getReferralLink = async () => {
  try {
    const response = await apiClient.get("users/getReferralLink", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching profile details:", error);
    throw error;
  }
};

export const affiliateResults = async () => {
  try {
    const response = await apiClient.get("users/affiliateResults", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching profile details:", error);
    throw error;
  }
};

export const affiliateReferredClient = async () => {
  try {
    const response = await apiClient.get("users/referredClients", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching profile details:", error);
    throw error;
  }
};

// TODO: update once api fixed to include attachments
export const sendTicket = async (email, subject, html) => {
  try {
    const response = await apiClient.post(
      "users/sendTicket",
      {
        email,
        subject,
        html,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error sending support ticket:", error);
    throw error;
  }
};

export const createMT5Account = async (planID) => {
  try {
    const response = await apiClient.post(
      "users/createMT5Account",
      {
        planID,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating MT5 account:", error);
    throw error;
  }
};
