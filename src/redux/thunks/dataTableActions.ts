import {Dispatch} from "redux";
import dataTableApi from "../../API/dataTable";
import {
    DataTableActions,
    DataTableActionTypes,
    TableDataOne, TChangeField
} from "../../types/reducerTypes/dataTable";
import {TDefaultAC} from "../../types/#common";



export const getAllTableData: TDefaultAC = () => (dispatch: Dispatch<DataTableActions>) => {
        dataTableApi.getAll()
            .then((tableData) => dispatch({type: DataTableActionTypes.TABLE_DATES, payload: tableData}))
    },
    getTableOneEl: TDefaultAC = (id: number) => (dispatch: Dispatch<DataTableActions>) => {
        dataTableApi.getOne(id)
            .then((tableData) =>
                dispatch({type: DataTableActionTypes.TABLE_ONE_EL, payload: tableData}))
    },
    addTableOneEl: TDefaultAC = (body: TableDataOne) => (dispatch: Dispatch<any>) => {
        dataTableApi.addOne(body)
            .then(() => dispatch(getAllTableData()))
    },
    deleteTableOneEl: TDefaultAC = (id: number) => (dispatch: Dispatch<any>) => {
        dataTableApi.deleteOne(id)
            .then(() => dispatch(getAllTableData()))
    },
    changeTableOneEl: TDefaultAC = (body: TableDataOne, id: number) => (dispatch: Dispatch<any>) => {
        dataTableApi.changeOne(body, id)
            .then(() => dispatch(getAllTableData()))
    },
    clearTableFields: TDefaultAC = () => (dispatch: Dispatch<DataTableActions>) => {
        dispatch({type: DataTableActionTypes.CLEAR_TABLE_FIELDS})
    },
    changeField: TChangeField = (val, name, deepName) =>
        (dispatch) => {
            dispatch({type: DataTableActionTypes.CHANGE_FIELD, payload: {name, val, deepName}})
        }
