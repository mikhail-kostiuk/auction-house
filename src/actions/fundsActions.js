import * as actionTypes from "./actionTypes";

export const addFunds = amount => {
  return dispatch => {
    dispatch({ type: actionTypes.ADD_FUNDS, payload: amount });
  };
};

export const withdrawFunds = amount => {
  return dispatch => {
    dispatch({ type: actionTypes.WITHDRAW_FUNDS, payload: amount });
  };
};
