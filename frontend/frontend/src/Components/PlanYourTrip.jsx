
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaUsers,
//   FaHotel,
//   FaBus,
// } from "react-icons/fa";

// const destinationData = {
//   "Megamalai": { price: 7000, image: "/public/megamalai/megamalai2.jpg" },
//   "Vaigai Dam": { price: 5000, image: "/public/vaigaidam images/vaigaidam5.jpg" },
//   "Suruli Falls": { price: 6000, image: "/public/surulifalls/suruli1.jpg" },
// };

// const PlanYourTrip = () => {
//   const navigate = useNavigate();
//   const today = new Date().toISOString().split("T")[0];

//   const [tripDetails, setTripDetails] = useState({
//     destination: "",
//     travelers: 1,
//     travelDate: today,
//     returnDate: today,
//     transport: "Flight",
//     accommodation: "Standard",
//     price: 5000,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     let updatedDetails = { ...tripDetails, [name]: value };

//     if (name === "destination") {
//       const basePrice = destinationData[value]?.price || 5000;
//       updatedDetails.price = basePrice * tripDetails.travelers;
//     }

//     if (name === "travelers") {
//       const basePrice = destinationData[tripDetails.destination]?.price || 5000;
//       updatedDetails.price = basePrice * parseInt(value || 1);
//     }

//     setTripDetails(updatedDetails);
//   };

//   const handlePayment = () => {
//     const options = {
//       key: "rzp_test_wOpCMCCeoM39EL",
//       amount: tripDetails.price * 100,
//       currency: "INR",
//       name: "Travel Buddy",
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

//   const selectedImage = destinationData[tripDetails.destination]?.image;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-10 px-6">
//       <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mt-16">
//         {/* Left Side - Form */}
//         <div className="p-8">
//           <h2 className="text-3xl font-bold text-green-700 mb-4">
//              Plan Your Trip
//           </h2>
//           <form className="space-y-4">
//             <div>
//               <label className="block font-medium">Destination</label>
//               <select
//                 name="destination"
//                 className="w-full border p-2 rounded"
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select Destination</option>
//                 {Object.keys(destinationData).map((place) => (
//                   <option key={place} value={place}>
//                     {place}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block font-medium">Travelers</label>
//               <input
//                 type="number"
//                 name="travelers"
//                 min="1"
//                 value={tripDetails.travelers}
//                 onChange={handleInputChange}
//                 className="w-full border p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block font-medium">Travel Date</label>
//               <input
//                 type="date"
//                 name="travelDate"
//                 className="w-full border p-2 rounded"
//                 min={today}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div>
//               <label className="block font-medium">Return Date</label>
//               <input
//                 type="date"
//                 name="returnDate"
//                 className="w-full border p-2 rounded"
//                 min={tripDetails.travelDate}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div>
//               <label className="block font-medium">Transport</label>
//               <select
//                 name="transport"
//                 className="w-full border p-2 rounded"
//                 onChange={handleInputChange}
//               >
//                 <option>Flight</option>
//                 <option>Train</option>
//                 <option>Bus</option>
//                 <option>Car</option>
//               </select>
//             </div>

//             <div>
//               <label className="block font-medium">Accommodation</label>
//               <select
//                 name="accommodation"
//                 className="w-full border p-2 rounded"
//                 onChange={handleInputChange}
//               >
//                 <option>Standard</option>
//                 <option>Deluxe</option>
//                 <option>Luxury</option>
//               </select>
//             </div>
//           </form>

//           <button
//             onClick={handlePayment}
//             className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
//           >
//             Pay ₹{tripDetails.price}
//           </button>
//         </div>

//         {/* Right Side - Summary & Image */}
//         <div className="relative p-6 bg-gray-100 flex flex-col justify-between">
//           {selectedImage ? (
//             <img
//               src={selectedImage}
//               alt={tripDetails.destination}
//               className="rounded-xl mb-4 object-cover h-64 w-full shadow-lg"
//             />
//           ) : (
//             <div className="h-64 flex items-center justify-center text-gray-400 bg-white rounded-xl mb-4 border">
//               Destination preview
//             </div>
//           )}
//           <div className="space-y-2 text-gray-700">
//             <p className="flex items-center">
//               <FaMapMarkerAlt className="mr-2 text-red-600" />
//               <strong>Destination:</strong> {tripDetails.destination || "--"}
//             </p>
//             <p className="flex items-center">
//               <FaUsers className="mr-2 text-blue-600" />
//               <strong>Travelers:</strong> {tripDetails.travelers}
//             </p>
//             <p className="flex items-center">
//               <FaCalendarAlt className="mr-2 text-pink-600" />
//               <strong>Travel Dates:</strong> {tripDetails.travelDate} to{" "}
//               {tripDetails.returnDate}
//             </p>
//             <p className="flex items-center">
//               <FaBus className="mr-2 text-green-600" />
//               <strong>Transport:</strong> {tripDetails.transport}
//             </p>
//             <p className="flex items-center">
//               <FaHotel className="mr-2 text-purple-600" />
//               <strong>Stay:</strong> {tripDetails.accommodation}
//             </p>
//             <p className="text-xl mt-4 font-bold text-green-700">
//               Total Price: ₹{tripDetails.price}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlanYourTrip;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaHotel,
  FaBus,
} from "react-icons/fa";

