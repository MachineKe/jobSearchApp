// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArzRoas_CIw3zPdC3jT9vJr5ud7TwuhPs",
  authDomain: "beyondjobs-c5be1.firebaseapp.com",
  projectId: "beyondjobs-c5be1",
  storageBucket: "beyondjobs-c5be1.appspot.com",
  messagingSenderId: "65625377036",
  appId: "1:65625377036:web:e0149baba8bb5a69306129",
  measurementId: "G-E72R0TSY8D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);