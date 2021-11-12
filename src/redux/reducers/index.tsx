import {combineReducers} from "redux";
import dataTableReducer from "./dataTableReducer";

export const reducers = combineReducers({
    dataTable: dataTableReducer
})

export type RootReducers = ReturnType<typeof reducers>