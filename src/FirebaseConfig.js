import { initializeApp } from "firebase/app";

const FirebaseConfig = {
  apiKey: "AIzaSyDoSRAOcDvPQIiNVDC21KL-p7DbXBVcybc",
  authDomain: "authentication-8dd5a.firebaseapp.com",
  projectId: "authentication-8dd5a",
  storageBucket: "authentication-8dd5a.appspot.com",
  messagingSenderId: "300961465989",
  appId: "1:300961465989:web:7ed765c89494dbef9f4bec",
  measurementId: "G-D0PT7FW1PQ",
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);

export default app;
