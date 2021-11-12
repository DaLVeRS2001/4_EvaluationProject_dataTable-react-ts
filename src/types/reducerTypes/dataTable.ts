

//ALIASES
export type TableDataOneStatus = 'Новое' | 'Выполняется' | 'Назначено' | 'Отменено' | ''
export type TableDataKeys = ['date', 'aboutTask', 'aboutAccount', 'status']
export type TableDataOne = {
    date: {
        number: `№${string}` | ''
        date: Date
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
    TABLE_ONE_EL= 'TABLE_ONE_EL'
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

export interface IChangeFieldAction<T>{
    type: DataTableActionTypes.CHANGE_FIELD
    payload: {
        name: keyof TableDataOne
        deepName: string
        val: T
    }
}

//RootActionsType
export type DataTableActions = ITableDataOneAction | ITableOneElAction

//CONNECT STATES
export interface IDataTableConnect{
    tableData: TableDataOne[]
}
//ACTION-CREATORS

