import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Calculator from "./Calculator/Calculator.jsx";
import Donate from "./Components/Donate/index.jsx";
import EcoAdvice from "./Components/EcoAdvice/index.jsx";
import FAQ from "./Components/FAQ/index.jsx";
import FooterComponent from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Newsletter from "./Newsletter.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Calculator />} />
          <Route path="/consejos" render={() => <EcoAdvice />} />
          <Route path="/planta" render={() => <Donate />} />
          <Route path="/faq" render={() => <FAQ />} />
          <Route path="/newsletter" render={() => <Newsletter />} />
        </Switch>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
