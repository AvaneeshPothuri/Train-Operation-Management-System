// src/MaintenanceDashboard.js
import React, { useState } from 'react';
import './MaintenanceDashboard.css';

function MaintenanceDashboard() {
  const [showHistory, setShowHistory] = useState(false);

  const employee = {
    name: 'John Doe',
    id: 'EMP123',
  };

  const todaysSchedule = [
    {
      shift: 'Morning',
      description: 'Routine inspection',
      type: 'Electrical',
      depot: 'Depot A',
      railcarID: 'RC456',
      maintenanceID: 'MT789',
    },
    {
      shift: 'Afternoon',
      description: 'Wheel alignment',
      type: 'Mechanical',
      depot: 'Depot B',
      railcarID: 'RC567',
      maintenanceID: 'MT890',
    },
  ];

  const maintenanceHistory = [
    {
      shift: 'Morning',
      description: 'Brake inspection',
      type: 'Safety',
      depot: 'Depot C',
      railcarID: 'RC678',
      maintenanceID: 'MT901',
    },
    {
      shift: 'Evening',
      description: 'Hydraulic test',
      type: 'Mechanical',
      depot: 'Depot D',
      railcarID: 'RC789',
      maintenanceID: 'MT012',
    },
  ];

  const displayData = showHistory ? maintenanceHistory : todaysSchedule;

  return (
    <div className="dashboard">
      <div className="profile-card">
        <h2>Maintenance Employee Dashboard</h2>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>ID:</strong> {employee.id}</p>
      </div>

      <div className="schedule-card">
        <h3>{showHistory ? "Maintenance History" : "Today's Schedule"}</h3>
        {displayData.map((task, index) => (
          <div key={index} className="task-card">
            <p><strong>Shift:</strong> {task.shift}</p>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Type:</strong> {task.type}</p>
            <p><strong>Depot:</strong> {task.depot}</p>
            <p><strong>Railcar ID:</strong> {task.railcarID}</p>
            <p><strong>Maintenance ID:</strong> {task.maintenanceID}</p>
          </div>
        ))}
        <button className="toggle-button" onClick={() => setShowHistory(!showHistory)}>
          {showHistory ? "Back to Today's Schedule" : "View History"}
        </button>
      </div>
    </div>
  );
}

export default MaintenanceDashboard;
