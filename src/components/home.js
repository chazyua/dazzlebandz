import React from "react";
import { scroller } from "react-scroll";

import "./home.css";
import About from "./About";
import Contact from "./Contact";
import Modal from "./Modal";
import Gallery from "./Pics";
import Products from "./Products";

class Home extends React.Component {
  scrollToContact = () => {
    scroller.scrollTo("contact", {
      smooth: true,
      offset: -72
    });
  };

  render() {
    return (
      <div className="home">
        <section name="home">
          <div className="hero">
            <div className="hero-inner">
              <h2 className="display-1">DazzleBandz</h2>
              <h3 className="byNicoleK">by Nicole K.</h3>
            </div>
            
          </div>
          <div className="social">
                <a
                  className="cornerLink"
                  href="https://facebook.com/dazzlebandz"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <br/>
                <a
                  className="cornerLink"
                  href="https://www.instagram.com/nkdazzlebandz/"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
          <div name="message" className="container message">
            <p className="addSparkle">" Add Sparkle To Your Life "</p>
          </div>
        </section>
        <Products />
        <Gallery />
        <About />
        <Contact name="contact" />
      </div>
    );
  }
}

export default Home;
