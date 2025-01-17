import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.scss";

import { UserContext } from "../context/userContext.jsx";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(UserContext);

  const inputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/users/login`,
        userData
      );
      const user = await response.data;
      setCurrentUser(user);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="login">
      <div className="login_title">
        <h1>Welcome Back!</h1>
        <h3>Enter your credentials to Login</h3>
      </div>
      <div className="login_form">
        <form className="login_form-field" onSubmit={handleLogin}>
          {error && <p className="login_form-field-error">{error}</p>}
          <input
            type="text"
            className="email"
            placeholder="Email"
            autoComplete="off"
            name="email"
            value={userData.email}
            onChange={inputHandler}
          />
          <input
            type="password"
            className="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={inputHandler}
          />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <div className="login_form-signup">
          <p>Don't have an account?</p>
          <Link to="/register">Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
