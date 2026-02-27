// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArWvFjdt2eGpTRUGnnVRqZiYA-kX7EdZI",
  authDomain: "moviedb-d7688.firebaseapp.com",
  projectId: "moviedb-d7688",
  storageBucket: "moviedb-d7688.firebasestorage.app",
  messagingSenderId: "365747471910",
  appId: "1:365747471910:web:72f7e54da6ee54348148e7",
  measurementId: "G-SPZXMR0GX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Analytics (remove if you don't use it)
const analytics = getAnalytics(app);

// Auth & Google Provider – these are what your AuthContext needs
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Optional: Export app or analytics if needed elsewhere
// export { app };
// export { analytics };