import {Dispatch} from "redux";
import {DataTableActions} from "./reducerTypes/dataTable";
import {PaginationActions} from "./reducerTypes/pagination";
import {AppActions} from "./reducerTypes/app";

//REDUX
export type AllActions = DataTableActions | PaginationActions | AppActions
export type  TDefaultAC = (...arg: any) => (dispatch: Dispatch<AllActions>) => void

