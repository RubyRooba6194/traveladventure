import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [dropdown, setDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setDropdown(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setDropdown(null);
    setIsMenuOpen(false);
  };

  // Close dropdown when clicking outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => handleNavigate("/")}
        >
          Travel Buddy
        </h1>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl text-blue-600"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Menu */}
        <nav
          ref={menuRef}
          className={`absolute md:static top-16 right-0 w-full md:w-auto bg-white shadow-md md:shadow-none md:flex flex-col md:flex-row transition-all ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* Main Links */}
          <button
            onClick={() => handleNavigate("/")}
            className="block md:inline-block px-6 py-3 hover:text-blue-600"
          >
            Home
          </button>

          {/* Dropdown Menus */}
          {[
            {
              title: "Explore Destinations",
              menu: "explore",
              links: [
                
                { label: "Travel Highlights", path: "/travel-highlights" },
              ],
            },
            {
              title: "Book Tour",
              menu: "bookTour",
              links: [
                { label: "Plan Your Trip", path: "/book-tour/plan-trip" },
                {
                  label: "Choose Package & Dates",
                  path: "/book-tour/choose-package",
                },
                { label: "Make Payment Gateway", path: "/book-tour/payment" },
                {
                  label: "Confirm Booking",
                  path: "/book-tour/booking-confirmation",
                },
              ],
            },
            {
              title: "Travel Tips & Blogs",
              menu: "travelTips",
              links: [
                { label: "Packing Tips", path: "/travel-tips/packing-tips" },
                { label: "Safety Tips", path: "/travel-tips/safety-tips" },
                { label: "Blogs", path: "/travel-tips/blogs" },
              ],
            },
            {
              title: "Contact Us",
              menu: "contact",
              links: [{ label: "Inquiry Form", path: "/contact/inquiry-form" }],
            },
            {
              title: "User Account",
              menu: "userAccount",
              links: [
                { label: "Sign In", path: "/login" },
                { label: "Register Now", path: "/register" },
              ],
            },
          ].map(({ title, menu, links }) => (
            <div key={menu} className="relative">
              <button
                onClick={() => toggleDropdown(menu)}
                className="block md:inline-block px-6 py-3 hover:text-blue-600 w-full text-left"
              >
                {title} {dropdown === menu ? "▲" : "▼"}
              </button>

              {/* Animated Dropdown */}
              <AnimatePresence>
                {dropdown === menu && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-100 md:absolute md:left-0 md:w-48 shadow-md rounded-lg md:mt-2"
                  >
                    {links.map(({ label, path }) => (
                      <li
                        key={label}
                        onClick={() => handleNavigate(path)}
                        className="px-6 py-2 hover:bg-gray-300 cursor-pointer transition-all"
                      >
                        {label}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
