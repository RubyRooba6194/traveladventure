import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";


const KuranganiHills = () => {
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
          backgroundImage: "url('/public/kurangani hills/kurangani1.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Kurangani Hills, Tamil Nadu</h1>
          <p className="mt-4 text-lg">
            A hidden paradise for trekking lovers, surrounded by scenic beauty.
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
            Kurangani Hills, located in the Western Ghats of Tamil Nadu, is a
            breathtaking destination known for its picturesque landscapes, lush
            green tea estates, and challenging trekking trails.
          </p>
        </div>
      </section>

      {/* About Kurangani Hills */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            About Kurangani Hills
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kurangani is a scenic hill station that serves as a base camp for
            trekking expeditions to Top Station and Kolukkumalai. The region
            boasts breathtaking views of mist-covered hills, dense forests, and
            sprawling tea plantations, making it a perfect getaway for nature
            enthusiasts and adventure seekers.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Kurangani Hills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Trekking Adventure</h3>
              <p className="text-gray-700">
                Popular trekking trails leading to Top Station and Kolukkumalai.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Tea Plantations</h3>
              <p className="text-gray-700">
                Walk through lush tea estates and enjoy fresh mountain air.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Breathtaking Views</h3>
              <p className="text-gray-700">
                Witness stunning sunrises and mist-covered hills.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Wildlife & Nature</h3>
              <p className="text-gray-700">
                Home to various species of birds, animals, and rare flora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
        <p className="text-lg text-gray-700">
          The best time to visit Kurangani Hills is during the winter and
          monsoon seasons (September to March) when the weather is cool and
          pleasant for trekking.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Kurangani Hills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Road</h3>
              <p className="text-gray-700">
                Located 16 km from Bodinayakanur and 26 km from Theni,
                accessible by taxis and buses.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Train</h3>
              <p className="text-gray-700">
                Nearest railway station: Theni Railway Station (26 km).
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">By Air</h3>
              <p className="text-gray-700">
                Closest airport: Madurai Airport (120 km), with taxi services
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
              <strong>Kolukkumalai Tea Estate</strong> (15 km) - The world’s
              highest tea plantation.
            </li>
            <li>
              <strong>Top Station</strong> (40 km) - A scenic viewpoint offering
              breathtaking views.
            </li>
            <li>
              <strong>Meghamalai</strong> (70 km) - A hidden gem of the Western
              Ghats.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KuranganiHills;
