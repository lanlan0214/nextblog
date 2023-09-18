// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-api-deploy.firebaseapp.com",
  projectId: "blog-api-deploy",
  storageBucket: "blog-api-deploy.appspot.com",
  messagingSenderId: "1061324966490",
  appId: "1:1061324966490:web:cac051db74840b8db86663"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);