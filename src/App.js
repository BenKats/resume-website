import React, { Component } from 'react';
// import { HashRouter, Route } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import { Element } from 'react-scroll';

import './App.css';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Menu from './Menu';
class App extends Component {
    render() {
        return (
            <div className='App'>
                <Menu></Menu>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <Element name='about' className='element'>
                    <About></About>
                </Element>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <Element name='contact' className='element'>
                    <Contact></Contact>
                </Element>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <Element name='footer' className='element'>
                    <Footer></Footer>
                </Element>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>
                <h1>-------------------------</h1>

                <Footer name='footer'></Footer>
            </div>
        );
    }
}

export default App;
// Initial Base Layout without project section
// <NavBar></NavBar>
// <WelcomeBanner></WelcomeBanner>
// <AboutMe></AboutMe>
// <ContactMe></ContactMe>
// <Footer></Footer>
