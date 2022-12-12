const express = require("express");
const {
  allUsers,
  addUser,
  findOneUser,
  updateOne,
  deleteOne,
} = require("../controller/UsersController");

const users_router = express.Router();

users_router.get("/users", allUsers);
users_router.post("/adduser", addUser);
users_router.get("/users/:id", findOneUser);
users_router.patch("/users/update/:id", updateOne);
users_router.delete("/users/remove/:id", deleteOne);


module.exports = users_router;
