import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Pages/Contact/ContactPage";
import Home from "./Pages/Home/HomePage";
import Education from "./Pages/Education/EducationPage";
import Skills from "./Pages/Skills/SkillsPage";
import Works from "./Pages/Works/WorksPage";
import NavigationBar from "./Components/Navbar";
import FooterPage from "./Components/Footer";



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Education" component={Education} />
            <Route path="/Skills" component={Skills} />
            <Route path="/Works" component={Works} />
            <Route path="/Contact" component={Contact} />


          </Switch>
        </Router>
        <FooterPage />

      </React.Fragment>
    );
  }
}

export default App;
