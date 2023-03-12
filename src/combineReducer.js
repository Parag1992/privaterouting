import { combineReducers } from "redux";
import userdetailreducers from "./reducer";

const combineReducer = combineReducers({userdetails:userdetailreducers});

export default combineReducer;