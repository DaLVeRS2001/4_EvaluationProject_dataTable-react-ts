import makeRequest from "../services/makeRequest";
import {IDataTableApi} from "../types/api";



const dataTableApi: IDataTableApi = {
    getAllTableData(){
        return makeRequest<"get">({url: "TableData", method: "get"})
    }
}


export default dataTableApi
