import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const travelHighlights = [
  {
    name: "Megamalai",
    images: ["a1.jpg", "megamalai2.jpg"],
    description: "Known for its serene atmosphere and tea estates.",
    highlights: "Scenic views, Wildlife, Tea Gardens",
  },
  {
    name: "Suruli Falls",
    images: ["./surulifalls/suruli1.jpg", "./surulifalls/suruli4.jpg"],
    description: "Famous for its wildlife sanctuary and spice plantations.",
    highlights: "Periyar Wildlife Sanctuary, Boating, Bamboo Rafting",
  },
  {
    name: "Vaigai Dam",
    images: [
      "./vaigaidam images/vaigaidam5.jpg",
      "./vaigaidam images/vaigaidam3.jpg",
    ],
    description: "A breathtaking waterfall amidst lush greenery.",
    highlights: "Waterfalls, Trekking, Picnic Spots",
  },
  {
    name: "Adukkam Falls",
    images: [
      "./vaigaidam images/vaigaidam5.jpg",
      "./vaigaidam images/vaigaidam3.jpg",
    ],
    description: "A breathtaking waterfall amidst lush greenery.",
    highlights: "Waterfalls, Trekking, Picnic Spots",
  },
  {
    name: "BodiMettu",
    images: ["./surulifalls/suruli1.jpg", "./surulifalls/suruli4.jpg"],
    description: "Famous for its wildlife sanctuary and spice plantations.",
    highlights: "Periyar Wildlife Sanctuary, Boating, Bamboo Rafting",
  },
];

const TravelHighlights = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div><motion.h2
        className="text-4xl font-semibold text-center  py-40 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        Travel Highlights
      </motion.h2></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {travelHighlights.map((place, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Carousel showThumbs={false} infiniteLoop autoPlay>
              {place.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={place.name}
                  className="w-full h-64 object-cover"
                />
              ))}
            </Carousel>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
              <p className="text-gray-600 mb-4">{place.description}</p>
              <p className="text-gray-500 italic">{place.highlights}</p>
              <button
                onClick={() =>
                  navigate(`/${place.name.toLowerCase().replace(/\s+/g, "")}`)
                }
                className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full hover:from-green-500 hover:to-blue-600 shadow-lg transition duration-300 w-full"
              >
                View More Details..
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default TravelHighlights;
