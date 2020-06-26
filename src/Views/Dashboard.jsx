import React from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div id="wrapper" style={{ height: "100vh" }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">
            <h1>
              Sama<span>dhaan</span>
            </h1>
          </span>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-4">
              <Link to="/mainmenu">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon className="fa fa-home fa-3x" icon={faHome} />
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/loginpg">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon className="fa fa-user fa-3x" icon={faUser} />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-4">
                <h1 className="h1 mb-2 text-gray-800">
                  <b>Department City</b>
                </h1>
              </div>
              <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Complaints
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            4000
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-list-alt fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Solved Complaints
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            2000
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            50%
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-check-double fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Pending Requests
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            1000
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            25%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-danger shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                            Ignored Complaints
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            1000
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            25%
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-times fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ marginTop: "30px" }}>
                  <table className="table table-striped table-dark">
                    <tbody>
                      <tr>
                        <th scope="row">Average No. of Complaints per day</th>
                        <td>5</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Average No. of Resolved Complaints per day
                        </th>
                        <td>4</td>
                      </tr>
                      <tr>
                        <th scope="row">Average Rating</th>
                        <td>3.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
