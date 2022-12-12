const express = require("express");
const {
  allWpInfo,
  addWpInfo,
  findOneWp,
  updateOne,
  deleteOne,
} = require("../controller/WpInfoController");

const wpinfo_router = express.Router();

wpinfo_router.get("/wpinfo", allWpInfo);
wpinfo_router.post("/addwpinfo", addWpInfo);
wpinfo_router.get("/wpinfo/:id", findOneWp);
wpinfo_router.post("/wpinfo/update/:id", updateOne);
wpinfo_router.post("/wpinfo/remove/:id", deleteOne);

module.exports = wpinfo_router;
