import React, { Component } from 'react';
import { Header } from './components/Header';
import { MainNavigation } from './mainNavigation/MainNavigation';
import { Home } from './components/Home';
import { Investment } from './components/Investment/Investment';
import { InvestmentDetail } from './components/Investment/InvestmentDetail';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Blog } from './components/Blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navValue: '',
        }
    } 

    render() {

        // function handleNav (value) {
        //     if (value === 'home') {
        //         mainContent = <Home/>;
        //         force
        //     }else if (value === 'investment') {
        //         mainContent = <Investment/>;
        //     }else if (value === 'investmentDetail'){
        //         mainContent = <InvestmentDetail/>;
        //     }else if (value === 'services') {
        //         mainContent = <Services/>;
        //     }else if (value === 'contact') {
        //         mainContent = <Contact/>;
        //     }else if (value === 'blog') {
        //         mainContent = <Blog/>;
        //     }
        // }

        return (
            <div>
                <div className="loader2">
                    <div className="loader loader_each"><span></span></div>
                </div>
                <div id="main">
                    <Header />
                    <div id="wrapper">
                        <div className="content-holder" data-pagetitle="Home Half Slider">

                            
                            <MainNavigation navValue={(value) => { this.setState({navValue: value}) }} />
                            {console.log(this.state.navValue)}
                            {this.state.navValue === 'home' ? (<Home/>) : (null)}
                            <Home/>
                            {/* <Investment/> */}
                            {/* <InvestmentDetail/> */}
                            {/* <Services/> */}
                            {/* Contact */}
                            {/* <Blog/> */}

                            <div className="share-wrapper">
                                <div className="close-share-btn"><FontAwesomeIcon icon={faLongArrowAltLeft} /> Close</div>
                                <div className="share-container fl-wrap  isShare"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
