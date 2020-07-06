import React from 'react';
import './landingpg.css';
import {Link} from 'react-router-dom';
const Landingpg = () => {
    return (
      <div>
      <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
     <img src="https://lh3.googleusercontent.com/Jsvb9oenmsRPG1-L2sjEiigWf-jKLzIdxzYxfgS5jzsnizZrJTKeU3Scl3MHXM672-qz=s180-rw" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
      Samadhaan
    </a>
  </nav>
   <div id="im">
    <img src="https://image.freepik.com/free-vector/dad-reading-kids-family-sitting-sofa-with-book_113065-313.jpg" width="250" height="250" />
   </div> 
    <div className="container">
      <h1 className="display-4" id="le" >SAMA<span>DHAAN</span></h1>
      <p className="lead">Finding solutions to all your needs.</p>
    </div>
  
  <div className="row justify-content-center">
          <div  className="col-xl-3 col-6 " id="lol">
            <button type="button"  className="btn btn-outline-dark btn-lg" ><Link to="/login" >ADMIN</Link></button>
          </div> 
          <div className="col-xl-3 col-6 " id="lel"> 
            <button  type="button"  className="btn btn-outline-dark btn-lg" ><Link to="/login">DEPARTMENT</Link></button>
         </div>
  </div>
  </div>
    );
  }

  export default Landingpg;