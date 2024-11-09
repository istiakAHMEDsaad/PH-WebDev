import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgvQdP16LaYgVvC0A7vW04-IqoYkDEhFw",
  authDomain: "first-firebase-14bba.firebaseapp.com",
  projectId: "first-firebase-14bba",
  storageBucket: "first-firebase-14bba.firebasestorage.app",
  messagingSenderId: "1013948336004",
  appId: "1:1013948336004:web:504041bc55147ac20c7fd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Dont save configuration file in client side
const auth = getAuth(app);

export default auth;