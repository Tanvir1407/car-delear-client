import React from 'react';
import { useState } from "react";
import auth from '../../../firebase.init'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
  const handleSignOut = () => {
     signOut(auth)
   }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            height={60}
            width={150}
            src={
              "http://themes.potenzaglobalsolutions.com/html/cardealer/images/logo-dark.png"
            }
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" className="font-semibold">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to='blogs' className="font-semibold">BLOGS</Nav.Link>
            <Nav.Link className="font-semibold">ABOUT</Nav.Link>
          </Nav>
          <Nav>
            {user && (
              <>
                <Nav.Link
                  as={Link}
                  to="/manageinventory"
                  className="font-semibold"
                >
                  {" "}
                  MANAGE ITEM
                </Nav.Link>
                <Nav.Link as={Link} to="/additem" className="font-semibold">
                  {" "}
                  ADD ITEM
                </Nav.Link>
                <Nav.Link as={Link} to="/myitem" className="font-semibold">
                  {" "}
                  MY ITEM
                </Nav.Link>
              </>
            )}
            {user ? (
              <button
                onClick={handleSignOut}
                className="font-semibold w-40 mx-2 px-3  text-white bg-red-600 rounded"
              >
                SIGN OUT
              </button>
            ) : (
              <Nav.Link
                as={Link}
                to="login"
                className="font-semibold w-30 text-center mx-2 px-3 text-white bg-green-600 rounded"
              >
                LOGIN
              </Nav.Link>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};

export default Header;