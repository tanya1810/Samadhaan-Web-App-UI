import React from "react";
import { myFirebase, db } from "../firebase";

export const fetchComplaints = async (city, state, setState) => {
  let data = [];
  console.log("fetchcomplaints started");
  const statesRef = db.collection("/States");

  const snapshot = await statesRef.doc(state).collection(city).get();
  var temp = {};
  snapshot.forEach(async (departmentDoc) => {
    temp.department = departmentDoc.id;
    const tempSnapshot = await departmentDoc.ref.collection("Complaints").get();
    tempSnapshot.forEach(async (complaintId) => {
      temp.id = complaintId.id;
      const complaintRef = await complaintId.data().ref;
      const complaintRefSnapshot = await complaintRef.get();
      const complaint = complaintRefSnapshot.data();
      temp.text = complaint.complaintText;
      temp.imageUrl = complaint.imageUrl;
      const authorRef = complaint.author;
      const authorRefSnapshot = await authorRef.get();
      const author = authorRefSnapshot.data();
      temp.name = author.firstName + author.lastName;
      temp.number = author.phoneNumber;
      data.push(temp);
    });
  });

  console.log("fetchComplaints ended");
};
