import {combineReducers} from "redux";
import dataTableReducer from "./dataTableReducer";
import paginationReducer from "./paginationReducer";
import appReducer from "./appReducer";

export const reducers = combineReducers({
    dataTable: dataTableReducer,
    pagination: paginationReducer,
    app: appReducer
})

export type RootReducers = ReturnType<typeof reducers>