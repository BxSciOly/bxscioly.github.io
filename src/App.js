import "./App.css";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import { Biology, Build, Chemistry, Physics, Trial } from "./pages/Events";
import Team from "./pages/Team";
import Faqs from "./pages/Faqs";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Redirect exact from="/" to="/#/home" />
        <Route path="/#/home" exact component={Home} />
        <Route path="/#/events/events1" exact component={Biology} />
        <Route path="/#/events/events2" exact component={Build} />
        <Route path="/#/events/events3" exact component={Chemistry} />
        <Route path="/#/events/events4" exact component={Physics} />
        <Route path="/#/events/events5" exact component={Trial} />
        <Route path="/#/team" exact component={Team} />
        <Route path="/#/faqs" exact component={Faqs} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
