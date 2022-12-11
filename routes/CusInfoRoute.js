const express = require("express");
const { addCusInfo, allCusInfo } = require("../controller/CusInfoController");

const cusinfo_router = express.Router();

cusinfo_router.get("/cusinfo", allCusInfo);
cusinfo_router.post("/addcusinfo", addCusInfo);

module.exports = cusinfo_router;
