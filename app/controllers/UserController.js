const User = require("../models/User");

exports.index = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};
