import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const ChinnaSuruli = () => {
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
          backgroundImage: "url('/chinnasuruli-images/chinnasuruli1.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold">
            Chinna Suruli Falls, Tamil Nadu
          </h1>
          <p className="mt-4 text-lg">
            A stunning waterfall nestled in the Western Ghats, offering a serene
            retreat for nature lovers.
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
            Chinna Suruli Falls is a mesmerizing waterfall located in the lush
            forests of Theni district. Known for its cascading water and
            tranquil surroundings, it is an ideal spot for relaxation, trekking,
            and photography.
          </p>
        </div>
      </section>

      {/* About Chinna Suruli Falls */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            About Chinna Suruli Falls
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Situated near the foothills of the Western Ghats, Chinna Suruli
            Falls originates from the Meghamalai mountain range. The waterfall
            is surrounded by dense forests, providing visitors with a peaceful
            and refreshing atmosphere. It is a popular spot among trekkers and
            adventure seekers.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Chinna Suruli Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Refreshing Waterfall",
                desc: "Crystal-clear water cascading down from the Meghamalai hills.",
              },
              {
                title: "Lush Greenery",
                desc: "Surrounded by dense forests, making it a perfect nature retreat.",
              },
              {
                title: "Trekking & Adventure",
                desc: "A favorite spot for trekking enthusiasts.",
              },
              {
                title: "Peaceful Atmosphere",
                desc: "Less crowded, making it an ideal getaway for relaxation.",
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
          The best time to visit Chinna Suruli Falls is during the{" "}
          <strong>monsoon and post-monsoon season (July to February)</strong>,
          when the waterfall is at its peak flow.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Chinna Suruli Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "By Road",
                desc: "Located 35 km from Theni, accessible via private vehicles and local taxis.",
              },
              {
                title: "By Train",
                desc: "Nearest railway station: Theni Railway Station (35 km).",
              },
              {
                title: "By Air",
                desc: "Closest airport: Madurai Airport (120 km), with cab services available.",
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
              <strong>Megamalai</strong> (40 km) - A scenic hill station with
              tea plantations.
            </li>
            <li>
              <strong>Suruli Falls</strong> (45 km) - Another famous waterfall
              in the region.
            </li>
            <li>
              <strong>Vaigai Dam</strong> (50 km) - A serene reservoir perfect
              for a day trip.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChinnaSuruli;
