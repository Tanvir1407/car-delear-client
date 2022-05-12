import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/';

  const handleGoogleLogin = () => {
      signInWithGoogle()
      .then(() => {
      navigate(from, {replace:true})
    })
  }
    return (
      <button
        onClick={handleGoogleLogin}
        className="bg-orange-600 mt-3 p-2 px-3 rounded text-white"
      >
        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Login with Google
      </button>
    );
};

export default GoogleLogIn;