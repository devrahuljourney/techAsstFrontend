import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
     
      console.log('No user data found');
    }
  }, []);

  const handleLogout = () => {
    
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    
    
    
    navigate('/');
  };

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Profile</h2>
        <p className="text-lg font-medium">Welcome, {user.firstname} {user.lastname}!</p>
        <p>Email: {user.email}</p>
        <p>Company: {user.company || 'Not provided'}</p>
        
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 mt-4 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
