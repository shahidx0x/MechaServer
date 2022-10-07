const EmergencyService = require("../model/EmergencyService");

const getAllEmrService = async (req, res, next) => {
  let allEmrServices;
  try {
    allEmrServices = await EmergencyService.find();
  } catch (error) {
    return next(error);
  }
  if (!allEmrServices) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ allEmrServices });
};

const addEmrServices = async (req, res, next) => {
  const { tech_name, srv_area, cont_no, image, exp_area } = req.body;
  if (
    !tech_name &&
    tech_name.trim == "" &&
    !srv_area &&
    srv_area.trim == "" &&
    !cont_no &&
    cont_no > 11 &&
    !image &&
    image.trim == "" &&
    !exp_area &&
    exp_area.trim == ""
  ) {
    res.status(422).json({ message: "Invalid Data" });
  }
  
};

exports.getAllEmrService = getAllEmrService;
