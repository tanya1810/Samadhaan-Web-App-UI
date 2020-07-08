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

const flexboxlist = ({ dataarray }) => {
  console.log(dataarray);
  const array = dataarray.map((user, i) => {
    return (
      <LandingComplaint
        complaintText={dataarray[i].complaintText}
        name={dataarray[i].name}
        department={dataarray[i].department}
        number={dataarray[i].number}
        address={dataarray[i].address}
        id={dataarray[i].id}
        date={dataarray[i].date}
        status={dataarray[i].status}  
        imageUrl = {dataarray[i].imageUrl}
      />
    );
  });
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-3 column3" style={{ position: "fixed", zIndex: "1" }}>
            <div className="subpanel" style={{ color: "blue" }}>
              All complaints
            </div>
            <FontAwesomeIcon className="fa" icon={faList} />
            <br />
            <hr />
            <div className="subpanel" style={{ color: "green" }}>
              Processing
            </div>
            <FontAwesomeIcon
              className="fa fa-cog fa-spin fa-pulse fa-3x fa-fw"
              icon={faCog}
            />
            <br />
            <hr />
            <div className="subpanel" style={{ color: "#FFD700" }}>
              Completed
            </div>
            <FontAwesomeIcon className="fa" icon={faCheck} />
            <br />
            <hr />
            <div className="subpanel" style={{ color: "red" }}>
              Ignore
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
