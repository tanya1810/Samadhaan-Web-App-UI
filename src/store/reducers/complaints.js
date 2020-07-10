import { FETCH_COMPLAINTS } from "../actions/complaints";

const initialState = {
  complaints: [],
  pendingComplaints: [],
  solvedComplaints: [],
  ignoredComplaints: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPLAINTS:
      const newPendingComplaints = action.data.filter((complaint) => {
        return complaint.status == 0;
      });
      const newSolvedComplaints = action.data.filter((complaint) => {
        return complaint.status == 1;
      });
      const newIgnoredComplaints = action.data.filter((complaint) => {
        return complaint.status == 2;
      });
      return {
        ...state,
        complaints: action.data,
        pendingComplaints: newPendingComplaints,
        solvedComplaints: newSolvedComplaints,
        ignoredComplaints: newIgnoredComplaints,
      };
    default:
      return state;
  }
};
