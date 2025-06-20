
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const AdukkamFalls = () => {
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
            "../adukkam/adukkam1.jpg",
            "../adukkam/adukkam2.jpg",
            // "../adukkamfalls/adukkam3.jpg",
          ].map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Adukkam Falls ${index + 1}`}
                className="w-full h-[80vh] object-cover"
              />
            </div>
          ))}
        </Carousel>

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold">Adukkam Falls, Tamil Nadu</h1>
          <p className="mt-4 text-lg">
            A breathtaking waterfall hidden amidst lush greenery, offering a
            serene escape into nature.
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
          Adukkam Falls is a mesmerizing waterfall located in the hills of Tamil
          Nadu. Surrounded by dense forests and scenic landscapes, it is a
          popular destination for nature lovers and trekkers seeking
          tranquility.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Adukkam Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Scenic Waterfall",
                desc: "A stunning natural cascade surrounded by lush forests.",
              },
              {
                title: "Adventure Trekking",
                desc: "Exciting trekking trails leading to the falls.",
              },
              {
                title: "Photography Spot",
                desc: "Perfect place for capturing breathtaking views.",
              },
              {
                title: "Refreshing Escape",
                desc: "A peaceful retreat with cool, misty surroundings.",
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
          The best time to visit Adukkam Falls is during the **monsoon and
          post-monsoon seasons**, from <strong>July to February</strong>, when
          the waterfall is at its full glory.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Adukkam Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "By Road",
                desc: "Easily accessible by private vehicles and local buses from Theni.",
              },
              {
                title: "By Train",
                desc: "Nearest railway station: Theni Railway Station (40 km).",
              },
              {
                title: "By Air",
                desc: "Closest airport: Madurai Airport (110 km), with taxi services available.",
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
              <strong>Kumbakkarai Falls</strong> (35 km) - A scenic waterfall
              perfect for picnics.
            </li>
            <li>
              <strong>Megamalai Hills</strong> (50 km) - A breathtaking hill
              station with tea plantations.
            </li>
            <li>
              <strong>Suruli Falls</strong> (70 km) - A magnificent waterfall in
              a dense forest setting.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdukkamFalls;
