import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const BodiMettu = () => {
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
        style={{ backgroundImage: "url('/bodi mettu/bodimettu2.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Bodi Mettu, Tamil Nadu</h1>
          <p className="mt-4 text-lg">
            A serene hill station offering breathtaking views, cool climate, and
            adventure trails.
          </p>
          <button onClick={handleGetPackageOffer} className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg transition-all">
            Get Package Offer
          </button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Overview</h2>
        <p className="text-lg text-gray-700">
          Bodi Mettu, located near Bodinayakanur, is a picturesque hill station
          known for its lush greenery and cool weather. The region is a paradise
          for trekkers and nature lovers, offering stunning views of the Western
          Ghats.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Highlights of Bodi Mettu</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Scenic Beauty</h3>
              <p className="text-gray-700">
                Enjoy panoramic views of the Western Ghats and tea plantations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Trekking & Hiking</h3>
              <p className="text-gray-700">
                Perfect for trekking with trails leading to stunning viewpoints.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Cool Climate</h3>
              <p className="text-gray-700">
                Experience pleasant weather throughout the year.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Wildlife Sightings</h3>
              <p className="text-gray-700">
                Spot exotic birds and wildlife in the dense forests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
        <p className="text-lg text-gray-700">
          The best time to visit Bodi Mettu is from{" "}
          <strong>October to March</strong> when the weather is cool and ideal
          for outdoor activities.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">How to Reach Bodi Mettu</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">By Road</h3>
            <p className="text-gray-700">
              Located 35 km from Theni, easily accessible by bus or taxi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">By Train</h3>
            <p className="text-gray-700">
              Nearest railway station: Theni Railway Station (35 km).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">By Air</h3>
            <p className="text-gray-700">
              Closest airport: Madurai Airport (110 km), with taxi services
              available.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Nearby Attractions</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>
            <strong>Munnar</strong> (40 km) - A famous hill station with tea
            gardens.
          </li>
          <li>
            <strong>Kodaikanal</strong> (90 km) - A beautiful hill retreat.
          </li>
          <li>
            <strong>Periyar Wildlife Sanctuary</strong> (80 km) - A perfect spot
            for wildlife lovers.
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default BodiMettu;
