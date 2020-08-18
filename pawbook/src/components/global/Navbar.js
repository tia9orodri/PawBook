import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import AuthContext from "../../configs/authContext";
import roles from "../../configs/roles";

export default class NavbarComponent extends React.Component {
  static contextType = AuthContext;

  render() {
    const { user, logout } = this.context;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Nav.Link as={NavLink} to="/">
          <img src="icon.png" className="nav-logo" alt="Logo" style={{ width: 65 }} />
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/animal/list">
              Animais
              </Nav.Link>
            {user && user.role === roles.Boss && <Nav.Link as={NavLink} to="/user/list">
              Utilizadores
                        </Nav.Link>
            }
            <Nav.Link as={NavLink} to="/about">
              About
          </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <NavDropdown title={user.username} alignRight>
                <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
                
                  <ul class="nav justify-content-center">
                  <Nav.Link  as={NavLink} to="/login">
                    Login
                            </Nav.Link>
                  <Nav.Link as={NavLink} to="/register">
                    Register
                        </Nav.Link>
                </ul>
              )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}