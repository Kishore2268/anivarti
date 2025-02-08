import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ServicesPage from "./pages/ServicesPage";
import Footer from "./components/Footer";
import ServicesHeader from "./components/ServicesHeader";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Conditionally render headers */}
      {location.pathname === "/" && <Header />}
      {location.pathname.startsWith("/services") && <ServicesHeader />}

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/*" element={<ServicesPage />} />
        </Routes>
      </div>

      <hr className="h-1 w-full text-gray-200" />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
