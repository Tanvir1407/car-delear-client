import React from 'react';
import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
     const [user, setUser]  = useState(false)
  return (
    <Navbar className="px-4 d-flex flex-column  flex-lg-row justify-content-between">
      <Navbar.Brand>
        <img
          height={50}
          width={150}
          src={
            "http://themes.potenzaglobalsolutions.com/html/cardealer/images/logo-dark.png"
          }
          alt=""
        />
      </Navbar.Brand>
      <Nav className="d-flex flex-column flex-lg-row ">
        <Nav.Link className="font-semibold">HOME</Nav.Link>
        <Nav.Link className="font-semibold">BLOGS</Nav.Link>
        <Nav.Link className="font-semibold">INVENTORY</Nav.Link>
        {user && (
          <>
            <Nav.Link> CHECK</Nav.Link>
          </>
        )}
      </Nav>
      <Nav>
        {user ? (
          <button className="font-semibold">SIGN OUT</button>
        ) : (
          <button className="font-semibold">LOGIN</button>
        )}
      </Nav>
    </Navbar>
  );

};

export default Header;