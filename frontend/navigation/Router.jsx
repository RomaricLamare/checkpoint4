import React from "react";
import { Routes, Route } from "react-router-dom";
import BandCard from "../src/pages/BandCard";
import Admin from "../src/pages/Admin";
import Home from "../src/pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/band/:id" element={<BandCard />} />
    </Routes>
  );
}

export default Router;
