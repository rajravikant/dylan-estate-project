import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "dylan-estate-project.firebaseapp.com",
  projectId: "dylan-estate-project",
  storageBucket: "dylan-estate-project.appspot.com",
  messagingSenderId: "260377681005",
  appId: "1:260377681005:web:deb57b3f56c409d8457364"
};

export const app = initializeApp(firebaseConfig);