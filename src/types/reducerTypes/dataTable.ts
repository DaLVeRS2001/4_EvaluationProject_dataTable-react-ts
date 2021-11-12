

//ALIASES
export type TableDataStatus = 'Новое' | 'Выполняется' | 'Назначено' | 'Отменено' | ''
export type TableData = {
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
    status: TableDataStatus
}

//RootState
export interface IDataTableState{
    tableDate: TableData
    tableDates: TableData[]
}

//ENUMS
export enum DataTableActionTypes{
    TABLE_DATES= 'TABLE_DATES',
    CHANGE_FIELD= 'CHANGE_FIELD',
    TABLE_ONE_EL= 'TABLE_ONE_EL'
}

//ACTIONS
export interface ITableDataAction{
    type: DataTableActionTypes.TABLE_DATES
    payload: TableData[]
}

export interface ITableOneElAction{
    type: DataTableActionTypes.TABLE_ONE_EL
    payload: TableData
}

export interface IChangeFieldAction<T>{
    type: DataTableActionTypes.CHANGE_FIELD
    payload: {
        name: keyof TableData
        deepName: string
        val: T
    }
}

//RootActionsType
export type DataTableActions = ITableDataAction | ITableOneElAction

//CONNECT STATES

//ACTION-CREATORS

