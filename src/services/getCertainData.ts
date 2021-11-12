import {CertainModel, ICertainData} from "../types/services";


class CertainData implements ICertainData{
    private _model: CertainModel = {

    }
    public getModel(){
        return this._model
    }
}

export default CertainData