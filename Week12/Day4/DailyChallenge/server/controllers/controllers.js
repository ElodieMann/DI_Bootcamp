//controllers.js
const models = require("../models/models");
const bcrypt = require("bcrypt");

const getAllRegisters = async (req, res) => {
  try {
    const registers = await models.getAllRegisters();
    res.json(registers);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await models.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "internal server error" });
  }
};

const createUser = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;
  try {
    const newUser = await models.createUser(
      email,
      username,
      first_name,
      last_name,
      password
    );
    await models.createHashPwd(username, password);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "internal server error" });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { email, username, first_name, last_name } = req.body;
  try {
    const updateUser = await models.updateUser(
      id,
      email,
      username,
      first_name,
      last_name
    );
    if (updateUser) {
      res.json(updateUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await models.findUserByUsername(username);
    console.log(user);

    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    const hashPwd = await models.getHashPwdByUsername(username);

    if (user && isPasswordValid && hashPwd) {
      res.json(user);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllRegisters,
  getUserById,
  createUser,
  updateUser,
  loginUser,
};
