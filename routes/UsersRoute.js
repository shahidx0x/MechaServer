const express = require("express");
const { allUsers, addUser } = require("../controller/UsersController");

const users_router = express.Router();

users_router.get("/users", allUsers);
users_router.post("/adduser", addUser);

module.exports = users_router;
