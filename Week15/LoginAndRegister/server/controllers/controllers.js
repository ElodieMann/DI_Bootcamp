// controllers.js
const models = require("../models/models");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
    const { name, email, password, joined_date } = req.body;
    try {
        const newUser = await models.createUser(
            name,
            email,
            password,
            joined_date
        );
        res.status(201).json(newUser);
    } catch (err) {
        console.error("Error in createUser controller:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await models.findUser(email);

        if (!user) {
            console.error("User not found");
            return res.status(404).json({ error: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password_hash);

        if (isPasswordValid) {
            res.json(user);
        } else {
            console.error("Invalid password");
            return res.status(404).json({ error: "Invalid password" });
        }
    } catch (error) {
        console.error("Error in loginUser controller:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    createUser,
    loginUser
};
