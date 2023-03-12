import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css"
function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Ecourt</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact us</a>
        </li>
      </ul>
      <span className="navbar-text">
      <button type="button" className="btn mx-3" onClick={()=>navigate('login')}>Login</button>
      <button type="button" className="btn " onClick={()=>navigate('signup')}>Signup</button>
      </span>
    </div>
  </div>
</nav>
<div className="alert alert-primary" role="alert">
  <h1  id="H">Judgement Search Portal</h1>
</div>

    </div>
  );
}
export default Navbar;
