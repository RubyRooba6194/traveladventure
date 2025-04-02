// import React from 'react';

// const PaymentGateway = () => {
//   const handlePayment = () => {
//     const options = {
//       key: "rzp_test_ASKlzH8sAYqsBU", // Replace with your actual Test API Key
//       amount: 50000, // Example amount in paise (₹500 = 50000 paise)
//       currency: "INR",
//       name: "Book Your Tour",
//       description: "Payment for your booked tour",
//       handler: function (response) {
//         alert(
//           "Payment Successful! Payment ID: " + response.razorpay_payment_id
//         );
//       },
//       prefill: {
//         name: "Roobashini",
//         email: "email@example.com",
//         contact: "9876543210",
//       },
//       theme: {
//         color: "#F37254",
//       },
//     };

//     const rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };

//   return (
//     <div className="payment-gateway">
//       <h2 className="text-3xl font-bold text-center mb-8">Payment Gateway</h2>
//       <button
//         onClick={handlePayment}
//         className="bg-green-500 text-white p-3 rounded-lg"
//       >
//         Pay Now
//       </button>
//     </div>
//   );
// };

// export default PaymentGateway;
import React from "react";

const PaymentGateway = ({ onPaymentSuccess }) => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_ASKlzH8sAYqsBU", // Replace with your actual Test API Key
      amount: 50000, // Example amount in paise (₹500 = 50000 paise)
      currency: "INR",
      name: "Book Your Tour",
      description: "Payment for your booked tour",
      handler: function (response) {
        // After successful payment, call the parent function (onPaymentSuccess)
        onPaymentSuccess(response.razorpay_payment_id); // Pass the payment ID to the parent
      },
      prefill: {
        name: "Roobashini",
        email: "email@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="payment-gateway">
      <h2 className="text-3xl font-bold text-center mb-8">Payment Gateway</h2>
      <button
        onClick={handlePayment}
        className="bg-green-500 text-white p-3 rounded-lg"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentGateway;
