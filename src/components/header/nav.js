import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

import './nav.css';

export default class Nav extends React.Component {
    state = {
        color: ''
    };

    componentDidMount() {
        let hero = document.querySelector(".hero");
        let nav = document.querySelector(".navbar");
        window.addEventListener('scroll', () => {
            if(window.scrollY > hero.clientHeight - nav.clientHeight * 3) {
                this.setState({color: ''})
            }
            else {
                this.setState({color: ''})
            }
        })
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top container py-3" style={{backgroundColor: this.state.color}}>
                <Link className="navbar-brand text-white item-click" to="home" smooth>DB</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link item-click" to="home" spy activeClass="active" smooth offset={-72}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link item-click" to="about" spy activeClass="active" smooth offset={-72}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link item-click" to="pics" spy activeClass="active" smooth offset={-72}>Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link item-click" to="contact" spy activeClass="active" smooth offset={-72}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};