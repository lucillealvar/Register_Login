import React from "react";
import "./Signup.scss";

function Signup() {
  return (
    <div className="register">
      <div className="register_title">
        <h1 className="register_title-name">Register</h1>
        <h3 className="register_title-description">Create your account</h3>
      </div>
      <div className="register_form">
        <form className="register_form-field">
          <input className="username" placeholder="Username"/>
          <input className="email" placeholder="Email"/>
          <input className="password" placeholder="Password"/>
          <button className="btn">Sign up</button>
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
