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
import styled from 'styled-components';
import resume from './static/Resume_Placeholder.pdf';

function Menu(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className='navbar fixed-top' color='light' light expand='md'>
            <NavbarBrand href='/'>Benjamin Kats</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink href='#about'>
                            <Button size='md'>About</Button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#contact'>Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#footer'>Footer anchor</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href='#footer'>
                            <Button size='md'>Footer</Button>
                        </NavLink>
                    </NavItem>

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
}

export default Menu;
