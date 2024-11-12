// src/StationMasterDashboard.js
import React, { useState } from 'react';
import './StationMasterDashboard.css';

function StationMasterDashboard() {
  const [viewMode, setViewMode] = useState('trains'); // 'trains', 'employees', 'railcars'
  const [sortField, setSortField] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [railcarSearchTerm, setRailcarSearchTerm] = useState('');

  const trainData = [
    {
      trainID: 'T123',
      name: 'Express Line',
      type: 'Express',
      capacity: 500,
      arrivalTime: '10:45',
      departureTime: '11:15',
      runningDays: 'Daily',
      frequency: 'Every 2 hours',
      platform: 2,
      startStation: 'Station A',
      endStation: 'Station Z',
      routeID: 'R789',
    },
    {
      trainID: 'T124',
      name: 'Morning Star',
      type: 'Local',
      capacity: 350,
      arrivalTime: '09:40',
      departureTime: '10:00',
      runningDays: 'Weekdays',
      frequency: 'Every 3 hours',
      platform: 1,
      startStation: 'Station B',
      endStation: 'Station Y',
      routeID: 'R790',
    },
    {
      trainID: 'T125',
      name: 'City Link',
      type: 'Regional',
      capacity: 600,
      arrivalTime: '11:10',
      departureTime: '11:30',
      runningDays: 'Weekends',
      frequency: 'Every 6 hours',
      platform: 3,
      startStation: 'Station C',
      endStation: 'Station X',
      routeID: 'R791',
    },
  ];

  const maintenanceEmployees = [
    { id: 'EMP001', name: 'John Smith', department: 'Mechanical' },
    { id: 'EMP002', name: 'Alice Johnson', department: 'Electrical' },
    { id: 'EMP003', name: 'Mark Spencer', department: 'Mechanical' },
    { id: 'EMP004', name: 'Lucy Grey', department: 'Electrical' },
    { id: 'EMP005', name: 'Steve Brown', department: 'Signal Maintenance' },
  ];

  const railcarData = [
    { railcarID: 'RC101', status: 'Stationed', maintenanceType: 'Routine' },
    { railcarID: 'RC102', status: 'Under Maintenance', maintenanceType: 'Electrical' },
  ];

  const nearbyStations = [
    { name: 'Station B', contact: '123-456-7890' },
    { name: 'Station C', contact: '098-765-4321' },
  ];

  const handleSort = (field) => setSortField(field);

  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());
  const handleRailcarSearch = (e) => setRailcarSearchTerm(e.target.value.toLowerCase());

  const filteredEmployees = maintenanceEmployees
    .filter((employee) => employee.name.toLowerCase().includes(searchTerm))
    .sort((a, b) => (sortField ? (a[sortField] > b[sortField] ? 1 : -1) : 0));

  const filteredRailcars = railcarData
    .filter((railcar) => railcar.railcarID.toLowerCase().includes(railcarSearchTerm))
    .sort((a, b) => (sortField ? (a[sortField] > b[sortField] ? 1 : -1) : 0));

  const renderTrainData = () => (
    <div className="data-section">
      <h3>Trains Arriving/Departing Near Current Time</h3>
      {trainData.map((train, index) => (
        <div key={index} className="card">
          <p><strong>Train ID:</strong> {train.trainID}</p>
          <p><strong>Name:</strong> {train.name}</p>
          <p><strong>Type:</strong> {train.type}</p>
          <p><strong>Capacity:</strong> {train.capacity}</p>
          <p><strong>Arrival Time:</strong> {train.arrivalTime}</p>
          <p><strong>Departure Time:</strong> {train.departureTime}</p>
          <p><strong>Running Days:</strong> {train.runningDays}</p>
          <p><strong>Frequency:</strong> {train.frequency}</p>
          <p><strong>Platform:</strong> {train.platform}</p>
          <p><strong>Start Station:</strong> {train.startStation}</p>
          <p><strong>End Station:</strong> {train.endStation}</p>
          <p><strong>Route ID:</strong> {train.routeID}</p>
        </div>
      ))}
    </div>
  );

  const renderEmployeeData = () => (
    <div className="data-section">
      <h3>Maintenance Employees</h3>

      <div className="employee-controls">
        <label>
          Search by name:
          <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Enter employee name" />
        </label>
        <button onClick={() => handleSort('name')}>Sort by Name</button>
        <button onClick={() => handleSort('department')}>Sort by Department</button>
      </div>

      {filteredEmployees.map((employee, index) => (
        <div key={index} className="card">
          <p><strong>ID:</strong> {employee.id}</p>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Department:</strong> {employee.department}</p>
        </div>
      ))}
    </div>
  );

  const renderRailcarData = () => (
    <div className="data-section">
      <h3>Railcars Stationed/Under Maintenance</h3>

      <div className="railcar-controls">
        <label>
          Search by Railcar ID:
          <input type="text" value={railcarSearchTerm} onChange={handleRailcarSearch} placeholder="Enter railcar ID" />
        </label>
        <button onClick={() => handleSort('railcarID')}>Sort by Railcar ID</button>
        <button onClick={() => handleSort('status')}>Sort by Status</button>
      </div>

      {filteredRailcars.map((railcar, index) => (
        <div key={index} className="card">
          <p><strong>Railcar ID:</strong> {railcar.railcarID}</p>
          <p><strong>Status:</strong> {railcar.status}</p>
          <p><strong>Maintenance Type:</strong> {railcar.maintenanceType}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="station-dashboard">
      <div className="header">
        <h2>Stationmaster Dashboard</h2>
      </div>
      
      <div className="nearby-stations">
        <h4>Nearby Stations & Emergency Contacts</h4>
        {nearbyStations.map((station, index) => (
          <p key={index}>
            <strong>{station.name}:</strong> {station.contact}
          </p>
        ))}
      </div>
      
      <div className="buttons">
        <button onClick={() => setViewMode('trains')}>View Trains</button>
        <button onClick={() => setViewMode('employees')}>View Maintenance Employees</button>
        <button onClick={() => setViewMode('railcars')}>View Railcars</button>
      </div>
      
      <div className="content">
        {viewMode === 'trains' && renderTrainData()}
        {viewMode === 'employees' && renderEmployeeData()}
        {viewMode === 'railcars' && renderRailcarData()}
      </div>
    </div>
  );
}

export default StationMasterDashboard;
