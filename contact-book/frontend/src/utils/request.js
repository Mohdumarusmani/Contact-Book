import server from './server';

export default {
    getContacts : function(skip, limit, callback) {
        fetch(`${server.API_URL}/contact?skip=${skip}&limit=${limit}`)
        .then((res) => res.json())
        .then((result) => {
            callback(result.payload)
        })
        .catch((err) => {
            throw err;
        })
    },
    getContactCount : function(callback) {
        fetch(`${server.API_URL}/count`)
        .then((res) => res.json())
        .then((result) => {
            callback(result.payload)
        })
        .catch((err) => {
            throw err;
        })
    },
}