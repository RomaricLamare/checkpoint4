import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../src/pages/Admin";
import Home from "../src/pages/Home";
import BandDetails from "../src/pages/BandDetails";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/bands/:id" element={<BandDetails />} />
    </Routes>
  );
}

export default Router;
