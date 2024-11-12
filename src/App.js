// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import AdminDashboard from './AdminDashboard';
import StationMasterDashboard from './StationMasterDashboard';
import MaintenanceDashboard from './MaintenanceDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page Route */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Admin Dashboard Route */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        
        {/* Station Master Dashboard Route */}
        <Route path="/station-master-dashboard" element={<StationMasterDashboard />} />
        
        {/* Maintenance Employee Dashboard Route */}
        <Route path="/maintenance-dashboard" element={<MaintenanceDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
