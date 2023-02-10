// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABxBsVitG6XX09tv1v3PfH-gCd6PGgP6w",
    authDomain: "boxtout-d20da.firebaseapp.com",
    databaseURL: "https://boxtout-d20da-default-rtdb.firebaseio.com",
    projectId: "boxtout-d20da",
    storageBucket: "boxtout-d20da.appspot.com",
    messagingSenderId: "555371498202",
    appId: "1:555371498202:web:e426dbf57aa3cdc78633e3",
    measurementId: "G-JH21YEMXGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);