// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyCwZBJduSZhvzKAl-b63uo3pi1YIkk3Bc0",
    authDomain: "barbas-c86ed.firebaseapp.com",
    projectId: "barbas-c86ed",
    storageBucket: "barbas-c86ed.firebasestorage.app",
    messagingSenderId: "800838594148",
    appId: "1:800838594148:web:341626557847e3173c7971",
    measurementId: "G-7BN122WWNX",
};

// Initialize Firebase ---------------------------
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
