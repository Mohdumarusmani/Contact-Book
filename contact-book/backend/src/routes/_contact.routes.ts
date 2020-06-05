import {Router, Request, Response} from 'express';
import {IResponse} from 'types/index'

import {createContact,getContacts,getContact, updateContact, deleteContact, getContactByID} from 'controllers/index'

export const ContactRoutes = (router: Router) => {
    
    // post contact
    router.post('/contact',async (req: Request,res: Response) => {
        const msg: IResponse = await createContact(req.body.contact);
        res.status(msg.status).send(msg);
    });

    // get contacts
    router.get('/contact', async (req: Request, res: Response) => {
        const limit = req.query.limit ? parseInt(req.query.limit.toString()) : null
        
        
        const msg: IResponse = await getContacts(limit);
        res.status(msg.status).send(msg);
    })

    // get contact by id
    router.get('/contact/:id', async (req: Request, res: Response) => {
        const id = req.params.id;
        const msg: IResponse = await getContactByID(id);
        res.status(msg.status).send(msg);
    })

    // update a contact by id
    router.put('/contact/:id', async (req: Request, res: Response) => {
        const id = req.params.id;
        const msg: IResponse = await updateContact(id,req.body.contact);
        res.status(msg.status).send(msg);
    })

    // delete a contact
    router.delete('/contact/:id', async (req: Request, res: Response) => {
        const id = req.params.id;
        const msg: IResponse = await deleteContact(id);
        res.status(msg.status).send(msg)
    })

    // search contacts
    router.post('/contact/search', async (req: Request, res: Response) => {
        const msg: IResponse = await getContact(req.body.contact);
        res.status(msg.status).send(msg);
    })

}