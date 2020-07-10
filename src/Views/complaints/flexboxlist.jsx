import React from "react";
// -----------------fontawesome----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
// --------------------------------------------------------
import LandingComplaint from "./Landingcomplaint";
import "./flexboxlist.css";
import { dataarray } from "./dataarray";
import { propTypes } from "react-bootstrap/esm/Image";

const flexboxlist = ({ dataarray, setFilter }) => {
  console.log(dataarray);
  const array = dataarray.map((user, i) => {
    return <LandingComplaint {...dataarray[i]} />;
  });
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-3 column3"
            style={{ position: "fixed", zIndex: "1" }}
          >
            <div style={{ color: "blue" }}>
              All complaints
              <button onClick={()=>{setFilter("all")}}>All Complaints</button>
              <FontAwesomeIcon className="fa" icon={faList} />
              <br />
            </div>
            <hr />
            <div style={{ color: "green" }}>
              Processing
              <button onClick={()=>{setFilter("pending")}}>Pending Complaints</button>
              <FontAwesomeIcon
                className="fa fa-cog fa-spin fa-pulse fa-3x fa-fw"
                icon={faCog}
              />
              <br />
            </div>
            <hr />
            <div style={{ color: "#FFD700" }}>
              Completed
              <button onClick={()=>{setFilter("solved")}}>Solved Complaints</button>
              <FontAwesomeIcon className="fa" icon={faCheck} />
              <br />
            </div>
            <hr />
            <div style={{ color: "red" }}>
              Ignore
              <button onClick={()=>{setFilter("ignored")}}>Ignored Complaints</button>
              <FontAwesomeIcon className="fa" icon={faTimes} />
              <br />
            </div>
          </div>
          <div className="col flexlist">{array}</div>
          <div className="topbackground"></div>
        </div>
      </div>
    </div>
  );
};

export default flexboxlist;
