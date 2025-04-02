import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialMediaIcons() {
  return (
    <div className="flex space-x-4 text-blue-600 text-2xl">
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
    </div>
  );
}

export default SocialMediaIcons;
