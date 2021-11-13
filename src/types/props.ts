import {TableDataOne} from "./reducerTypes/dataTable";
import {TPagination} from "./reducerTypes/pagination";
import {ReactElement} from "react";

//DataTable
export interface IDataTable {
    tableData: TableDataOne[]
    getAllTableData: ()=> void
    pagination: TPagination
}

//DataTable => MyBody
export interface IMyBody{
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