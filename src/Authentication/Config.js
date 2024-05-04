// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9kmo-SVqt_ktlaR7rams1hqVyvdIgksg",
  authDomain: "todo-app-3b167.firebaseapp.com",
  projectId: "todo-app-3b167",
  storageBucket: "todo-app-3b167.appspot.com",
  messagingSenderId: "479432002560",
  appId: "1:479432002560:web:958f426f6e83964ed1dce5",
  measurementId: "G-G8VG4FG3NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}
