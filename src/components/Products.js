import React from "react";
import { Element } from "react-scroll";

import "./about.css";

const Products = () => {
  return (
    <section>
      <Element name="products">
        <div className="container-fluid">
          <div className="box">
            <div className="spacing">
              <div className="box-padding bl">
                <div className="row align-items-center">
                  <div className="col">
                    <p className="heading-about">Bracelets</p>
                    <hr />
                  </div>
                  <div className="col-lg-6 col-xl-6 about-message">
                    {/* <h4 className="about-subtitle">About Us</h4> */}
                    <p className="description">
                      Our handmade bracelets allow your inner personality to be
                      that statement piece that is guaranteed to stop the show.
                      All of our bracelets have inspirational charms that remind
                      us of our best qualities. Each bracelet can be mixed and
                      matched according to the inspirational quotes on each
                      charm. Dazzlebandz by Nicole K bracelets are hand designed
                      to wear well with all jewelry, we hand-pick the finest and
                      rarest beads to create the most unique jewelry. Our
                      jewelry is Lead and Nickel free and can be worn anywhere
                      at anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex justify-content-end">
          <div className="box">
            <div className="spacing">
              <div className="box-padding nl">
                <div className="row align-items-center">
                <div className="col">
                    <div>
                      <p className="heading-about">Necklaces</p>
                      <hr />
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6 about-message">
                    <p className="description">
                      Handmade Beaded Necklaces adds an exclusive touch to any
                      fashionable look. Whether you want a conservative, casual,
                      classy, sparkling or formal look, our necklaces designed
                      by Nicole K. will add the perfect spark to your daily wear
                      and personality.
                    </p> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="box">
            <div className="spacing">
              <div className="box-padding cj">
                <div className="row align-items-center">
                  <div className="col">
                    <p className="heading-about">Customized Jewelry</p>
                    <hr />
                  </div>
                  <div className="col-lg-6 col-xl-5 about-message">
                    <p className="description">
                      There is nothing like custom jewelry to celebrate yourself
                      and those that are close to you. From bracelets to
                      necklaces and/or earrings, DazzleBandz by Nicole K.
                      creates tailor-made pieces that give you or those close to
                      you a way to wear that special Sparkle in your Life. Our
                      jewelry is designed to be beautiful and meaningful. We
                      customize our jewelry for any and all occasions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Products;
