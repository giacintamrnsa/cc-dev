const express = require('express');
const bcrypt = require ('bcrypt');
//const db = require ('./connect');
const db = require ('mysql');
const req = require('express/lib/request');
//const req = require('express/lib/request');
//const res = require('express/lib/response');

const app = express();

app.use(express.json());

app.use((req, res, err, next) => {
    //console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
    });
});

app.listen(8080, () => console.log('Server is running on port 8080!'));

app.get("/", async (req, res) => {
    res.json({status: "App is ready to use!"})
});

const pool = db.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
	socketPath: process.env.INSTANCE_CONNECTION_NAME,
});

app.get("/users", async (req, res) => {
    const query = "SELECT * FROM users-mag";
    pool.query(query, (err, result) => {
        res.json(result);
    });
});

app.post("/signup", async (req, res) => {
    try{
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        const created_at = new Date().toISOString();
        const updated_at = created_at;
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            created_at: created_at,
            updated_at: updated_at,
        }

        const query = "INSERT INTO usertb (name, email, password, created_at, updated_at) VALUES (?,?,?,?,?)";
        pool.query(query, Object.values(data), (err) => {
            if (err) {
                res.json({ status: "E-mail already exists!", reason: error.code});
            }
            else {
                res.json({status: "Register Success!"});
            }
        });
    }
    catch {
        res.json({status: "Error"});
    }
});

app.post("/login", async (req, res) => {
    let email = req.body.email;
    let pass = req.body.password;
    if (email == null || email == '' || pass == null || pass == '') {
        return res.json({ status: "E-mail and Password must be input!"});
    }

    const query = `SELECT * FROM users-mag WHERE email = '${email}'`;
    try{
        pool.query(quer, async(err, result) => {
            if (!reslut[0]) {
                return res.json({status: "User not found!"});
            }
            if (await bcrypt.compare(pass, result[0].password)) {
                res.json({status: "Login Success!", data: result[0]});
            }
            else {
                res.json({status: "Incorrect E-mail or Password!"});
            }
        });
    } 
    catch {
        res.json({status: "Error", reason: 500});
    }
});

app.put("/users/:id", async (req, res) => {
    let id = req.params.id;
    const hashedPass = await bcrypt.hash(req.body.password, 10)
    let name = req.body.name;
    let email = req.body.email;
    let password = hashedPass;
    let updated_at = new Date().toISOString();
    const query = `UPDATE users-mag SET name ='${name}', email ='${email}', password ='${password}', updated_at='${updated_at}' WHERE id = ${id}`;
    const query2 = `SELECT * FROM users-mag WHERE id= ${id}`;
    try{
        pool.quer(quer2, (err, result) => {
            if (result.length == 0) {
                return res.json({status: "User not found!"});
            }
        pool.query(query, (err, result) => {
            if(err) {
                return res.jscon({status: "Data already exists!", reason: error.code});
            }
            else {
                res.json({status: "Update Success!"});
            }
        })
        });
    }
    catch {
        res.json({status: "Error", reson: 500});
    }
});

app.delete("/users/:id", async(req, res) => {
    const id = req.params.id
    const query2 =  `SELECT * FROM users-mag WHERE id= ${id}`;
	const query = `DELETE FROM users-mag WHERE id= ${id}`;
    try {
        pool.query(query2, (err, result) => {
            if (result.length == 0) {
                return res.json({status: "User not found!"});
            }
            else {
                pool.query(query, (err, result) => {
                    res.json({status: "Delete Successfully!"});
                })
            }
        });
    }
    catch {
        res.json({status: "Error", reson: 500});
    }
});