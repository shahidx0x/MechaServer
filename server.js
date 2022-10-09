const express = require("express");
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const product_router = require("./routes/ProductServiceRoute");
const fwp_router = require("./routes/FindWpServiceRoute");
const emrs_router = require("./routes/EmrServiceRoute");
const app = express();
require('dotenv').config({ path: require('find-config')('.env') })

//Midleware
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//Routes
app.use("/api-v1", emrs_router);
app.use("/api-v1", fwp_router);
app.use("/api-v1", product_router);

//view
app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname+'/view/index.html'));
});

//Database Connection
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


