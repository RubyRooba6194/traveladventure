import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="relative">
          <button onClick={() => setIsExploreOpen(!isExploreOpen)}>
            Explore Destination
          </button>
          {isExploreOpen && (
            <ul className="absolute bg-white text-black mt-2 w-48">
              <li className="p-2 hover:bg-gray-200">
                <Link
                  to="/explore-details:id"
                  onClick={() => setIsExploreOpen(false)}
                >
                  Destination Details
                </Link>
              </li>
              <li className="p-2 hover:bg-gray-300">
                <Link
                  to="/travel-highlights"
                  onClick={() => setIsExploreOpen(false)}
                >
                  Travel Highlight
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/book-tour">Book Tour</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
