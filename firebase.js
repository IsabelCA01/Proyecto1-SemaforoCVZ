// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD92tYDZ3d28Qwh9Ie8zmU9CuX5I7zvULo",
  authDomain: "semaforocvz.firebaseapp.com",
  projectId: "semaforocvz",
  storageBucket: "semaforocvz.appspot.com",
  messagingSenderId: "528121363247",
  appId: "1:528121363247:web:64302b1ff6bac94403ffda",
  measurementId: "G-8PWP5LWD62"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)