// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAupqhlQhFZZeR6Il-xkE9Wvl0k3p719T4",
  authDomain: "netflix-gpt-d1637.firebaseapp.com",
  databaseURL: "https://netflix-gpt-d1637-default-rtdb.firebaseio.com",
  projectId: "netflix-gpt-d1637",
  storageBucket: "netflix-gpt-d1637.appspot.com",
  messagingSenderId: "163098918112",
  appId: "1:163098918112:web:78214c5828dae762552485",
  measurementId: "G-YBNYXT2SHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();