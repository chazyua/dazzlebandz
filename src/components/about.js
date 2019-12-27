import React from 'react';
import { Element } from 'react-scroll';

import './about.css'


const About = () => {
    return (
      <section>
        <Element name="about">
        <p className="lightBox">About Us</p>
          <div className="container-fluid d-flex justify-content-end">
            <div className="box">
              <div className="spacing">
                <div className="box-padding au">
                  <div className="row align-items-center">
                  <div className="col">
                      <div>
                        <p className="heading-about">Who We Are</p>
                        <hr />
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-5 about-message">
                      {/* <h4 className="about-subtitle">About Us</h4> */}
                      <p className="description">
                        Dazzle Bandz is a family-owned hand made Jewelry Company
                        using the finest material acquired from New York and Los
                        Angeles.
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
                <div className="box-padding om">
                  <div className="row align-items-center">
                    <div className="col">
                      <p className="heading-about">Our Mission</p>
                      <hr />
                    </div>
                    <div className="col-lg-6 col-xl-6 about-message">
                      <p className="description">
                        To give every woman the means to style her
                        own life. We get great joy out of designing irresistible
                        jewelry and yet jewelry is just the tangible expression
                        of something much greater we are creating. We have a
                        vision of the world where strong women live bold and
                        joyful lives. They know what they want and they work for
                        it. They inspire each other. Passion and joy are their
                        best accessories.
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

export default About;