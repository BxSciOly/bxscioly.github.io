import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import {
  Biology,
  Build,
  Chemistry,
  EarthScience,
  Physics,
} from "./pages/Events";
import Faqs from "./pages/Faqs";
import Footer from "./components/Footer";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BiologyData from "./pages/eventsData/BiologyData";
import EarthScienceData from "./pages/eventsData/EarthScienceData";
import PhysicsData from "./pages/eventsData/PhysicsData";
import ChemistryData from "./pages/eventsData/ChemistryData";
import BuildData from "./pages/eventsData/BuildData";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="*" element={<Navigate to="/home" replace />} />
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
