//RootState
export interface IAppState{
    width: number
}

//ENUMS
export enum AppActionTypes {
    WIDTH= "WIDTH"
}

//ACTIONS
export interface IWidthAction{
    type: AppActionTypes.WIDTH,
    payload: number
}

//RootActionsType
export type AppActions = IWidthAction


