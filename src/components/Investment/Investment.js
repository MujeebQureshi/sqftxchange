import React from 'react';
import { Footer } from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export const Investment = () => {
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
                        <div className="bg" data-bg={require("../../images/bg/8.jpg")}></div>

                        <div className="progress-bar-wrap bot-element">
                            <div className="progress-bar"></div>
                        </div>

                        <div className="fixed-column-wrap_title first-tile_load">
                            <h2>Investments</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
                        </div>

                        <div className="fixed-column-dec"></div>
                    </div>

                </div>


                <div className="column-wrap">

                    <div className="fixed-filter-panel top_fix-filter top-element in-filter_mobpanel">
                        <div className="pr-bg"></div>
                        <div className="fixed-filter-panel_title color-bg">
                            Works Filter <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <div className="gallery-filters">
                            <a href="#" className="gallery-filter gallery-filter-active" data-filter="*">All Works</a>
                            <a href="#" className="gallery-filter " data-filter=".houses">Land</a>
                            <a href="#" className="gallery-filter" data-filter=".apartments">Development</a>
                            <a href="#" className="gallery-filter" data-filter=".interior">Rental</a>

                        </div>
                        <div className="folio-counter">
                            <div className="num-album"></div>
                            <div className="all-album"></div>
                        </div>
                    </div>

                    <div >
                        <div style={{ fontSize: 30, color: '#1B628E', textAlign: 'left', paddingLeft: 15 }}><h3>Land</h3></div>
                        <div className="gallery-items min-pad   two-column fl-wrap">

                            <div className="gallery-item houses  ">
                                <div className="grid-item-holder">
                                    <img src={require("../../images/folio/4.jpg")} alt="" />
                                    <div className="grid-det">
                                        <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                                        <div className="grid-det-item">
                                            <a href="portfolio-single.html" className=" grid-det_link">New Acropolis Museum <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-bg"></div>
                            </div>
                            <div className="gallery-item houses">
                                <div className="grid-item-holder">
                                    <img src={require("../../images/folio/5.jpg")} alt="" />
                                    <div className="grid-det">
                                        <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                                        <div className="grid-det-item">
                                            <a href="portfolio-single.html" className=" grid-det_link">West 57th Street <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-bg"></div>
                            </div>
                            <div className="gallery-item houses  ">
                                <div className="grid-item-holder">
                                    <img src={require("../../images/folio/6.jpg")} alt="" />
                                    <div className="grid-det">
                                        <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                                        <div className="grid-det-item">
                                            <a href="portfolio-single.html" className=" grid-det_link">Petronas Tower <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-bg"></div>
                            </div>
                            <div className="gallery-item houses">
                                <div className="grid-item-holder">
                                    <img src={require("../../images/folio/7.jpg")} alt="" />
                                    <div className="grid-det">
                                        <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                                        <div className="grid-det-item">
                                            <a href="portfolio-single.html" className=" grid-det_link">One World Trade Center <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-bg"></div>
                            </div>
                        </div>
                        <div style={{ fontSize: 30, color: '#1B628E', textAlign: 'left', paddingLeft: 15 }}><h3>Development</h3></div>
                        <div className="gallery-items min-pad   two-column fl-wrap">

                            <div className="gallery-item apartments">
                                <div className="grid-item-holder">
                                    <img src={require("../../images/folio/3.jpg")} alt="" />
                                    <div className="grid-det">
                                        <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                                        <div className="grid-det-item">
                                            <a href="portfolio-single.html" className=" grid-det_link">Spire Edge <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-bg"></div>
                            </div>
                            <div className="gallery-item apartments">
                                <div className="grid-item-holder">
                                    <img src={require("../../images/folio/9.jpg")} alt="" />
                                    <div className="grid-det">
                                        <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                                        <div className="grid-det-item">
                                            <a href="portfolio-single.html" className=" grid-det_link">White Walls <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-bg"></div>
                            </div>
                            <div className="gallery-item apartments ">

                                <div className="grid-item-holder">
                                    <img src={require("../../images/folio/10.jpg")} alt="" />
                                    <div className="grid-det">
                                        <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                                        <div className="grid-det-item">
                                            <a href="portfolio-single.html" className=" grid-det_link">Big House <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-bg"></div>
                            </div>
                            <div className="gallery-item apartments">
                                <div className="grid-item-holder">
                                    <img src={require("../../images/folio/13.jpg")} alt="" />
                                    <div className="grid-det">
                                        <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                                        <div className="grid-det-item">
                                            <a href="portfolio-single.html" className=" grid-det_link">Pen Tower <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-bg"></div>
                            </div>
                        </div>

                        <div style={{ fontSize: 30, color: '#1B628E', textAlign: 'left', paddingLeft: 15 }}><h3>Rental</h3></div>
                        <div className="gallery-items min-pad   two-column fl-wrap">
                            <div className="gallery-item interior">
                                <div className="grid-item-holder">
                                    <img src={require("../../images/folio/15.jpg")} alt="" />
                                    <div className="grid-det">
                                        <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                                        <div className="grid-det-item">
                                            <a href="portfolio-single.html" className=" grid-det_link">Wood River Ships Center <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-bg"></div>
                            </div>

                            <div className="gallery-item interior">
                                <div className="grid-item-holder">
                                    <img src={require("../../images/folio/1.jpg")} alt="" />
                                    <div className="grid-det">
                                        <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                                        <div className="grid-det-item">
                                            <a href="portfolio-single.html" className=" grid-det_link">Norway House <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-bg"></div>
                            </div>
                            <div className="gallery-item interior">
                                <div className="grid-item-holder">
                                    <img src={require("../../images/folio/2.jpg")} alt="" />
                                    <div className="grid-det">
                                        <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                                        <div className="grid-det-item">
                                            <a href="portfolio-single.html" className=" grid-det_link">Theatre de Stoep <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-bg"></div>
                            </div>
                            <div className="gallery-item  interior">
                                <div className="grid-item-holder">
                                    <img src={require("../../images/folio/8.jpg")} alt="" />
                                    <div className="grid-det">
                                        <div className="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                                        <div className="grid-det-item">
                                            <a href="portfolio-single.html" className=" grid-det_link">Trinity River Audubon Centre <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="limit-box fl-wrap"></div>
            </div>
            <Footer/>
        </div>
    );
}