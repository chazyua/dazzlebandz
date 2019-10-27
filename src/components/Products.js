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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequatur quaerat enim vitae magni, reiciendis animi
                      numquam blanditiis illo autem corrupti veniam, libero
                      nobis dolores! Delectus, quisquam. Atque doloribus amet
                      magni animi numquam minima? Consequatur iste pariatur ab
                      quos esse vitae sapiente alias voluptatem, optio natus
                      labore tempore earum, iure maiores.
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
                  <div className="col-lg-5 col-xl-4 about-message">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sed ab voluptatem consequatur aut error minima amet
                      placeat excepturi ea rerum ad, id voluptas porro iste
                      dolore accusantium sit nihil nisi alias? Quasi, est. Culpa
                      accusantium, vero distinctio sint, nulla tenetur aliquid
                      placeat illo, deserunt cumque perspiciatis fugiat sapiente
                      non assumenda.
                    </p>
                    <hr />
                  </div>
                  <div className="col">
                    <div>
                      <p className="heading-about">Necklases</p>
                    </div>
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
                    <p>
                      There is nothing like custom jewelry to celebrate yourself
                      and those that are close to you. From bracelets to
                      necklaces and/or earrings, DazzleBandz by Nicole K.
                      creates tailor-made pieces that give you or those close to
                      you a way to wear that special Sparkle in your Life. Our
                      jewelry is designed to be beautiful and meaningful. We
                      customize our jewelry for any and all occasions
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
