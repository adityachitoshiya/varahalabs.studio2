// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAI1ob5F8Ae0-0gV9yI5nUUG0egD2gXCug",
    authDomain: "data-26b24.firebaseapp.com",
    projectId: "data-26b24",
    storageBucket: "data-26b24.firebasestorage.app",
    messagingSenderId: "1074560528316",
    appId: "1:1074560528316:web:66f57789289f4ec226c5b9",
    measurementId: "G-DBKSXEVBKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
