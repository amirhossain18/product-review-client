import React from 'react';
import { Container,  Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import style from './HeaderMenu.css';


const HeaderMenu = () => {
    let activeStyle = {
        textDecoration: "underline 10px solid green",
        color: "green",
        marginBottom:"2px solid green"
      };
    
   
    return (
        <div className="main">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Amir Service</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/">Home</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="about">About</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="review">Review</NavLink>
             
          </Nav>
          <Nav className="nav-last">
            <h4>User</h4>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/login">Log In</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default HeaderMenu;