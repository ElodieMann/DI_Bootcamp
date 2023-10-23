const db = require("../config/knex");
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

const createUser = async (name, email, password, joined_date) => {
    try {
        const hashedPassword = await hashPassword(password);
        const newUser = await db("users").insert({
            name,
            email,
            joined_date: joined_date || new Date()
        }).returning(["name", "email", "joined_date"]);

        await db("login").insert({
            password_hash: hashedPassword,
            email
        });

        return newUser;
    } catch (error) {
        throw error;
    }
};

const findUser = async (email) => {
    try {
        const user = await db("users").where("email", email).first();
        if (user) {
            const passwordHash = await db("login").where("email", email).select("password_hash").first();
            user.password_hash = passwordHash.password_hash;
        }
        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createUser,
    findUser,
    hashPassword
};
