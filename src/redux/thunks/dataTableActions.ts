import {Dispatch} from "redux";
import {DataTableActions, DataTableActionTypes} from "../../types/reducerTypes/dataTable";
import {TDefaultAC} from "../../types/#common";

export const getAllTableData: TDefaultAC = () => (dispatch: Dispatch<DataTableActions>) => {
    dispatch({type: DataTableActionTypes.TEST})
}