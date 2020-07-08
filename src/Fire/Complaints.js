import { db, myFirebase } from "../firebase";

export const fetchComplaints = async (city, state, setState, setLoading) => {
  let data = {};
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
        console.log(departmentDocChange.doc.id);
        departmentDocChange.doc.ref
          .collection("Complaints")
          .onSnapshot((complaintIdQuerySnapshot) => {
            if (!complaintIdQuerySnapshot) return;
            const complaintIdDocChangesArray = complaintIdQuerySnapshot.docChanges();
            complaintIdDocChangesArray.forEach((complaintIdDocChange) => {
              // temp.id = complaintIdDocChange.doc.id;
              const complaintDocRef = complaintIdDocChange.doc.data().ref;
              complaintDocRef.onSnapshot((complaintDocSnapshot) => {
                temp.id = complaintDocRef.id;
                temp.complaintText = complaintDocSnapshot.data().complaintText;
                temp.imageUrl = complaintDocSnapshot.data().imageUrl;
                temp.status = complaintDocSnapshot.data().status;
                temp.date = complaintDocSnapshot.data().date;
                const authorDocRef = complaintDocSnapshot.data().author;
                authorDocRef.onSnapshot((authorDocSnapshot) => {
                  temp.name = authorDocSnapshot.data().name;
                  temp.number = authorDocSnapshot.data().phoneNumber;
                  data[temp.id] = temp;
                  console.log("heresdata", data);
                  setState(Object.values(data));
                  setLoading(false);
                });
              });
            });
          });
      });
    });
  console.log("fetchComplaints ended");
};

export const changeStatus = async (complaintId, status) => {
  await db.collection("Complaints").doc(complaintId).update({ status: status });
};

export const testing = async (city, state, setState, setLoading) =>{
let data = {};
let temp = {};
  console.log("fetchcomplaints started");
  const statesRef = db.collection("/States");
  statesRef
    .doc(state)
    .collection(city)
    .onSnapshot((departmentQuerySnapshot) => {
      const departmentDocChangeArray = departmentQuerySnapshot.docChanges();
      for(var i=0;i<departmentDocChangeArray.length;i++)
       {
        const departmentDocChange = departmentDocChangeArray[i];
        temp.department = departmentDocChange.doc.id;
        console.log(departmentDocChange.doc.id);
        departmentDocChange.doc.ref
          .collection("Complaints")
          .onSnapshot((complaintIdQuerySnapshot) => {
            if (!complaintIdQuerySnapshot) return;
            const complaintIdDocChangesArray = complaintIdQuerySnapshot.docChanges();
            for(var j=0;j<complaintIdDocChangesArray.length;j++)
            {
              const complaintIdDocChange = complaintIdDocChangesArray[j];
              // temp.id = complaintIdDocChange.doc.id;
              const complaintDocRef = complaintIdDocChange.doc.data().ref;
              complaintDocRef.onSnapshot(async (complaintDocSnapshot) => {
                temp.id = complaintDocRef.id;
                temp.complaintText = complaintDocSnapshot.data().complaintText;
                temp.imageUrl = complaintDocSnapshot.data().imageUrl;
                temp.status = complaintDocSnapshot.data().status;
                temp.date = complaintDocSnapshot.data().date;
                const authorDocRef = complaintDocSnapshot.data().author;
                const authorDocSnapshot = await authorDocRef.get()
                  temp.name = authorDocSnapshot.data().name;
                  temp.number = authorDocSnapshot.data().phoneNumber;
                  data[temp.id] = temp;
                  console.log("heresdata", data);
                  setState(Object.values(data));
                  setLoading(false);
              });
            };
          });
      };
    });
  console.log("fetchComplaints ended");
};
