const express = require('express');
const bcrypt = require ('bcrypt');
const path = require ('path');

const app = express();

app.use(express.json());

//Error Handler
app.use((req, res, err, next) => {
    //console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
    });
});

app.listen(8080, () => console.log('Server is running on port 8080!'));