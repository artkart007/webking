import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div >
                <Navbar color="light" light expand="md">
                    <div className="container">
                        <LinkContainer activeClassName='active' to={'/'}>
                            <NavbarBrand >
                                Pappu
                        </NavbarBrand>
                        </LinkContainer>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <LinkContainer activeClassName='active' to={'/about'}>
                                    <NavItem><NavLink>About</NavLink></NavItem>
                                </LinkContainer>
                                <LinkContainer activeClassName='active' to={'/services'}>
                                    <NavItem><NavLink >Services</NavLink></NavItem>
                                </LinkContainer>
                                <LinkContainer activeClassName='active' to={'/clients'}>
                                    <NavItem><NavLink >Clients</NavLink></NavItem>
                                </LinkContainer>
                                <LinkContainer activeClassName='active' to={'/career'}>
                                    <NavItem><NavLink >Career</NavLink></NavItem>
                                </LinkContainer>
                                <LinkContainer activeClassName='active' to={'/training'}>
                                    <NavItem><NavLink >Training</NavLink></NavItem>
                                </LinkContainer>
                                <LinkContainer activeClassName='active' to={'/contact'}>
                                    <NavItem><NavLink >Contact</NavLink></NavItem>
                                </LinkContainer>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}
