import React from 'react';

const SignIn = () => {



    return (
      <div>
        <div className="bg-blue-300  p-16 mx-auto rounded login-form">
          <form>
            <input
              type="name"
              name="name"
              placeholder=" Name"
              id=""
              autoComplete="on"
              className="p-2 px-3 m-2 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder=" Email"
              id=""
              autoComplete="on"
              className="p-2 px-3 m-2 focus:outline-none"
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id=""
              className="p-2 px-3 m-2 focus:outline-none"
            />
            <br />

            <input
              type="submit"
              value="SIGNIN"
              className="m-2 p-1 hover:bg-blue-400 duration-300 ease-linear text-yellow-50 font-semibold border-2 submit-btn"
            />
          </form>
        </div>
      </div>
    );
};
    
export default SignIn;