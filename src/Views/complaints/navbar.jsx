import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const bar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                  Department-1
                </a>
                <a className="dropdown-item" href="#">
                  Department-2
                </a>
                <a className="dropdown-item" href="#">
                  Department-3
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
