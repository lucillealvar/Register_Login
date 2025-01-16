import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <div className="login_title">
        <h1>Welcome Back!</h1>
        <h3>Enter your credentials to Login</h3>
      </div>
      <div className="login_form">
        <form className="login_form-field">
          <input
            type="text"
            className="email"
            placeholder="Email"
            autoComplete="off"
            name="email"
          />
          <input
            type="password"
            className="password"
            placeholder="Password"
            name="password"
          />
          <button type="submit" className="btn">Login</button>
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
