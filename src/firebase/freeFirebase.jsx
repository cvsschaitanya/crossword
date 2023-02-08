// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAusS22Zo316pkBVzZn2ZFZdDbrwhyqMAk",
  authDomain: "crossword-b9a2b.firebaseapp.com",
  projectId: "crossword-b9a2b",
  storageBucket: "crossword-b9a2b.appspot.com",
  messagingSenderId: "96889921536",
  appId: "1:96889921536:web:e1023c21e86123d52cf8e5",
  measurementId: "G-6NJ8XT0CG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);