
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYGeKVrQk17__zJjwF8_D6pgh1swsBxy8",
  authDomain: "pentavalue-2e0b6.firebaseapp.com",
  projectId: "pentavalue-2e0b6",
  storageBucket: "pentavalue-2e0b6.appspot.com",
  messagingSenderId: "177411326618",
  appId: "1:177411326618:web:f84611c3e47c408ebc1523",
  measurementId: "G-V14ESD299S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
