const MongoClient = require('mongodb').MongoClient
const HOST = 'mongodb://localhost:27017';
const DATABASE_NAME = 'CNPM';
const USER_TABLE = 'Users';
const BACKLOG_TABLE = 'Backlogs';

function connectDatabase() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(HOST, function (err, client) {
            if (err) {
                reject(err);
            }
            resolve(client.db(DATABASE_NAME));
        });
    });
}

function createUser(data) {
    // data.id = 'U' + new Date().getTime();
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
                console.log('error', err, 'result', result);
                if (err) {
                    reject(err);
                    return;
                }

                if (result.length > 0 && result[0].password == password) {
                    result[0].password = undefined;
                    result[0].id = result[0]._id;
                    result[0]._id = undefined;
                    resolve(result[0]);
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

function getBacklogs(userId) {
    return new Promise((resolve, reject) => {
        connectDatabase().then(db => {
            db.collection(BACKLOG_TABLE).find({ userId: userId }).toArray((err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        })
            .catch(err => {
                reject(err);
            })

    });
}

function getBacklog(id) {
    return new Promise((resolve, reject) => {
        connectDatabase().then(db => {
            db.collection(BACKLOG_TABLE).find({ _id: id }).toArray((err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        })
            .catch(err => {
                reject(err);
            })

    });
}

function insertBacklog(data) {
    return new Promise((resolve, reject) => {
        connectDatabase().then(db => {
            db.collection(BACKLOG_TABLE).insertMany([data], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        })
            .catch(err => {
                reject(err);
            });
    });
}

function updateBacklog(data) {
    return new Promise((resolve, reject) => {
        connectDatabase().then(db => {
            console.log('Update: ', data);
            data._id = data.id;
            db.collection(BACKLOG_TABLE).find({_id: data.id}).toArray((err,result)=>{
                console.log(err);
                console.log(result);
            });;
            try {
                db.collection(BACKLOG_TABLE).updateOne({ "_id": data.id}, { $set: {'name':'Khanh111'}} ).then((err, result) => {
                    // console.log('error', err,);
                });
                resolve();
            } catch (err) {
                console.log(err);
                reject(err);

            }

            // .then( (err, result) => {
            //     console.log(err,result);
            //     if (err) {
            //         reject(err);
            //         return;
            //     }
            //     resolve();
            // });
        })
            .catch(err => {
                console.log('error', err);
                reject(err);
            });
    });
}

module.exports = {
    createUser,
    login,
    existUser,
    getBacklogs,
    getBacklog,
    insertBacklog,
    updateBacklog
}
