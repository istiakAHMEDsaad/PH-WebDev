// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFCDI2HCz5NYgLzGzR3HpzAdWnpPVXwXo",
  authDomain: "custom-routes-react.firebaseapp.com",
  projectId: "custom-routes-react",
  storageBucket: "custom-routes-react.firebasestorage.app",
  messagingSenderId: "935290536545",
  appId: "1:935290536545:web:163ae2b56688653a5fe020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;