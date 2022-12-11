const express = require("express");
const {
  allTechInfo,
  addTechInfo,
  findOneTech,
  updateOne,
  deleteOne,
} = require("../controller/TechInfoController");

const techinfo_router = express.Router();

techinfo_router.get("/techinfo", allTechInfo);
techinfo_router.post("/addtechinfo", addTechInfo);
techinfo_router.get("/techinfo/:id", findOneTech);
techinfo_router.patch("/techinfo/update/:id", updateOne);
techinfo_router.delete("/techinfo/remove/:id", deleteOne);

module.exports = techinfo_router;
