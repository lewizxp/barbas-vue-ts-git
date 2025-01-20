// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_APP_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT,
};

const modoENV = process.env.NODE_ENV;
const modoAPP = process.env.VUE_APP_MODE_APP;
console.info("MODO:", modoENV, `(${modoAPP})`);
console.info("Config Firebase ", firebaseConfig);

// Initialize Firebase ---------------------------
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
