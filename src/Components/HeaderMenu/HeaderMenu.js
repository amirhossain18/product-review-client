import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../UserContext/UserContext";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  let activeStyle = {
    textDecoration: "underline 10px solid green",
    color: "green",
    marginBottom: "2px solid green",
  };
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Amir Service</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="about"
              >
                About
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="review"
              >
                Review
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="products"
              >
                Products
              </NavLink>
            </Nav>

            {user?.uid ? (
              <>
                <Nav className="nav-last">
                  <h4>{user.displayName} </h4> :<img className="img-d" src={user.photoURL} alt="" />
                </Nav>
                
                <button className="btn btn-danger" onClick={handleLogOut}>
                  Sign Out
                </button>
              </>
            ) : (
              <div className="btn btn-success text-white">
                <NavLink
                  className={({ isactives, isPending }) => {
                    return isactives ? "actives" : "text-white";
                  }}
                  to="login"
                >
                  Login
                </NavLink>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderMenu;
