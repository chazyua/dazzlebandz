import React from 'react';

import './Contact.css';

const Contact = () => {
    return (
        <section name="contact">
            <p className="contact">Contact</p>
            <div className="container py-5 margin-bottom-md">
                <div className="row text-center margin-bottom-md">
                    <div className="col-sm-6 enough-space left align-center">
                        <div className="horizontal-center">
                            <div className="address">
                                <h2>Dazzle Bandz</h2>
                                <p className="sameline">Chicago, IL</p>
                                <p className="sameline"></p>
                            </div>
                            <div className="contact-info">
                                <p className="sameline"> <i class="fa fa-phone" aria-hidden="true"></i> 714-381-5571</p>
                                <p className="sameline"> <i class="fa fa-facebook" aria-hidden="true"></i> DazzleBandz</p>
                                <p className="sameline"> <i class="fa fa-instagram" aria-hidden="true"></i> nkdazzlebandz</p>
                                <p className="sameline"> <i class="fa fa-envelope-o" aria-hidden="true"></i> dazzlebandz@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 enough-space right hours">
                        <div id="map">
                            <iframe title="Dazzle Bandz Map" className="google-maps-iframe" src="https://www.google.com/maps/embed?pb=" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div> 
                </div>
            
            </div>
            <div className="credentials">
                <div className="textwl"><a href="http://www.artem-yerep.com" rel="noopener noreferrer" target="_blank">  Made with love by <img id="ay-logo" src="img/aylogo.png" alt="aylogo" /></a></div>
            </div>
        </section>
    );
}
export default Contact;