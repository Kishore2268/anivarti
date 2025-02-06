import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <div className="bg-black min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          {/* Define routes */}
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Home page route */}
            <Route path="/services" element={<ServicesPage />} /> {/* Services page route */}
          </Routes>
        </div>
        <hr className="h-1 w-full text-gray-200" />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

