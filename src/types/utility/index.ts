export type CorrectRequest<T> = T extends "post" | "put" ? {url: string, method: T , body: any}
    :  (T extends "get" | "delete" ?  {url: string, method: T}
        : never)