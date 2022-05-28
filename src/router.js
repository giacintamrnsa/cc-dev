const { createUser, getUserById, getUsers, updateUser, deleteUsers, login } = require('./handler');
const router = require('express').Router();
const { checkToken } = require("../auth/validation");


router.post("/signup", createUser);

router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUserById);

router.put("/update", checkToken, updateUser);

router.delete("/delete", checkToken, deleteUsers);

router.post("/login", login)
module.exports = router;