import {
    DataTableActions,
    DataTableActionTypes, IChangeFieldAction,
    IDataTableState,
} from "../../types/reducerTypes/dataTable";

const initialState: IDataTableState = {
    tableDataOne: {
        date: {
            number: '',
            date: new Date()
        },
        aboutTask: {
            taskType: '',
            author: ''
        },
        aboutAccount: {
            account: '',
            terminal: ''
        },
        status: ''
    },
    tableData: [],
}

const dataTableReducer = (
    state = initialState, action: DataTableActions | IChangeFieldAction<string>
): IDataTableState => {
    switch (action.type) {
        case DataTableActionTypes.TABLE_DATES:
            return {
                ...state,
                tableData: [...action.payload]
            }
        case DataTableActionTypes.CHANGE_FIELD:
            return {
                ...state,
                tableDataOne: {
                    ...state.tableDataOne,
                    [action.payload.name]: action.payload.deepName.length
                        ? {[action.payload.deepName]: action.payload.val}
                        : action.payload.val
                }
            }
        case DataTableActionTypes.TABLE_ONE_EL:
            return {
                ...state,
                tableDataOne: {...action.payload}
            }
        default:
            return state
    }
}

export default dataTableReducer