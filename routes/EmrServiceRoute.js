const express = require("express");
const { getAllEmrService } = require("../controller/EmrServiceController");
const EmrSrouter = express.Router();

EmrSrouter.get("/emergency-services", getAllEmrService);

module.exports = EmrSrouter;
