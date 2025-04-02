import React from "react";
import Footer from "./Footer";

const blogPosts = [
  {
    title: "Stay Aware of Your Surroundings",
    content:
      "Always stay alert and aware of what's happening around you. Avoid distractions like excessive phone use while in unfamiliar places.",
    image: "../a1.jpg",
  },
  {
    title: "Keep Your Valuables Secure",
    content:
      "Use anti-theft bags and avoid displaying expensive items like jewelry or high-end gadgets in public areas.",
    image: "../bodi mettu/bodimettu3.jpg",
  },
  {
    title: "Choose Reliable Transportation",
    content:
      "Opt for official taxis, rideshare services, or public transport recommended by local authorities.",
    image: "../kurangani hills/kurangani1.jpg",
  },
  {
    title: "Save Emergency Contacts",
    content:
      "Keep a list of emergency contacts, including local police, embassy, and family members.",
    image: "../surulifalls/suruli2.jpeg",
  },
  {
    title: "Avoid Risky Areas at Night",
    content:
      "Stick to well-lit and populated streets. Avoid walking alone in dark or unfamiliar areas, especially at night.",
    image: "../vaigaidam images/vaigaidam5.jpg",
  },
  {
    title: "Avoid Risky Areas at Night",
    content:
      "Stick to well-lit and populated streets. Avoid walking alone in dark or unfamiliar areas, especially at night.",
    image: "../chinna suruli falls/chinnasuruli_trucking.jpg",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 ">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10 mt-10">
        🏝️ Travel Safety Tips
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer className="m-5 w-full" />
    </div>
  );
};

export default Blogs;
