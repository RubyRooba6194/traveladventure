// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Razorpay from "razorpay";

// const destinationPrices = {
//   Megamalai: 7000,
//   "Vaigai Dam": 5000,
//   "Suruli Falls": 6000,
// };

// const PlanYourTrip = () => {
//   const navigate = useNavigate();
//   const [tripDetails, setTripDetails] = useState({
//     destination: "",
//     travelers: 1,
//     travelDate: "",
//     returnDate: "",
//     transport: "Flight",
//     accommodation: "Standard",
//     price: 5000, // Default price
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     let updatedPrice = tripDetails.price;

//     if (name === "destination") {
//       updatedPrice = destinationPrices[value] || 5000;
//     }

//     setTripDetails({ ...tripDetails, [name]: value, price: updatedPrice });
//   };

//   const handlePayment = () => {
//     const options = {
//       key: "rzp_test_ASKlzH8sAYqsBU", // Replace with your Razorpay Key
//       amount: tripDetails.price * 100,
//       currency: "INR",
//       name: "Tour Package",
//       description: "Secure Booking Payment",
//       handler: (response) => {
//         alert(
//           "Payment Successful! Transaction ID: " + response.razorpay_payment_id
//         );
//         navigate("/");
//       },
//       prefill: {
//         name: "Traveler Name",
//         email: "traveler@example.com",
//         contact: "1234567890",
//       },
//       theme: { color: "#27ae60" },
//     };
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-6">
//       <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
//         Plan Your Trip
//       </h2>
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block font-semibold">Select Destination</label>
//             <select
//               name="destination"
//               className="w-full border p-2 rounded"
//               onChange={handleInputChange}
//             >
//               <option value="">Choose a Destination</option>
//               <option value="Megamalai">Megamalai</option>
//               <option value="Vaigai Dam">Vaigai Dam</option>
//               <option value="Suruli Falls">Suruli Falls</option>
//             </select>
//           </div>
//           <div>
//             <label className="block font-semibold">Number of Travelers</label>
//             <input
//               type="number"
//               name="travelers"
//               min="1"
//               className="w-full border p-2 rounded"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label className="block font-semibold">Travel Date</label>
//             <input
//               type="date"
//               name="travelDate"
//               className="w-full border p-2 rounded"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label className="block font-semibold">Return Date</label>
//             <input
//               type="date"
//               name="returnDate"
//               className="w-full border p-2 rounded"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label className="block font-semibold">Preferred Transport</label>
//             <select
//               name="transport"
//               className="w-full border p-2 rounded"
//               onChange={handleInputChange}
//             >
//               <option value="Flight">Flight</option>
//               <option value="Train">Train</option>
//               <option value="Bus">Bus</option>
//               <option value="Car">Car</option>
//             </select>
//           </div>
//           <div>
//             <label className="block font-semibold">Accommodation Type</label>
//             <select
//               name="accommodation"
//               className="w-full border p-2 rounded"
//               onChange={handleInputChange}
//             >
//               <option value="Standard">Standard</option>
//               <option value="Deluxe">Deluxe</option>
//               <option value="Luxury">Luxury</option>
//             </select>
//           </div>
//         </form>
//         <div className="text-center mt-6">
//           <button
//             onClick={handlePayment}
//             className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
//           >
//             Proceed to Payment ₹{tripDetails.price}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlanYourTrip;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const destinationPrices = {
  Megamalai: 7000,
  "Vaigai Dam": 5000,
  "Suruli Falls": 6000,
};

const PlanYourTrip = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const [tripDetails, setTripDetails] = useState({
    destination: "",
    travelers: 1,
    travelDate: today,
    returnDate: today,
    transport: "Flight",
    accommodation: "Standard",
    price: 5000, // Default price
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedPrice = tripDetails.price;

    if (name === "destination") {
      updatedPrice = destinationPrices[value] || 5000;
    }

    setTripDetails({ ...tripDetails, [name]: value, price: updatedPrice });
  };

  const handlePayment = () => {
    const options = {
      key: "rzp_test_ASKlzH8sAYqsBU", // Replace with your Razorpay Key
      amount: tripDetails.price * 100,
      currency: "INR",
      name: "Tour Package",
      description: "Secure Booking Payment",
      handler: (response) => {
        alert(
          "Payment Successful! Transaction ID: " + response.razorpay_payment_id
        );
        navigate("/");
      },
      prefill: {
        name: "Traveler Name",
        email: "traveler@example.com",
        contact: "1234567890",
      },
      theme: { color: "#27ae60" },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
        Plan Your Trip
      </h2>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold">Select Destination</label>
            <select
              name="destination"
              className="w-full border p-2 rounded"
              onChange={handleInputChange}
            >
              <option value="">Choose a Destination</option>
              <option value="Megamalai">Megamalai</option>
              <option value="Vaigai Dam">Vaigai Dam</option>
              <option value="Suruli Falls">Suruli Falls</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold">Number of Travelers</label>
            <input
              type="number"
              name="travelers"
              min="1"
              className="w-full border p-2 rounded"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block font-semibold">Travel Date</label>
            <input
              type="date"
              name="travelDate"
              className="w-full border p-2 rounded"
              min={today} // Prevents selecting past dates
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block font-semibold">Return Date</label>
            <input
              type="date"
              name="returnDate"
              className="w-full border p-2 rounded"
              min={tripDetails.travelDate} // Return date cannot be before travel date
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block font-semibold">Preferred Transport</label>
            <select
              name="transport"
              className="w-full border p-2 rounded"
              onChange={handleInputChange}
            >
              <option value="Flight">Flight</option>
              <option value="Train">Train</option>
              <option value="Bus">Bus</option>
              <option value="Car">Car</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold">Accommodation Type</label>
            <select
              name="accommodation"
              className="w-full border p-2 rounded"
              onChange={handleInputChange}
            >
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
        </form>
        <div className="text-center mt-6">
          <button
            onClick={handlePayment}
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
          >
            Proceed to Payment ₹{tripDetails.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanYourTrip;
