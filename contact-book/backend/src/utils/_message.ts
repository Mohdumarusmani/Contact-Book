import {IResponse,IError} from 'types/index';

/**
 * Standard message generator
 */
export function createResponse(response : IResponse): IResponse {
    response.status =  response.status   || 200;
    response.message = response.message || "Succsess";

    return response;
}

export function createError(error: IError): IError {
    error.status =  error.status || 500;
    error.message = error.message || "Internal Server Error";

    return error;
}