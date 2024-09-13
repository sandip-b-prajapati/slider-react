import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Games from "./Games";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="see-all-games" element={<Games />} />
      </Routes>
    </Router>
  );
};

export default Main;
