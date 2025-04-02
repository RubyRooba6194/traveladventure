import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const AdukkamFalls = () => {
  const navigate = useNavigate(); // Corrected usage

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
          backgroundImage: "url('/adukkamfalls images/adukkamfalls1.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Adukkam Falls, Tamil Nadu</h1>
          <p className="mt-4 text-lg">
            A hidden gem with pristine waterfalls, lush greenery, and a serene
            atmosphere.
          </p>
          <button
            onClick={handleGetPackageOffer}
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg transition-all"
          >
            Get Package Offer
          </button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-gray-700">
            Nestled in the lush green hills, Adukkam Falls is a spectacular
            natural wonder. The cascading waters and tranquil surroundings make
            it a perfect retreat for nature lovers and adventurers.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Adukkam Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Scenic Beauty</h3>
              <p className="text-gray-700">
                Surrounded by dense forests and rolling hills, offering
                breathtaking views.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Trekking Adventure</h3>
              <p className="text-gray-700">
                Ideal for trekking enthusiasts with scenic trails leading to the
                falls.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Refreshing Bath</h3>
              <p className="text-gray-700">
                Visitors can take a dip in the refreshing natural pool below the
                falls.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Best Photography Spot</h3>
              <p className="text-gray-700">
                A paradise for photographers looking to capture nature's beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
        <p className="text-lg text-gray-700">
          The best time to visit Adukkam Falls is from{" "}
          <strong>July to December</strong>
          when the waterfall is at its full glory and the weather is pleasant.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Adukkam Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Road</h3>
              <p className="text-gray-700">
                Accessible via well-connected roads; taxis and buses are
                available.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Train</h3>
              <p className="text-gray-700">
                Nearest railway station: Theni Railway Station (35 km away).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Air</h3>
              <p className="text-gray-700">
                Closest airport: Madurai Airport (110 km), with cab services
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
              <strong>Kumbakarai Falls</strong> (20 km) - Another beautiful
              waterfall nearby.
            </li>
            <li>
              <strong>Meghamalai</strong> (50 km) - A serene hill station with
              tea plantations.
            </li>
            <li>
              <strong>Vaigai Dam</strong> (45 km) - A scenic dam offering
              picturesque views.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdukkamFalls;
