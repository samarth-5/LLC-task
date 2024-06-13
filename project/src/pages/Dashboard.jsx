import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();
  const { state: formData } = location;

  console.log(formData);

  return (
    <div>
      <h1>User Data:</h1>
        <div>
          <p><strong>Full Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Username:</strong> {formData.username}</p>
        </div>      
    </div>
  );
}
