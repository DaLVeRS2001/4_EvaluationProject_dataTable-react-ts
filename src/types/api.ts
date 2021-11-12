import { TableData } from "./reducerTypes/dataTable";

export interface IDataTableApi{
    getAll: () => Promise<TableData[]>
    getOne: (id: number) => Promise<TableData>
    deleteOne: (id: number) => Promise<void>
    changeOne: (body: TableData, id: number) => Promise<void>
}