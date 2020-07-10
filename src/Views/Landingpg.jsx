import React from "react";
import "./landingpg.css";
import { Link } from "react-router-dom";
const Landingpg = () => {
  return (
    <div style={{maxWidth: "100%", overflowX: "hidden"}}>
      {/* <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ position: "fixed", zIndex: "2", width: "100%" }}
      >
        <span className="navbar-brand mb-0 h1">
          <h1>
            Sama<span>dhaan</span>
          </h1>
        </span>
      </nav> */}
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1"><h1>Sama<span>dhaan</span></h1></span>
      </nav>
      <div id="im">
        <img
          src="https://image.freepik.com/free-vector/dad-reading-kids-family-sitting-sofa-with-book_113065-313.jpg"
          width="250"
          height="250"
        />
      </div>
      <div className="container">
        <h1 className="display-4" id="le">
          SAMA<span>DHAAN</span>
        </h1>
        <p className="lead">Finding solutions to all your needs.</p>
      </div>

      <div className="row justify-content-center">
        <div id="lol" className="col-xl-3 col-md-6 col-sm-12 col-12 mt-4">
          <div className="row no-gutters align-items-center">
            <div className="col">
              <Link to="/login">
                <button type="button" className="button">
                  ADMIN
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div id="lel" className="col-xl-3 col-md-6 col-sm-12 col-12 mt-4">
          <div className="row no-gutters align-items-center">
            <div className="col">
              <Link to="/login">
                <button type="button" className="button">
                  DEPARTMENT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpg;
