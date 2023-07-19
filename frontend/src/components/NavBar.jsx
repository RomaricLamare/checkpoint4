import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar_links">
        <NavLink to="/">
          <h2>MyFavBands</h2>
        </NavLink>
        <NavLink to="/admin">
          <h2>Add a band</h2>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
