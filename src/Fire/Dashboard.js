import { db } from "../firebase";

export const fetchDashboardData = async (city, state, setState) => {
  const data = {};
  const complaintsCollectionRef =db.collection("/Complaints");
  const totalComplaintsQuery =complaintsCollectionRef.where("state", "==", state).where("city", "==", city);
//   const totalComplaintsQuerySnapshot = await totalComplaintsQuery.get();
//   const totalComplaints = totalComplaintsQuerySnapshot.size;
  totalComplaintsQuery.onSnapshot(async totalComplaintsQuerySnapshot=>{
      data.total = totalComplaintsQuerySnapshot.size;
      const solvedComplaintsQuerySnapshot = await totalComplaintsQuerySnapshot.query.where("status", "==", "solved").get();
      data.solved = solvedComplaintsQuerySnapshot.size
      const ignoredComplaintsQuerySnapshot = await totalComplaintsQuerySnapshot.query.where("status", "==", "ignored").get();
      data.ignored = ignoredComplaintsQuerySnapshot.size;
      const pendingComplaintsQuerySnapshot = await totalComplaintsQuerySnapshot.query.where("status", "==", "pending").get();
      data.pending = pendingComplaintsQuerySnapshot.size
      setState(data);
  })
};
