import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import {
  Biology,
  Build,
  Chemistry,
  EarthScience,
  Physics,
} from "./pages/Events/Events";
import Faqs from "./pages/FAQs/Faqs";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BiologyData from "./pages/Events/eventsData/BiologyData";
import EarthScienceData from "./pages/Events/eventsData/EarthScienceData";
import PhysicsData from "./pages/Events/eventsData/PhysicsData";
import ChemistryData from "./pages/Events/eventsData/ChemistryData";
import BuildData from "./pages/Events/eventsData/BuildData";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="*" element={<Navigate replace to="/home" />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/biology" exact element={<Biology />}>
          {BiologyData.map((event) => (
            <Route path={event.path} element={<></>} />
          ))}
        </Route>
        <Route path="/earthscience" exact element={<EarthScience />}>
          {EarthScienceData.map((event) => (
            <Route path={event.path} element={<></>} />
          ))}
        </Route>
        <Route path="/build" exact element={<Build />}>
          {BuildData.map((event) => (
            <Route path={event.path} element={<></>} />
          ))}
        </Route>
        <Route path="/chemistry" exact element={<Chemistry />}>
          {ChemistryData.map((event) => (
            <Route path={event.path} element={<></>} />
          ))}
        </Route>
        <Route path="/physics" exact element={<Physics />}>
          {PhysicsData.map((event) => (
            <Route path={event.path} element={<></>} />
          ))}
        </Route>
        <Route path="/faqs" exact element={<Faqs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
