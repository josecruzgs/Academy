// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDELaDFhSW6rjuhDzgmKihtgsderRFTDzk",
  authDomain: "vrakka-academy.firebaseapp.com",
  projectId: "vrakka-academy",
  storageBucket: "vrakka-academy.appspot.com",
  messagingSenderId: "585639242428",
  appId: "1:585639242428:web:927624ffb3d8dd2d30feb9",
  measurementId: "G-F20C9ZW75D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
