import {
    DataTableActions,
    DataTableActionTypes, IChangeFieldAction,
    IDataTableState,
} from "../../types/reducerTypes/dataTable";

const initialState: IDataTableState = {
    tableDate: {
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
    tableDates: []
}

const dataTableReducer = (
    state = initialState, action: DataTableActions | IChangeFieldAction<string>
): IDataTableState => {
    switch (action.type) {
        case DataTableActionTypes.TABLE_DATES:
            return {
                ...state,
                tableDates: [...action.payload]
            }
        case DataTableActionTypes.CHANGE_FIELD:
            return {
                ...state,
                tableDate: {
                    ...state.tableDate,
                    [action.payload.name]: action.payload.deepName.length
                        ? {[action.payload.deepName]: action.payload.val}
                        : action.payload.val
                }
            }
        case DataTableActionTypes.TABLE_ONE_EL:
            return {
                ...state,
                tableDate: {...action.payload}
            }
        default:
            return state
    }
}


export default dataTableReducer