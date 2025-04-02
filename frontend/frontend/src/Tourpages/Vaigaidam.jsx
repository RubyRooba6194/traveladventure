import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Vaigaidam = () => {
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
          backgroundImage: "url('/vaigaidam images/vaigaidam5.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Vaigai Dam, Tamil Nadu</h1>
          <p className="mt-4 text-lg">
            A scenic reservoir offering breathtaking views, picnic spots, and
            boating.
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
            Vaigai Dam, built across the Vaigai River, is a prominent landmark
            in Tamil Nadu. It plays a crucial role in supplying water for
            irrigation and drinking purposes. Surrounded by lush greenery, the
            dam attracts tourists for its scenic beauty, peaceful ambiance, and
            recreational activities.
          </p>
        </div>
      </section>

      {/* About Vaigai Dam */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            About Vaigai Dam
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Vaigai Dam is located near Andipatti in the Theni district. It
            serves as an essential water reservoir, ensuring a steady supply of
            water for agricultural lands and domestic purposes. Visitors can
            explore the Children's Park, well-maintained gardens, and enjoy a
            relaxing boat ride in the reservoir.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Vaigai Dam
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Beautiful Scenery",
                desc: "Breathtaking sunrise and sunset views, ideal for photography.",
              },
              {
                title: "Boating & Recreation",
                desc: "Enjoy boating in the reservoir and relax in the park.",
              },
              {
                title: "Picnic Spot",
                desc: "A perfect getaway with lush greenery and gardens.",
              },
              {
                title: "Night View",
                desc: "The dam lights up beautifully at night, creating a mesmerizing view.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
        <p className="text-lg text-gray-700">
          The best time to visit Vaigai Dam is from{" "}
          <strong>October to March</strong>
          when the weather is pleasant and the reservoir is full.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Vaigai Dam
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "By Road",
                desc: "Located 14 km from Theni, accessible via buses and taxis.",
              },
              {
                title: "By Train",
                desc: "Nearest railway station: Theni Railway Station (14 km).",
              },
              {
                title: "By Air",
                desc: "Closest airport: Madurai Airport (80 km), with taxi services available.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
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
              <strong>Suruli Falls</strong> (35 km) - A mesmerizing waterfall.
            </li>
            <li>
              <strong>Megamalai</strong> (50 km) - A beautiful hill station.
            </li>
            <li>
              <strong>Periyar Wildlife Sanctuary</strong> (60 km) - A nature
              lover’s paradise.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vaigaidam;