const destinationData = {
  Megamalai: { price: 7000, image: "/public/megamalai/megamalai2.jpg" },
  "Vaigai Dam": {
    price: 5000,
    image: "/public/vaigaidam images/vaigaidam5.jpg",
  },
  "Suruli Falls": { price: 6000, image: "/public/surulifalls/suruli1.jpg" },
};

const accommodationRates = {
  Standard: 1,
  Deluxe: 1.25,
  Luxury: 1.5,
};

const PlanYourTrip = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [tripDetails, setTripDetails] = useState({
    destination: "",
    travelers: 1,
    travelDate: today,
    returnDate: today,
    transport: "Flight",
    accommodation: "Standard",
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedDetails = { ...tripDetails, [name]: value };

    const destination =
      name === "destination" ? value : tripDetails.destination;
    const travelers =
      name === "travelers" ? parseInt(value || 1) : tripDetails.travelers;
    const accommodation =
      name === "accommodation" ? value : tripDetails.accommodation;

    if (destinationData[destination]) {
      const basePrice = destinationData[destination].price;
      const accommodationRate = accommodationRates[accommodation] || 1;
      updatedDetails.price = basePrice * travelers * accommodationRate;
    } else {
      updatedDetails.price = 0;
    }

    setTripDetails(updatedDetails);
  };

  const handlePayment = () => {
    const options = {
      key: "rzp_test_wOpCMCCeoM39EL",
      amount: tripDetails.price * 100,
      currency: "INR",
      name: "Travel Buddy",
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

  const selectedImage = destinationData[tripDetails.destination]?.image;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mt-16">
        {/* Left Side - Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Plan Your Trip
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block font-medium">Destination</label>
              <select
                name="destination"
                className="w-full border p-2 rounded"
                value={tripDetails.destination}
                onChange={handleInputChange}
              >
                <option value="">Select Destination</option>
                {Object.keys(destinationData).map((place) => (
                  <option key={place} value={place}>
                    {place}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium">Travelers</label>
              <input
                type="number"
                name="travelers"
                min="1"
                value={tripDetails.travelers}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium">Travel Date</label>
              <input
                type="date"
                name="travelDate"
                className="w-full border p-2 rounded"
                min={today}
                value={tripDetails.travelDate}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block font-medium">Return Date</label>
              <input
                type="date"
                name="returnDate"
                className="w-full border p-2 rounded"
                min={tripDetails.travelDate}
                value={tripDetails.returnDate}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block font-medium">Transport</label>
              <select
                name="transport"
                className="w-full border p-2 rounded"
                value={tripDetails.transport}
                onChange={handleInputChange}
              >
                <option>Flight</option>
                <option>Train</option>
                <option>Bus</option>
                <option>Car</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Accommodation</label>
              <select
                name="accommodation"
                className="w-full border p-2 rounded"
                value={tripDetails.accommodation}
                onChange={handleInputChange}
              >
                <option>Standard</option>
                <option>Deluxe</option>
                <option>Luxury</option>
              </select>
            </div>
          </form>

          <button
            onClick={handlePayment}
            className={`mt-6 w-full text-white py-3 rounded-lg transition duration-300 ${
              tripDetails.price > 0
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={tripDetails.price === 0}
          >
            {tripDetails.price > 0
              ? `Pay ₹${tripDetails.price}`
              : "Select a package"}
          </button>
        </div>

        {/* Right Side - Summary & Image */}
        <div className="relative p-6 bg-gray-100 flex flex-col justify-between">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt={tripDetails.destination}
              className="rounded-xl mb-4 object-cover h-64 w-full shadow-lg"
            />
          ) : (
            <div className="h-64 flex items-center justify-center text-gray-400 bg-white rounded-xl mb-4 border">
              Destination preview
            </div>
          )}
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-red-600" />
              <strong>Destination:</strong> {tripDetails.destination || "--"}
            </p>
            <p className="flex items-center">
              <FaUsers className="mr-2 text-blue-600" />
              <strong>Travelers:</strong> {tripDetails.travelers}
            </p>
            <p className="flex items-center">
              <FaCalendarAlt className="mr-2 text-pink-600" />
              <strong>Travel Dates:</strong> {tripDetails.travelDate} to{" "}
              {tripDetails.returnDate}
            </p>
            <p className="flex items-center">
              <FaBus className="mr-2 text-green-600" />
              <strong>Transport:</strong> {tripDetails.transport}
            </p>
            <p className="flex items-center">
              <FaHotel className="mr-2 text-purple-600" />
              <strong>Stay:</strong> {tripDetails.accommodation}
            </p>
            <p className="text-xl mt-4 font-bold text-green-700">
              Total Price: ₹{tripDetails.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanYourTrip;
