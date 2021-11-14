import {Dispatch} from "redux";
import {TDefaultAC} from "../../types/#common";
import {AppActions, AppActionTypes} from "../../types/reducerTypes/app";


export const setCurrentWidth: TDefaultAC = (width: number) => (dispatch: Dispatch<AppActions>) => {
    dispatch({type: AppActionTypes.WIDTH, payload: width})
}
