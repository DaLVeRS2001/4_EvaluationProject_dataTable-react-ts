import {DataTableActions, DataTableActionTypes, IDataTableState} from "../../types/reducerTypes/dataTable";

const initialState: IDataTableState = {

}

const dataTableReducer = (state = initialState, action: DataTableActions): IDataTableState => {
    switch (action.type){
        case DataTableActionTypes.TEST:
            return {
                ...state
            }
        default:
            return state
    }
}


export default dataTableReducer