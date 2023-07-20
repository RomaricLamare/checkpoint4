import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Admin from "../src/pages/Admin";
import Home from "../src/pages/Home";
import BandDetails from "../src/pages/BandDetails";
import AdminUpdate from "../src/pages/AdminUpdate";
import LoginForm from "../src/components/LoginForm";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<Home />} />
      <Route path="/bands/:id" element={<BandDetails />} />

      <Route path="/admin" element={<ProtectedRoutes element={<Admin />} />} />
      <Route
        path="/bands/:id/update"
        element={<ProtectedRoutes element={<AdminUpdate />} />}
      />
    </Routes>
  );
}

export default Router;
