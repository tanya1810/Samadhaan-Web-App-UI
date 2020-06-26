import React from "react";
import FlexboxList from "./complaints/flexboxlist";
import { dataarray } from "./complaints/dataarray";
import Bar from "./complaints/navbar";
const Complaints = () => {
  return (
    <div>
      <Bar />
      <FlexboxList dataarray={dataarray} />
    </div>
  );
};

export default Complaints;
