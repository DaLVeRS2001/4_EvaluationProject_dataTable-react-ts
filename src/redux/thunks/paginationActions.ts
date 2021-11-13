import {Dispatch} from "redux";

import {TDefaultAC} from "../../types/#common";
import {PaginationActions, PaginationActionTypes} from "../../types/reducerTypes/pagination";


export const setCurrentPage: TDefaultAC = (page: number) => (dispatch: Dispatch<PaginationActions>) => {
        dispatch({type: PaginationActionTypes.CURRENT_PAGE, payload: page})
        dispatch({type: PaginationActionTypes.INTERVAL})
    },
    setElemsCountShown: TDefaultAC = (count: number) => (dispatch: Dispatch<PaginationActions>) => {
        dispatch({type: PaginationActionTypes.ELEMS_COUNT_SHOWN, payload: count})
        dispatch({type: PaginationActionTypes.INTERVAL})
    }

