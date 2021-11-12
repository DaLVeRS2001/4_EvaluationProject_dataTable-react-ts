import {TableDataOne} from "./reducerTypes/dataTable";

//DataTable
export interface IDataTable {
    tableData: TableDataOne[]
    getAllTableData: ()=> void
}