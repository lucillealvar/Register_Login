import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.scss";

function Signup() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const changeInput = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userData)
      const newUser = await response.data;
      console.log(newUser);
      if(!newUser){
        setError("Could not register user. Please try again.")
      }
      navigate('/')
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="register">
      <div className="register_title">
        <h1 className="register_title-name">Register</h1>
        <h3 className="register_title-description">Create your account</h3>
      </div>
      <div className="register_form">
        <form className="register_form-field" onSubmit={handleRegister}>
          <input
            type="text"
            className="username"
            placeholder="Username"
            autoComplete="off"
            name="name"
            value={userData.name}
            onChange={changeInput}
          />
          <input
            type="text"
            className="email"
            placeholder="Email"
            autoComplete="off"
            name="email"
            value={userData.email}
            onChange={changeInput}
          />
          <input
            type="password"
            className="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInput}
          />
          <button type="submit" className="btn">Sign up</button>
        </form>
        <div className="register_form-login">
          <p>Already have an account?</p>
          <a>Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
