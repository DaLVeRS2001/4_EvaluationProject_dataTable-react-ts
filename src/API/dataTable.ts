import makeRequest from "../services/makeRequest";
import {IDataTableApi} from "../types/api";

const dataTableApi: IDataTableApi = {
    getAll(){
        return makeRequest<"get">({url: "TableData", method: "get"})
    },
    getOne(id){
        return makeRequest<"get">({url: "TableData/"+id, method: "get"})
    },
    deleteOne(id){
        return makeRequest<"delete">({url: "TableData/"+id, method: "delete"})
    },
    changeOne(body, id){
        return makeRequest<"put">({url: "TableData/"+id, method: "put", body})
    },
    addOne(body){
        return makeRequest<"post">({url: "TableData", method: "post", body})
    },
}


export default dataTableApi
