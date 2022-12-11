const express = require("express");
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const product_router = require("./routes/ProductServiceRoute");
const fwp_router = require("./routes/FindWpServiceRoute");
const emrs_router = require("./routes/EmrServiceRoute");
const users_router = require("./routes/UsersRoute");
const cusinfo_router = require("./routes/CusInfoRoute");
const techinfo_router = require("./routes/TechInfoRoute");
const wpinfo_router = require("./routes/WpInfoRoute");
const app = express();
require("dotenv").config({ path: require("find-config")(".env") });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use("/api-v1", emrs_router);
app.use("/api-v1", fwp_router);
app.use("/api-v1", product_router);
app.use("/api-v1", users_router);
app.use("/api-v1", cusinfo_router);
app.use("/api-v1", techinfo_router);
app.use("/api-v1", wpinfo_router);


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


