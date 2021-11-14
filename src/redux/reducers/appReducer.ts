import {AppActions, AppActionTypes, IAppState} from "../../types/reducerTypes/app";


const initialState: IAppState = {
    width: 0
}

const appReducer = (state = initialState, action: AppActions): IAppState => {
    switch (action.type) {
        case AppActionTypes.WIDTH:
            return {
                ...state,
                width: action.payload
            }
        default:
            return state
    }
}


export default appReducer