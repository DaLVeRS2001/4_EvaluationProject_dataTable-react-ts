import {CertainModel, ICertainData} from "../types/services";

class CertainData implements ICertainData{
    private _model: CertainModel = {
        tableHeaders: ['Номер / Дата', 'Тип задания / Автор', 'Аккаунт / Терминал', 'Статус'],
        statusTypes: [
            {type: 'Новое', color: "#B22222"}, {type: 'Выполняется', color: "#4682B4"},
            {type: 'Назначено', color: "#FFA500"}, {type: 'Отменено', color: "#000000"}
        ],
    }
    public getModel(){
        return this._model
    }
}

export default CertainData