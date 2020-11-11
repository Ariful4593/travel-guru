import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(UserContext)
    const navA = {
        textDecoration: 'none',
        fontWeight: 'bold'
    }
    return (
        <Navbar expand="lg" >
            <Link to="/">
                <Navbar.Brand >
                    <img src={logo} style={{ width: '100px' }} alt="" />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
            <Navbar.Collapse id="basic-navbar-nav" className="mr-auto navLink justify-content-end">
                <Link style={navA} to="news">News</Link>
                <Link style={navA} to="destination">Destination</Link>
                <Link style={navA} to="blog">Blog</Link>
                <Link style={navA} to="contact">Contact</Link>

                {
                    loggedInUser.name ? <DropdownButton id="dropdown-basic-button" title={loggedInUser.name}>
                        <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Inbox</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Notifications</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Setting</Dropdown.Item>
                    </DropdownButton> : <Link style={navA} to="login">Login</Link>
                }

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;