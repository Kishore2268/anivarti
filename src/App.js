import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import Header from './components/Header';

const App = () => {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <HomePage />
        </div>
      </div>
    </Router>
  );
};

export default App;
