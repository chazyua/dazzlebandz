import React from 'react';
import { scroller } from 'react-scroll';

import './home.css';
import About from './about';
import Pricing from './pricing';
import Contact from './Contact';
import Modal from './Modal';
import Gallery from './Pics';
import Products from './Products'

class home extends React.Component {
    scrollToMessage = () => {
        scroller.scrollTo("message", {
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
                            <h4>by Nicole K.</h4>
                            <h4>[work in progress]</h4>
                            {/* <button data-toggle="modal" data-target="#ModalCenter" className="btn mt-4 call-to-action btn-rounded">Click for a coupon</button> */}
                            <Modal 
                                scrollToMessage={this.scrollToMessage}
                            />
                        </div>
                    </div>
                    <div name="message" className="container message">
                        <p className="mb-0">" Add Sparkle To Your Life "</p>
                    </div>
                </section>
                <Products />
                <Gallery />
                <About/>
                <Pricing />
                <Contact />    
            </div>
        );
    }
};

export default home;