const UsersServices = require("../model/UsersServices");

const addUser = async (req, res, next) => {
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

const allUsers = async (req, res, next) => {
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

exports.addUser = addUser;
exports.allUsers = allUsers;
