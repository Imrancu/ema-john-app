// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm-yEG4CoCv3UgnQjRlZL_k1FNUEzFBIw",
  authDomain: "ema-jhon-app-71e8d.firebaseapp.com",
  projectId: "ema-jhon-app-71e8d",
  storageBucket: "ema-jhon-app-71e8d.appspot.com",
  messagingSenderId: "487435352683",
  appId: "1:487435352683:web:0be10aac1ce20cb74c4f2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;