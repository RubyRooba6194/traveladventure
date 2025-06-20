
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const VaigaiDam = () => {
  const navigate = useNavigate();

  const handleGetPackageOffer = () => {
    navigate("/book-tour/choose-package");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section with Carousel */}
      <section className="relative pt-20">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={3000}
          className="w-full"
        >
          {[
            "../vaigaidam images/vaigaidam6.jpg",
            "../vaigaidam images/vaigaidam2.jpg",
            "../vaigaidam images/vaigaidam3.jpg",
            "../vaigaidam images/vaigaidam4.avif",
          ].map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Vaigai Dam ${index + 1}`}
                className="w-full h-[80vh] object-cover"
              />
            </div>
          ))}
        </Carousel>

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold">Vaigai Dam, Tamil Nadu</h1>
          <p className="mt-4 text-lg">
            A major water reservoir offering scenic landscapes and a peaceful
            retreat for nature lovers.
          </p>
        </div>
      </section>

      {/* Button Outside the Image */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleGetPackageOffer}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg transition-all"
        >
          Get Package Offer
        </button>
      </div>

      {/* Overview Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Overview</h2>
        <p className="text-lg text-gray-700">
          The Vaigai Dam is a magnificent man-made reservoir built across the
          Vaigai River. It serves as a vital water source for irrigation and
          drinking water while also offering breathtaking views of lush
          greenery.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Vaigai Dam
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Scenic Views",
                desc: "Enjoy mesmerizing views of the reservoir and the lush surroundings.",
              },
              {
                title: "Recreational Spot",
                desc: "Perfect place for picnics, morning walks, and relaxation.",
              },
              {
                title: "Garden & Park",
                desc: "Well-maintained garden with colorful flowers and fountains.",
              },
              {
                title: "Water Conservation",
                desc: "A key source of irrigation for nearby districts.",
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
          The best time to visit Vaigai Dam is during the{" "}
          <strong>monsoon season (July to December)</strong> when the reservoir
          is full, and the surrounding greenery is at its best.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Vaigai Dam
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "By Road",
                desc: "Located 7 km from Theni, accessible by private vehicles and local buses.",
              },
              {
                title: "By Train",
                desc: "Nearest railway station: Theni Railway Station (7 km).",
              },
              {
                title: "By Air",
                desc: "Closest airport: Madurai Airport (80 km), with cab services available.",
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
              <strong>Meghamalai</strong> (60 km) - A beautiful hill station
              with misty mountains.
            </li>
            <li>
              <strong>Suruli Falls</strong> (50 km) - A magnificent waterfall
              surrounded by forests.
            </li>
            <li>
              <strong>Periyar Wildlife Sanctuary</strong> (90 km) - Famous for
              wildlife lovers and safaris.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VaigaiDam;
