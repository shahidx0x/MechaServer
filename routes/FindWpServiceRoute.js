const express = require("express");
const {
  getAllFwpService,
  addFwpServices,
  findOneWpService,
  updateOne,
  deleteOne,
} = require("../controller/FindWpServiceController");
const fwp_router = express.Router();

fwp_router.get("/fwp-services", getAllFwpService);
fwp_router.post("/add-fwp-services", addFwpServices);
fwp_router.get("/fwp-services/:id", findOneWpService);
fwp_router.patch("/fwp-services/update/:id", updateOne);
fwp_router.delete("/fwp-services/remove/:id", deleteOne);


module.exports = fwp_router;
