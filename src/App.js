import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <div style={{ marginLeft: '200px', padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<h1>Forecast</h1>} />
          <Route path="/locations" element={<h1>Locations</h1>} />
          <Route path="/calendar" element={<h1>Calendar</h1>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
