import React from "react";
import "./flexbox.css";

const Flexbox = ({ department, name, number, id, imageUrl, text }) => {
  return (
    <div className="complaint">
      <div className="title">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm">
              <h4>{name}</h4>
            </div>
            <div class="col-sm">
              <h4>ADDRESS</h4>
            </div>
            <div class="col-sm ">
              <h4>{number}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-3 column">
            <h5>{"Dept: "+department}</h5>
            <hr />
            <h5>Date</h5>
            <hr />
            <h5>{"id: " + id }</h5>
          </div>
          <div class="col">
            <img src={imageUrl}/>
            <div className="data">
              <h6>
                {text}
              </h6>
            </div>
            <div className="buttons">
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-target="#collapseExample"
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
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
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  ENTER FEEDBACK
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexbox;
