// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmtM8oZtYsc4BKB78R8JoPOFGQDY5woSA",
  authDomain: "allotabibi-68397.firebaseapp.com",
  projectId: "allotabibi-68397",
  storageBucket: "allotabibi-68397.appspot.com",
  messagingSenderId: "32874194782",
  appId: "1:32874194782:web:2da7ba5da2d46a5e2091cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// Initialize Cloud Firestore and get a reference to the service
export const db = getDatabase(app);