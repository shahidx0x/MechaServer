const FindWpService = require("../model/FindWpService");

const getAllFwpService = async (req, res, next) => {
  let allFwpServices;
  try {
    allFwpServices = await FindWpService.find();
  } catch (error) {
    return next(error);
  }
  if (!allFwpServices) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ allFwpServices });
};

exports.getAllFwpService = getAllFwpService;