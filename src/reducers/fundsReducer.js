import * as actionTypes from "../actions/actionTypes";

const initialState = {
  funds: 0,
};

const fundsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FUNDS:
      return {
        ...state,
        funds: state.funds + action.payload,
      };
    case actionTypes.WITHDRAW_FUNDS:
      return {
        ...state,
        funds: state.funds - action.payload,
      };
    default:
      return state;
  }
};

export default fundsReducer;
