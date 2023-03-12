 import { Link } from "react-router-dom"
 import "./login.css"
 export default function Login(){
    return(
        <>
        <div className="container" >
        <div className="L"><h2>LOGIN</h2></div>
        <form className='login-form'>
  <div className="input-group flex-nowrap">
  
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<div className="input-group flex-nowrap">
<input className="form-control" type="password" placeholder="Password" aria-label="default input example"/>
</div>
  
  <button type="submit" className="btn btn-primary" id="btn-login">Submit</button>
  <br/>
  <Link to='/register' className="link">create an account</Link>
</form>

        </div>
        </>
    )
 }