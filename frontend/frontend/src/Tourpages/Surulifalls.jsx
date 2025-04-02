import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Surulifalls = () => {
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
          backgroundImage: "url('/surulifalls images/surulifalls1.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Suruli Falls, Tamil Nadu</h1>
          <p className="mt-4 text-lg">
            A magnificent waterfall nestled in lush greenery, perfect for nature
            lovers and adventure seekers.
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
          Suruli Falls is a stunning two-stage waterfall located in the Western
          Ghats. Known for its medicinal value, the water originates from the
          Megamalai hills and cascades down a height of 150 feet, offering a
          breathtaking view.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Suruli Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Scenic Beauty",
              "Trekking Adventure",
              "Refreshing Bath",
              "Historic Caves",
            ].map((title, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700">
                  {title === "Scenic Beauty" &&
                    "Surrounded by dense forests, offering breathtaking views."}
                  {title === "Trekking Adventure" &&
                    "A popular trekking spot with trails leading through lush greenery."}
                  {title === "Refreshing Bath" &&
                    "Visitors can take a dip in the cool, medicinal waters of the falls."}
                  {title === "Historic Caves" &&
                    "Nearby Kailasanathar Temple Cave is rich in ancient sculptures."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
        <p className="text-lg text-gray-700">
          The best time to visit Suruli Falls is from{" "}
          <strong>June to October</strong>
          when the waterfall is at its peak flow due to monsoon rains.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Suruli Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {["By Road", "By Train", "By Air"].map((title, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700">
                  {title === "By Road" &&
                    "Located 10 km from Cumbum, accessible via taxis and buses."}
                  {title === "By Train" &&
                    "Nearest railway station: Theni Railway Station (50 km)."}
                  {title === "By Air" &&
                    "Closest airport: Madurai Airport (125 km), with cab services available."}
                </p>
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
              <strong>Megamalai</strong> (45 km) - A beautiful hill station with
              tea plantations.
            </li>
            <li>
              <strong>Periyar Wildlife Sanctuary</strong> (60 km) - Home to
              diverse wildlife and lush forests.
            </li>
            <li>
              <strong>Vaigai Dam</strong> (55 km) - A picturesque reservoir with
              scenic views.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Surulifalls;
