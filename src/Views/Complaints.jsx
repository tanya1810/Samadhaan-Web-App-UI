import React, { useState, useEffect, useCallback } from "react";
import FlexboxList from "./complaints/FlexboxList";
import { dataarray } from "./complaints/dataarray";
import { fetchComplaints } from "../Fire/Complaints";
import Bar from "./complaints/navbar";
import { useSelector } from "react-redux";
const Complaints = () => {
  const city = useSelector((state) => state.user.user.city);
  const state = useSelector((state) => state.user.user.state);
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect started");
    fetchComplaints(city, state, setDataArray, setIsLoading);
    console.log("useEffect ended");
  }, []);

  console.log("IN render");
  console.log(dataArray);

  return (
    <div>
      {isLoading ? <h1>Loading...</h1> : (
        <div>
          <Bar />
          <h1>{dataArray.length}</h1>
          <FlexboxList dataarray={dataArray} />
        </div>
      )}
    </div>
  );
};

export default Complaints;
