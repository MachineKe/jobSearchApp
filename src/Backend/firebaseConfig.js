// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyArzRoas_CIw3zPdC3jT9vJr5ud7TwuhPs",
  authDomain: "beyondjobs-c5be1.firebaseapp.com",
  projectId: "beyondjobs-c5be1",
  storageBucket: "beyondjobs-c5be1.appspot.com",
  messagingSenderId: "65625377036",
  appId: "1:65625377036:web:e0149baba8bb5a69306129",
  measurementId: "G-E72R0TSY8D",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
