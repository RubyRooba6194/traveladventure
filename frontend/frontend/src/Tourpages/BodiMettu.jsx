
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const BodiMettu = () => {
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
            "../bodi mettu/bodimettu4.jpg",
            "../bodi mettu/bodimettu5.webp",
            "../bodi mettu/bodimettu6.webp",
          ].map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Bodi Mettu ${index + 1}`}
                className="w-full h-[80vh] object-cover"
              />
            </div>
          ))}
        </Carousel>

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold">Bodi Mettu, Tamil Nadu</h1>
          <p className="mt-4 text-lg">
            A serene hill station known for its breathtaking views, tea estates,
            and lush greenery.
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
          Bodi Mettu is a beautiful hill station located near the Tamil
          Nadu-Kerala border. With its mist-covered hills, sprawling tea
          plantations, and scenic trekking trails, it is an ideal getaway for
          nature lovers and adventure enthusiasts.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Bodi Mettu
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Scenic Viewpoints",
                desc: "Enjoy panoramic views of the Western Ghats.",
              },
              {
                title: "Tea Plantations",
                desc: "Explore lush green tea gardens and learn about tea production.",
              },
              {
                title: "Trekking Trails",
                desc: "Exciting treks through forests and hills.",
              },
              {
                title: "Cool Climate",
                desc: "A refreshing getaway with misty surroundings.",
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
          The best time to visit Bodi Mettu is from{" "}
          <strong>October to April</strong>, when the weather is cool and
          pleasant.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Bodi Mettu
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "By Road",
                desc: "Located 35 km from Theni, accessible by private vehicles and local buses.",
              },
              {
                title: "By Train",
                desc: "Nearest railway station: Theni Railway Station (35 km).",
              },
              {
                title: "By Air",
                desc: "Closest airport: Madurai Airport (120 km), with taxi services available.",
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
              <strong>Kurangani Hills</strong> (25 km) - A popular trekking
              destination with stunning views.
            </li>
            <li>
              <strong>Meghamalai</strong> (60 km) - A serene hill station known
              for its tea plantations.
            </li>
            <li>
              <strong>Periyar Wildlife Sanctuary</strong> (90 km) - A haven for
              nature and wildlife enthusiasts.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BodiMettu;
