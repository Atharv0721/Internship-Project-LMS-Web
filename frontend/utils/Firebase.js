import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "project-1-90950.firebaseapp.com",
  projectId: "project-1-90950",
  storageBucket: "project-1-90950.firebasestorage.app",
  messagingSenderId: "110033516216",
  appId: "1:110033516216:web:574fc86089466be2b1264d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}