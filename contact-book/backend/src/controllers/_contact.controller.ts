import {IContact,IResponse} from 'types/index';
import {ContactModel,DContact} from 'models/index'
import {createResponse,createError} from 'utils/index'

export const createContact = (contact: IContact) : Promise<IResponse> => {
    return ContactModel.create(contact)
    .then((data: DContact) => {
        return createResponse({status: 201,message: "Contact created",payload: data.id});
    })
    .catch((err) => {
        return createError({error: err});
    })
}

export const getContacts = (limit?: number) : Promise<IResponse> => {
    return ContactModel.find({}).limit(limit).sort({first_name : 1})
    .then((data: IContact[]) => {
        return createResponse({payload: data});
    })
    .catch((err) => {
        return createError({error: err});
    })
}

export const getContactByID = (id: string) : Promise<IResponse> => {
    return ContactModel.findById(id)
    .then((data: DContact) => {
        return createResponse({payload: data});
    })
    .catch((err) => {
        return createError({error: err});
    })
}

export const getContact = (contact: IContact) : Promise<IResponse> => {
    return ContactModel.find(contact)
    .then((data: DContact[]) => {
        return createResponse({payload: data});
    })
    .catch((err) => {
        return createError({error: err});
    })
}


export const updateContact = (id: string, contact: IContact) : Promise<IResponse> => {
    return ContactModel.findByIdAndUpdate(id,contact,{new: true})
    .then((data: DContact) => {
        return createResponse({status: 201, payload: data});
    })
    .catch((err) => {
        return createError({error: err})
    })
}


export const deleteContact = (id: string) : Promise<IResponse> => {
    return ContactModel.findByIdAndDelete(id)
    .then((data: DContact) => {
        return createResponse({});
    })
    .catch((err) => {
        return createError({error: err});
    })
}