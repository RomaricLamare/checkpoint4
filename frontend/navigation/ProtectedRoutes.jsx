import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import LoginContext from "./LoginContext";

function ProtectedRoutes({ element: ReactComponent }) {
  const { user } = useContext(LoginContext);

  function Component() {
    return ReactComponent;
  }

  if (!user) return <Navigate to="/login" />;

  return <Component />;
}

ProtectedRoutes.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default ProtectedRoutes;
