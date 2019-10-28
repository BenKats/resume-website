import React, { Component } from 'react';
// import { HashRouter, Route } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import { Element, Link } from 'react-scroll';
import { Jumbotron, Button } from 'reactstrap';
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
                <Jumbotron fluid>
                    <h1 className='display-1 text-center'>Benjamin Kats</h1>
                    <p className='lead text-center'>Software Engineer</p>
                    <hr className='my-2' />
                    <p>Could have some text here, not sure what it would be though</p>
                    <p className='d-flex justify-content-center'>
                        <Link
                            activeClass='active'
                            to='about'
                            spy={true}
                            smooth={true}
                            duration={300}
                            offset={-55}>
                            <Button color='info'>Scroll Down</Button>
                        </Link>
                    </p>
                </Jumbotron>
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
