import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBNav, MDBRow, MDBNavbarBrand, MDBCol, MDBNavItem, MDBNavLink } from "mdbreact";
import "./Navbar.css";


class NavigationBar extends Component {
    render() {
        return (
            <header>
                <div className="navigationBar-container" >
                    <div className="navigationBar-image-container">
                        <img href='/Home' src={require("../Image/alex.jpg")} height='30' />
                    </div>
                    <div>
                        <MDBNav >

                            <MDBRow >

                                <MDBNavLink size='10' to="/">Home</MDBNavLink>
                                <MDBNavLink to="Education">Education</MDBNavLink>
                                <MDBNavLink to="Skills">Skills</MDBNavLink>
                                <MDBNavLink to="Works">Works</MDBNavLink>
                                <MDBNavLink to="Contact">Contact</MDBNavLink>

                            </MDBRow>
                        </MDBNav>
                    </div >
                </div >
            </header >

        )
    }
}

export default NavigationBar;