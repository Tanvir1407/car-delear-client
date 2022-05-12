import React from 'react';
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);

    const handleSignIn = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

      createUserWithEmailAndPassword(email,password)
      event.target.reset()
      navigate('/login')
    }

    return (
      <div>
        <div className="bg-blue-300  p-16 mx-auto rounded login-form">
          <form onSubmit={handleSignIn}>
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
              value="SIGN UP"
              className="m-2 p-1 hover:bg-blue-400 duration-300 ease-linear text-yellow-50 font-semibold border-2 submit-btn"
            />
          </form>
        </div>
      </div>
    );
};
    
export default SignIn;