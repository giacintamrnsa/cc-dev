require('dotenv').config
const express = require ('express');
const app = express();
const uRouter = require('./src/router');

app.use(express.json());

app.use('/api/users', uRouter);

app.listen(8080, () => {
    console.log("Server up and running on PORT: ", 8080);
});