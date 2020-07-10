import { db } from "../../firebase";

export const FETCH_COMPLAINTS = "FETCH_COMPLAINTS";

export const fetchComplaints = (city, state, setLoading) => {
  return async (dispatch, getState) => {
    let data = {};

    console.log("fetchcomplaints started");
    const statesRef = db.collection("/States");
    const departmentQuerySnapshot = await statesRef
      .doc(state)
      .collection(city)
      .get();

    const departmentDocChangeArray = departmentQuerySnapshot.docChanges();
    for (var i = 0; i < departmentDocChangeArray.length; i++) {
      const departmentDocChange = departmentDocChangeArray[i];
      console.log(departmentDocChange.doc.id);
      let complaintIdQuerySnapshot = await departmentDocChange.doc.ref
        .collection("Complaints")
        .get();
      if (!complaintIdQuerySnapshot) return;
      const complaintIdDocChangesArray = complaintIdQuerySnapshot.docChanges();
      for (var j = 0; j < complaintIdDocChangesArray.length; j++) {
        const complaintIdDocChange = complaintIdDocChangesArray[j];
        const complaintDocRef = complaintIdDocChange.doc.data().ref;
        complaintDocRef.onSnapshot(async (complaintDocSnapshot) => {
          const authorDocRef = complaintDocSnapshot.data().author;
          const authorDocSnapshot = await authorDocRef.get();
          let temp = {};
          temp.id = complaintDocRef.id;
          // temp.department = complaintDocSnapshot.data().department;
          // temp.complaintText = complaintDocSnapshot.data().complaintText;
          // temp.imageUrl = complaintDocSnapshot.data().imageUrl;
          // temp.status = complaintDocSnapshot.data().status;
          // temp.date = complaintDocSnapshot.data().date;
          // temp.deptFeedback = complaintDocSnapshot.data().deptFeedback;
          temp.name = authorDocSnapshot.data().name;
          temp.phoneNumber = authorDocSnapshot.data().phoneNumber;
          data[temp.id] = { ...complaintDocSnapshot.data(), ...temp };
          // console.log("heresdata", JSON.stringify(data));
          dispatch({ type: FETCH_COMPLAINTS, data: Object.values(data) });
          setLoading(false);
        });
      }
    }
    console.log("fetchComplaints ended");
  };
};
