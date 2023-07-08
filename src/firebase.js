import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCdt5I0KEiRNR7R3NxtDQEz3iz3h1d1Mng",
  authDomain: "chatapp-6fb88.firebaseapp.com",
  projectId: "chatapp-6fb88",
  storageBucket: "chatapp-6fb88.appspot.com",
  messagingSenderId: "843879262156",
  appId: "1:843879262156:web:a42788d6a8e02557c01f69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
