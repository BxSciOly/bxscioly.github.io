import "./App.css";
import Sidebar from "./components/Sidebar";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import {
  Biology,
  Build,
  Chemistry,
  EarthScience,
  Physics,
} from "./pages/Events";
import Board from "./pages/Board";
import Faqs from "./pages/Faqs";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <HashRouter>
      <Sidebar />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/biology" exact component={Biology} />
        <Route path="/earthscience" exact component={EarthScience} />
        <Route path="/build" exact component={Build} />
        <Route path="/chemistry" exact component={Chemistry} />
        <Route path="/physics" exact component={Physics} />
        <Route path="/board" exact component={Board} />
        <Route path="/faqs" exact component={Faqs} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
