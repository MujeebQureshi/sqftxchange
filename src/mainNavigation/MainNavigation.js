import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

export const MainNavigation = ({navValue}) => {

    const [value, setValue] = useState('');

    return (
        <div>
            <div className="nav-holder but-hol">
                <div className="nav-scroll-bar-wrap fl-wrap">
                    <nav className="nav-inner" id="menu">
                        <ul>
                            <li>
                                <a onClick={() => {navValue(value)}} onMouseOver={() => {setValue('home')}} className="act-link">Home</a>
                            </li>
                            <li>
                                <a onClick={() => {navValue(value)}} onMouseOver={() => {setValue('investment')}}>Investments</a>
                            </li>
                            <li>
                                <a onClick={() => {navValue(value)}} onMouseOver={() => {setValue('services')}} className="">Services</a>
                            </li>
                            <li>
                                <a onClick={() => {navValue(value)}} onMouseOver={() => {setValue('contact')}} className="">Contacts</a>
                            </li>
                            <li>
                                <a onClick={() => {navValue(value)}} onMouseOver={() => {setValue('blog')}} className="">Blog</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="nav-social">
                    <span className="nav-social_title">Follow us : </span>
                    <ul >
                        <li><a href="#" target="_blank"><FontAwesomeIcon icon={fab.faFacebook}/></a></li>
                        <li><a href="#" target="_blank"><FontAwesomeIcon icon={fab.faTwitter}/></a></li>
                        <li><a href="#" target="_blank"><FontAwesomeIcon icon={fab.faInstagram}/></a></li>
                    </ul>
                </div>
            </div>
            <div className="nav-overlay">
                <div className="element"></div>
            </div>
        </div>
    );
}