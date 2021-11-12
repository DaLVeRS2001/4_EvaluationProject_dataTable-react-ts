import {TDefaultValidFunc, TSymbolsCount} from "../types/services";

export const isRequired:TDefaultValidFunc = (val) => {
        if (val.length === 0) return 'Обезательное поле'
        return undefined
    },
    isSpace:TDefaultValidFunc = (val) => {
        const isSpaceReg:RegExp = /\s/g
        if (isSpaceReg.test(val)) return 'В имени не может быть пробелов'
        return undefined
    },
    isMax: TSymbolsCount = (count) => (val) => {
        if (val.length > count) return `Превышен лимит в ${count} символов`
        return undefined
    }