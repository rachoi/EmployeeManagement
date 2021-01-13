import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import './Navbar.css'

class NavigationBar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="bg-div">
                <Navbar>
                    <Navbar.Brand href="/" className="navbar-logo" style={{color: "white"}}>
                        Employee Management
                        <i className="fab fa-react"></i>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Item>
                            <Link className="btn" to="/">
                                Home          
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="btn" to="/employees">
                                Database          
                            </Link>
                        </Nav.Item>
                        <Nav.Item style={{marginRight: "10px"}}>
                            <Link className="btn" to="/login">
                                Sign in             
                            </Link>
                        </Nav.Item>
                    </Navbar.Collapse>
                </Navbar>
                

            </div>
        )
    }

}

export default NavigationBar;

