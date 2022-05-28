const res = require('express/lib/response');
const pool = require('../database');

module.exports = {
    create: (data, callBack) => {
      //const created_at = new Date().toISOString();
        pool.query(
            `insert into usertb (name, email, password)
            values(?,?,?)`,
            [
                data.name,
                data.email,
                data.password
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getUsers: callBack => {
        pool.query(
            `select id, name, email, password from usertb`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserById: (id, callBack) => {
        pool.query(
            `select id, name, email, password from usertb where id = ?`,
            [id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update usertb set name=?, email=?, password=? where id = ?`,
            [
                data.name,
                data.email,
                data.password,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteUsers: callBack => {
        pool.query(
            `delete from usertb where id = ?`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByEmail: (email, callBack) => {
        pool.query(
            `select * from usertb where email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};