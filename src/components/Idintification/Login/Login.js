import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const handleLogIn = (e) => {
        e.preventDefault();
    }
    return (
      <div>
        <div className="bg-blue-300  p-16 mx-auto rounded login-form">
          <form onSubmit={handleLogIn}>
            <input
              type="email"
              name="email"
              placeholder=" Email"
              id=""
              autoComplete="on"
              className="p-2 px-3 m-2 focus:outline-none"
            />{" "}
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id=""
              className="p-2 px-3 m-2 focus:outline-none"
            />
            <br />
            <button className="forget-btn text-end btn btn-link text-red-400  pe-auto text-decoration-none">
              Forget Password?
            </button>
            <input
              type="submit"
              value="LOGIN"
              className="m-2 p-1 hover:bg-blue-400 duration-300 ease-linear text-yellow-50 font-semibold border-2 submit-btn"
            />
          </form>

          <div className="mt-10">
            <button className="underline text-blue-600">
              <Link to='/signin'>Create an Account</Link>
            </button>
            <div className="or">
              <span className="bg-blue-300">OR</span>
            </div>
            <button className='bg-orange-600 mt-3 p-2 px-3 rounded text-white'><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Login with Google</button>
          </div>
        </div>
      </div>
    );
};

export default Login;