import {NextFunction, Request, Response, Router} from 'express';
import {createError} from 'utils/index';

export const Params = (router: Router) => {

    router.param('id', (req: Request, res: Response, next: NextFunction, id: string) => {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return next(createError({message: "Invalid object id"}));
        }
        return next();
    });
};