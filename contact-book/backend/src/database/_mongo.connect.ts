import mongoose from 'mongoose';

import {DB} from 'config/index'

const {DB_HOST, DB_USER, DB_PASS} = DB

export const MongoDB = (callback : any) => {
    mongoose.connect(
        DB_HOST,{
        auth: {
            user: DB_USER,
            password: DB_PASS,
        },
        useNewUrlParser : true,
        useFindAndModify: false,
        useUnifiedTopology: true
        },
        )
        .then(() => {
            callback()
        })
        .catch( (error) => {
            console.error('Error connecting to database: ', error);
            return process.exit(1);
        });
};