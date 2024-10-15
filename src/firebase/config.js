// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkhPt6AyPEZaijbrmCHnxdwDqUTV539PE",
  authDomain: "vue-project-3dd6a.firebaseapp.com",
  projectId: "vue-project-3dd6a",
  storageBucket: "vue-project-3dd6a.appspot.com",
  messagingSenderId: "817693135361",
  appId: "1:817693135361:web:23033b83360d771914e600",
  measurementId: "G-ZVEDSK4QMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);