//npm install --save react-background-slideshow
//import "bootstrap/dist/css/bootstrap.min.css";
//import { Dropdowns } from "react-bootstrap";
//import useMediaQuery from '@material-ui/core/useMediaQuery'
import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import BackgroundSlideshow from "react-background-slideshow";
import Image2 from "./Components/img/priscilla-du-preez.jpg";
import Image3 from "./Components/img/heylagostechie.jpg";
import Image4 from "./Components/img/alexis-brown-omea.jpg";
import About from "./Components/About";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
//npm install react-router-dom
import Login from "./Components/userAccount/Login";
import Register from "./Components/userAccount/Register";
import ResetPW from "./Components/userAccount/ResetPW";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.scss";

/* import "bootstrap/dist/css/bootstrap.min.css"; */
/* import { Dropdowns } from "react-bootstrap"; */ /* import useMediaQuery from '@material-ui/core/useMediaQuery';

 */ const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Main />
        <div className="slightContainer">
          <BackgroundSlideshow
            images={[Image2, Image3, Image4]}
          ></BackgroundSlideshow>
        </div>
        <About />
        <Team />
        <Footer />
      </div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset_password" component={ResetPW} />
      </Switch>
    </Router>
  );
};

export default App;
