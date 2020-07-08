import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./flexbox.css";
import Feedbackpopup from "./feedbackpopup";
import { dataarray } from "./dataarray";
import { render } from "@testing-library/react";
import Popup from "reactjs-popup";
import { Route, Link } from "react-router-dom";
import { changeStatus, uploadFeedback } from "../../Fire/Complaints";

const Flexbox = (props) => {
  const [feedbackText, setFeedbackText] = useState(props.deptFeedback);
  const [isOpen, setIsOpen] = useState(false);

  const date = new Date(props.date);

  const markCompleteHandler = () => {
    changeStatus(props.id, 1);
  };

  const ignoreHandler = () => {
    changeStatus(props.id, 2);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const feedbackSubmitHandler = () => {
    uploadFeedback(props.id, feedbackText);
  };

  return (
    <div className="complaintcard">
      <Route component={Feedbackpopup} exact path="/complaints/feedback" />
      <div className="title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <h4>{props.name}</h4>
              <h4 className="id">{props.id}</h4>
            </div>
            <div className="col-sm address">
              <h4>{null}</h4>
            </div>
            <div className="col-sm ">
              <h4>{props.number}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 sidecolumn">
            <h5>{props.department}</h5>
            <hr />
            <h5>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</h5>
            <hr />
            <h5>
              {props.status == 0
                ? "pending"
                : props.status == 1
                ? "solved"
                : props.status == 2
                ? "ignored"
                : "error"}
            </h5>
            <hr />
          </div>
          <div className="col">
            {props.imageUrl ? <img src={props.imageUrl} /> : null}
            <div className="data">
              <h6 className="complaint">{props.complaintText}</h6>
              <h6 className="complaint">Department Feedback:{props.deptFeedback?props.deptFeedback:<span style={{color:"red"}}>No feedback yet!</span>}</h6>
            </div>
            <div className="buttons">
              <div className="modalWrapper">
                <Popup
                  trigger={
                    <button className="btn btn-outline-secondary">
                      Feedback
                    </button>
                  }
                  position="top-center"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                          Submit your Feedback
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <input
                          value={feedbackText}
                          type="text"
                          onChange={(e) => {
                            setFeedbackText(e.target.value);
                            e.preventDefault();
                          }}
                        />
                        <input type="file" />
                        <button className="btn btn-secondary">Upload</button>
                      </div>
                      <div className="modal-footer">
                        <button onClick={feedbackSubmitHandler} type="button" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </Popup>
              </div>
              <button
                onClick={markCompleteHandler}
                type="button"
                className="btn btn-outline-secondary"
              >
                Mark Complete
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Transfer
              </button>
              <button
                onClick={ignoreHandler}
                type="button"
                className="btn btn-outline-secondary"
              >
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
