import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from "react";
import auth from '../../../firebase.init'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
     const [open,setOpen] = useState(false)
     
  const handleSignOut = () => {
     signOut(auth)
   }
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
        <Nav.Link as={Link} to='/'>
          <img
            height={50}
            width={150}
            src={
              "http://themes.potenzaglobalsolutions.com/html/cardealer/images/logo-dark.png"
            }
            alt=""
          />
        </Nav.Link>
      </Navbar.Brand>
      <Nav
        className={`d-flex flex-column flex-md-row  duration-500 ease-in ${
          open ? "top-6" : "top[-120px]"
        }`}
      >
        <Nav.Link as={Link} to="home" className="font-semibold">
          HOME
        </Nav.Link>
        <Nav.Link className="font-semibold">BLOGS</Nav.Link>
        <Nav.Link  className="font-semibold">ABOUT</Nav.Link>
        {user && (
          <>
            <Nav.Link className="font-semibold"> MANAGE ITEM</Nav.Link>
            <Nav.Link className="font-semibold"> ADD ITEM</Nav.Link>
            <Nav.Link className="font-semibold"> MY ITEM</Nav.Link>
          </>
        )}

        {user ? (
          <button
            onClick={handleSignOut}
            className="font-semibold mx-2 px-3 text-white bg-red-600 rounded"
          >
            SIGN OUT
          </button>
        ) : (
          <Nav.Link
            as={Link}
            to="login"
            className="font-semibold mx-2 px-3 text-white bg-green-600 rounded"
          >
            LOGIN
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );

};

export default Header;