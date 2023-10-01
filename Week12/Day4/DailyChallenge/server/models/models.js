// models.js
const db = require("../config/knex");
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const getAllRegisters = () => {
  const registers = db.select("*").from("users");
  return registers;
};

const getUserById = (id) => {
  return db.select("*").from("users").where("id", id);

};


const createUser = async (email, username, first_name, last_name, password) => {
  try {
    const hashedPassword = await hashPassword(password); 
    const newUser = await db("users").insert({
      email,
      username,
      first_name,
      last_name,
      password: hashedPassword, 
    }).returning(["id", "email", "username", "first_name", "password"]);
    
    return newUser;
  } catch (error) {
    throw error;
  }
};


const updateUser = (id, email, username, first_name, last_name) => {
  return db("users")
    .where("id", id)
    .update({ email, username, first_name, last_name })
    .returning(["id", "email", "username", "first_name"]);
};


const findUserByUsername = (username) => {
return db("users")
.where("username", username)
.returning(["id", "email", "username", "first_name"]);
}

const createHashPwd = async (username, password) => {
  try {
    const hashedPassword = await hashPassword(password);
    const newHashPwd = await db("hashpwd").insert({
      username,
      password: hashedPassword,
    }).returning(["id", "username"]);
    return newHashPwd;
  } catch (error) {
    throw error;
  }
};

const getHashPwdByUsername = (username) => {
  return db.select("*").from("hashpwd").where("username", username).first();
};

module.exports = {
  hashPassword,
  getAllRegisters,
  getUserById,
  createUser,
  updateUser,
  findUserByUsername,
  createHashPwd,
  getHashPwdByUsername
};
