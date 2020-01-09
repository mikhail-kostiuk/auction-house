import * as actionTypes from "./actionTypes";

export const setCategory = category => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_CATEGORY, payload: category });
  };
};

export const setSubcategory = subcategory => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_SUBCATEGORY, payload: subcategory });
  };
};
