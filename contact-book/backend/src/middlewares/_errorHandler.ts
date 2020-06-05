import {NextFunction, Request, Response} from 'express';
import {IError} from 'types/index';

export const ErrorHandler = ((err: IError, req: Request, res: Response, next: NextFunction) => {
    res.send(err).status(err.status)
});
