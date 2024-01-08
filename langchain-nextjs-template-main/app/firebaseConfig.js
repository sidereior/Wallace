// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCADm_r43_7rm4T47RFIRt1a9fzuR1F3I8",
  authDomain: "knwo-a3efe.firebaseapp.com",
  projectId: "knwo-a3efe",
  storageBucket: "knwo-a3efe.appspot.com",
  messagingSenderId: "751005725543",
  appId: "1:751005725543:web:eb6a03d19c70af770835c2",
  measurementId: "G-WFJ0S6GDT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);