const express = require("express");
const path = require('path');
require('dotenv').config({ path: require('find-config')('.env') })
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const EmrSrouter = require("./routes/EmrServiceRoute");
const FwpSrouter = require("./routes/FindWpServiceRoute");
const ProdSrouter = require("./routes/ProductServiceRoute");
const app = express();



app.use("/api-v1", EmrSrouter);
app.use("/api-v1", FwpSrouter);
app.use("/api-v1", ProdSrouter);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+'/view/index.html'));
});

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


