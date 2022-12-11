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
wpinfo_router.get("/addwpinfo/:id", findOneWp);
wpinfo_router.post("/addwpinfo/update/:id", updateOne);
wpinfo_router.post("/addwpinfo/remove/:id", deleteOne);

module.exports = wpinfo_router;
