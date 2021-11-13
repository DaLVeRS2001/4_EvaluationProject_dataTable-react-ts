import {
    DataTableActions,
    DataTableActionTypes, IChangeFieldAction,
    IDataTableState,
} from "../../types/reducerTypes/dataTable";

const initialState: IDataTableState = {
    tableDataOne: {
        date: {
            number: '',
            date: ''
        },
        aboutTask: {
            taskType: '',
            author: ''
        },
        aboutAccount: {
            account: '',
            terminal: ''
        },
        status: 'Новое',
        id: null
    },
    tableData: [],
}

const dataTableReducer = (
    state = initialState, action: DataTableActions | IChangeFieldAction
): IDataTableState => {
    switch (action.type) {
        case DataTableActionTypes.TABLE_DATES:
            return {
                ...state,
                tableData: [...action.payload].reverse()
            }
        case DataTableActionTypes.TABLE_ONE_EL:
            return {
                ...state,
                tableDataOne: {...action.payload}
            }
        case DataTableActionTypes.CLEAR_TABLE_FIELDS:
            return {
                ...state,
                tableDataOne: {...initialState.tableDataOne}
            }
        case DataTableActionTypes.CHANGE_FIELD:

            return {
                ...state,
                tableDataOne: {
                    ...state.tableDataOne,
                    [action.payload.name]: action.payload.deepName
                        // @ts-ignore
                        ? {...state.tableDataOne[action.payload.name], [action.payload.deepName]: action.payload.val}
                        : action.payload.val
                }
            }
        default:
            return state
    }
}

export default dataTableReducer