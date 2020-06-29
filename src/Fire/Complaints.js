import React from "react";
import { myFirebase, db } from "../firebase";

export const fetchComplaints = async (city, state, setState, setLoading) => {
  let data = [];
  let temp = {};
  console.log("fetchcomplaints started");
  const statesRef = db.collection("/States");
  statesRef
    .doc(state)
    .collection(city)
    .onSnapshot((departmentQuerySnapshot) => {
      const departmentDocChangeArray = departmentQuerySnapshot.docChanges();
      departmentDocChangeArray.forEach((departmentDocChange) => {
        temp.department = departmentDocChange.doc.id;
        departmentDocChange.doc.ref
          .collection("Complaints")
          .onSnapshot((complaintIdQuerySanpshot) => {
            const complaintIdDocChangesArray = complaintIdQuerySanpshot.docChanges();
            complaintIdDocChangesArray.forEach((complaintIdDocChange) => {
              temp.id = complaintIdDocChange.doc.id;
              const complaintDocRef = complaintIdDocChange.doc.data().ref;
              complaintDocRef.onSnapshot((complaintDocSnapshot) => {
                temp.text = complaintDocSnapshot.data().complaintText;
                temp.imageUrl = complaintDocSnapshot.data().imageUrl;
                temp.time = complaintDocSnapshot.data().time;
                const authorDocRef = complaintDocSnapshot.data().author;
                authorDocRef.onSnapshot((authorDocSnapshot) => {
                  temp.name =
                    authorDocSnapshot.data().firstName +
                    " " +
                    authorDocSnapshot.data().lastName;
                  temp.number = authorDocSnapshot.data().phoneNumber;
                  data.push(temp);
                  setState((prev)=>{return ([...prev, temp])})
                  setLoading(false);
                });
              });
            });
          });
      });
    });
  // setState(data);
  console.log("fetchComplaints ended");
};
