// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBMKrxcISjPpap5_yRKc6eB3CJ7PiLhNAg",
  authDomain: "dhanlaxmien.firebaseapp.com",
  projectId: "dhanlaxmien",
  storageBucket: "dhanlaxmien.appspot.com",
  messagingSenderId: "597554140103",
  appId: "1:597554140103:web:9e627e919804ad439dbfe2",
  measurementId: "G-ZTXLGFH4EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const auth = firebase.auth();
const db = getFirestore(app);

export { db, auth }