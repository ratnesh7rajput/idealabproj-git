import React from "react";
import "./registration.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();

  return (
    <div className="register-box">
      <div className="reg-heading ">
        <h2>Create Account</h2>
      </div>
      <div className="form-container">
        <form className="registration-form">
          <div className="row mb-3">
            <label htmlFor="inputEmail4" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail4" />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="inputEmail5" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail5" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
