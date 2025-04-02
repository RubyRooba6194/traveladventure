import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";


const PeriyathuKombai = () => {
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
            "url('/periyathukombai-images/periyathukombai1.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Periyathu Kombai, Bodi</h1>
          <p className="mt-4 text-lg">
            A hidden paradise in Bodi, known for its lush greenery, breathtaking
            views, and serene atmosphere.
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
            Periyathu Kombai is a picturesque hilltop region near Bodi, Tamil
            Nadu. It is famous for its untouched natural beauty, rich
            biodiversity, and peaceful surroundings. It offers a perfect escape
            for nature lovers and adventure seekers.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Periyathu Kombai
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Scenic Beauty</h3>
              <p className="text-gray-700">
                Stunning views of hills, valleys, and dense forests.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Trekking & Adventure</h3>
              <p className="text-gray-700">
                Exciting trails for trekkers and explorers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Wildlife Spotting</h3>
              <p className="text-gray-700">
                A variety of flora and fauna, ideal for nature lovers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Serene Atmosphere</h3>
              <p className="text-gray-700">
                A perfect getaway to relax and unwind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Periyathu Kombai
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Road</h3>
              <p className="text-gray-700">
                Well-connected by road from Bodi and nearby towns.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Train</h3>
              <p className="text-gray-700">
                Nearest railway station: Theni Railway Station (30 km).
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Air</h3>
              <p className="text-gray-700">
                Closest airport: Madurai Airport (90 km).
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
              <strong>Meghamalai</strong> - A beautiful hill station with tea
              plantations.
            </li>
            <li>
              <strong>Bodi Mettu</strong> - A stunning viewpoint with
              breathtaking scenery.
            </li>
            <li>
              <strong>Suruli Falls</strong> - A mesmerizing waterfall nearby.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PeriyathuKombai;
