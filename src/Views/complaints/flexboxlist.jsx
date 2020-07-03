import React from "react";
// -----------------fontawesome----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
// --------------------------------------------------------
import Flexbox from "./flexbox";
import "./flexboxlist.css";
import { dataarray } from "./dataarray";

const flexboxlist = (props) => {
  const array = props.dataarray.map((user, i) => {
    return (
      <Flexbox
        {...props}
        name={props.dataarray[i].name}
        department={props.dataarray[i].department}
        number={props.dataarray[i].number}
        address={props.dataarray[i].address}
        id={props.dataarray[i].id}
        status={props.dataarray[i].status}
      />
    );
  });
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div className="col-3 column3" style={{ position: "fixed", zIndex: "1" }}>
            <div className="subpanel" style={{ color: "blue" }}>
              All complaints
            </div>
            <FontAwesomeIcon className="fa" icon={faList} />
            <br />
            <hr />
            <div className="subpanel" style={{ color: "green" }}>
              Processing{" "}
            </div>
            <FontAwesomeIcon
              className="fa fa-cog fa-spin fa-pulse fa-3x fa-fw"
              icon={faCog}
            />
            <br />
            <hr />
            <div className="subpanel" style={{ color: "#FFD700" }}>
              Completed{" "}
            </div>
            <FontAwesomeIcon className="fa" icon={faCheck} />
            <br />
            <hr />
            <div className="subpanel" style={{ color: "red" }}>
              Ignore{" "}
            </div>
            <FontAwesomeIcon className="fa" icon={faTimes} />
            <br />
          </div>
          <div class="col flexlist">{array}</div>
        </div>
      </div>
    </div>
  );
};

export default flexboxlist;