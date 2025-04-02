// import React from "react";
// import { FaCalendarAlt, FaRupeeSign, FaRegTimesCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";


// const packages = [
//   {
//     id: 1,
//     location: "Munnar, Kerala",
//     image: "munnar-hill-station.jpg",
//     description: "Experience the lush green tea plantations and cool weather.",
//     days: "2 Days / 1 Night",
//     price: 4000,
//   },
//   {
//     id: 2,
//     location: "Megamalai, Theni,TamilNadu",
//     image: "/a1.jpg",
//     description: "A beautiful hill station known for its stunning landscapes.",
//     days: "3 Days / 2 Nights",
//     price: 6000,
//   },
//   {
//     id: 3,
//     location: "Vaigai Dam, Theni",
//     image: "/vaigaidam images/vaigaidam5.jpg",
//     description: "Enjoy golden beaches, water sports, and vibrant nightlife.",
//     days: "4 Days / 3 Nights",
//     price: 9000,
//   },
// ];

// const ChoosePackage = () => {
//     const navigate = useNavigate();
//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-6">
//       <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
//         Choose Your Travel Package
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {packages.map((pkg) => (
//           <div
//             key={pkg.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
//           >
//             <img
//               src={pkg.image}
//               alt={pkg.location}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-2xl font-semibold">{pkg.location}</h3>
//               <p className="text-gray-600 mt-2">{pkg.description}</p>
//               <div className="flex justify-between items-center mt-4 text-green-700 font-semibold">
//                 <span className="flex items-center">
//                   <FaCalendarAlt className="mr-2" />
//                   {pkg.days}
//                 </span>
//                 <span className="flex items-center text-red-500">
//                   <FaRegTimesCircle className="mr-2" />
//                   Free Cancellation
//                 </span>
//               </div>
//               <div className="mt-4 text-green-800 font-bold text-xl flex items-center">
//                 <FaRupeeSign className="mr-1" />
//                 {pkg.price}/-
//               </div>
//               <button onClick={() => navigate("/plan-trip")}
//                 className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition"
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChoosePackage;
import React from "react";
import { FaCalendarAlt, FaRupeeSign, FaRegTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChoosePackage = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      location: "Munnar, Kerala",
      image: "../munnar-hill-station.jpg",
      description:
        "Experience the lush green tea plantations and cool weather.",
      days: "2 Days / 1 Night",
      price: 4000,
    },
    {
      id: 2,
      location: "Megamalai, Theni, Tamil Nadu",
      image: "/a1.jpg",
      description:
        "A beautiful hill station known for its stunning landscapes.",
      days: "3 Days / 2 Nights",
      price: 6000,
    },
    {
      id: 3,
      location: "Vaigai Dam, Theni",
      image: "/vaigaidam images/vaigaidam5.jpg",
      description: "Enjoy golden beaches, water sports, and vibrant nightlife.",
      days: "4 Days / 3 Nights",
      price: 9000,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-10 mt-10">
        Choose Your Travel Package
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={pkg.image}
              alt={pkg.location}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{pkg.location}</h3>
              <p className="text-gray-600 mt-2">{pkg.description}</p>
              <div className="flex justify-between items-center mt-4 text-green-700 font-semibold">
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  {pkg.days}
                </span>
                <span className="flex items-center text-red-500">
                  <FaRegTimesCircle className="mr-2" />
                  Free Cancellation
                </span>
              </div>
              <div className="mt-4 text-green-800 font-bold text-xl flex items-center">
                <FaRupeeSign className="mr-1" />
                {pkg.price}/-
              </div>
              <button
                onClick={() =>
                  navigate("/plan-trip", { state: { selectedPackage: pkg } })
                }
                className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoosePackage;
