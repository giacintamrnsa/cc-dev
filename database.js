require('dotenv').config();
//const pool = require('mysql/lib/Pool');
//const mysql = require('mysql2');
const { createPool } = require('mysql');

const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    socketPath: process.env.INSTANCE_CONNECTION_NAME
});

// if(process.env.NODE_ENV === 'production') {
//     console.log("Running from cloud. Connecting to DB through GCP socket.");
//     config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
//   }

// else {
//     console.log('Running from localhost. Connecting to DB directly.');
//     config.host = process.env.DB_HOST;
// }

// let connect = mysql.createConnection(config);

// connect.connect(function(err) {
//     if (err) {
//         console.log("Error connecting: " + err.stack);
//         return;
//     }
//     console.log("Connected as thread id: " + connect.threadId)
// })


module.exports = pool;