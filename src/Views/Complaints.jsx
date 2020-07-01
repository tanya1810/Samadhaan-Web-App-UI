import React, { useState, useEffect } from "react";
import { fetchComplaints } from "../Fire/Complaints";
import Bar from "./complaints/navbar";
import { useSelector } from "react-redux";
import FlexboxList from "./complaints/flexboxlist";

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
          <FlexboxList dataarray={dataArray} />
        </div>
      )}
    </div>
  );
};

export default Complaints;
