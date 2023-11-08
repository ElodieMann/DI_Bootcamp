const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const router = express.Router();

const users = [];

const secretKey = "mysecretkey";

router.use(bodyParser.json());
router.use(cookieParser());

router.post("/register", (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(409).json({ message: "Username already exists" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);

  const token = jwt.sign(
    { id: newUser.id, username: newUser.username },
    secretKey,
    {
      expiresIn: "1h",
    }
  );

  res.cookie("token", token, { httpOnly: true });
  res.status(201).json({ message: "User registered successfully" });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const accessToken = jwt.sign(
    { id: user.id, username: user.username },
    secretKey,
    {
      expiresIn: "1h",  
    }
  );

  const refreshToken = jwt.sign(
    { id: user.id, username: user.username },
    secretKey,
    {
      expiresIn: "7d",  
    }
  );

  res.cookie("token", accessToken, { httpOnly: true });

  res.cookie("refreshToken", refreshToken, { httpOnly: true });

  res.status(200).json({ message: "Login successful" });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.clearCookie('refreshToken'); 
  res.status(200).json({ message: "Logout successful" });
});

router.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token not found" });
  }

  jwt.verify(refreshToken, secretKey, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Refresh token verification failed" });
    }

    const accessToken = jwt.sign(
      { id: user.id, username: user.username },
      secretKey,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", accessToken, { httpOnly: true });

    res.status(200).json({ message: "Token refreshed successfully" });
  });
});

module.exports = router;
