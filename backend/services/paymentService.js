const fetch = require("node-fetch"); // If you don't have node-fetch installed, run npm install node-fetch

// Replace with your Razorpay Test API Key and Secret Key
const razorpayKey = "your_razorpay_key";
const razorpaySecret = "your_razorpay_secret";

const verifyPayment = async (paymentId) => {
  try {
    const response = await fetch(
      `https://api.razorpay.com/v1/payments/${paymentId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${razorpayKey}:${razorpaySecret}`
          ).toString("base64")}`,
        },
      }
    );

    const paymentData = await response.json();

    if (paymentData.error) {
      throw new Error("Payment verification failed");
    }

    return paymentData; // Return payment data if verification is successful
  } catch (error) {
    throw new Error("Error in payment verification: " + error.message);
  }
};

module.exports = { verifyPayment };
