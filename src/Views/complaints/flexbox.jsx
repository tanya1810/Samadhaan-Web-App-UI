import React from "react";
import "./flexbox.css";
import { dataarray } from "./dataarray";

const Flexbox = ({ department, name, number, id, address }) => {
  return (
    <div className="complaintcard">
      <div className="title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <h4>{name}</h4>
              <h4 className="id">{id}</h4>
            </div>
            <div class="col-sm address">
              <h4>{address}</h4>
            </div>
            <div class="col-sm ">
              <h4>{number}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-3 sidecolumn">
            <h5>{department}</h5>
            <hr />
            <h5> Date</h5>
          </div>
          <div class="col">
            <div className="data">
              <h6 className="complaint">Complaint</h6>
            </div>
            <div className="buttons">
              <button type="button" class="btn btn-outline-secondary">
                Feedback
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Mark Complete
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Transfer
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Ignore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexbox;
