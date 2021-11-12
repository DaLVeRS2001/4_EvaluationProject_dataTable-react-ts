import {Dispatch} from "redux";
import {DataTableActions} from "./reducerTypes/dataTable";


//REDUX
export type AllActions = DataTableActions
export type  TDefaultAC = (...arg: any) => (dispatch: Dispatch<AllActions>) => void

