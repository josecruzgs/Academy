
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDELaDFhSW6rjuhDzgmKihtgsderRFTDzk",
  authDomain: "vrakka-academy.firebaseapp.com",
  projectId: "vrakka-academy",
  storageBucket: "vrakka-academy.appspot.com",
  messagingSenderId: "585639242428",
  appId: "1:585639242428:web:927624ffb3d8dd2d30feb9",
  measurementId: "G-F20C9ZW75D"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const initFirebase = () => {
  return app;
};

