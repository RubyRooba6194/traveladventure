import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const destinations = [
  {
    id: 1,
    name: "Megamalai, Theni",
    image: "/megamalai2.jpg",
    description: "Scenic mountain views with a cool climate.",
  },
  {
    id: 2,
    name: "Vaigai Dam, Theni",
    image: "/vaigaidam images/vaigaidam1.jpeg", // Ensure this path is correct
    description:
      "One of the most popular dams in Tamil Nadu, offering scenic views.",
  },
  {
    id: 3,
    name: "Suruli Falls, Theni",
    image: "/surulifalls/suruli1.jpg",
    description:
      "The world's highest tea plantation with stunning sunrise views.",
  },
  {
    id: 4,
    name: "Kumbakaraifalls, Theni",
    image: "/kumbakaraifalls/kumbakarai1.jpg",
    description:
      "The world's highest tea plantation with stunning sunrise views.",
  },
  {
    id: 5,
    name: "Kurangani Hills, Theni",
    image: "/kurangani hills/kurangani1.jpg",
    description:
      "The world's highest tea plantation with stunning sunrise views.",
  },
  {
    id: 6,
    name: "BodiMettu, Theni",
    image: "/bodi mettu/bodimettu3.jpg",
    description:
      "The world's highest tea plantation with stunning sunrise views.",
  },
  {
    id: 7,
    name: "Sothuparai Dam, Theni",
    image: "./sothuparaidam/sothuparai1.jpg",
    description:
      "The world's highest tea plantation with stunning sunrise views.",
  },
  {
    id: 8,
    name: "Mavoothu Velappar Temple, Theni",
    image: "",
    description:
      "The world's highest tea plantation with stunning sunrise views.",
  },
  {
    id: 9,
    name: "Periyakulam Periyakovil, Theni",
    image: "",
    description:
      "The world's highest tea plantation with stunning sunrise views.",
  },
  

];

const Home = () => {
  const navigate = useNavigate();

  // Function to handle clicking on a destination(popular destination in home page)
  const handleDestinationClick = (destinationName) => {
    if (destinationName === "Megamalai, Theni") {
      navigate("/megamalai");
    } else if (destinationName === "Vaigai Dam, Theni") {
      navigate("/vaigaidam"); // Ensure this matches the route in App.jsx
    } else if (destinationName === "Suruli Falls, Theni") {
      navigate("/surulifalls"); // Ensure this matches the route in App.jsx
    } else if (destinationName === "Kumbakaraifalls, Theni") {
      navigate("/Kumbakarai-falls"); // Ensure this matches the route in App.jsx
    } else if (destinationName === "Kurangani Hills, Theni") {
      navigate("/kurangani-hills"); // Ensure this matches the route in App.jsx
    } else if (destinationName === "BodiMettu, Theni") {
      navigate("/bodi-mettu"); // Ensure this matches the route in App.jsx
    } else if (destinationName === "Sothuparai Dam, Theni") {
      navigate("/sothuparai"); // Ensure this matches the route in App.jsx
    } else if (destinationName === "Mavoothu Velappar Temple, Theni") {
      navigate("/velappartemple"); // Ensure this matches the route in App.jsx
    } else if (destinationName === "Periyakulam Periyakovil, Theni") {
      navigate("/periyatemple"); // Ensure this matches the route in App.jsx
    } else {
      navigate(
        `/destination/${destinationName.toLowerCase().replace(/\s+/g, "-")}`
      );
    }
  };

  // Function to navigate to the ExploreDestination page
  const handlePlanYourTrip = () => {
    navigate("/explore-destination");
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[80vh]  flex flex-col justify-center items-center text-center text-white  bg-cover bg-center"
        style={{ backgroundImage: "url('/a1.jpg') " }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h2 className="text-4xl font-bold font-Satisfy">
            Explore the World with Us
          </h2>
          <p className="mt-4">
            Plan your trip with the best deals and travel guides
          </p>
          <button
            onClick={handlePlanYourTrip}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
          >
            Plan Your Trip
          </button>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Destinations
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-gray-200 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
              onClick={() => handleDestinationClick(destination.name)}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="rounded-lg w-full h-48 object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">{destination.name}</h3>
              <p>{destination.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* About Section */}
      <section className="relative py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to our travel and tourism platform! We bring you the most
            exciting travel experiences in Tamil Nadu, offering personalized
            tour packages, breathtaking destinations, and seamless booking
            services. Our mission is to make your journey unforgettable by
            providing top-quality hospitality and adventure.
          </p>
          {/* Travel Couple Image */}
          {/* <img 
            src="/public/traveler.jpg"
            alt="Travel Couple"
            className="absolute bottom-0 right-0  w-40 md:w-52 opacity-90  "
          /> */}
          {/* Travel Couple Image */}
          <div className="w-56 md:w-72 lg:w-80">
            <img
              src="/traveler.jpg"
              alt="Travel Couple"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="text-lg font-semibold space-y-4">
              <li>✔️ Handpicked Destinations with stunning views.</li>
              <li>✔️ Custom Travel Packages to fit your budget.</li>
              <li>✔️ Secure Booking with hassle-free payments.</li>
              <li>✔️ 24/7 Customer Support for your travel needs.</li>
            </ul>
            <ul className="text-lg font-semibold space-y-4">
              <li>🌍 Plan Your Trip: Expert recommendations.</li>
              <li>🎟️ Exclusive Packages: Honeymoon, family, solo travel.</li>
              <li>💳 Secure Payments: Trusted Razorpay integration.</li>
              <li>📍 Travel Assistance: Real-time support & guides.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Customer Reviews Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Travelers Say</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src="/pfphoto2.jpg"
              alt="Reviewer"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="italic">
              "An unforgettable experience! Highly recommended for adventure
              lovers."
            </p>
            <p className="mt-4 font-semibold">- James Smith</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src="/pfphoto1.jpg"
              alt="Reviewer"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="italic">
              "Everything was so well organized. I had the best time exploring
              new places!"
            </p>
            <p className="mt-4 font-semibold">- Emily Johnson</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src="/ruby.jpg"
              alt="Reviewer"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="italic">
              "The trip exceeded all my expectations! Will book again soon."
            </p>
            <p className="mt-4 font-semibold">- Roobasini</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};


export default Home;
