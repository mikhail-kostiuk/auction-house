import * as actionTypes from "./actionTypes";

export const loginUser = userData => {
  return dispatch => {
    console.log(userData);
    dispatch({ type: actionTypes.SET_CURRENT_USER, payload: userData });
  };
};
