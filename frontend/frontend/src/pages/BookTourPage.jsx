
import React, { useState } from "react";
import PlanYourTrip from "../Components/PlanYourTrip";
import ChoosePackage from "../Components/ChoosePackage";
import PaymentGateway from "../Components/PaymentGateway";
import ConfirmBooking from "../Components/ConfirmBooking";

const BookTourPage = () => {
  const [paymentId, setPaymentId] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("");

  // Function to verify the payment
  const verifyPayment = async (paymentId) => {
    try {
      const response = await fetch("/api/bookTour/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentId }),
      });

      const result = await response.json();
      console.log("Payment Verified:", result);
      setPaymentStatus("Payment successful");
      // Proceed with booking confirmation or other logic
    } catch (error) {
      console.error("Payment verification failed:", error);
      setPaymentStatus("Payment verification failed");
    }
  };

  // Assuming PaymentGateway component will handle the payment process
  const handlePaymentSuccess = (paymentId) => {
    setPaymentId(paymentId);
    verifyPayment(paymentId); // Call verify payment function after success
  };

  return (
    <div className="book-tour-page">
      <PlanYourTrip />
      <ChoosePackage />
      <PaymentGateway onPaymentSuccess={handlePaymentSuccess} />
      <ConfirmBooking paymentStatus={paymentStatus} />
    </div>
  );
};

export default BookTourPage;
