import {Dispatch} from "redux";
import {DataTableActions} from "./reducerTypes/dataTable";


//REDUX
type AllActions = DataTableActions
export type  TDefaultAC = (...arg: any) => (dispatch: Dispatch<AllActions>) => void