// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "dylan-estate-project.firebaseapp.com",
  projectId: "dylan-estate-project",
  storageBucket: "dylan-estate-project.appspot.com",
  messagingSenderId: "260377681005",
  appId: "1:260377681005:web:deb57b3f56c409d8457364"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);