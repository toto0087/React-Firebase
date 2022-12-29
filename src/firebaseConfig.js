// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdChKuHeIQtob_Z9qy3uQYpIzm_48_rik",
  authDomain: "react-testing-4d6a1.firebaseapp.com",
  projectId: "react-testing-4d6a1",
  storageBucket: "react-testing-4d6a1.appspot.com",
  messagingSenderId: "1073334473336",
  appId: "1:1073334473336:web:d5cb770f7ada631480538d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)