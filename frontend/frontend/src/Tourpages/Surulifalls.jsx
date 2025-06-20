
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const SuruliFalls = () => {
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
            "../surulifalls/suruli6.jpg",
            "../surulifalls/suruli4.jpg",
            "../surulifalls/suruli5.jpg",
            "../surulifalls/suruli3.webp",
          ].map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Suruli Falls ${index + 1}`}
                className="w-full h-[80vh] object-cover"
              />
            </div>
          ))}
        </Carousel>

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold">Suruli Falls, Tamil Nadu</h1>
          <p className="mt-4 text-lg">
            A magnificent waterfall known for its perennial flow, surrounded by
            lush green forests and hills.
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
          Suruli Falls is a mesmerizing 2-stage waterfall located in the Western
          Ghats. It is famous for its scenic beauty, Ayurvedic healing
          properties, and religious significance, making it a must-visit
          attraction.
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
              {
                title: "Perennial Waterfall",
                desc: "Enjoy the breathtaking beauty of the 2-stage waterfall.",
              },
              {
                title: "Lush Greenery",
                desc: "Surrounded by dense forests and hills, offering a peaceful retreat.",
              },
              {
                title: "Ayurvedic Healing",
                desc: "Believed to have medicinal properties that benefit visitors.",
              },
              {
                title: "Religious Significance",
                desc: "Close to Kailasanathar Temple, a famous pilgrimage site.",
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
          The best time to visit Suruli Falls is during the{" "}
          <strong>monsoon season (June to October)</strong>
          when the waterfall is at its full glory.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Suruli Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "By Road",
                desc: "Located 56 km from Theni, accessible by private vehicles and buses.",
              },
              {
                title: "By Train",
                desc: "Nearest railway station: Theni Railway Station (56 km).",
              },
              {
                title: "By Air",
                desc: "Closest airport: Madurai Airport (125 km), with cab services available.",
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
              with stunning views.
            </li>
            <li>
              <strong>Vaigai Dam</strong> (50 km) - A major water reservoir
              offering scenic landscapes.
            </li>
            <li>
              <strong>Periyar Wildlife Sanctuary</strong> (90 km) - Home to
              elephants, tigers, and exotic birds.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuruliFalls;
