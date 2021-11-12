import {TableDataStatus} from "../reducerTypes/dataTable";

export type CorrectRequest<T> = T extends "post" | "put" ? {url: string, method: T , body: any}
    :  (T extends "get" | "delete" ?  {url: string, method: T}
        : never)

export type ChangeFieldValue<T> =
    T extends 'number' ? `№${string}`:
        T extends 'date' ?  Date :
            T extends 'status' ? TableDataStatus : string