// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbqXFVhKcuH-Wjw_lHWqdJBqwrjb8d7a0",
    authDomain: "react-chat-b36ce.firebaseapp.com",
    projectId: "react-chat-b36ce",
    storageBucket: "react-chat-b36ce.appspot.com",
    messagingSenderId: "950755419868",
    appId: "1:950755419868:web:5c7fd3c71f3615e2a7b619",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
