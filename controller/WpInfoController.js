const WpInformation = require("../model/WpInformation");

const addWpInfo = async (req, res, next) => {
  const {
    full_name,
    cont_no,
    pre_add,
    par_add,
    mail,
    nid,
    image,
    srv_area,
    v_service,
    inst_type,
  } = req.body;
  let data;
  try {
    data = new WpInformation({
      full_name,
      cont_no,
      pre_add,
      par_add,
      mail,
      nid,
      image,
      srv_area,
      exp_area,
      v_service,
      inst_type,
    });
    data = await data.save();
  } catch (error) {
    return next(error);
  }
};

const allWpInfo = async (req, res, next) => {
  let allWpInfo;
  try {
    allWpInfo = await WpInformation.find();
  } catch (error) {
    return next(error);
  }
  if (!allWpInfo) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ allWpInfo });
};

exports.allWpInfo = allWpInfo;
exports.addWpInfo = addWpInfo;
