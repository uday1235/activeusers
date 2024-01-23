// src/App.js
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACzfDWY8j74msWjVOUzkIE2ZN8r6_JujY",
  authDomain: "phoneit-ef566.firebaseapp.com",
  projectId: "phoneit-ef566",
  storageBucket: "phoneit-ef566.appspot.com",
  messagingSenderId: "354413843488",
  appId: "1:354413843488:web:565e15586e08797bf85845"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
