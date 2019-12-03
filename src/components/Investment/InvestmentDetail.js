import React from 'react';
import { Footer } from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faLongArrowAltLeft, faLongArrowAltUp, faPlay } from '@fortawesome/free-solid-svg-icons';

export const InvestmentDetail = () => {
    return (
        <div>
            <div className="content">
                        <div className="flat-project_title fl-wrap dark-blue">
                            <div className="hero-canvas-wrap fs-canvas first-tile_load">
                                <div className="dots gallery__dots" data-dots=""></div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="pr-bg"></div>
                                        <h2>The Luxary <br/> Norway House <br/> in Forest</h2>
                                    </div>
                                    <div className="col-md-4 first-tile_load">
                                        <span className="flat-project_title_dec color-bg"></span>
                                        <div className="clearfix"></div>
                                        <p>Ut nec hinc dolor possim. An eros argumentum vel, elit diceret duo eu, quo et aliquid ornatus delicatissimi. Cu nam tale ferri utroque, eu habemus albucius mel, cu vidit possit ornatus eum. Eu ius postulant salutatus definitionem, explicari. Graeci viderer qui ut, at habeo facer solet usu. </p>
                                        <a href="#sec2" className="flat-project_title_link custom-scroll-link">Details <FontAwesomeIcon icon={faLongArrowAltRight}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="portfolio-single-slider">
                            <div className="fw-carousel-wrap show-case-slider-wrap dark-bg fl-wrap">
                                <div className="fw-carousel  fs-gallery-wrap fl-wrap full-height lightgallery" data-mousecontrol="0">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide hov_zoom">
                                                <img  src={require("../../images/folio/8.jpg")}   alt=""/>
                                                <div className="show-info">
                                                    <span>Info</span>
                                                    <div className="tooltip-info">
                                                        <h5> Cu nam tale ferri utroque</h5>
                                                        <p>Sed non nisi viverra, porttitor sem nec, vestibulum justo tortor ornare turpis faucibus</p>
                                                    </div>
                                                </div>
                                                <div className="pr-bg"></div>
                                            </div>
                                            <div className="swiper-slide  hov_zoom">
                                                <img  src={require("../../images/folio/21.jpg")}   alt=""/>
                                                <div className="show-info">
                                                    <span>Info</span>
                                                    <div className="tooltip-info">
                                                        <h5> Cu nam tale ferri utroque</h5>
                                                        <p>Sed non nisi viverra, porttitor sem nec, vestibulum justo tortor ornare turpis faucibus</p>
                                                    </div>
                                                </div>
                                                <div className="pr-bg"></div>
                                            </div>
                                            <div className="swiper-slide  hov_zoom">
                                                <img  src={require("../../images/folio/3.jpg")}   alt=""/>
                                                <div className="show-info">
                                                    <span>Info</span>
                                                    <div className="tooltip-info">
                                                        <h5> Cu nam tale ferri utroque</h5>
                                                        <p>Sed non nisi viverra, porttitor sem nec, vestibulum justo tortor ornare turpis faucibus</p>
                                                    </div>
                                                </div>
                                                <div className="pr-bg"></div>
                                            </div>
                                            <div className="swiper-slide  hov_zoom">
                                                <img  src={require("../../images/folio/10.jpg")}   alt=""/>
                                                <div className="show-info">
                                                    <span>Info</span>
                                                    <div className="tooltip-info">
                                                        <h5> Cu nam tale ferri utroque</h5>
                                                        <p>Sed non nisi viverra, porttitor sem nec, vestibulum justo tortor ornare turpis faucibus</p>
                                                    </div>
                                                </div>
                                                <div className="pr-bg"></div>
                                            </div>
                                            <div className="swiper-slide  hov_zoom">
                                                <img  src={require("../../images/folio/5.jpg")}   alt=""/>
                                                <div className="show-info">
                                                    <span>Info</span>
                                                    <div className="tooltip-info">
                                                        <h5> Cu nam tale ferri utroque</h5>
                                                        <p>Sed non nisi viverra, porttitor sem nec, vestibulum justo tortor ornare turpis faucibus</p>
                                                    </div>
                                                </div>
                                                <div className="pr-bg"></div>
                                            </div>
                                            <div className="swiper-slide  hov_zoom">
                                                <img  src={require("../../images/folio/13.jpg")}   alt=""/>
                                                <div className="show-info">
                                                    <span>Info</span>
                                                    <div className="tooltip-info">
                                                        <h5> Cu nam tale ferri utroque</h5>
                                                        <p>Sed non nisi viverra, porttitor sem nec, vestibulum justo tortor ornare turpis faucibus</p>
                                                    </div>
                                                </div>
                                                <div className="pr-bg"></div>
                                            </div>
                                            <div className="swiper-slide  hov_zoom">
                                                <img  src={require("../../images/folio/1.jpg")}   alt=""/>
                                                <div className="show-info">
                                                    <span>Info</span>
                                                    <div className="tooltip-info">
                                                        <h5> Cu nam tale ferri utroque</h5>
                                                        <p>Sed non nisi viverra, porttitor sem nec, vestibulum justo tortor ornare turpis faucibus</p>
                                                    </div>
                                                </div>
                                                <div className="pr-bg"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fw-carousel-control dark-bg fl-wrap">
                                <div className="fw-carousel-control_container">
                                    <div className="fw-carousel-counter"></div>
                                    <div className="fw_cb fw-carousel-button-next"><FontAwesomeIcon icon={faLongArrowAltRight}/></div>
                                    <div className="fw_cb fw-carousel-button-prev"><FontAwesomeIcon icon={faLongArrowAltLeft}/></div>
                                </div>
                                <div className="half-scrollbar">
                                    <div className="hs_init"></div>
                                </div>
                            </div>
                        </section>
                        <section className="no-padding-bottom" id="sec2">
                            <div className="container">
                                <div className="fl-wrap det-wrap">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="fixed-column fl-wrap">
                                                <div className="pr-bg pr-bg-white"></div>
                                                <div className="pr-title">
                                                    Project Details
                                                    <span>Internet tend to repeat predefined chunks If you are going to use a passage of Lorem Ipsum.</span>
                                                </div>
                                                <ul className="pr-list dark-gold">
                                                    <li><span>Minimum Investment :</span> $ 100,000 </li>
                                                    <li><span>Preferred Return :</span>  6% </li>
                                                    <li><span>Distributions :</span> Monthly </li>
                                                    <li><span>Targeted Investor IRR : </span>  15% </li>
                                                    <li><span>Fund Size : </span>  $100M </li>
                                                </ul>
                                                <div className="fixed-column-top"><FontAwesomeIcon icon={faLongArrowAltUp}/></div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 first-tile_load">

                                            <div id="tabs-container">
                                                <div className="tabs-counter">
                                                    <span>0</span>
                                                    <div className="tc_item">1</div>
                                                </div>
                                                <ul className="tabs-menu fl-wrap">
                                                    <li className="selectedLava"><a href="#tab-1" data-tabnum="1"><span>01.</span>Details</a></li>
                                                    <li><a href="#tab-2" data-tabnum="2"><span>02.</span>Video Presentation</a></li>
                                                    <li><a href="#tab-3" data-tabnum="3"><span>03.</span>Plans</a></li>
                                                </ul>
                                                <div id="tab-1" className="tab-content">
                                                    <h3 className="pr-subtitle"> Project Info</h3>
                                                    <p>Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. Integer iaculis tellus nulla, quis imperdiet magna venenatis vitae.
                                                        Ut nec hinc dolor possim. An eros argumentum vel, elit diceret duo eu, quo et aliquid ornatus delicatissimi. Cu nam tale ferri utroque, eu habemus albucius mel, cu vidit possit ornatus eum. Eu ius postulant salutatus definitionem, explicari. Graeci viderer qui ut, at habeo facer solet usu. Pri choro pertinax indoctum ne, ad partiendo persecuti forensibus est.
                                                    </p>
                                                    <h3 className="pr-subtitle mar-top"> The Brief</h3>
                                                    <div className="accordion mar-top">
                                                        <a className="toggle act-accordion" href="#"> Details option   <span></span></a>
                                                        <div className="accordion-inner visible">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                                                        </div>
                                                        <a className="toggle" href="#"> Details option 2  <span></span></a>
                                                        <div className="accordion-inner">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                                                        </div>
                                                        <a className="toggle" href="#"> Details option 3  <span></span></a>
                                                        <div className="accordion-inner">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                                                        </div>
                                                    </div>
                                                    <p className="mar-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.</p>
                                                </div>
                                                <div id="tab-2" className="tab-content">
                                                    <h3 className="pr-subtitle"> Project Presentation.</h3>
                                                    <p>  An eros argumentum vel, elit diceret duo eu, quo et aliquid ornatus delicatissimi. Cu nam tale ferri utroque, eu habemus albucius mel, cu vidit possit ornatus eum. Eu ius postulant salutatus definitionem, explicari. Graeci viderer qui ut, at habeo facer solet usu. Pri choro pertinax indoctum ne, ad partiendo persecuti forensibus est.</p>
                                                    <div className="video-box fl-wrap">
                                                        <img src={require("../../images/all/7.jpg")} className="respimg" alt=""/>
                                                        <a className="video-box-btn image-popup" href="https://vimeo.com/34741214"><FontAwesomeIcon icon={faPlay}/></a>
                                                    </div>
                                                </div>
                                                <div id="tab-3" className="tab-content">
                                                    <h3 className="pr-subtitle">Plan and sketches of the project.</h3>
                                                    <div className="palns-gal fl-wrap lightgallery">
                                                        <div className="plans-gal_item hov_zoom">
                                                            <img src={require("../../images/plans/1.jpg")} alt="" className="respimg"/>
                                                        </div>
                                                        <div className="plans-gal_item hov_zoom">
                                                            <img src={require("../../images/plans/2.jpg")} alt="" className="respimg"/>
                                                        </div>
                                                         <div className="plans-gal_item hov_zoom">
                                                            <img src={require("../../images/plans/3.jpg")} alt="" className="respimg"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                            <span className="dec-border fl-wrap"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="limit-box fl-wrap"></div>
                            <div className="content-nav_holder fl-wrap first-tile_load">
                    		</div>
                        </section>
                    </div>
                    <Footer/>
        </div>
    );
}