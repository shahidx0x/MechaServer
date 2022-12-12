const UsersServices = require("../model/UsersServices");

exports.addUser = async (req, res, next) => {
  const { reg_mail, role } = req.body;
  let allusers;
  try {
    allusers = new UsersServices({
      reg_mail,
      role,
    });
    allusers = await allusers.save();
  } catch (error) {
    return next(error);
  }
};

exports.allUsers = async (req, res, next) => {
  let allusers;
  try {
    allusers = await UsersServices.find();
  } catch (error) {
    return next(error);
  }
  if (!allusers) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ allusers });
};
exports.deleteOne = async (req, res, next) => {
  let data;
  try {
    data = await UsersServices.findById(req.params.id);
    await data.remove();
    res.send({ data: "deleted" });
  } catch (error) {
    return next(error);
  }
};

exports.updateOne = async (req, res, next) => {
  let data;
  try {
    data = await UsersServices.findById(req.params.id);
    Object.assign(data, req.body);
    data.save();
    res.send({ res: "patched" });
  } catch (error) {
    return next(error);
  }
};
exports.findOneUser = async (req, res, next) => {
  let data;
  try {
    data = await UsersServices.findById(req.params.id);
  } catch (error) {
    return next(error);
  }
  if (!data) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ data });
};
