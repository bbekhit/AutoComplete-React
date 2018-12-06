import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import bookReducer from "./bookReducer";

export default combineReducers({
    city: cityReducer,
    book: bookReducer,
   });
  