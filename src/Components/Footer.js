import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faGithub, faGooglePlus, faTwitch, faInstagram, fa } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons';


class FooterPage extends Component {
    render() {
        return (
            <footer >
                <div className="footer-container">

                    <div className="footer-container-brands">

                        <a href="https://www.facebook.com/posa.alexandru" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='2x' icon={faFacebook} /></a>
                        <a href="https://github.com/AlexandruPosa" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='2x' icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/alexandru-po%C8%99a-4b480413b/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='2x' icon={faLinkedin} /></a>
                        <a href="https://accounts.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='2x' icon={faGooglePlus} /></a>
                        <a href="https://twitter.com/?lang=ro" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='2x' icon={faTwitch} /></a>
                        <a href="https://www.instagram.com/posa.alexandru/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='2x' icon={faInstagram} /></a>
                    </div>
                    <div className="footer-container-name">


                        <div className="footer-container-projects">
                            <p>Personal projects:</p>
                            <div className="footer-container-buttons">
                                <button >
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Flaviusmadarassi/Proiect-IMDb-Grupa-Mercur" > Imdb</a>

                                </button>
                                <button>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlexandruPosa/InterativeCV" > CV</a>

                                </button>
                            </div>
                        </div>
                        <div>

                            <p>Contact:</p>
                            <p>Posa Alexandru-Nicolae</p>

                            <div className="footer-container-contact-icons">
                                <div >
                                    <FontAwesomeIcon size='2x' icon={faPhoneSquareAlt} />
                                    <p >0752366982</p>
                                </div>
                                <div >
                                    <FontAwesomeIcon size='2x' icon={faEnvelope} />
                                    <p>alex.posa94@yahoo.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-container-copyrighs">
                        <FontAwesomeIcon size='2x' icon={faCopyright} />
                        <p>Copyright 2020. All rights reserved</p>
                    </div>

                </div>
            </footer>
        );
    }
}

export default FooterPage;