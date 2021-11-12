
//ALIASES
export type TDataTable = {}

//RootState
export interface IDataTableState{

}

//ENUMS
export enum DataTableActionTypes{
    TEST= 'TEST'
}

//ACTIONS
export interface ITestAction{
    type: DataTableActionTypes.TEST
}

//RootActionsType
export type DataTableActions = ITestAction

//CONNECT STATES