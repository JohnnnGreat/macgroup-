// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgpt9VEB2aABXL_JEOKer1h9cMAQBL3dI",
  authDomain: "macgroup-website-e1c69.firebaseapp.com",
  projectId: "macgroup-website-e1c69",
  storageBucket: "macgroup-website-e1c69.appspot.com",
  messagingSenderId: "304924232888",
  appId: "1:304924232888:web:48524e9c69c68cb660384d",
  measurementId: "G-73X8WG5QVL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
