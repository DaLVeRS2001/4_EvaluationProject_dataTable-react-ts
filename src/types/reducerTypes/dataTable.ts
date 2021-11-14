import {TPagination} from "./pagination";
import {ChangeFieldValue} from "../utility";
import {Dispatch} from "redux";

//ALIASES
export type TableDataOneStatus = 'Новое' | 'Выполняется' | 'Назначено' | 'Отменено' | ''
export type TableDataKeys = ['date', 'aboutTask', 'aboutAccount', 'status']
export type TableDataDeepKeys = 'number' | 'date' | 'taskType' | 'author' | 'account' | 'terminal'
export type TableDataOne = {
    date: {
        number: `№${string}` | ''
        date: Date |  string
    }
    aboutTask: {
        taskType: string
        author: string
    }
    aboutAccount: {
        account: string,
        terminal: string
    }
    status: TableDataOneStatus
    id?: number | null
}

//RootState
export interface IDataTableState{
    tableDataOne: TableDataOne
    tableData: TableDataOne[]
}

//ENUMS
export enum DataTableActionTypes{
    TABLE_DATES= 'TABLE_DATES',
    CHANGE_FIELD= 'CHANGE_FIELD',
    TABLE_ONE_EL= 'TABLE_ONE_EL',
    CLEAR_TABLE_FIELDS='CLEAR_TABLE_FIELDS'
}

//ACTIONS
export interface ITableDataOneAction{
    type: DataTableActionTypes.TABLE_DATES
    payload: TableDataOne[]
}
export interface ITableOneElAction{
    type: DataTableActionTypes.TABLE_ONE_EL
    payload: TableDataOne
}
export interface IClearTableFieldsAction{
    type: DataTableActionTypes.CLEAR_TABLE_FIELDS
}
export interface IChangeFieldAction{
    type: DataTableActionTypes.CHANGE_FIELD
    payload: {
        name: keyof TableDataOne
        deepName?: TableDataDeepKeys
        val: any
    }
}

//RootActionsType
export type DataTableActions = ITableDataOneAction | ITableOneElAction | IClearTableFieldsAction

//CONNECT STATES
export interface IDataTableConnect{
    tableData: TableDataOne[]
    pagination: TPagination
    currentPage: number
    width: number
}
export interface IAddItemConnect{
    tableDataOne: TableDataOne
}

//THUNKS
export type TChangeField = <FieldName>(val: ChangeFieldValue<FieldName>, name: keyof TableDataOne, deepName?: TableDataDeepKeys) =>
    (dispatch: Dispatch<IChangeFieldAction>) => void