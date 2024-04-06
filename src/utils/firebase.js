// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA53Cmo2VVsTT5RWddYBXcOOetIK78XusI",
  authDomain: "netflix-gpt-8c68a.firebaseapp.com",
  projectId: "netflix-gpt-8c68a",
  storageBucket: "netflix-gpt-8c68a.appspot.com",
  messagingSenderId: "803941044561",
  appId: "1:803941044561:web:e40d691f77d3ed1f8b4370",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
