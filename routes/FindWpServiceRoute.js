const express = require("express");
const { getAllFwpService } = require("../controller/FindWpServiceController");
const FwpSrouter = express.Router();

FwpSrouter.get("/fwp-services", getAllFwpService);

module.exports = FwpSrouter;
