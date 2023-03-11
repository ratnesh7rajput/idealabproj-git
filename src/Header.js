import "./header.css";

import React, { useState } from "react";

function Header() {
  
 
  return (
    <div className="header-container">
     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-50 h-25" src="logo192.png" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-50 h-25" src="logo192.png" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-50 h-25" src="logo192.png" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  );
}
export default Header;
