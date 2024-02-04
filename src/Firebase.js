// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp7ulDyn_EV3QTQ0Qa0bkmDQL49xRGE3Q",
  authDomain: "expense-list-by-year.firebaseapp.com",
  projectId: "expense-list-by-year",
  storageBucket: "expense-list-by-year.appspot.com",
  messagingSenderId: "1070908107581",
  appId: "1:1070908107581:web:a91c3fbf1b80e60ea4f354",
  measurementId: "G-FQ69VD3CLL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
