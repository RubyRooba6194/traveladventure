import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
];

const DestinationDetails = () => {
  const { name } = useParams();
  const destination = travelHighlights.find(
    (place) => place.name === decodeURIComponent(name)
  );

  if (!destination) {
    return (
      <p className="text-center text-red-500 text-xl">Destination not found!</p>
    );
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto p-10">
        <h2 className="text-4xl font-bold text-center text-green-700">
          {destination.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          <img
            src={destination.images[0]}
            alt={destination.name}
            className="w-full rounded-lg shadow-lg"
          />
          <div>
            <p className="text-gray-600 text-lg">{destination.description}</p>
            <p className="text-gray-500 italic mt-4">
              Highlights: {destination.highlights}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DestinationDetails;
