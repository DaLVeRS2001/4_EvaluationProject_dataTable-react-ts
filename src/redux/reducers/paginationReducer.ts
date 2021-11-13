import {IPaginationState, PaginationActions, PaginationActionTypes} from "../../types/reducerTypes/pagination";


const initialState: IPaginationState = {
    pagination: {
        elemCountShown: 25,
        currentPage: 1,
        from: 0,
        to: 25
    }
}

const paginationReducer = (
    state = initialState, action: PaginationActions
): IPaginationState => {
    switch (action.type) {
        case PaginationActionTypes.ELEMS_COUNT_SHOWN:
            return {
                ...initialState,
                pagination: {
                    ...initialState.pagination, elemCountShown: action.payload,
                }
            }
        case PaginationActionTypes.CURRENT_PAGE:
            return {
                ...state,
                pagination: {
                    ...state.pagination, currentPage: action.payload
                }
            }
        case PaginationActionTypes.INTERVAL:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    from: state.pagination.elemCountShown * (state.pagination.currentPage - 1),
                    to: state.pagination.elemCountShown * state.pagination.currentPage
                }
            }
        default:
            return state
    }
}


export default paginationReducer