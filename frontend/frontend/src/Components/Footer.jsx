import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p>&copy; 2025 Travel Explorer. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebook className="text-2xl hover:text-blue-500" />
            <FaTwitter className="text-2xl hover:text-blue-400" />
            <FaInstagram className="text-2xl hover:text-pink-400" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer