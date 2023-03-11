import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css"
function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ecourt</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>
      </ul>
      <span class="navbar-text">
      <button type="button" class="btn btn-success mx-3" onClick={()=>navigate('login')}>Login</button>
      <button type="button" class="btn btn-success" onClick={()=>navigate('signup')}>Signup</button>
      </span>
    </div>
  </div>
</nav>
<div class="alert alert-primary" role="alert">
  <h1  id="H">Judgement Search Portal</h1>
</div>

    </div>
  );
}
export default Navbar;
