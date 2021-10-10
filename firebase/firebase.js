import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDla5-9dRDZd1i77zMQ1Ou4Um6-82obsyw",
  authDomain: "log-today.firebaseapp.com",
  projectId: "log-today",
  storageBucket: "log-today.appspot.com",
  messagingSenderId: "92286068070",
  appId: "1:92286068070:web:8d6a4a4bd82d55c40154a7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

