import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Config } from '../Config';

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
                                {Config.brandName}
                        </NavbarBrand>
                        </LinkContainer>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem className="navItem">
                                    <NavLink tag={RRNavLink} className="nav-link" to="/about" activeClassName="active">About</NavLink>
                                </NavItem>
                                <NavItem className="navItem">
                                    <NavLink tag={RRNavLink} className="nav-link" to="/services" activeClassName="active">Services</NavLink>
                                </NavItem>
                                <NavItem className="navItem">
                                    <NavLink tag={RRNavLink} className="nav-link" to="/clients" activeClassName="active">Clients</NavLink>
                                </NavItem>
                                <NavItem className="navItem">
                                    <NavLink tag={RRNavLink} className="nav-link" to="/career" activeClassName="active">Career</NavLink>
                                </NavItem>
                                <NavItem className="navItem">
                                    <NavLink tag={RRNavLink} className="nav-link" to="/training" activeClassName="active">Training</NavLink>
                                </NavItem>
                                <NavItem className="navItem">
                                    <NavLink tag={RRNavLink} className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}
