import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faPlay } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
    return ( 
        <div className="content full-height hidden-item home-half-slider">
        <div className="hero-canvas-wrap">
            <div className="dots gallery__dots" data-dots=""></div>
        </div>
        <div className="option-panel bot-element">
            <a href="about.html" className=" start-btn color-bg"> Start explore <FontAwesomeIcon icon={faArrowRight}/></a>
            <div className="swiper-counter">
                <div id="current">01</div>
                <div id="total"></div>
            </div>
            <div className="slide-progress-container">
                <div className="slide-progress-warp">
                    <div className="slide-progress color-bg"></div>
                </div>
            </div>
        </div>
        <div className="hero-slider-wrap fl-wrap full-height">
            <div className="hero-slider fs-gallery-wrap fl-wrap full-height">
                <div className="swiper-container">
                    <div className="swiper-wrapper" >
                        <div className="swiper-slide">
                            <div className="half-hero-wrap">
                                <div className="pr-bg"></div>
                                <div className="rotate_text">25 may 2018</div>
                                <h1>Design of <br/> classNamey and Stylish <br/>  <span>House </span>Interior.</h1>
                                <h4>Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. </h4>
                                <div className="clearfix"></div>
                                <a href="https://vimeo.com/34741214" className="image-popup half-hero-wrap_link ">View Project <FontAwesomeIcon icon={faArrowRight}/></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="half-hero-wrap">
                                <div className="rotate_text">25 may 2018</div>
                                <h1>Trinity River <br/> Audubon <br/><span>Center</span> Interior</h1>
                                <h4>Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. </h4>
                                <div className="clearfix"></div>
                                <a href="portfolio-single.html" className="half-hero-wrap_link ">View Project <FontAwesomeIcon icon={faArrowRight}/></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="half-hero-wrap">
                                <div className="rotate_text">25 may 2018</div>
                                <h1>Design  and  <br/>renovation <br/>   of <span>  Flat</span> in Oslo</h1>
                                <h4>Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. </h4>
                                <div className="clearfix"></div>
                                <a href="portfolio-single.html" className="half-hero-wrap_link ">View Project <FontAwesomeIcon icon={faArrowRight}/></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="half-hero-wrap">
                                <div className="rotate_text">25 may 2018</div>
                                <h1>Private    and <br/> Stylish <br/>  <span>residence</span> in Rome.</h1>
                                <h4>Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. </h4>
                                <div className="clearfix"></div>
                                <a href="portfolio-single.html" className="half-hero-wrap_link ">View Project <FontAwesomeIcon icon={faArrowRight}/></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="half-hero-wrap">
                                <div className="rotate_text">25 may 2018</div>
                                <h1>The Luxury <br/>Norway<br/><span>House</span> in Forest</h1>
                                <h4>Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. </h4>
                                <div className="clearfix"></div>
                                <a href="portfolio-single.html" className="half-hero-wrap_link ">View Project <FontAwesomeIcon icon={faArrowRight}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-slider_control-wrap bot-element">
                <div className="hero-slider_control hero-slider-button-next"><span>Next <FontAwesomeIcon icon={faArrowRight}/></span> </div>
                <div className="hero-slider_control hero-slider-button-prev"><span><FontAwesomeIcon icon={faArrowLeft}/> Prev </span></div>
            </div>
            <div className="hero-slider-wrap_pagination hlaf-slider-pag"></div>
        </div>
        <div className="hero-slider-img hero-slider-wrap_halftwo">
            <div className="sec-lines"></div>
            <div className="swiper-container">
                <div className="swiper-wrapper" >
                    <div className="swiper-slide">
                    <div className="video-box fl-wrap">
                        <img src={require("../images/all/7.jpg")} className="respimg" style={{height: 800}} alt=""/>                     
                        <a className="video-box-btn image-popup" href="https://vimeo.com/34741214"><FontAwesomeIcon icon={faPlay}/></a>
                    </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="bg"  data-bg={require("../images/bg/8.jpg")}></div>
                    </div>
                    <div className="swiper-slide">    
                    <div className="bg"  data-bg={require("../images/bg/1.jpg")} ></div>
                    </div>
                    <div className="swiper-slide">
                    <div className="bg"  data-bg={require("../images/bg/2.jpg")}></div>
                    </div>
                    <div className="swiper-slide">
                    <div className="bg"  data-bg={require("../images/bg/4.jpg")}></div>
                    </div>
                    <div className="swiper-slide">
                    <div className="bg"  data-bg={require("../images/bg/16.jpg")}></div>
                    </div>                                                                              
                </div>
            </div>
        </div> 
    </div>  
    );
}