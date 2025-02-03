import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <HomePage />
      </div>
    </div>
  );
};

export default App;
