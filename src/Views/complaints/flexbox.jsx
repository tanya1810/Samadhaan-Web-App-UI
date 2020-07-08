import React from "react";
import ReactDOM from "react-dom";
import "./flexbox.css";
import { dataarray } from "./dataarray";
import Feedbackpopup from "./feedbackpopup";
import { dataarray } from "./dataarray";
import { render } from "@testing-library/react";
import Popup from "reactjs-popup";
import { Route, Link } from "react-router-dom";
import { changeStatus } from "../../Fire/Complaints";

class Flexbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      name: "",
      number: "",
      id: "",
      address: "",
      isOpen: false,
    };
  }

  date = new Date(this.props.date)

  markCompleteHandler = () => {
    changeStatus(this.props.id, 1);
  };

  ignoreHandler = () => {
    changeStatus(this.props.id, 2);
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    console.log(this.props);
  };

  render() {
    return (
      <div className="complaintcard">
          <Route component={Feedbackpopup} exact path="/complaints/feedback" />
        <div className="title">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm">
                <h4>{this.props.name}</h4>
                <h4 className="id">{this.state.id}</h4>
              </div>
              <div className="col-sm address">
                <h4>{this.state.address}</h4>
              </div>
              <div className="col-sm ">
                <h4>{this.props.number}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 sidecolumn">
              <h5>{this.props.department}</h5>
              <hr />
              <h5>{`${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`}</h5>
              <hr />
              <h5>
                {this.props.status == 0
                  ? "pending"
                  : this.props.status == 1
                  ? "solved"
                  : this.props.status == 2
                  ? "ignored"
                  : "error"}
              </h5>
              <hr />
            </div>
            <div className="col">
              {this.props.imageUrl ? <img src={this.props.imageUrl} /> : null}
              <div className="data">
                <h6 className="complaint">{this.props.complaintText}</h6>
              </div>
              <div className="buttons">
                <div className="modalWrapper">
                <Popup trigger={<button className="btn btn-outline-secondary">Feedback</button>} position="top-center">
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
                  <button type="button" className="btn btn-primary">
                   Submit
                   </button>
                  </div>
                </div>
                </div>
               </Popup>
               </div>                
                <button
                  onClick={this.markCompleteHandler}
                  type="button"
                  className="btn btn-outline-secondary"
                >
                  Mark Complete
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Transfer
                </button>
                <button onClick={this.ignoreHandler} type="button" className="btn btn-outline-secondary">
                  Ignore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Flexbox;
