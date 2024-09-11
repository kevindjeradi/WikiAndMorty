import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './features/HomePage/views/HomePage';
import DetailPage from './features/DetailPage/views/DetailPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-200">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
