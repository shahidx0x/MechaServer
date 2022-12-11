const express = require("express");
const {
  addCusInfo,
  allCusInfo,
  findOneCus,
  deleteOne,
  updateOne,
} = require("../controller/CusInfoController");

const cusinfo_router = express.Router();

cusinfo_router.get("/cusinfo", allCusInfo);
cusinfo_router.get("/cusinfo/:id", findOneCus);
cusinfo_router.post("/addcusinfo", addCusInfo);
cusinfo_router.patch("/cusinfo/update/:id", updateOne);
cusinfo_router.delete("/cusinfo/remove/:id", deleteOne);

module.exports = cusinfo_router;
