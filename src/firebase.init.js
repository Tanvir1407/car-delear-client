// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSgK0xTBCNzZNkXueL10aB7Xbk8GGOVjc",
  authDomain: "assignment-11-71417.firebaseapp.com",
  projectId: "assignment-11-71417",
  storageBucket: "assignment-11-71417.appspot.com",
  messagingSenderId: "446750745274",
  appId: " 1:446750745274:web:dade954cd738b1fc361883",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;