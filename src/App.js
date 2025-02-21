import React, { Suspense, lazy, memo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy loading pages and components
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen flex flex-col">
        <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services/*" element={<ServicesPage />} />
            </Routes>
          </div>
          <hr className="h-1 w-full text-gray-200" />
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
};

export default memo(App);
