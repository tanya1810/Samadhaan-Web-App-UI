import React, { useState, useEffect } from "react";
import "./Complaints.css";
import { fetchComplaints } from "../Fire/Complaints";
import Bar from "./complaints/navbar";
import { useSelector, useDispatch } from "react-redux";
import FlexboxList from "./complaints/flexboxlist";
import Feedback from "./complaints/feedbackpopup";
import { dataarray } from "./complaints/dataarray";
import LoadingScreen from "./LoadingScreen";
import * as complaintActions from '../store/actions/complaints';

const Complaints = () => {
  const city = useSelector((state) => state.user.user.city);
  const state = useSelector((state) => state.user.user.state);
  const dispatch = useDispatch();
  const [isPopup, setIsPopup] = useState(false);
  const [filter,setFilter] = useState("all");
  const allComplaints = useSelector(state=>state.complaints.complaints);
  const solvedComplaints = useSelector(state=>state.complaints.solvedComplaints);
  const ignoredComplaints = useSelector(state=>state.complaints.ignoredComplaints);
  const pendingComplaints = useSelector(state=>state.complaints.pendingComplaints);
  const [isLoading, setIsLoading] = useState(true);

  const checkFilter = ()=>{
    switch(filter){
      case "all":
        return allComplaints;
      case "pending":
        return pendingComplaints; 
      case "solved":
        return solvedComplaints;
      case "ignored":
        return ignoredComplaints;
      default:
        console.log("I ran")
        return allComplaints;
    }
  
  }

  useEffect(() => {
    dispatch(complaintActions.fetchComplaints(city, state, setIsLoading))
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen/>
      ) : (
        <div>
          <Bar />
          <FlexboxList setFilter={setFilter} setIsPopup={setIsPopup} dataarray={checkFilter()} />
          {isPopup ? <Feedback /> : null}
        </div>
      )}
    </div>
  );
};

export default Complaints;
