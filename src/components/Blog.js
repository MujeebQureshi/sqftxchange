import React from 'react';
import { Footer } from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight, faUser, faComments, faEye } from '@fortawesome/free-solid-svg-icons';

export const Blog = () => {
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
                                <div className="bg" data-bg={require("../images/bg/11.jpg")}></div>
                                <div className="progress-bar-wrap bot-element">
                                    <div className="progress-bar"></div>
                                </div>
                                <div className="fixed-column-wrap_title first-tile_load">
                                    <h2>Our last<br/> News</h2>
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
                                <section  className="small-padding article">
                                    <div className="container">
                                        <div className="split-sceen-content_title fl-wrap">
                                            <div className="pr-bg pr-bg-white"></div>
                                            <h3> <a href="blog-single.html" className="">Blog Post Title</a></h3>
                                            <div className="parallax-header"> <a href="#">27 may 2018</a><span>Category : </span><a href="#">Branding</a> <a href="#">Video</a> </div>
                                        </div>
                                        <div className="column-wrap-content fl-wrap">
                                            <div className="column-wrap-media fl-wrap">
                                                <div className="pr-bg pr-bg-white"></div>
                                                <div className="single-slider-wrap">
                                                    <div className="single-slider fl-wrap">
                                                        <div className="swiper-container">
                                                            <div className="swiper-wrapper lightgallery">
                                                                <div className="swiper-slide hov_zoom"><img src={require("../images/all/5.jpg")} alt=""/></div>
                                                                <div className="swiper-slide hov_zoom"><img src={require("../images/all/1.jpg")} alt=""/></div>
                                                                <div className="swiper-slide hov_zoom"><img src={require("../images/all/3.jpg")} alt=""/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ss-slider-controls">
                                                        <div className="pr-bg pr-bg-white"></div>
                                                        <div className="ss-slider-pagination"></div>
                                                        <div className="ss-slider-cont ss-slider-cont-prev color-bg"><FontAwesomeIcon icon={faLongArrowAltLeft}/></div>
                                                        <div className="ss-slider-cont ss-slider-cont-next color-bg"><FontAwesomeIcon icon={faLongArrowAltRight}/></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column-wrap-text">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <div className="post-opt fl-wrap">
                                                            <ul>
                                                                <li><a href="#"><FontAwesomeIcon icon={faUser}/> Andy Cooper</a></li>
                                                                <li><a href="#"><FontAwesomeIcon icon={faComments}/> 12 comments</a></li>
                                                                <li><span><FontAwesomeIcon icon={faEye}/> 123 view</span></li>
                                                            </ul>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                                                        <a href="blog-single.html" className="pr-view ">Read more <FontAwesomeIcon icon={faLongArrowAltRight}/></a>
                                                        <div className="pr-bg pr-bg-white"></div>
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
                                <section  className="small-padding article">
                                    <div className="container">
                                        <div className="split-sceen-content_title fl-wrap">
                                            <div className="pr-bg pr-bg-white"></div>
                                            <h3> <a href="blog-single.html" className="">Blog Post Title</a></h3>
                                            <div className="parallax-header"> <a href="#">27 may 2018</a><span>Category : </span><a href="#">Branding</a> <a href="#">Video</a> </div>
                                        </div>
                                        <div className="column-wrap-content fl-wrap">
                                            <div className="column-wrap-media fl-wrap">
                                                <div className="pr-bg pr-bg-white"></div>
                                                <img src={require("../images/all/1.jpg")}  className="respimg" alt=""/>
                                            </div>
                                            <div className="column-wrap-text">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <div className="pr-bg pr-bg-white"></div>
                                                        <div className="post-opt fl-wrap">
                                                            <ul>
                                                                <li><a href="#"><FontAwesomeIcon icon={faUser}/> Andy Cooper</a></li>
                                                                <li><a href="#"><FontAwesomeIcon icon={faComments}/> 12 comments</a></li>
                                                                <li><span><FontAwesomeIcon icon={faEye}/> 123 view</span></li>
                                                            </ul>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                                                        <a href="blog-single.html" className="pr-view ">Read more <FontAwesomeIcon icon={faLongArrowAltRight}/></a>
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
                                <section  className="small-padding article">
                                    <div className="container">
                                        <div className="split-sceen-content_title fl-wrap">
                                            <div className="pr-bg pr-bg-white"></div>
                                            <h3> <a href="blog-single.html" className="">Blog Post Title</a></h3>
                                            <div className="parallax-header"> <a href="#">27 may 2018</a><span>Category : </span><a href="#">Branding</a> <a href="#">Video</a> </div>
                                        </div>
                                        <div className="column-wrap-content fl-wrap">
                                            <div className="column-wrap-media fl-wrap">
                                                <div className="pr-bg pr-bg-white"></div>
                                                <img src={require("../images/all/6.jpg")}  className="respimg" alt=""/>
                                            </div>
                                            <div className="column-wrap-text">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <div className="pr-bg pr-bg-white"></div>
                                                        <div className="post-opt fl-wrap">
                                                            <ul>
                                                                <li><a href="#"><FontAwesomeIcon icon={faUser}/> Andy Cooper</a></li>
                                                                <li><a href="#"><FontAwesomeIcon icon={faComments}/> 12 comments</a></li>
                                                                <li><span><FontAwesomeIcon icon={faEye}/> 123 view</span></li>
                                                            </ul>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                                                        <a href="blog-single.html" className="pr-view ">Read more <FontAwesomeIcon icon={faLongArrowAltRight}/></a>
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
                                <section  className="small-padding article">
                                    <div className="container">
                                        <div className="split-sceen-content_title fl-wrap">
                                            <div className="pr-bg pr-bg-white"></div>
                                            <h3> <a href="blog-single.html" className="">Blog Post Title</a></h3>
                                            <div className="parallax-header"> <a href="#">27 may 2018</a><span>Category : </span><a href="#">Branding</a> <a href="#">Video</a> </div>
                                        </div>
                                        <div className="column-wrap-content fl-wrap">
                                            <div className="column-wrap-media fl-wrap">
                                                <div className="pr-bg pr-bg-white"></div>
                                                <img src={require("../images/all/7.jpg")}  className="respimg" alt=""/>
                                            </div>
                                            <div className="column-wrap-text">
                                                <div className="row">
                                                    <div className="col-md-10">
                                                        <div className="pr-bg pr-bg-white"></div>
                                                        <div className="post-opt fl-wrap">
                                                            <ul>
                                                                <li><a href="#"><FontAwesomeIcon icon={faUser}/> Andy Cooper</a></li>
                                                                <li><a href="#"><FontAwesomeIcon icon={faComments}/> 12 comments</a></li>
                                                                <li><span><FontAwesomeIcon icon={faEye}/> 123 view</span></li>
                                                            </ul>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                                                        <a href="blog-single.html" className="pr-view ">Read more <FontAwesomeIcon icon={faLongArrowAltRight}/></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-number right_sn">
                                            <div className="pr-bg pr-bg-white"></div>
                                            <span>0</span>4.
                                        </div>
                                    </div>
                                </section>
                                <div className="pagination">
                                    <div className="pr-bg pr-bg-white"></div>
                                    <div className="container">
                                        <a href="#" className="prevposts-link"><FontAwesomeIcon icon={faLongArrowAltLeft}/></a>
                                        <a href="#">01.</a>
                                        <a href="#" className="current-page">02.</a>
                                        <a href="#">03.</a>
                                        <a href="#">04.</a>
                                        <a href="#" className="nextposts-link"><FontAwesomeIcon icon={faLongArrowAltRight}/></a>
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