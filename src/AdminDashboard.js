// src/AdminDashboard.js
import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [view, setView] = useState('');
  const [selectedTrain, setSelectedTrain] = useState(null);

  const [trains, setTrains] = useState([
    {
      trainName: 'Express 123',
      trainId: 'T123',
      trainType: 'Express',
      capacity: 500,
      arrivalTime: '10:00 AM',
      departureTime: '10:30 AM',
      frequency: 'Daily',
      runningDays: 'Mon-Sun',
      routeId: 'R101'
    },
    {
      trainName: 'Regional 456',
      trainId: 'T456',
      trainType: 'Regional',
      capacity: 300,
      arrivalTime: '12:00 PM',
      departureTime: '12:30 PM',
      frequency: 'Weekdays',
      runningDays: 'Mon-Fri',
      routeId: 'R102'
    }
  ]);

  const [routes, setRoutes] = useState([
    {
      routeId: 'R101',
      startStationId: 'S1',
      endStationId: 'S5',
      distance: '200 km',
      avgArrivalTime: '10:30 AM',
      electrified: 'Yes',
      gauge: 'Broad'
    },
    {
      routeId: 'R102',
      startStationId: 'S2',
      endStationId: 'S6',
      distance: '150 km',
      avgArrivalTime: '12:30 PM',
      electrified: 'No',
      gauge: 'Meter'
    }
  ]);

  const [stations, setStations] = useState([
    {
      stationId: 'S1',
      stationName: 'Central Station',
      stationCode: 'CEN',
      city: 'City A',
      state: 'State X',
      platforms: 5,
      stationType: 'Main'
    },
    {
      stationId: 'S2',
      stationName: 'North Station',
      stationCode: 'NRT',
      city: 'City B',
      state: 'State Y',
      platforms: 3,
      stationType: 'Sub'
    }
  ]);

  const handleViewChange = (viewOption) => {
    setView(viewOption);
    setSelectedTrain(null);
  };

  const handleTrainClick = (trainId) => {
    setSelectedTrain(trainId);
  };

  const handleAddItem = (itemType) => {
    const newItem = prompt(`Enter new ${itemType} details (comma-separated):`);
    if (newItem) {
      if (itemType === 'Train') {
        const [trainName, trainId, trainType, capacity, arrivalTime, departureTime, frequency, runningDays, routeId] = newItem.split(',');
        setTrains([
          ...trains,
          { trainName, trainId, trainType, capacity, arrivalTime, departureTime, frequency, runningDays, routeId }
        ]);
      } else if (itemType === 'Route') {
        const [routeId, startStationId, endStationId, distance, avgArrivalTime, electrified, gauge] = newItem.split(',');
        setRoutes([
          ...routes,
          { routeId, startStationId, endStationId, distance, avgArrivalTime, electrified, gauge }
        ]);
      } else if (itemType === 'Station') {
        const [stationId, stationName, stationCode, city, state, platforms, stationType] = newItem.split(',');
        setStations([
          ...stations,
          { stationId, stationName, stationCode, city, state, platforms, stationType }
        ]);
      }
    }
  };

  const handleEditItem = (itemId, itemType) => {
    const itemToEdit = 
      itemType === 'Train' ? trains.find(train => train.trainId === itemId) :
      itemType === 'Route' ? routes.find(route => route.routeId === itemId) :
      stations.find(station => station.stationId === itemId);

    if (itemToEdit) {
      const updatedDetails = prompt(`Edit ${itemType} details (comma-separated):`, Object.values(itemToEdit).join(','));
      if (updatedDetails) {
        const updatedItem = Object.keys(itemToEdit).reduce((acc, key, index) => {
          acc[key] = updatedDetails.split(',')[index];
          return acc;
        }, {});
        
        if (itemType === 'Train') {
          setTrains(trains.map(train => (train.trainId === itemId ? updatedItem : train)));
        } else if (itemType === 'Route') {
          setRoutes(routes.map(route => (route.routeId === itemId ? updatedItem : route)));
        } else if (itemType === 'Station') {
          setStations(stations.map(station => (station.stationId === itemId ? updatedItem : station)));
        }
      }
    }
  };

  const handleDeleteItem = (itemId, itemType) => {
    if (itemType === 'Train') {
      setTrains(trains.filter(train => train.trainId !== itemId));
    } else if (itemType === 'Route') {
      setRoutes(routes.filter(route => route.routeId !== itemId));
    } else if (itemType === 'Station') {
      setStations(stations.filter(station => station.stationId !== itemId));
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="view-buttons">
        <button onClick={() => handleViewChange('trains')}>Trains in Zone</button>
        <button onClick={() => handleViewChange('routes')}>Routes in Zone</button>
        <button onClick={() => handleViewChange('stations')}>Stations in Zone</button>
      </div>

      {view === 'trains' && !selectedTrain && (
        <section className="train-section">
          <h3>Trains in Zone</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Train Name</th>
                <th>Train ID</th>
                <th>Type</th>
                <th>Capacity</th>
                <th>Arrival Time</th>
                <th>Departure Time</th>
                <th>Frequency</th>
                <th>Running Days</th>
                <th>Route ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {trains.map(train => (
                <tr key={train.trainId}>
                  <td onClick={() => handleTrainClick(train.trainId)} className="clickable">{train.trainName}</td>
                  <td>{train.trainId}</td>
                  <td>{train.trainType}</td>
                  <td>{train.capacity}</td>
                  <td>{train.arrivalTime}</td>
                  <td>{train.departureTime}</td>
                  <td>{train.frequency}</td>
                  <td>{train.runningDays}</td>
                  <td>{train.routeId}</td>
                  <td>
                    <button onClick={() => handleEditItem(train.trainId, 'Train')} className="action-button">Edit</button>
                    <button onClick={() => handleDeleteItem(train.trainId, 'Train')} className="action-button delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="add-button" onClick={() => handleAddItem('Train')}>Add Train</button>
        </section>
      )}
      {/* Similar table structure for routes and stations */}
    </div>
  );
};

export default AdminDashboard;
