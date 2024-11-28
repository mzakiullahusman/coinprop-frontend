// paymentService.js
import apiClient from "./apiClient";

/**
 * Retrieves the authentication token from localStorage.
 *
 * @returns {string|null} The authentication token if it exists, otherwise null.
 */
const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

/**
 * Creates a crypto payment checkout session using the backend API.
 *
 * @param {Object} params - The parameters for creating the checkout.
 * @param {string} params.paymentPlanId - The ID of the payment plan.
 * @param {string} params.name - The name associated with the payment.
 * @param {string} params.amount - The amount to be paid.
 * @param {string} params.currency - The currency of the payment amount.
 * @param {Object} params.metadata - Additional metadata for the payment.
 * @param {Object} params.local_price - Local price details.
 * @returns {Promise<Object>} The response data from the API.
 */
export const createCryptoPayment = async (params) => {
  const requestBody = {
    paymentPlanId: params.paymentPlanId,
    name: params.name,
    amount: params.amount,
    currency: params.currency,
    metadata: params.metadata,
    local_price: params.local_price,
  };

  try {
    const response = await apiClient.post(
      "/cryptowebhook/createCheckout",
      requestBody
    );
    return response.data;
  } catch (error) {
    console.error("Error in creating crypto payment:", error);
    throw error;
  }
};

/**
 * Purchases a payment plan using the backend API.
 *
 * @param {Object} params - The parameters for purchasing a plan.
 * @param {string} params.paymentPlan - The ID of the payment plan.
 * @param {number} params.amountPaid - The amount paid for the plan.
 * @param {string} params.transactionId - The transaction ID.
 * @param {string} params.paymentMethod - The method of payment (e.g., credit_card).
 * @returns {Promise<Object>} The response data from the API.
 */
export const purchasePlan = async (params) => {
  const token = getAuthToken();

  const requestBody = {
    paymentPlan: params.paymentPlan,
    amountPaid: params.amountPaid,
    transactionId: params.transactionId,
    paymentMethod: params.paymentMethod,
  };

  try {
    const response = await apiClient.post("/users/purchasePlan", requestBody, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in purchasing plan:", error);
    throw error;
  }
};

/**
 * Charges a credit card using the backend API.
 *
 * @param {Object} params - The credit card details and amount.
 * @param {string} params.cardNumber - The credit card number.
 * @param {string} params.expirationDate - The expiration date (MM/YY or MMYY).
 * @param {string} params.cardCode - The CVV/CVC code.
 * @param {string|number} params.amount - The amount to charge.
 * @returns {Promise<Object>} The response data from the API.
 */
export const chargeCreditCard = async (params) => {
  const token = getAuthToken();

  const requestBody = {
    cardNumber: params.cardNumber,
    expirationDate: params.expirationDate,
    cardCode: params.cardCode,
    amount: params.amount,
  };

  try {
    const response = await apiClient.post(
      "/payments/chargeCreditCard",
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in charging credit card:", error);
    throw error;
  }
};

/**
 * Retrieves all available payment plans using the backend API.
 *
 * @returns {Promise<Object>} The response data containing all payment plans.
 */
export const getAllPaymentPlans = async () => {
  try {
    const response = await apiClient.get("/paymentPlan/getAllPaymentPlans");
    return response.data;
  } catch (error) {
    console.error("Error in fetching payment plans:", error);
    throw error;
  }
};
