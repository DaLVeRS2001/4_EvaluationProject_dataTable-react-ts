import {combineReducers} from "redux";
import dataTableReducer from "./dataTableReducer";
import paginationReducer from "./paginationReducer";

export const reducers = combineReducers({
    dataTable: dataTableReducer,
    pagination: paginationReducer
})

export type RootReducers = ReturnType<typeof reducers>