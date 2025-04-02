import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Megamalai = () => {
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
          backgroundImage: "url('/megamalai images/megamalai1.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Megamalai, Tamil Nadu</h1>
          <p className="mt-4 text-lg">
            A hidden paradise in the Western Ghats, known for tea plantations,
            lush greenery, and misty mountains.
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
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Overview</h2>
        <p className="text-lg text-gray-700">
          Megamalai, also known as the "High Wavy Mountains," is a scenic hill
          station in Tamil Nadu. It is surrounded by tea estates, dense forests,
          and breathtaking viewpoints, making it a perfect retreat for nature
          lovers and adventure seekers.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Megamalai
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Tea Plantations",
                desc: "Lush tea gardens with refreshing views and fresh tea tasting.",
              },
              {
                title: "Wildlife Sanctuary",
                desc: "Home to diverse flora and fauna, including elephants and exotic birds.",
              },
              {
                title: "Breathtaking Viewpoints",
                desc: "Enjoy panoramic views from Megamalai Viewpoint and Iravangalar Dam.",
              },
              {
                title: "Peaceful Retreat",
                desc: "A perfect getaway for relaxation away from city life.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
        <p className="text-lg text-gray-700">
          The best time to visit Megamalai is from{" "}
          <strong>November to May</strong>
          when the weather is cool and pleasant.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Megamalai
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "By Road",
                desc: "Located 45 km from Theni, accessible by private vehicles and local buses.",
              },
              {
                title: "By Train",
                desc: "Nearest railway station: Theni Railway Station (45 km).",
              },
              {
                title: "By Air",
                desc: "Closest airport: Madurai Airport (120 km), with cab services available.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
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
              <strong>Vaigai Dam</strong> (50 km) - A famous dam offering scenic
              views.
            </li>
            <li>
              <strong>Suruli Falls</strong> (60 km) - A beautiful waterfall
              amidst lush greenery.
            </li>
            <li>
              <strong>Periyar Wildlife Sanctuary</strong> (90 km) - A haven for
              wildlife enthusiasts.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Megamalai;
