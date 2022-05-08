import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
     const [open,setOpen] = useState(false)
     const [user, setUser]  = useState(false)
  return (
    <Navbar className="px-4 d-flex flex-column  flex-md-row justify-content-between">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        {open ? (
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        )}
      </div>
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
      <Nav className={`d-flex flex-column flex-md-row  duration-500 ease-in ${open ?'top-6' :'top[-120px]'}`}>
        <Nav.Link className="font-semibold">HOME</Nav.Link>
        <Nav.Link className="font-semibold">BLOGS</Nav.Link>
        <Nav.Link className="font-semibold">INVENTORY</Nav.Link>
        {user && (
          <>
            <Nav.Link> CHECK</Nav.Link>
          </>
        )}

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