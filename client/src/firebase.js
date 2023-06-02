// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyldIk1UYULXOmby2-2pcUaAvGWkCV1ho",
    authDomain: "gfgdce-c6878.firebaseapp.com",
    projectId: "gfgdce-c6878",
    storageBucket: "gfgdce-c6878.appspot.com",
    messagingSenderId: "985332518217",
    appId: "1:985332518217:web:8855363b0a2a241f325e98",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);