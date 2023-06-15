// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKHmB7U47ZUDYmqkZwI533xWf4wGM1BQA",
  authDomain: "movied-7cbb9.firebaseapp.com",
  projectId: "movied-7cbb9",
  storageBucket: "movied-7cbb9.appspot.com",
  messagingSenderId: "803972831808",
  appId: "1:803972831808:web:636f47affdfb97d46b1da5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");


export default app;