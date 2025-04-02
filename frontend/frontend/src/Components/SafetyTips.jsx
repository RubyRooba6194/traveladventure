import React, { useState } from "react";

const safetyTips = [
  {
    title: "Stay Aware of Your Surroundings",
    content:
      "Always stay alert and aware of what's happening around you. Avoid distractions like excessive phone use while in unfamiliar places.",
  },
  {
    title: "Keep Your Valuables Secure",
    content:
      "Use anti-theft bags and avoid displaying expensive items like jewelry or high-end gadgets in public areas.",
  },
  {
    title: "Use Trusted Transport Options",
    content:
      "Opt for official taxis, rideshare services, or public transport recommended by local authorities.",
  },
  {
    title: "Carry Emergency Contacts",
    content:
      "Keep a list of emergency contacts, including local police, embassy, and family members.",
  },
  {
    title: "Stay in Well-Lit Areas",
    content:
      "Avoid walking alone in dark or unfamiliar areas, especially at night. Stick to well-lit and populated streets.",
  },
];

const SafetyTips = () => {
  const [openTip, setOpenTip] = useState(null);

  const toggleTip = (index) => {
    setOpenTip(openTip === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-6 mt-11">
        Travel Safety Tips
      </h2>
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4">
        {safetyTips.map((tip, index) => (
          <div key={index} className="border-b last:border-none">
            <button
              className="flex justify-between items-center w-full text-left p-4 font-semibold text-gray-800 hover:bg-gray-50"
              onClick={() => toggleTip(index)}
            >
              {tip.title}
              <span className="ml-2 text-sm bg-blue-600 text-white px-3 py-1 rounded-full">
                {openTip === index ? "Hide" : "Show"}
              </span>
            </button>
            {openTip === index && (
              <p className="p-4 text-gray-600">{tip.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyTips;
