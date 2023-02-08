// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC39PsYWF-lDBwmlPCdx4_2ciK26LwzEHI",
  authDomain: "crossword-6d762.firebaseapp.com",
  projectId: "crossword-6d762",
  storageBucket: "crossword-6d762.appspot.com",
  messagingSenderId: "28337567687",
  appId: "1:28337567687:web:e788430b81327968284be2",
  measurementId: "G-SEJSVKQH8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);