import React, { Component } from "react";

function Feedbackpopup(props) {
  const handleClose = () => {
    props.history.push("/complaints");
  };

  // function FileSelected = (event) => {
  //   console.log(event);
  // }

  return (
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
          <input type="text" />
          <input type="file" />
          <button className="btn btn-secondary">Upload</button>
        </div>
        <div className="modal-footer">
          <button
            onClick={handleClose}
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}
export default Feedbackpopup;
