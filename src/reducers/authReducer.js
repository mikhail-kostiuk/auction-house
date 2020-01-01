import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;