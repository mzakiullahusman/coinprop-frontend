import apiClient from "./apiClient";

const getAuthToken = () => {
  return localStorage.getItem("authToken");
};
/**
 * Retrieves certificates specific to the authenticated user.
 * @returns {Promise<Array>} An array of the user's certificates.
 * @throws Will throw an error if the request fails.
 */
export const getUserCertificates = async () => {
  const token = getAuthToken();
  try {
    const response = await apiClient.get("/certificates/getUserCertificates", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in Getting User Certificates", error);
    throw error;
  }
};

/**
 * Downloads a certificate PDF by ID.
 * @param {string} id - The ID of the certificate to download.
 * @returns {Promise<Blob>} The PDF file blob.
 * @throws Will throw an error if the request fails.
 */
export const downloadCertificatePdf = async (id) => {
  const token = getAuthToken();
  try {
    const response = await apiClient.get(
      "certificates/download-certificate-pdf",
      {
        params: { ID: id },
        responseType: "blob", // Ensures the response is handled as a binary Blob
        headers: {
          Authorization: `Bearer ${token}`, // Add Bearer token here
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Downloading Certificate PDF", error);
    throw error;
  }
};

/**
 * Downloads a certificate image by ID.
 * @param {string} id - The ID of the certificate to download.
 * @returns {Promise<Blob>} The image file blob.
 * @throws Will throw an error if the request fails.
 */
export const downloadCertificateImage = async (id) => {
  const token = getAuthToken();
  try {
    const response = await apiClient.get(
      "certificates/download-certificate-image",
      {
        params: { ID: id },
        responseType: "blob", // Ensures the response is handled as a binary Blob
        headers: {
          Authorization: `Bearer ${token}`, // Add Bearer token here
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Downloading Certificate Image", error);
    throw error;
  }
};
