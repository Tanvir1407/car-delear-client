import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import GoogleLogIn from "./GoogleLogIn/GoogleLogIn";
import Loading from "../../../components/Idintification/RequireAuth/Loading/Loading";
import axios from "axios";
const Login = () => {
  const [signInWithEmailAndPassword, loggedInUser, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (!loading && loggedInUser) {
      navigate(from, { replace: true });
    }
  }, [loggedInUser, loading, navigate, from]);

  if (loading) {
    return <Loading></Loading>;
  }
  const handleLogIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://pure-stream-67963.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);

    e.target.reset();
  };

  return (
    <div className="mt-20">
      <div className="bg-blue-300  p-16 mx-auto rounded login-form">
        <form onSubmit={handleLogIn}>
          <div className={error ? "d-block" : "d-none"}>
            <p className={`ml-4 py-2 px-2  bg-red-600 rounded text-white `}>
              Your Email or password is wrong{" "}
            </p>
          </div>
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
          <button className="btn  text-end btn btn-link text-decoration-none">
            Forget Password?
          </button>
          <input
            type="submit"
            value="LOGIN"
            className="m-2 p-1 hover:bg-blue-400 duration-300 ease-linear text-yellow-50 font-semibold border-2 submit-btn"
          />
        </form>

        <div className="mt-10">
          <button className=" ml-4 underline text-blue-600">
            <Link to="/signin">Create an Account</Link>
          </button>
          <div className="or">
            <span className="bg-blue-300">OR</span>
          </div>
          <GoogleLogIn></GoogleLogIn>
        </div>
      </div>
    </div>
  );
};

export default Login;
