import React, { useState } from 'react';
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

// import { HashRouter, NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import resume from './static/Resume_Placeholder.pdf';
const Menu = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className='navbar sticky-top' color='light' light expand='md'>
            <NavbarBrand href='/'>Benjamin Kats</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <Link
                            activeClass='active'
                            to='contact'
                            spy={true}
                            smooth={true}
                            duration={300}
                            offset={-55}>
                            <Button>Contact</Button>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link
                            activeClass='active'
                            to='about'
                            spy={true}
                            smooth={true}
                            duration={300}
                            offset={-55}>
                            <Button>About</Button>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link
                            activeClass='active'
                            to='footer'
                            spy={true}
                            smooth={true}
                            duration={300}
                            offset={-55}>
                            <Button>Footer</Button>
                        </Link>
                    </NavItem>
                    <NavItem></NavItem>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Resume
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem target='_blank' href={resume}>
                                Plain Text
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Design</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Menu;
