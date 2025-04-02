import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const packingTips = [
  {
    category: "Essential Documents & Money",
    tips: [
      "Passport, visa, ID, and travel insurance",
      "Flight/train/bus tickets and hotel booking confirmations",
      "Credit/debit cards and emergency cash",
      "Emergency contact details and local maps",
    ],
  },
  {
    category: "Luggage & Packing Organization",
    tips: [
      "Choose the right suitcase or backpack based on the trip length",
      "Use packing cubes to organize clothes",
      "Roll clothes to save space and reduce wrinkles",
      "Keep frequently used items in a carry-on",
    ],
  },
  {
    category: "Clothing & Footwear",
    tips: [
      "Pack weather-appropriate clothes (light clothes for hot places, layers for cold)",
      "Comfortable shoes for walking and formal shoes if needed",
      "Sleepwear and extra socks",
      "Swimsuit (if needed)",
    ],
  },
  {
    category: "Toiletries & Personal Care",
    tips: [
      "Toothbrush, toothpaste, deodorant, shampoo, and soap",
      "Skincare essentials and sunscreen",
      "Razor, comb/brush, and hair products",
      "Feminine hygiene products",
    ],
  },
  {
    category: "Medications & First Aid",
    tips: [
      "Prescription medicines with proper labels",
      "Pain relievers, motion sickness pills, and band-aids",
      "Hand sanitizer and wet wipes",
      "Travel-size mosquito repellent",
    ],
  },
  {
    category: "Electronics & Gadgets",
    tips: [
      "Mobile phone, charger, and power bank",
      "Travel adapter (if needed)",
      "Headphones and entertainment (books, music, or movies)",
      "Camera and memory cards",
    ],
  },
  {
    category: "Snacks & Water Bottle",
    tips: [
      "Healthy snacks like nuts, granola bars, or dry fruits",
      "Reusable water bottle to stay hydrated",
      "Instant coffee or tea bags (optional)",
    ],
  },
  {
    category: "Safety & Security",
    tips: [
      "Lock for luggage",
      "RFID-blocking wallet (to prevent card skimming)",
      "Small emergency flashlight",
    ],
  },
];

const PackingTips = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 flex justify-center ">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 mt-11">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-6">
          Packing Tips
        </h2>
        <div className="space-y-4">
          {packingTips.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center bg-green-200 px-4 py-3 text-lg font-semibold text-gray-800 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {item.category}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && (
                <div className="bg-gray-50 p-4 border-t">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {item.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackingTips;
