// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import { useNavigate } from "react-router-dom";


// const KumbakaraiFalls = () => {
//     const navigate = useNavigate();


// const handleGetPackageOffer = () => {
//       navigate("/book-tour/choose-package");
//     };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header />

//       {/* Hero Section */}
//       <section
//         className="relative h-[80vh] flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/kumbakaraifalls/kumbakarai1.jpg')",
//         }}
//       >
//         <div className="bg-black bg-opacity-60 p-8 rounded-lg">
//           <h1 className="text-4xl font-bold">Kumbakarai Falls, Tamil Nadu</h1>
//           <p className="mt-4 text-lg">
//             A hidden paradise with crystal-clear waterfalls and serene nature.
//           </p>
//           <button onClick={handleGetPackageOffer} className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg transition-all">
//             Get Package Offer
//           </button>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section className="py-12 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">Overview</h2>
//           <p className="text-lg text-gray-700">
//             Kumbakarai Falls, located near Periyakulam in Tamil Nadu, is a
//             picturesque waterfall known for its refreshing waters and lush green
//             surroundings. A popular tourist spot, it offers a perfect escape for
//             nature lovers and adventure seekers.
//           </p>
//         </div>
//       </section>

//       {/* About Kumbakarai Falls */}
//       <section className="py-12 px-6 bg-gray-100">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-6">
//             About Kumbakarai Falls
//           </h2>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             Kumbakarai Falls is formed by the River Pamba as it cascades down in
//             two stages. The upper part of the falls consists of natural water
//             pools, while the lower part forms the main waterfall. It is a
//             favorite picnic spot for families and adventure enthusiasts.
//           </p>
//         </div>
//       </section>

//       {/* Highlights Section */}
//       <section className="py-12 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-6">
//             Highlights of Kumbakarai Falls
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-bold mb-2">Crystal Clear Water</h3>
//               <p className="text-gray-700">
//                 Experience fresh, pure water flowing down the scenic rocks.
//               </p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-bold mb-2">Perfect Picnic Spot</h3>
//               <p className="text-gray-700">
//                 Enjoy a relaxing day surrounded by lush greenery and waterfalls.
//               </p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-bold mb-2">Natural Swimming Pools</h3>
//               <p className="text-gray-700">
//                 Swim in the shallow pools formed by the cascading water.
//               </p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-bold mb-2">
//                 Trekking & Nature Walks
//               </h3>
//               <p className="text-gray-700">
//                 Explore nearby trails with breathtaking views of nature.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Best Time to Visit */}
//       <section className="py-12 px-6 bg-gray-100 text-center">
//         <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
//         <p className="text-lg text-gray-700">
//           The best time to visit Kumbakarai Falls is during the{" "}
//           <strong>monsoon (July to February)</strong>, when the water flow is
//           abundant and the surrounding nature is at its peak beauty.
//         </p>
//       </section>

//       {/* How to Reach */}
//       <section className="py-12 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-6">
//             How to Reach Kumbakarai Falls
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-bold mb-2">By Road</h3>
//               <p className="text-gray-700">
//                 Located 8 km from Periyakulam and 25 km from Theni, accessible
//                 by taxis and buses.
//               </p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-bold mb-2">By Train</h3>
//               <p className="text-gray-700">
//                 Nearest railway station: Theni Railway Station (25 km).
//               </p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-bold mb-2">By Air</h3>
//               <p className="text-gray-700">
//                 Closest airport: Madurai Airport (100 km), with taxi services
//                 available.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Nearby Attractions */}
//       <section className="py-12 px-6 bg-gray-100">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-6">
//             Nearby Attractions
//           </h2>
//           <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
//             <li>
//               <strong>Suruli Falls</strong> (50 km) - A breathtaking waterfall.
//             </li>
//             <li>
//               <strong>Vaigai Dam</strong> (30 km) - A scenic reservoir.
//             </li>
//             <li>
//               <strong>Meghamalai</strong> (60 km) - A beautiful hill station.
//             </li>
//           </ul>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default KumbakaraiFalls;
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const KumbakaraiFalls = () => {
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
        >
          {[
            "../kumbakaraifalls/kumbakarai1.jpg",
            "../kumbakaraifalls/kumbakarai2.jpg",
            "../kumbakaraifalls/kumbakarai3.avif",
            "../kumbakaraifalls/kumbakarai4.jpg",
          ].map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`Kumbakarai ${i + 1}`}
                className="w-full h-[80vh] object-cover"
              />
            </div>
          ))}
        </Carousel>

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold">Kumbakarai Falls</h1>
          <p className="mt-4 text-lg max-w-2xl">
            A scenic waterfall located at the foothills of the Kodaikanal Hills,
            offering natural pools and peaceful surroundings.
          </p>
        </div>
      </section>

      {/* Button Outside Image */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleGetPackageOffer}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md transition-all"
        >
          Get Package Offer
        </button>
      </div>

      {/* Overview Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Overview</h2>
        <p className="text-lg text-gray-700">
          Kumbakarai Falls is a hidden gem near Periyakulam in Tamil Nadu.
          Surrounded by greenery and rock formations, the falls are divided into
          two stages, forming shallow pools where visitors can relax and play
          safely.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Highlights of Kumbakarai Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Natural Pools",
                desc: "Safe and shallow pools ideal for bathing and relaxation.",
              },
              {
                title: "Lush Green Surroundings",
                desc: "Encircled by dense forest and natural beauty.",
              },
              {
                title: "Less Crowded",
                desc: "Perfect for a calm and peaceful getaway.",
              },
              {
                title: "Photography Spot",
                desc: "A paradise for nature photographers and vloggers.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
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
          Visit from <strong>July to February</strong> when the falls are in
          full flow and the weather is pleasant.
        </p>
      </section>

      {/* How to Reach */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            How to Reach Kumbakarai Falls
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "By Road",
                desc: "Located 9 km from Periyakulam and 30 km from Theni. Accessible by local buses and taxis.",
              },
              {
                title: "By Train",
                desc: "Nearest railway station: Theni (30 km).",
              },
              {
                title: "By Air",
                desc: "Nearest airport: Madurai (115 km), with taxis available.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
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
              <strong>Periyakulam</strong> - A historic town with temples and
              shopping spots.
            </li>
            <li>
              <strong>Meghamalai</strong> - A cool hill station located nearby.
            </li>
            <li>
              <strong>Vaigai Dam</strong> - A great spot for a sunset picnic
              with family.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KumbakaraiFalls;
