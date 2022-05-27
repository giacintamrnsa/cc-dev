const { createUser, getUserById, getUsers, updateUser, deleteUsers, login } = require('./handler');
const router = require('express').Router();

router.post("/signup", createUser);

router.get("/", getUsers);
router.get("/:id", getUserById);

router.put("/update", updateUser);

router.delete("/delete", deleteUsers);

router.post("/login", login)
module.exports = router;