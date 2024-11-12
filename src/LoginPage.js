// src/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Sample users for demonstration
  const users = {
    Admin: { username: 'admin', password: 'admin123' },
    'Station Master': { username: 'stationmaster', password: 'station123' },
    'Maintenance Employee': { username: 'maintenance', password: 'maintenance123' },
  };

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setErrorMessage(''); // Clear previous error message
  };

  const handleLogin = () => {
    // Check if username and password match the selected role
    if (users[role] && username === users[role].username && password === users[role].password) {
      // Redirect based on role
      if (role === 'Admin') {
        navigate('/admin-dashboard');
      } else if (role === 'Station Master') {
        navigate('/station-master-dashboard');
      } else if (role === 'Maintenance Employee') {
        navigate('/maintenance-dashboard');
      }
    } else {
      setErrorMessage('Wrong username or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Train Operations Login</h2>
        <div className="role-buttons">
          <button onClick={() => handleRoleSelection('Admin')}>Login as Admin</button>
          <button onClick={() => handleRoleSelection('Station Master')}>Login as Station Master</button>
          <button onClick={() => handleRoleSelection('Maintenance Employee')}>Login as Maintenance Employee</button>
        </div>
        {role && (
          <div className="login-form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button onClick={handleLogin} className="login-button">Login</button>
          </div>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="instruction">Select your role to proceed with login</p>
      </div>
    </div>
  );
}

export default LoginPage;