import {Dispatch} from "redux";
import {DataTableActions} from "./reducerTypes/dataTable";
import {PaginationActions} from "./reducerTypes/pagination";

//REDUX
export type AllActions = DataTableActions | PaginationActions
export type  TDefaultAC = (...arg: any) => (dispatch: Dispatch<AllActions>) => void

