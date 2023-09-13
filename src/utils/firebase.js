// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvhGQ_nUQqd4DSdjbvmE3_QLRzGaXWeWw",
  authDomain: "netflixgpt-23f86.firebaseapp.com",
  projectId: "netflixgpt-23f86",
  storageBucket: "netflixgpt-23f86.appspot.com",
  messagingSenderId: "339706310215",
  appId: "1:339706310215:web:a33532561df63fd096cb62",
  measurementId: "G-YMM82Q1Q3V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
