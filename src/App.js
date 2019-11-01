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

import styled from 'styled-components';

// const Button2 = styled(Button)`
//     background-color: red !important;
//     &:hover {
//         color: blue;
//     }
// `;

const Div = styled.div`
    scroll-behavior: smooth;
`;
class App extends Component {
    render() {
        return (
            <Div className='App'>
                <Menu></Menu>
                <Jumbotron style={{ height: '85vh' }} fluid>
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
                <About id='about' className='about'></About>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <Contact id='contact' className='contact'></Contact>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <h1>---------------------</h1>
                <Footer id='footer' className='footer'></Footer>
            </Div>
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
