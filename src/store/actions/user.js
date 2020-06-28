import { db } from "../../firebase";
import { firebaseLogout } from "../../Fire/Auth";

export const FETCH_CITY = "FETCH_CITY";

export const fetchCity = (userId) => {
  return async (dispatch, setState) => {
    const userRef = db.collection("Admins").doc(userId);
    const userData = await userRef.get();
    if (userData.exists) {
      console.log(userData.data());
      dispatch({ type: FETCH_CITY, data: userData.data() });
    } else {
      firebaseLogout();
    }
  };
};
