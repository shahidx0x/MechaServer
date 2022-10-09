const express = require("express");
const { getAllFwpService, addFwpServices } = require("../controller/FindWpServiceController");
const fwp_router = express.Router();

fwp_router.get("/fwp-services", getAllFwpService);
fwp_router.post("/fwp-services",addFwpServices);


module.exports = fwp_router;
