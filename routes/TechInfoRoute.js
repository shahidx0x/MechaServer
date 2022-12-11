const express = require("express");
const {
  allTechInfo,
  addTechInfo,
} = require("../controller/TechInfoController");

const techinfo_router = express.Router();

techinfo_router.get("/techinfo", allTechInfo);
techinfo_router.post("/addtechinfo", addTechInfo);

module.exports = techinfo_router;
