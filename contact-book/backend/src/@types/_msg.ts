export interface IMsg {
    status?: number;
    message?: string;
}

export interface IResponse extends IMsg {
    payload?: any
}

export interface IError extends IResponse {
    error?: any
}