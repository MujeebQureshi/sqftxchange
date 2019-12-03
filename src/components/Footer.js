import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLongArrowAltRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return (
        <div>
            <div class="height-emulator fl-wrap"></div>
            <footer class="main-footer fixed-footer">
                <div class="pr-bg"></div>
                <div class="container">
                    <div class="fl-wrap footer-inner">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="footer-logo">
                                    <img src={require("../images/Square Foot Exchange Logo Design Revised-page-001.jpg")} alt="" />
                                </div>
                                <div class="footer_text  footer-box fl-wrap">
                                    <p>Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate them within our innovations.Client is the soul of the project.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="footer-header fl-wrap"><span>01.</span> Contacts</div>
                                <div class="footer-contacts footer-box fl-wrap">
                                    <ul>
                                        <li><span>Call:</span><a href="#">+489756412322</a></li>
                                        <li><span>Write  :</span><a href="#">yourmail@domain.com</a></li>
                                        <li><span>Find us : </span><a href="#">USA 27TH Brooklyn NY</a></li>
                                    </ul>
                                </div>
                                <a href="contacts.html" class=" fc_button">Get In Touch <FontAwesomeIcon icon={faEnvelope}/></a>
                            </div>
                            <div class="col-md-4">
                                <div class="footer-header fl-wrap"><span>02.</span> Subscribe</div>
                                <div class="footer-box fl-wrap">
                                    <p>Want to be notified when we launch a new template or an udpate. Just sign up and we'll send you a notification by email.</p>
                                    <div class="subcribe-form fl-wrap">
                                        <form id="subscribe" class="fl-wrap">
                                            <input class="enteremail" name="email" id="subscribe-email" placeholder="Your Email" spellcheck="false" type="text"/>
                                                <button type="submit" id="subscribe-button" class="subscribe-button">  Send  <FontAwesomeIcon icon={faLongArrowAltRight}/></button>
                                                <label for="subscribe-email" class="subscribe-message"></label>
                                                </form>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="subfooter fl-wrap">
                            <div class="policy-box">
                                <span>&#169; TheSide 2019  /  All rights reserved. </span>
                            </div>
                            <a href="#" class="to-top-btn to-top">Back to top  <FontAwesomeIcon icon={faArrowUp}/></a>
                        </div>
                    </div>
                    <div class="footer-canvas">
                        <div class="dots gallery__dots" data-dots=""></div>
                    </div>
                    </footer>
            </div>
            );
} 