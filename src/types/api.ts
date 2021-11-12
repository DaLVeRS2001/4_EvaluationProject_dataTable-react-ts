import { TableDataOne } from "./reducerTypes/dataTable";

export interface IDataTableApi{
    getAll: () => Promise<TableDataOne[]>
    getOne: (id: number) => Promise<TableDataOne>
    deleteOne: (id: number) => Promise<void>
    changeOne: (body: TableDataOne, id: number) => Promise<void>
}