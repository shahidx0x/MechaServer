
const express = require("express");
require('dotenv').config({ path: require('find-config')('.env') })
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const app = express();

const Connection = () =>{
    mongoose
    .connect(
      `mongodb+srv://${process.env.EXP_MDB_USER}:${process.env.EXP_MDB_PASS}@cluster0.udqkyom.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() =>
      app.listen(PORT, () => {
        console.log("[*] DB Connected => Server Running on Port : ", PORT);
      })
    )
    .catch((error) => {
      console.log("[*] DB Connection Error \n\n", error);
    });
}

exports.Connection = Connection;

