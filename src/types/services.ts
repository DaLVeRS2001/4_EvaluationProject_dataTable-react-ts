import {Method} from "axios";

//getCertainData
export type CertainModel = {}
export interface ICertainData {
    readonly getModel: () => CertainModel
}


//getMedia
type TMaxWidthMedias = [950, 670, 400]
export type TGetMedia = () => {maxWidthMedias: TMaxWidthMedias}

//validators
export type TDefaultValid = undefined | string
export type TDefaultValidFunc = (val: string)=> TDefaultValid

export type TSymbolsCount = (count: number) => (val: string) => TDefaultValid


//makeRequest
export type TMakeRequestDefaultArgs = {url: string, method: Method , body?: any}