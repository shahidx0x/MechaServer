const express = require("express");
const { allWpInfo, addWpInfo } = require("../controller/WpInfoController");

const wpinfo_router = express.Router();

wpinfo_router.get("/wpinfo", allWpInfo);
wpinfo_router.post("/addwpinfo", addWpInfo);

module.exports = wpinfo_router;
