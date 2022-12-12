const express = require("express");
const {
  getAllEmrService,
  addEmrServices,
  findOneEmrService,
  updateOne,
  deleteOne,
} = require("../controller/EmrServiceController");
const emrs_router = express.Router();

emrs_router.get("/emr-services", getAllEmrService);
emrs_router.post("/add-emr-services", addEmrServices);
emrs_router.get("/emr-services/:id", findOneEmrService);
emrs_router.patch("/emr-services/update/:id", updateOne);
emrs_router.delete("/emr-services/remove/:id", deleteOne);



module.exports = emrs_router;
