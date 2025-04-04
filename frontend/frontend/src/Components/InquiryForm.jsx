// import React, { useState } from "react";

// const InquiryForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Your inquiry has been submitted successfully!");
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-6 flex flex-col items-center">
//       <h2 className="text-4xl font-bold text-blue-700 mb-6 mt-10">Inquiry Form</h2>
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Your Phone Number"
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows="4"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Submit Inquiry
//           </button>
//         </form>
//       </div>
//       <div className="mt-8 text-center">
//         <h3 className="text-2xl font-semibold text-gray-800">
//           Contact Information
//         </h3>
//         <p className="text-gray-600">Travel Buddy Tourism</p>
//         <p className="text-gray-600">
//           Senthooran Complex, New Bus Stand, Theni-625531
//         </p>
//         <p className="text-gray-600">Phone: +91 9876543210, +91 9988776655</p>
//         <p className="text-gray-600">Email: travelbuddytours@gmail.com</p>
//         <p className="text-gray-600">Business Hours: 9 AM - 10 PM</p>
//       </div>
//     </div>
//   );
// };

// export default InquiryForm;
import React, { useState } from "react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Your inquiry has been submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-6 mt-10 py-10">Inquiry Form</h2>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6">
        {/* Contact Details */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800">Contact Us</h3>
          <p className="text-gray-600 mt-2">We'd love to hear from you!</p>
          <div className="mt-4 text-gray-700">
            <p>
              <strong>Office Address:</strong> Travel Buddy Tourism, Senthooran
              Complex, New Bus Stand, Theni-625531
            </p>
            <p>
              <strong>Phone:</strong> +91 9876543210, +91 9988776655
            </p>
            <p>
              <strong>Email:</strong> travelbuddytours@gmail.com
            </p>
            <p>
              <strong>Business Hours:</strong> 9 AM - 10 PM
            </p>
          </div>
          {/* Google Map */}
          <div className="mt-6">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Travel+Buddy+Tourism,Theni"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
