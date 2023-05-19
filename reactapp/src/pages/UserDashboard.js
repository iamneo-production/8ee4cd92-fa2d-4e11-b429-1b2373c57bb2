import React, { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';



const UserDashboard = () => {
  const [greeting, setGreeting] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <h2>
        {greeting}, {user.name}!
      </h2>
    </div>
  );
};

export default UserDashboard;