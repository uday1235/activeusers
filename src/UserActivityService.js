// src/UserActivityService.js
// src/UserActivityService.js
import { firestore } from './firebase';
import { addDoc, collection, serverTimestamp, query, where, getDocs } from 'firebase/firestore';

export const updateUserActivity = async (userId) => {
  try {
    const userActivityRef = collection(firestore, 'userActivity');
    await addDoc(userActivityRef, { userId, timestamp: serverTimestamp() });
  } catch (error) {
    console.error('Error updating user activity:', error.message);
  }
};

export const getActiveUsers = async () => {
  const now = new Date();
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // One week ago

  try {
    const userActivityRef = collection(firestore, 'userActivity');
    const q = query(userActivityRef, where('timestamp', '>', lastWeek));

    const snapshot = await getDocs(q);
    //const activeUsers = snapshot.docs.map((doc) => doc.data().userId);
    const activeUsers = snapshot.docs.map((doc) => ({
      userId: doc.data().userId,
      timestamp: doc.data().timestamp.toDate().toLocaleString(),
    }));
    
    return activeUsers;
  } catch (error) {
    console.error('Error getting active users:', error.message);
    return [];
  }
};
