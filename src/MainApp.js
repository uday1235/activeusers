// src/MainApp.js
import React, { useEffect, useState } from 'react';
import { login } from './AuthService';
import { getActiveUsers } from './UserActivityService';

const MainApp = () => {
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
     login('test@example.com', 'password');
    const fetchData = async () => {
      // Example: Login a user (this would trigger Firestore update)
     

      // Example: Get active users from the past week
      const users = await getActiveUsers();
      setActiveUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Main App</h1>
      <div>
        <h2>Active Users:</h2>
        <ul>
          {activeUsers.map((user) => (
            <li key={user.userId}>{`User ID: ${user.userId}, Last Active: ${user.timestamp}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainApp;
