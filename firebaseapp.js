//import initializeApp from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
//import getFirestore from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';
//import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
//import { initializeApp } from 'firebase/compat/app';
//import 'firebase/compat/firestore'

//import { initializeApp } from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
//import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js'
// Add Firebase products that you want to use
//import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js'
//import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js'
//import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm7MfIVAIMRN42faa2vsfDjVtjO9-rVsg",
  authDomain: "todo-live-20d16.firebaseapp.com",
  projectId: "todo-live-20d16",
  storageBucket: "todo-live-20d16.appspot.com",
  messagingSenderId: "145623239718",
  appId: "1:145623239718:web:83cac80f82ae9213a62ae7",
  measurementId: "G-8E3XPJHEQM"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = app.getAnalytics();
const db = firebase.firestore();
