// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrVCdEQRmA_pFU_Cgxv4gOeJf2udACJJY",
  authDomain: "agon-news.firebaseapp.com",
  projectId: "agon-news",
  storageBucket: "agon-news.firebasestorage.app",
  messagingSenderId: "1092506027853",
  appId: "1:1092506027853:web:99ef627228a0a1c3c85904",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);