const MongoClient = require('mongodb').MongoClient
const HOST = 'mongodb://localhost:27017';
const DATABASE_NAME = 'CNPM';
const USER_TABLE = 'Users';

function connectDatabase() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(HOST, function (err, client) {
            if (err){
                reject(err);
            }
            resolve(client.db(DATABASE_NAME));
        });
    });
}

function createUser(data) {
    return new Promise((resolve, reject) => {

        connectDatabase().then(db => {
            db.collection(USER_TABLE).insertMany([data], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            })
        })
            .catch(err => {
                reject(err);
            });
    });
}

function existUser(username) {
    return new Promise((resolve, reject) => {
        connectDatabase().then(db => {
            db.collection(USER_TABLE).find({ username: username }).toArray((err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result.length != 0);
            });
        })
            .catch(err => {
                reject(err);
            })

    });
}

function login({ username, password }) {
    return new Promise((resolve, reject) => {
        connectDatabase().then(db => {
            db.collection(USER_TABLE).find({ 'username': username }).toArray(function (err, result) {
                console.log('error',err,'result',result);
                if (err) {
                    reject(err);
                    return;
                }

                if (result.length > 0 && result[0].password == password) {
                    resolve();
                } else {
                    reject();
                }
            })
        })
            .catch(err => {
                reject(err);
            });

    });
}

module.exports = {
    createUser,
    login,
    existUser
}
