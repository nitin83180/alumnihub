// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyBSZhXbK-24REZvisLK_vs81dDG5Ivm-GE",
  authDomain: "alumnihub-dea19.firebaseapp.com",
  projectId: "alumnihub-dea19",
  storageBucket: "alumnihub-dea19.firebasestorage.app",
  messagingSenderId: "414163639977",
  appId: "1:414163639977:web:c1c4759e5c61b377f153b8"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
