import "./App.css";
import Sidebar from "./components/Sidebar";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Biology, Build, Chemistry, Physics, Trial } from "./pages/Events";
import Team from "./pages/Team";
import Faqs from "./pages/Faqs";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <Sidebar />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" exact component={Home} />
        <Route path="/biology" exact component={Biology} />
        <Route path="/build" exact component={Build} />
        <Route path="/chemistry" exact component={Chemistry} />
        <Route path="/physics" exact component={Physics} />
        <Route path="/trial" exact component={Trial} />
        <Route path="/team" exact component={Team} />
        <Route path="/faqs" exact component={Faqs} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
