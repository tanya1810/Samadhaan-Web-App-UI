import React, { useState, useEffect } from "react";
import "./Complaints.css";
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
        <img src="https://media2.giphy.com/media/1vY8RboCYg4wM/200w.webp?cid=ecf05e4742e85bcbee9a8de558ec7fb82f836d8dc432438b&rid=200w.webp" />
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
