const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'H07yofH07135!',
    user: 'root',
    database: 'churchfinder',
    host: 'localhost',
    port: '3306'
});

let churchfinderdb = {};

churchfinderdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM churches`, (err, results) => {
            if(err) {
                return reject(err);

            }
            return resolve(results);

        });

    });

};

module.exports = churchfinderdb;