// src/App.js
// src/AuthService.js
import { auth,firestore } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { updateUserActivity } from './UserActivityService';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export const login = async (email, password) => {
  try {
    console.log('Logging in User:', email);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await addDoc(collection(firestore, 'users'), { email, timestamp: serverTimestamp() });
    await updateUserActivity(user.uid);
  } catch (error) {
    console.error('Error logging in:', error.message);
  }
};
