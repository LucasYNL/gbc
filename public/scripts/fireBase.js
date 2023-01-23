// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxT3jcbnvWOFk7Gj8-LT2aQRLi-ETyR70",
    authDomain: "rbc-website-3f28a.firebaseapp.com",
    projectId: "rbc-website-3f28a",
    storageBucket: "rbc-website-3f28a.appspot.com",
    messagingSenderId: "359280377091",
    appId: "1:359280377091:web:1ae7c0dab90b3185ce7d36",
    measurementId: "G-QBPZ0VV2QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);