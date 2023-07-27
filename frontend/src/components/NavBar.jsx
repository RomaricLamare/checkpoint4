import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import LoginContext from "../../navigation/LoginContext";

function NavBar() {
  const { user, setUser } = useContext(LoginContext);

  const handleDisconnect = () => {
    setUser(undefined);
    localStorage.removeItem("token");
  };

  return (
    <div className="navBar">
      <div className="navBar_links">
        <NavLink to="/">
          <h2 className="favbands">MyFavBands</h2>
        </NavLink>
        {user && (
          <NavLink to="/admin">
            <h2>Add a band</h2>
          </NavLink>
        )}
      </div>
      {!user ? (
        <NavLink to="/login" className="login-logo">
          <BiLogInCircle />
        </NavLink>
      ) : (
        <button className="disconnect" type="button" onClick={handleDisconnect}>
          Log out
        </button>
      )}
    </div>
  );
}

export default NavBar;
