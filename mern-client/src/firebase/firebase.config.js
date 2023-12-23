// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8-VpOhZ-8qaPs5-kZOnZnnl9_iM3xd8Q",
  authDomain: "mern-book-inventory-a236b.firebaseapp.com",
  projectId: "mern-book-inventory-a236b",
  storageBucket: "mern-book-inventory-a236b.appspot.com",
  messagingSenderId: "919425158424",
  appId: "1:919425158424:web:39ed028447d31d9092e26d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;