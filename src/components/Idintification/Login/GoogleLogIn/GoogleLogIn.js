import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const GoogleLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user, error)
    return (
      <button
        onClick={()=> signInWithGoogle()}
        className="bg-orange-600 mt-3 p-2 px-3 rounded text-white"
      >
        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Login with Google
      </button>
    );
};

export default GoogleLogIn;