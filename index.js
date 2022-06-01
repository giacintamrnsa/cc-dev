require('dotenv').config
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const uRouter = require('./src/router');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', uRouter);

app.listen(8080, () => {
    console.log("Server up and running on PORT: ", 8080);
});

app.get("/", async (req, res)=> {
	res.json({ status: "App is ready!!"})
});