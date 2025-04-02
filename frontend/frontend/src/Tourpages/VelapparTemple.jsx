import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const VelapparTemple = () => {
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
        style={{ backgroundImage: "url('/velappar images/velappar1.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Mavoothu Velappar Temple</h1>
          <p className="mt-4 text-lg">
            A serene hilltop temple surrounded by lush greenery, dedicated to
            Lord Murugan.
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
            Mavoothu Velappar Temple is a famous pilgrimage site in Tamil Nadu,
            located amidst dense forests and waterfalls. It is a peaceful
            retreat for devotees and nature lovers.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Scenic Beauty</h3>
              <p className="text-gray-700">
                The temple is surrounded by dense forests, waterfalls, and
                breathtaking landscapes.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Spiritual Ambience</h3>
              <p className="text-gray-700">
                A divine place for Lord Murugan devotees, known for its peaceful
                and spiritual aura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
        <p className="text-lg text-gray-700">
          The best time to visit is from <strong>October to March</strong>, when
          the climate is pleasant for trekking and sightseeing.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">How to Reach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Road</h3>
              <p className="text-gray-700">
                Accessible via road from Theni and Periyakulam with taxis and
                buses available.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Train</h3>
              <p className="text-gray-700">
                Nearest railway station: Theni Railway Station (40 km).
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Air</h3>
              <p className="text-gray-700">
                Closest airport: Madurai Airport (90 km), with taxi services
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
              <strong>Kumbakarai Falls</strong> (20 km) - A beautiful waterfall
              for a refreshing visit.
            </li>
            <li>
              <strong>Periyakulam</strong> (30 km) - A historic town known for
              temples and fruit farms.
            </li>
            <li>
              <strong>Meghamalai</strong> (50 km) - A picturesque hill station
              with tea plantations.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VelapparTemple;
