import React, { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { ImArrowLeft2 } from "react-icons/im";
import jwtDecode from "jwt-decode";
import LoginContext from "../../navigation/LoginContext";

function LoginForm() {
  const { user, setUser } = useContext(LoginContext);

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [errPasswordConexion, setErrPasswordConexion] = useState(false);

  const closeErrPasswordConexion = () => {
    setErrPasswordConexion(false);
  };

  const navigate = useNavigate();

  const handleConnection = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/user/login`, {
        email: mail,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        const userjwt = jwtDecode(res.data.token);
        console.warn("TOKEN UTILISATEUR", userjwt);
        setUser(userjwt);
        console.warn("token validé ");
        navigate("/");
      })
      .catch((err) => {
        console.error("Wrong credentials", err);
        setErrPasswordConexion(true);
      });
  };

  console.warn("USER", user);

  return (
    <ul className="login_page">
      {errPasswordConexion && (
        <div className="error_message_password">
          <div className="error_message_password_content">
            <h4>Oups !</h4>
            <br />
            <p>Wrong username or password !</p>
            <button
              className="buttonpopup_compte"
              type="button"
              onClick={closeErrPasswordConexion}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <li className="login_page_title">
        <h2>Sign in</h2>
      </li>
      <li>
        <form className="login_page_form" id="id_form_connexion" method="POST">
          <input
            id="email"
            type="email"
            placeholder="email"
            name="mail"
            required
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            form="id_form_connexion"
            onClick={handleConnection}
          >
            Connection
          </button>
        </form>
        <NavLink to="/" className="Login_exit">
          <ImArrowLeft2 />
        </NavLink>
      </li>
    </ul>
  );
}

export default LoginForm;
