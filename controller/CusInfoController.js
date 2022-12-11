const CusInformation = require("../model/CusInformation");

const addCusInfo = async (req, res, next) => {
  const { full_name, cont_no, mail, nid, image } = req.body;
  let data;
  try {
    data = new CusInformation({
      full_name,
      cont_no,
      mail,
      nid,
      image,
    });
    data = await data.save();
  } catch (error) {
    return next(error);
  }
};
const allCusInfo = async (req, res, next) => {
  let allCusInfo;
  try {
    allCusInfo = await CusInformation.find();
  } catch (error) {
    return next(error);
  }
  if (!allCusInfo) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ allCusInfo });
};

exports.addCusInfo = addCusInfo;
exports.allCusInfo = allCusInfo;
