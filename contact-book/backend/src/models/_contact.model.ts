import mongoose, {Document, Schema} from 'mongoose';
import {IContact} from 'types/index'
import {ContactSchema} from './_contact.schema'


const schema = new Schema(ContactSchema);


export interface DContact extends Document, IContact {
}

export const ContactModel = mongoose.model<DContact>('contact', schema);