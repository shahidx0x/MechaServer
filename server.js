const express = require("express");
const { Connection } = require("./connections/connection");
const EmrSrouter = require("./routes/EmrServiceRoute");
const FwpSrouter = require("./routes/FindWpServiceRoute");
const ProdSrouter = require("./routes/ProductServiceRoute");
const app = express();



app.use("/api-v1", EmrSrouter);
app.use("/api-v1", FwpSrouter);
app.use("/api-v1", ProdSrouter);
app.get("/", (req, res) => {
  res.send(
    "<html><h2>[*] Server Running</h2><a href='http://localhost:5000/api-v1/emergency-services'>Emergency Services</a><a href='http://localhost:5000/api-v1/fwp-services'>Emergency Services</a></html>"
  );
});

Connection();

