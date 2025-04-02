import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";


const PullaveliFalls = () => {
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
          backgroundImage: "url('/pullavelifalls/images/pullavelifalls1.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Pullaveli Falls, Tamil Nadu</h1>
          <p className="mt-4 text-lg">
            A hidden gem surrounded by lush greenery, perfect for trekking and
            relaxation.
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
            Pullaveli Falls is a mesmerizing waterfall nestled in the Western
            Ghats. It is known for its serene environment, making it a perfect
            destination for nature lovers and adventure seekers.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Pullaveli Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Scenic Beauty</h3>
              <p className="text-gray-700">
                Surrounded by dense forests and breathtaking landscapes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Trekking & Adventure</h3>
              <p className="text-gray-700">
                An excellent spot for trekkers and adventure enthusiasts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Refreshing Waters</h3>
              <p className="text-gray-700">
                Cool and refreshing waterfalls to enjoy a rejuvenating
                experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Picnic Spot</h3>
              <p className="text-gray-700">
                An ideal getaway for family picnics and relaxation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
        <p className="text-lg text-gray-700">
          The best time to visit Pullaveli Falls is from{" "}
          <strong>June to December</strong>
          when the waterfall is in full flow and the surrounding greenery is at
          its peak.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Pullaveli Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Road</h3>
              <p className="text-gray-700">
                Well-connected by road, accessible via private vehicles and
                local transport.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Train</h3>
              <p className="text-gray-700">
                Nearest railway station: Theni Railway Station.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Air</h3>
              <p className="text-gray-700">
                Closest airport: Madurai Airport, with cab services available.
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
              <strong>Vaigai Dam</strong> - A well-known picnic spot.
            </li>
            <li>
              <strong>Meghamalai</strong> - A scenic hill station.
            </li>
            <li>
              <strong>Suruli Falls</strong> - Another famous waterfall nearby.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PullaveliFalls;
