//ALIASES
export type TPagination = {
    elemCountShown: number,
    currentPage: number,
    from: number,
    to: number
}

//RootState
export interface IPaginationState{
    pagination: TPagination
}

//ENUMS
export enum PaginationActionTypes{
    CURRENT_PAGE= 'CURRENT_PAGE',
    ELEMS_COUNT_SHOWN= 'ELEMS_COUNT_SHOWN',
    INTERVAL= 'INTERVAL'
}

//ACTIONS
export interface ICurrentPageAction{
    type: PaginationActionTypes.CURRENT_PAGE
    payload: number
}
export interface IElemsCountShownAction{
    type: PaginationActionTypes.ELEMS_COUNT_SHOWN
    payload: number
}
export interface IIntervalAction{
    type: PaginationActionTypes.INTERVAL
}

//RootActionsType
export type PaginationActions = ICurrentPageAction | IElemsCountShownAction | IIntervalAction

//CONNECT STATES
export interface IPaginationConnect{
    pagination: TPagination
}