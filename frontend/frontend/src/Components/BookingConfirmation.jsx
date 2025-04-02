// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const BookingConfirmation = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const tripDetails = location.state?.tripDetails || {};

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-6">
//       <h2 className="text-4xl font-bold text-center text-green-700 mb-8 mt-10">
//         Booking Confirmation
//       </h2>
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Thank You for Your Booking!
//         </h3>
//         <p className="text-lg text-gray-600">
//           Your trip details are as follows:
//         </p>
//         <div className="mt-4 border-t pt-4">
//           <p>
//             <strong>Destination:</strong> {tripDetails.destination}
//           </p>
//           <p>
//             <strong>Travelers:</strong> {tripDetails.travelers}
//           </p>
//           <p>
//             <strong>Travel Date:</strong> {tripDetails.travelDate}
//           </p>
//           <p>
//             <strong>Return Date:</strong> {tripDetails.returnDate}
//           </p>
//           <p>
//             <strong>Transport:</strong> {tripDetails.transport}
//           </p>
//           <p>
//             <strong>Accommodation:</strong> {tripDetails.accommodation}
//           </p>
//           <p>
//             <strong>Total Price:</strong> ₹{tripDetails.price}
//           </p>
//         </div>
//         <div className="text-center mt-6">
//           <button
//             onClick={() => navigate("/")}
//             className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingConfirmation;
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/solid";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tripDetails = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-xl p-8 text-center">
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto" />
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Booking Confirmed!
        </h2>
        <p className="text-gray-600 mt-2">
          Your trip has been successfully booked.
        </p>

        <div className="mt-6 text-left">
          <h3 className="text-lg font-semibold text-gray-700">Trip Details:</h3>
          <ul className="mt-2 space-y-2">
            <li className="text-gray-600">
              <span className="font-semibold">Destination:</span>{" "}
              {tripDetails.destination}
            </li>
            <li className="text-gray-600">
              <span className="font-semibold">Travelers:</span>{" "}
              {tripDetails.travelers}
            </li>
            <li className="text-gray-600">
              <span className="font-semibold">Travel Date:</span>{" "}
              {tripDetails.travelDate}
            </li>
            <li className="text-gray-600">
              <span className="font-semibold">Return Date:</span>{" "}
              {tripDetails.returnDate}
            </li>
            <li className="text-gray-600">
              <span className="font-semibold">Transport:</span>{" "}
              {tripDetails.transport}
            </li>
            <li className="text-gray-600">
              <span className="font-semibold">Accommodation:</span>{" "}
              {tripDetails.accommodation}
            </li>
            <li className="text-gray-600 text-lg font-semibold">
              <span className="font-semibold">Total Paid:</span> ₹
              {tripDetails.price}
            </li>
          </ul>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
