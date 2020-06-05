import {Router, Request, Response} from 'express';

export const Routes = (router: Router) => {
    router.get('/', (req: Request,res: Response) => {
        res.status(200).send("Restricted Acess");
    });
}