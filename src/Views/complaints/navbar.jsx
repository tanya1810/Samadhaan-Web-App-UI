import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const bar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ position: "fixed", zIndex: "2", width: "100%" }}
      >
        <span className="navbar-brand mb-0 h1">
          <h1>
            Sama<span>dhaan</span>
          </h1>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown mr-4">
              <a
                className="nav-link dropdown-toggle h5"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Departments
              </a>
              <div
                className="dropdown-menu"
                ariaLabelledby="navbarDropdownMenuLink"
              >
                 
                <a className="dropdown-item" href="#">
                                    Animal Husbandry                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    BDPO                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    Civil Hospital                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    DHBVN(Urban)                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    DHBVN(Rural)                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    Distt. Town planner                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    Education(Elementary)                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    Education(Higher)                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    Fire Department                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    HVPNL                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    Irrigation                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    Nagar Parishad                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    PWD                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    PUBLIC HEALTH(Water)                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    Public health(Sewage)                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    Public health (Reny Well)                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    Social Welfare                 
                </a>
                                
                <a className="dropdown-item" href="#">
                                    Tehsil                 
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div>
                <Link to="/mainmenu">
                  <a className="nav-link" href="#">
                    <FontAwesomeIcon
                      className="fa fa-home fa-3x"
                      icon={faHome}
                    />
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon className="fa fa-user fa-3x" icon={faUser} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default bar;
