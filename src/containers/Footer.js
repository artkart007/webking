import React from 'react';
import './Footer.css'
import { Config } from '../Config';
import { NavLink as RRNavLink, Link } from 'react-router-dom';

import {
    // Collapse,
    // Navbar,
    // NavbarToggler,
    // NavbarBrand,
    // Nav,
    NavItem,
    NavLink
} from 'reactstrap';
export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container ">
                    <div className="row">
                        <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                            <p class="mb-10">Please reach out to us to discuss more on the your organisation requirements.</p>
                            <p><i className="fa fa-location-arrow"></i> {Config.brandAddress.street}, {Config.brandAddress.city}, {Config.brandAddress.state}, {Config.brandAddress.country}, {Config.brandAddress.pincode}</p>
                            <p><i className="fa fa-phone"></i>  {Config.brandAddress.phone}  </p>
                            <p><i className="fa  fa-envelope"></i> {Config.brandAddress.emailId}  </p>
                            <p><i className="fa  fa-info"></i> Operation Hour {Config.brandAddress.availableHour}  </p>
                        </div>


                        <div className=" col-sm-4 col-md  col-6 col ">
                            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                            <ul className="footer_ul_amrc">
                                <NavItem className="navItem">
                                    <NavLink tag={RRNavLink} className="nav-link" to="/about" activeClassName="active">About</NavLink>
                                </NavItem>
                                <NavItem className="navItem">
                                    <NavLink tag={RRNavLink} className="nav-link" to="/services" activeClassName="active">Services</NavLink>
                                </NavItem>
                                {/* <NavItem className="navItem">
                                    <NavLink tag={RRNavLink} className="nav-link" to="/clients" activeClassName="active">Clients</NavLink>
                                </NavItem> */}
                                <NavItem className="navItem">
                                    <NavLink tag={RRNavLink} className="nav-link" to="/career" activeClassName="active">Career</NavLink>
                                </NavItem>
                                {/* <NavItem className="navItem">
                                    <NavLink tag={RRNavLink} className="nav-link" to="/training" activeClassName="active">Training</NavLink>
                                </NavItem> */}
                                <NavItem className="navItem">
                                    <NavLink tag={RRNavLink} className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
                                </NavItem>
                            </ul>
                        </div>
                        {/* <div className="col-sm-4 col-md  col-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Few More Quick links</h5>
                            <ul className="footer_ul_amrc">
                                        </ul>
                        </div> */}

                    </div>
                </div>
                <hr className="border-bottom"></hr>

                <div className="container">

                    <p className="text-center">Copyright @{Config.currentYear} | 
                    Designed With by <Link to="/">
                      {Config.brandName}
                    </Link></p>

                    <ul className="social_footer_ul">
                        <li><a target="_blank" href={Config.socialLinks.fb}><i className="fab fa-facebook-f"></i></a></li>
                        <li><a target="_blank" href={Config.socialLinks.tw}><i className="fab fa-twitter"></i></a></li>
                        <li><a target="_blank" href={Config.socialLinks.linkedIn}><i className="fab fa-linkedin"></i></a></li>
                        <li><a target="_blank" href={Config.socialLinks.insta}><i className="fab fa-instagram"></i></a></li>
                        <li><a target="_blank" href={Config.socialLinks.yb}><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}