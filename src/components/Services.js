import React from 'react';
import { Footer } from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Services = () => {
    return (
        <div>
            <div className="content">
                <div className="fixed-column-wrap">
                    <div className="pr-bg"></div>
                    <div className="fixed-column-wrap-content">
                        <div className="scroll-nav-wrap color-bg">
                            <div className="carnival">Scroll down</div>
                            <div className="snw-dec">
                                <div className="mousey">
                                    <div className="scroller"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg" data-bg={require("../images/bg/14.jpg")}></div>
                        <div className="progress-bar-wrap bot-element">
                            <div className="progress-bar"></div>
                        </div>
                        <div className="fixed-column-wrap_title first-tile_load">
                            <h2>Our<br /> Services</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
                        </div>
                        <div className="fixed-column-dec"></div>
                    </div>
                </div>
                <div className="column-wrap">
                    <div className="column-wrap-container fl-wrap">
                        <div className="col-wc_dec">
                            <div className="pr-bg pr-bg-white"></div>
                        </div>
                        <div className="col-wc_dec col-wc_dec2">
                            <div className="pr-bg pr-bg-white"></div>
                        </div>
                        <section className="small-padding">
                            <div className="container">
                                <div className="split-sceen-content_title fl-wrap">
                                    <div className="pr-bg pr-bg-white"></div>
                                    <h3>Architecture</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.  </p>
                                </div>
                                <div className="column-wrap-content fl-wrap">
                                    <div className="column-wrap-media fl-wrap">
                                        <div className="pr-bg pr-bg-white"></div>
                                        <img src={require("../images/all/6.jpg")} className="respimg" alt="" />
                                        <div className="cont-det-wrap dark-gold">
                                            <div className="pr-bg pr-bg-white"></div>
                                            <ul>
                                                <li><strong>01.</strong><span>Cras lacinia  : </span> <a href="#">ADIPISCING ELIT</a></li>
                                                <li><strong>02.</strong><span>molestie faucibus:</span> <a href="#">dolor sit ame</a></li>
                                                <li><strong>03.</strong><span> Donec auctor :</span> <a href="#"> Cras lacinia</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="serv-text fl-wrap">
                                        <div className="pr-bg pr-bg-white"></div>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.
                                                    Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.
                                                        </p>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="serv-price-wrap dark-gold"><span>Price</span>$1250-$3350</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-number right_sn">
                                    <div className="pr-bg pr-bg-white"></div>
                                    <span>0</span>1.
                                        </div>
                            </div>
                        </section>
                        <div className="section-separator"></div>
                        <section className="small-padding">
                            <div className="container">
                                <div className="split-sceen-content_title fl-wrap">
                                    <div className="pr-bg pr-bg-white"></div>
                                    <h3>Interior Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.  </p>
                                </div>
                                <div className="column-wrap-content fl-wrap">
                                    <div className="column-wrap-media fl-wrap">
                                        <div className="pr-bg pr-bg-white"></div>
                                        <img src={require("../images/all/1.jpg")} className="respimg" alt="" />
                                        <div className="cont-det-wrap dark-gold">
                                            <div className="pr-bg pr-bg-white"></div>
                                            <ul>
                                                <li><strong>01.</strong><span>Cras lacinia  : </span> <a href="#">ADIPISCING ELIT</a></li>
                                                <li><strong>02.</strong><span>molestie faucibus:</span> <a href="#">dolor sit ame</a></li>
                                                <li><strong>03.</strong><span> Donec auctor :</span> <a href="#"> Cras lacinia</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="serv-text fl-wrap">
                                        <div className="pr-bg pr-bg-white"></div>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.
                                                    Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.
                                                        </p>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="serv-price-wrap dark-gold"><span>Price</span>$1250-$3350</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-number right_sn">
                                    <div className="pr-bg pr-bg-white"></div>
                                    <span>0</span>2.
                                        </div>
                            </div>
                        </section>
                        <div className="section-separator"></div>
                        <section className="small-padding">
                            <div className="container">
                                <div className="split-sceen-content_title fl-wrap">
                                    <div className="pr-bg pr-bg-white"></div>
                                    <h3>Furniture Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.  </p>
                                </div>
                                <div className="column-wrap-content fl-wrap">
                                    <div className="column-wrap-media fl-wrap">
                                        <div className="pr-bg pr-bg-white"></div>
                                        <img src={require("../images/all/4.jpg")} className="respimg" alt="" />
                                        <div className="cont-det-wrap dark-gold">
                                            <div className="pr-bg pr-bg-white"></div>
                                            <ul>
                                                <li><strong>01.</strong><span>Cras lacinia  : </span> <a href="#">ADIPISCING ELIT</a></li>
                                                <li><strong>02.</strong><span>molestie faucibus:</span> <a href="#">dolor sit ame</a></li>
                                                <li><strong>03.</strong><span> Donec auctor :</span> <a href="#"> Cras lacinia</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="serv-text fl-wrap">
                                        <div className="pr-bg pr-bg-white"></div>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.
                                                    Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.
                                                        </p>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="serv-price-wrap dark-gold"><span>Price</span>$1250-$3350</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-number right_sn">
                                    <div className="pr-bg pr-bg-white"></div>
                                    <span>0</span>3.
                                        </div>
                            </div>
                        </section>
                        <div className="section-separator"></div>
                        <div className="clearfix"></div>
                        <div className="container">
                            <div className="order-wrap dark-gold fl-wrap">
                                <div className="pr-bg pr-bg-white"></div>
                                <h4 style={{color:'#eee'}}>Ready to order Your Project ? </h4>
                                <a href="contacts.html" className="">Get In Touch <FontAwesomeIcon icon={faEnvelope}/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="limit-box fl-wrap"></div>
            </div>
            <Footer />
        </div>
    );
}