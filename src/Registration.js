import React from "react";
import "./registration.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate()

  return (
    <div className="register-box">
      <div className="reg-heading ">
        <h2>Create Account</h2>
      </div>

      <div className="form-container">
        <form className="registration-form">

          <div className="row mb-3">
            <label htmlFor="name" className="col-sm-2 col-form-label"> Name</label>
             <div className="col-sm-10">
              <input type="text" className="form-control"  required/>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="inputEmail5" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail5" required />
            </div>
          </div>
          {/* <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" required>
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
  </div> */}

            <div className="row mb-3">
            <label htmlFor="number" className="col-sm-2 col-form-label">
              Phone no.
            </label>
            <div className="col-sm-10">
              <input type="tel" id="phone"  className="form-control " name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="police" className="col-sm-2 col-form-label">
             Police no.
            </label>
            <div className="col-sm-10">
              <input type="text" id="Police"  className="form-control " name="Police"  required/>
            </div>
            </div>

            <div className="row mb-3">
            <label htmlFor="aadhar" className="col-sm-2 col-form-label">
             Aadhar no.
            </label>
            <div className="col-sm-10">
              <input type="text" id="aadhar"  className="form-control " name="Aadhar"  required/>
            </div>
            </div>

            <div className="location">


          <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
    </select>
  </div>

  <div class="col-md-6">
    <label for="inputCity" className="col-sm-2 col-form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>

  <div class="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  </div>
          
          <button className="btn btn-primary" type="submit"  onClick={() => navigate('/createuser')}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
