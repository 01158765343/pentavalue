
import  * as firebase from "firebase/auth";
import { getAuth } from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqWIBCo2jH8ojj_70wdYKGzfFvsfHAKMA",
  authDomain: "prent-891d8.firebaseapp.com",
  projectId: "prent-891d8",
  storageBucket: "prent-891d8.appspot.com",
  messagingSenderId: "494435612898",
  appId: "1:494435612898:web:14cc200f2ad01de8c246bb",
  measurementId: "G-3LBSSW0DEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default firebase