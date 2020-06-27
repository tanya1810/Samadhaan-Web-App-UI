import React, { useState } from "react";
import FlexboxList from "./complaints/FlexboxList";
import { dataarray } from "./complaints/dataarray";
import Bar from "./complaints/navbar";
const Complaints = () => {
  const [dataArray, setDataArray] = useState([]); 
  return (
    <div>
      <Bar />
      <FlexboxList dataarray={dataArray} />
    </div>
  );
};

export default Complaints;
