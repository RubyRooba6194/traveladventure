import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";


const SothupparaiDam = () => {
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
          backgroundImage: "url('/sothupparai images/sothupparai1.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Sothupparai Dam, Tamil Nadu</h1>
          <p className="mt-4 text-lg">
            A serene reservoir surrounded by lush greenery, ideal for relaxation
            and photography.
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
            Sothupparai Dam, located near Periyakulam in Theni district, is a
            major water source for irrigation. The dam is known for its
            breathtaking scenery, peaceful surroundings, and picnic spots,
            making it a favorite among nature lovers.
          </p>
        </div>
      </section>

      {/* About Sothupparai Dam */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            About Sothupparai Dam
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Sothupparai Dam is built across the Varaha River and serves as an
            essential water reservoir for agricultural lands in Theni. It is a
            peaceful getaway offering spectacular views of the hills and
            greenery. The dam is an excellent place for a relaxing outing with
            family and friends.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Sothupparai Dam
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Scenic Beauty</h3>
              <p className="text-gray-700">
                Surrounded by hills and lush greenery, perfect for nature
                lovers.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Perfect Picnic Spot</h3>
              <p className="text-gray-700">
                A peaceful location for family outings and relaxation.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Sunset & Sunrise Views</h3>
              <p className="text-gray-700">
                Stunning views of the sun rising and setting behind the hills.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Photography Spot</h3>
              <p className="text-gray-700">
                A dream destination for photographers and travel bloggers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
        <p className="text-lg text-gray-700">
          The best time to visit Sothupparai Dam is from{" "}
          <strong>October to February</strong> when the weather is cool and
          pleasant.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Sothupparai Dam
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Road</h3>
              <p className="text-gray-700">
                Located 12 km from Periyakulam, accessible via private vehicles
                and buses.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Train</h3>
              <p className="text-gray-700">
                Nearest railway station: Theni Railway Station (24 km).
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
              <strong>Kumbakkarai Falls</strong> (20 km) - A scenic waterfall in
              the Western Ghats.
            </li>
            <li>
              <strong>Meghamalai</strong> (55 km) - A beautiful hill station.
            </li>
            <li>
              <strong>Periyakulam</strong> (12 km) - Known as the "Mango City"
              with temples and serene spots.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SothupparaiDam;
