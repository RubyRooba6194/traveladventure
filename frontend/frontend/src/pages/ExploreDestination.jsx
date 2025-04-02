import React from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const ExploreDestination = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      name: "Megamalai",
      image: "megamalai1.jpg",
      description: "Known for its serene atmosphere and tea estates.",
    },
    {
      name: "Thekkady",
      image: "megamalai2.jpg",
      description: "Famous for its wildlife sanctuary and spice plantations.",
    },
    {
      name: "SuruliFalls",
      image: "a1.jpg",
      description: "A beautiful waterfall amidst lush greenery.",
    },
  ];

  const handleExploreNow = () => {
    navigate("/travel-highlights");
  };


  return (
    <div>
      <Header />

      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/project videos/hand nature.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
          <motion.h1
            className="text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover the Beauty of Nature 🌿
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Explore breathtaking destinations and book your dream tour today!
          </motion.p>
          <motion.button
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            onClick={() => navigate("/travel-highlights")}
          >
            Explore Now
          </motion.button>
        </div>
      </div>

      <motion.h2
        className="text-4xl font-semibold text-center mt-16 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Explore Destinations
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {destinations.map((destination, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
              <p className="text-gray-600 mb-4">{destination.description}</p>
              <button
                onClick={() => navigate("/choosepackage")}
                className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full hover:from-green-500 hover:to-blue-600 shadow-lg transition duration-300 w-full"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ExploreDestination;
