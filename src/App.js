import React, { Suspense, lazy, memo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy loading pages and components
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Flipkart = lazy(() => import("./components/Flipkart"));
const Amazon = lazy(() => import("./components/Amazon"));
const Ajio = lazy(() => import("./components/Ajio"));
const BigBasket = lazy(() => import("./components/BigBasket"));
const Etsy = lazy(() => import("./components/Etsy"));
const Myntra = lazy(() => import("./components/Myntra"));
const Nykaa = lazy(() => import("./components/Nykaa"));
const Blinkit = lazy(() =>import("./components/Blinkit"));
const Zepto = lazy(() => import("./components/Zepto"));

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
              <Route path="/services/flipkart" element={<Flipkart />} />
              <Route path="/services/amazon" element={<Amazon />} />
              <Route path="/services/ajio" element={<Ajio />} />
              <Route path="/services/bigbasket" element={<BigBasket />} />
              <Route path="/services/etsy" element={<Etsy />} />
              <Route path="/services/myntra" element={<Myntra />} />
              <Route path="/services/nykaa" element={<Nykaa />} />
              <Route path="/services/blinkit" element={<Blinkit />} />
              <Route path="/services/zepto" element={<Zepto />} />
              <Route path="*" element={() => <div>Page not found</div>} />
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
