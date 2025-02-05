import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ServicesPage from './pages/ServicesPage';

const App = () => {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          {/* Define routes */}
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Home page route */}
            <Route path="/services" element={<ServicesPage />} /> {/* Services page route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

