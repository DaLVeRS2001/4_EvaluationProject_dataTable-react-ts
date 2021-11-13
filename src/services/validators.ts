import {TDefaultValidFunc} from "../types/services";

export const isRequired:TDefaultValidFunc = (val) => {
        if (val.length === 0) return 'Обезательное поле'
        return undefined
    }