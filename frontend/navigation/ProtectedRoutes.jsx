import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ element: Component }) {
  const isAuthentificated = null;

  if (!isAuthentificated) return <Navigate to="/login" />;

  return <Component />;
}

ProtectedRoutes.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default ProtectedRoutes;
