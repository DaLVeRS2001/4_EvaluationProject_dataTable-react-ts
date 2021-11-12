import { TDataTable } from "./reducerTypes/dataTable";

export interface IDataTableApi{
    getAllTableData: () => Promise<TDataTable>
}