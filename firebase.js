// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvP2euapIqMC0MKc4GPASSlZdT2WGm28s",
  authDomain: "hispanosclubapp.firebaseapp.com",
  projectId: "hispanosclubapp",
  storageBucket: "hispanosclubapp.firebasestorage.app",
  messagingSenderId: "902718393767",
  appId: "1:902718393767:web:792f0d394507aab9b53a82",
  measurementId: "G-63VMKLDQ3P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };