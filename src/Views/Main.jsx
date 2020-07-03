import React from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { firebaseLogout } from "../Fire/Auth";

const Mainpg = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <span className="navbar-brand mb-0 h1"><h1>Sama<span>dhaan</span>
                      </h1></span>
                      <ul className="navbar-nav ml-auto">
                       <li className="nav-item">
                        <Link to='/login'><FontAwesomeIcon className="fa fa-user fa-3x" icon={faUser} /></Link>
                       </li>
                     </ul>
                   </nav>
                
      <div id="im">
        <img
          src="https://image.freepik.com/free-vector/four-female-hands-support-each-other_102172-207.jpg"
          width="250"
          height="250"
        />
      </div> 
      <div id="hd" className="display-1">
        Sama<span>dhaan</span>
        <div>City</div>
      </div>
      <div className="container"> 
      <div id="d" className="row justify-content-center" >
        <div id="dd" className="col-xl-3  col-6 mb-4">
        <button type="button" className="btn btn-outline-dark btn-lg">
          <Link to="/dashboard">DASHBOARD</Link>
        </button>
        </div>
        <div id="pp" className="col-xl-3 col-6 mb-4">
        <button type="button"  className="btn btn-outline-dark btn-lg">
          <Link to="/complaints">COMPLAINTS</Link>
        </button>
      </div>
      </div>
      </div>
      <div id="lo">
        <button
          type="button"
          className="btn btn-outline-dark btn-md"
          onClick={() => {
            firebaseLogout();
          }}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};
export default Mainpg;
