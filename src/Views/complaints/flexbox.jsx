import React from "react";
import ReactDOM from "react-dom";
import "./flexbox.css";
import { dataarray } from "./dataarray";
import Feedbackpopup from "./feedbackpopup";
import { render } from "@testing-library/react";
import { Route, Link } from "react-router-dom";
import {changeStatus} from '../../Fire/Complaints'

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

  markCompleteHandler = () =>{
    console.log("Fired")
    changeStatus(this.props.id, 1)
  }

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
              <div class="col-sm address">
                <h4>{this.state.address}</h4>
              </div>
              <div class="col-sm ">
                <h4>{this.props.number}</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-3 sidecolumn">
              <h5>{this.props.department}</h5>
              <hr />
              <h5>{this.props.date}</h5>
              <hr />
              <h5>
                {this.props.status == 0
                  ? "pending"
                  : this.props.status == 1
                  ? "solved"
                  : "ignored"}
              </h5>
              <hr />
            </div>
            <div class="col">
              {this.props.imageUrl ? <img src={this.props.imageUrl} /> : null}
              <div className="data">
                <h6 className="complaint">{this.props.complaintText}</h6>
              </div>
              <div className="buttons">
                <Link to="/complaints/feedback">
                  <button class="btn btn-outline-secondary">Feedback</button>
                </Link>
                <button onClick={this.markCompleteHandler} type="button" class="btn btn-outline-secondary">
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
  }
}

export default Flexbox;
