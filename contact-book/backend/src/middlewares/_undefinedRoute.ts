import {NextFunction, Request, Response} from 'express';
import {createError} from 'utils/index';

export const UndefinedRoute = ((req: Request , res: Response, next: NextFunction) => {
    next(createError({status: 404, message: "Not Found"}));
});