// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCantNbTY84kEb9vSieTIoEHqxDR7Q1o4E",
  authDomain: "e-commerce-eb27f.firebaseapp.com",
  projectId: "e-commerce-eb27f",
  storageBucket: "e-commerce-eb27f.appspot.com",
  messagingSenderId: "938839219896",
  appId: "1:938839219896:web:f76ad25062be91b41d1e4d",
  measurementId: "G-MYEKGSWPXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};