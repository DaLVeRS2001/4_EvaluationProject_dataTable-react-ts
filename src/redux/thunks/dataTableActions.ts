import {Dispatch} from "redux";
import dataTableApi from "../../API/dataTable";

import {
    DataTableActions,
    DataTableActionTypes,
    IChangeFieldAction,
    TableDataOne
} from "../../types/reducerTypes/dataTable";
import {TDefaultAC} from "../../types/#common";
import {ChangeFieldValue} from "../../types/utility";


export const getAllTableData: TDefaultAC = () => (dispatch: Dispatch<DataTableActions>) => {
        dataTableApi.getAll()
            .then((tableData) => dispatch({type: DataTableActionTypes.TABLE_DATES, payload: tableData}))
    },
    deleteTableOneEl: TDefaultAC = (id: number) => () => {
        dataTableApi.deleteOne(id)
            .then(() => getAllTableData())
    },
    changeTableOneEl: TDefaultAC = (body: TableDataOne, id: number) => () => {
        dataTableApi.changeOne(body, id)
            .then(() => getAllTableData())

    },
    getTableOneEl: TDefaultAC = (id: number) => (dispatch: Dispatch<DataTableActions>) => {
        dataTableApi.getOne(id)
            .then((tableData) =>
                dispatch({type: DataTableActionTypes.TABLE_ONE_EL, payload: tableData}))
    },
    changeField = <FieldName>(val: ChangeFieldValue<FieldName>, name: keyof TableDataOne, deepName: string) =>
        (dispatch: Dispatch<IChangeFieldAction<ChangeFieldValue<FieldName>>>): void => {
            dispatch({type: DataTableActionTypes.CHANGE_FIELD, payload: {name, val, deepName}})
        }
