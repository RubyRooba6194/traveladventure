import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";


const PeriyaTemple = () => {
    const navigate = useNavigate();

const handleGetPackageOffer = () => {
  navigate("/book-tour/choose-package");
};
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[140vh] flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/periyakulam/images/balasubramaniyan_temple.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">
            Balasubramaniyan Temple, Periyakulam
          </h1>
          <p className="mt-4 text-lg">
            A historic and sacred temple dedicated to Lord Murugan, known for
            its divine blessings and rich heritage.
          </p>
          <button onClick={handleGetPackageOffer} className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg transition-all">
            Get Package Offer
          </button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-gray-700">
            The Balasubramaniyan Temple in Periyakulam is an ancient Hindu
            temple dedicated to Lord Murugan. Nestled amidst serene
            surroundings, it is a spiritual haven attracting devotees from far
            and wide.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Temple Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Divine Significance</h3>
              <p className="text-gray-700">
                Dedicated to Lord Murugan, the temple is believed to bless
                devotees with prosperity and well-being.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Architectural Beauty</h3>
              <p className="text-gray-700">
                Showcasing intricate carvings and Dravidian-style architecture,
                the temple stands as a cultural marvel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
        <p className="text-lg text-gray-700">
          The temple is best visited during **Thai Poosam** and **Karthigai
          Deepam**, which are celebrated with great devotion.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">How to Reach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Road</h3>
              <p className="text-gray-700">
                Well-connected by buses and taxis from Theni and Dindigul.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Train</h3>
              <p className="text-gray-700">
                Nearest railway station: Theni Railway Station (18 km).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Air</h3>
              <p className="text-gray-700">
                Closest airport: Madurai Airport (95 km), with taxi services
                available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Nearby Attractions
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              <strong>Kumbakkarai Falls</strong> (15 km) - A mesmerizing natural
              waterfall perfect for relaxation.
            </li>
            <li>
              <strong>Vaigai Dam</strong> (30 km) - A major water reservoir
              offering scenic views.
            </li>
            <li>
              <strong>Meghamalai</strong> (60 km) - A beautiful hill station
              known for its tea plantations.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PeriyaTemple;
