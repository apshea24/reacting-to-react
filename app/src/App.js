import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Provider } from "react-redux";

//styles

import "./styles/css/style.css"

// Common Components
import Navigation from "./components/common/Navbar";
import Footing from "./components/common/Footer"

//Page Components
import Home from "./components/pages/Home"
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"



class App extends Component {
  render() {
    return (
      <Router>
        <div className="app site" style={{ backgroundColor: "rgba(152,152,152,.6)" }}>
            <Navigation />
          <div className="site-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              {/* <Route exact path="/documentation" component={AuthRoute(Post)} /> */}
              {/* <Route path="/react-examples" component={ReactExamples} /> */}
            </Switch>
          </div>
          {/* <ModalController /> */}
        <Footing />
        </div>
      </Router>
    );
  }
}


export default App;
