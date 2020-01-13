import { combineReducers } from "redux";

import authReducer from "./authReducer";
import modalReducer from "./modalReducer";
import itemsReducer from "./itemsReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  auth: authReducer,
  modal: modalReducer,
  items: itemsReducer,
  category: categoryReducer,
});
