import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";


const KumbakaraiFalls = () => {
    const navigate = useNavigate();


const handleGetPackageOffer = () => {
      navigate("/book-tour/choose-package");
    };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/kumbakaraifalls/kumbakarai1.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Kumbakarai Falls, Tamil Nadu</h1>
          <p className="mt-4 text-lg">
            A hidden paradise with crystal-clear waterfalls and serene nature.
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
            Kumbakarai Falls, located near Periyakulam in Tamil Nadu, is a
            picturesque waterfall known for its refreshing waters and lush green
            surroundings. A popular tourist spot, it offers a perfect escape for
            nature lovers and adventure seekers.
          </p>
        </div>
      </section>

      {/* About Kumbakarai Falls */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            About Kumbakarai Falls
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kumbakarai Falls is formed by the River Pamba as it cascades down in
            two stages. The upper part of the falls consists of natural water
            pools, while the lower part forms the main waterfall. It is a
            favorite picnic spot for families and adventure enthusiasts.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Kumbakarai Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Crystal Clear Water</h3>
              <p className="text-gray-700">
                Experience fresh, pure water flowing down the scenic rocks.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Perfect Picnic Spot</h3>
              <p className="text-gray-700">
                Enjoy a relaxing day surrounded by lush greenery and waterfalls.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Natural Swimming Pools</h3>
              <p className="text-gray-700">
                Swim in the shallow pools formed by the cascading water.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">
                Trekking & Nature Walks
              </h3>
              <p className="text-gray-700">
                Explore nearby trails with breathtaking views of nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
        <p className="text-lg text-gray-700">
          The best time to visit Kumbakarai Falls is during the{" "}
          <strong>monsoon (July to February)</strong>, when the water flow is
          abundant and the surrounding nature is at its peak beauty.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Kumbakarai Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Road</h3>
              <p className="text-gray-700">
                Located 8 km from Periyakulam and 25 km from Theni, accessible
                by taxis and buses.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Train</h3>
              <p className="text-gray-700">
                Nearest railway station: Theni Railway Station (25 km).
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Air</h3>
              <p className="text-gray-700">
                Closest airport: Madurai Airport (100 km), with taxi services
                available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Nearby Attractions
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              <strong>Suruli Falls</strong> (50 km) - A breathtaking waterfall.
            </li>
            <li>
              <strong>Vaigai Dam</strong> (30 km) - A scenic reservoir.
            </li>
            <li>
              <strong>Meghamalai</strong> (60 km) - A beautiful hill station.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KumbakaraiFalls;
