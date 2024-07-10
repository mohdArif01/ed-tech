// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSVINLSw6qdqNJ3J6qV5CnrMzSamq2Qcs",
  authDomain: "ed-tech-8dd06.firebaseapp.com",
  projectId: "ed-tech-8dd06",
  storageBucket: "ed-tech-8dd06.appspot.com",
  messagingSenderId: "575734210701",
  appId: "1:575734210701:web:19ab0eab2c42b1ac7d02c4",
  measurementId: "G-XPBP7YYWP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore(app)
export default app;