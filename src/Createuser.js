import "./createuser.css";
import { Navigate, useNavigate } from "react-router-dom";
export default function Createuser() {
  
  return (
    <>
      <div className="container text-center">
        <div className="row align-items-center bg-light ">
          <h3>Recommendations for creating a strong password</h3>
          <ul className="text-center">
            <li  >Be at least 8 characters in length</li>
            <li  >
              Contain both upper and lowercase alphabetic characters (e.g. A-Z,
              a-z)
            </li>
            <li>Have at least one numerical character (e.g. 0-9)</li>
            <li>Have at least one special character (e.g. ~!@#$%^&*()_-+=)</li>
          </ul>
          <div class="form-floating mb-3 w-70 text-center">
            <input type="text"
              className="form-control"
              id="floatingInput"
              placeholder="John@21"
            />
            <label for="floatingInput">Police Number</label>
          </div>
          <div class="form-floating  mb-3 w-70">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"/>
              
            
            <label for="floatingPassword">Password</label>
            </div>

            <div class="form-floating mb-3 w-70">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              
            />
            <label for="floatingPassword"> confirm Password</label>
          
        </div>
        <div className="text-center">
        <button type="Submit" class="btn btn-primary mb-3 w-50 text-center">Submit</button>
        </div>
        
        </div>
        </div>
      
    </>
  )
}
 

