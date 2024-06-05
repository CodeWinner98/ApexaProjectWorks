// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUGwFWDRx5Yt2wfN_NOvdmaDyrqwku2Xs",
  authDomain: "login-auth-6146c.firebaseapp.com",
  projectId: "login-auth-6146c",
  storageBucket: "login-auth-6146c.appspot.com",
  messagingSenderId: "156043166491",
  appId: "1:156043166491:web:e20ea3ede7bed4c65989be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;