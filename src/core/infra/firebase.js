// Import the functions you need from the SDKs you need
import { firebaseConfig } from "./firebase-config.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  query,
  where
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase ---------------------------
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

//Firestore ----------------------------------------
export const db = getFirestore(app);
export {
  collection,
  addDoc,
  getDocs,
  setDoc,
  query,
  where
}
