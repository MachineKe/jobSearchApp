// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgSDaO-tApF0OzJ2UcmOhgM4GJIY3eNHk",
  authDomain: "beyondjobs1-7e54e.firebaseapp.com",
  projectId: "beyondjobs1-7e54e",
  storageBucket: "beyondjobs1-7e54e.appspot.com",
  messagingSenderId: "840822369792",
  appId: "1:840822369792:web:d45c0ed62a21e727f332e5",
  measurementId: "G-GFY70T0KZC",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();