// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/Home";
// import ExplorePage from "./pages/ExploreDestination";
// import DestinationDetails from "./pages/DestinationDetails";
// import DestinationHighlights from "./pages/DestinationHighlights";
// import SocialMediaIcons from "./components/SocialMediaIcons";
// import BookTourPage from "./pages/BookTourPage";
// import Megamalai from "./Tourpages/Megamalai";
// import Vaigaidam from "./Tourpages/Vaigaidam";
// import Surulifalls from "./Tourpages/Surulifalls";
// import ErrorBoundary from "./pages/ErrorBoundary";
// import PlanYourTrip from "./Components/PlanYourTrip";
// import ChoosePackage from "./Components/ChoosePackage";
// import KumbakaraiFalls from "./Tourpages/Kumbakaraifalls";
// import KuranganiHills from "./Tourpages/KuranganiHills";
// import BodiMettu from "./Tourpages/BodiMettu";

// function App() {
//   return (
//     <ErrorBoundary>
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/megamalai" element={<Megamalai />} />
//           <Route path="/vaigaidam" element={<Vaigaidam />} />
//           <Route path="/surulifalls" element={<Surulifalls />} />
//           <Route path="/kumbakaraifalls" element={<KumbakaraiFalls/>}/>
//           <Route path ="/kuranganihills" element={<KuranganiHills/>}/>
//           <Route path="/bodimettu" element={<BodiMettu/>}/>
//           <Route path="/plan-trip" element={<PlanYourTrip />} />
//           <Route path="/choosepackage" element={<ChoosePackage />} />
//           <Route path="/explore-destination" element={<ExplorePage />} />
//           <Route path="/explore-details/:id" element={<DestinationDetails />} />
//           <Route
//             path="/destination-highlights/:name"
//             element={<DestinationHighlights />}
//           />
//           <Route path="/book-tour" element={<BookTourPage />} />
//         </Routes>
//         {/* <SocialMediaIcons /> */}
//         {/* <BookTourPage /> */}
//       </Router>
//     </ErrorBoundary>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ExplorePage from "./pages/ExploreDestination";
import BookTourPage from "./pages/BookTourPage";
import Megamalai from "./Tourpages/Megamalai";
import Vaigaidam from "./Tourpages/Vaigaidam";
import Surulifalls from "./Tourpages/Surulifalls";
import KumbakaraiFalls from "./Tourpages/Kumbakaraifalls";
import KuranganiHills from "./Tourpages/Kuranganihills";
import BodiMettu from "./Tourpages/BodiMettu";
import PlanYourTrip from "../src/Components/PlanYourTrip";
import ChoosePackage from "../src/Components/ChoosePackage";
import Header from "../src/Components/Header";
import ErrorBoundary from "./pages/ErrorBoundary";
import BookingConfirmation from "./Components/BookingConfirmation";
import PackingTips from "./Components/PackingTips";
import SafetyTips from "../src/Components/SafetyTips";
import Blogs from "./Components/Blogs";
import InquiryForm from "./Components/InquiryForm";
import SignIn from "./Components/SignIn";
import RegisterNow from "./Components/RegisterNow";
import TravelHighlights from "./Components/TravelHighlights";
import SothupparaiDam from "./Tourpages/SothupparaiDam";
import VelapparTemple from "./Tourpages/VelapparTemple";
import PeriyaTemple from "./Tourpages/PeriyaTemple";
import DestinationDetails from "./Components/DestinationDetails";
import AdukkamFalls from "./Tourpages/AdukkamFalls";
import ChinnaSuruli from "./Tourpages/ChinnaSuruli";
import PeriyathuKombai from "./Tourpages/PeriyathuKombai";
import PullaveliFalls from "./Tourpages/PullaveliFalls";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        {/* Include Header inside Router to allow navigation */}
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore-destination" element={<ExplorePage />} />
          <Route path="/destination/:name" element={<DestinationDetails />} />
          <Route path="/travel-highlights" element={<TravelHighlights />} />

          

          {/* Book Tour Routes */}
          <Route path="/book-tour" element={<BookTourPage />} />
          <Route path="/book-tour/plan-trip" element={<PlanYourTrip />} />
          <Route path="/book-tour/choose-package" element={<ChoosePackage />} />
          <Route
            path="/book-tour/booking-confirmation"
            element={<BookingConfirmation />}
          />

          {/* Travel Tips */}
          <Route path="/travel-tips/packing-tips" element={<PackingTips />} />
          <Route path="/travel-tips/safety-tips" element={<SafetyTips />} />
          <Route path="/travel-tips/blogs" element={<Blogs />} />

          {/* Tourist Spots */}
          <Route path="/megamalai" element={<Megamalai />} />
          <Route path="/vaigaidam" element={<Vaigaidam />} />
          <Route path="/surulifalls" element={<Surulifalls />} />
          <Route path="/kumbakarai-falls" element={<KumbakaraiFalls />} />
          <Route path="/kurangani-hills" element={<KuranganiHills />} />
          <Route path="/bodimettu" element={<BodiMettu />} />
          <Route path="/sothuparai" element={<SothupparaiDam />} />
          <Route path="/velappartemple" element={<VelapparTemple />} />
          <Route path="/periyatemple" element={<PeriyaTemple />} />
          <Route path="/adukkamfalls" element={<AdukkamFalls />} />
          <Route path="/chinnasuruli" element={<ChinnaSuruli />} />
          <Route path="/periyathukombai" element={<PeriyathuKombai />} />
          <Route path="/pullavelifalls" element={<PullaveliFalls />} />

          {/*Contact us*/}
          <Route path="/contact/inquiry-form" element={<InquiryForm />} />

          {/* Uses Accounts*/}
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<RegisterNow />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
