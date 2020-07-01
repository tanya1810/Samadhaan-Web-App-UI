import React, { useState, useEffect } from "react";
import { fetchComplaints } from "../Fire/Complaints";
import Bar from "./complaints/navbar";
import { useSelector } from "react-redux";
import FlexboxList from "./complaints/flexboxlist";
import Feedback from "./complaints/feedbackpopup";

const Complaints = () => {
  const city = useSelector((state) => state.user.user.city);
  const state = useSelector((state) => state.user.user.state);
  const [isPopup, setIsPopup] = useState(false);
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchComplaints(city, state, setDataArray, setIsLoading);
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Bar />
          <FlexboxList setIsPopup={setIsPopup} dataarray={dataArray} />
          {isPopup ? <Feedback /> : null}
        </div>
      )}
    </div>
  );
};

export default Complaints;
