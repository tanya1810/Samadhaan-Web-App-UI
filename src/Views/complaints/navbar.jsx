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
        style={{ position: "fixed", zIndex: "1", width: "100%" }}
      >
        <span className="navbar-brand mb-0 h1">
          <h1>
            Sama<span>dhaan</span>
          </h1>
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-4">
              <Link to="/mainmenu">
                <FontAwesomeIcon className="fa fa-home fa-3x" icon={faHome} />
              </Link>
            </li>
            <li className="nav-item">
              <FontAwesomeIcon className="fa fa-user fa-3x" icon={faUser} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default bar;
