import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

export const Header = () => {
    return (
        <div>
            <header className="main-header">
                <a href="index.html" className="header-logo"><img src={require("../images/Square Foot Exchange Logo Design Revised-page-001.jpg")} alt="" style={{ marginTop: 7 }} /></a>
                <div className="loginDiv">
                    <button className="customButton">Login</button>
                    <button className="customButton">Sign up</button>
                </div>
                <div className="nav-button-wrap">
                    <div className="nav-button">
                        <span className="nos"></span>
                        <span className="ncs"></span>
                        <span className="nbs"></span>
                        <div className="menu-button-text">Menu</div>
                    </div>
                </div>
                <div className="header-contacts">
                    <ul>
                        <li><span> Call </span> <a href="">+X(XXX)XXXXXXXX</a></li>
                        <li><span> Write </span> <a href="">info@your-domain.com</a></li>
                    </ul>
                </div>
            </header>
            <div className="left-panel">
                <div className="horizonral-subtitle"><span><strong></strong></span></div>
                <div className="left-panel_social">
                    <ul>
                        <li><a href="#" target="_blank"><FontAwesomeIcon icon={fab.faFacebook} /></a></li>
                        <li><a href="#" target="_blank"><FontAwesomeIcon icon={fab.faTwitter} /></a></li>
                        <li><a href="#" target="_blank"><FontAwesomeIcon icon={fab.faInstagram} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}