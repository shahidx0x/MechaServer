const express = require("express");
const { getAllEmrService, addEmrServices } = require("../controller/EmrServiceController");
const emrs_router = express.Router();

emrs_router.get("/emr-services", getAllEmrService);
emrs_router.post("/emr-services",addEmrServices);

module.exports = emrs_router;
