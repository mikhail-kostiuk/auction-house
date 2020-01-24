import * as actionTypes from "../actions/actionTypes";

const initialState = {
  category: null,
  subcategory: null,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
