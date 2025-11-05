// Initialize Firebase (replace with your config)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAurmghRMoW8Ukly4QuB2H1D65QvH-nVnA",
  authDomain: "alumni-portal-67a21.firebaseapp.com",
  projectId: "alumni-portal-67a21",
  storageBucket: "alumni-portal-67a21.firebasestorage.app",
  messagingSenderId: "690799478064",
  appId: "1:690799478064:web:fbed0b9c8f116e6c6cb4f5",
  measurementId: "G-125G5WECDY"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
