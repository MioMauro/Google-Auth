// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi69hVexOnvfEQiSYH6-vGViFPZeZWmR0",
  authDomain: "auth-react-1c395.firebaseapp.com",
  projectId: "auth-react-1c395",
  storageBucket: "auth-react-1c395.appspot.com",
  messagingSenderId: "1068348110333",
  appId: "1:1068348110333:web:b08a1735d867f944c9d594",
  measurementId: "G-K5V4Y4CNXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
const analytics = getAnalytics(app);
export default app