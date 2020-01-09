import * as actionTypes from "../actions/actionTypes";

const initialState = {
  category: null,
  subcategory: null,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
        subcategory: null,
      };
    case actionTypes.SET_SUBCATEGORY:
      return {
        ...state,
        category: null,
        subcategory: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
