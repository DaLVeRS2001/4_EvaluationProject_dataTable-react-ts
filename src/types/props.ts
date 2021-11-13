import {TableDataOne, TChangeField} from "./reducerTypes/dataTable";
import {TPagination} from "./reducerTypes/pagination";
import {ReactElement} from "react";

//DataTable
export interface IDataTable {
    deleteTableOneEl: (id: number)=> void
    tableData: TableDataOne[]
    getAllTableData: ()=> void
    setCurrentPage: (page: number)=> void
    currentPage: number
    pagination: TPagination
    changeTableOneEl: (body: TableDataOne, id: number)=> void
}

//DataTable => MyBody
export interface IMyBody{
    handleModal: (id: any) => void
    deleteTableOneEl: (id: any)=> void
    setCurrentPage: (page: number)=> void
    currentPage: number
    tableData: TableDataOne[],
    from: number,
    to: number
}

//Pagination
export type TPageSwitchers = {
    page: ReactElement,
    switchers: [
        {type: 'first', src: string, alt: '<<'}, {type: 'prev', src: string, alt: '<'},
        {type: 'next', src: string, alt: '>'}, {type: 'last', src: string, alt: '>>'}
    ]
}
export interface IPagination {
    arrL: number
    setCurrentPage: (page: number)=> void
    setElemsCountShown: (count: number)=> void
    pagination: TPagination
}

//AddItemModal
export type FieldValue = `№${string}` | Date | string
export type ModalField = {
    title: string, type: string, name: string, ph: string, value: FieldValue,
    handler: (val: any)=> void, style?: {}, fieldError: {}, onClick?: ()=> void
}
export interface IAddItemModal{
    tableDataOne: TableDataOne
    changeField: TChangeField
    id?: number
    isCreate: boolean
    handleItemModal: ()=> void
    clearTableFields: ()=> void
    changeTableOneEl: (body: TableDataOne, id: number)=> void
    getTableOneEl: (id: number)=> void
    addTableOneEl: (body: TableDataOne)=> void
}

//ModalInput
export interface IModalInput {
    title: string
    type: string
    ph?: string
    name: string
    value: any
    handler: (arg: { val: string, type: string }) => void
    fieldError?: any
    style?: {}
    onClick?: () => void
}
