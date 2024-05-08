// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2hKLEZszer1rBjZ5SxHswjoUgHYeJ8gg",
  authDomain: "todo-72a53.firebaseapp.com",
  projectId: "todo-72a53",
  storageBucket: "todo-72a53.appspot.com",
  messagingSenderId: "486427535847",
  appId: "1:486427535847:web:a7577732294ac3482e7542",
  measurementId: "G-08LBQ312CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}