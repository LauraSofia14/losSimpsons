import React from 'react';
import './styles.css';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import logo from '../../src/assets/logo.png'; 



function CustomNavbar() {
  return (
    <div>
    
    
    <Navbar bg="light" expand="lg">
        <a href="https://sites.google.com/globant.com/tp-dojo/home?authuser=0" className="navbar-brand">
        <Image src={logo} alt="Logo" width="50" height="50" />
        KATAS - UI
      </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="https://sites.google.com/globant.com/tp-dojo/home?authuser=0">Home</Nav.Link>
          <Nav.Link href="https://sites.google.com/globant.com/tp-dojo/about-katas?authuser=0">About Katas</Nav.Link>
          <Nav.Link href="https://sites.google.com/globant.com/tp-dojo/welcome-to-dojo?authuser=0">Welcome Dojo</Nav.Link>
          <NavDropdown title="Challenges" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://sites.google.com/globant.com/tp-dojo/challenges/challenges-web-ui?authuser=0">Challenges Web ui</NavDropdown.Item>
          </NavDropdown> 
          <NavDropdown href="https://sites.google.com/globant.com/tp-dojo/wiki?authuser=0" title="Wiki" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://sites.google.com/globant.com/tp-dojo/wiki/css?authuser=0">Css</NavDropdown.Item>
            <NavDropdown.Item href="https://sites.google.com/globant.com/tp-dojo/wiki/javascript?authuser=0">Java Script</NavDropdown.Item>
            <NavDropdown.Item href="https://sites.google.com/globant.com/tp-dojo/wiki/react?authuser=0">React</NavDropdown.Item>
            <NavDropdown.Item href="https://sites.google.com/globant.com/tp-dojo/wiki/react-native?authuser=0">React Native</NavDropdown.Item>
            <NavDropdown.Item href="https://sites.google.com/globant.com/tp-dojo/wiki/testing?authuser=0">Testing</NavDropdown.Item>
            <NavDropdown.Item href="https://sites.google.com/globant.com/tp-dojo/wiki/design-patterns?authuser=0">Designed Patterns</NavDropdown.Item>
            <NavDropdown.Item href="https://sites.google.com/globant.com/tp-dojo/wiki/architecture?authuser=0">Architecture</NavDropdown.Item>
            <NavDropdown.Item href="https://sites.google.com/globant.com/tp-dojo/wiki/animations?authuser=0">Animations</NavDropdown.Item>
            <NavDropdown.Item href="https://sites.google.com/globant.com/tp-dojo/wiki/fonts?authuser=0">Fonts</NavDropdown.Item>
            <NavDropdown.Item href="https://sites.google.com/globant.com/tp-dojo/wiki/tools?authuser=0">Tools</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="https://sites.google.com/globant.com/tp-dojo/blog?authuser=0">Blog</Nav.Link>
          <Nav.Link href="https://sites.google.com/globant.com/tp-dojo/faq?authuser=0">FAQ</Nav.Link>
          <Nav.Link href="#search">
            <FaSearch /> 
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default CustomNavbar;
