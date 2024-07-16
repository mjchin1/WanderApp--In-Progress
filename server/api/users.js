const express = require("express");
const router = express.Router();

const {
  getUserById,
  logUserIn,
  createUser,
  deleteUser,
} = require("../db/sqlHelperFunctions/users");

router.get("/:id", async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.send(user);
  } catch (error) {
    next(error);
    throw new Error(`${error.message}`);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await logUserIn(req.body);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const user = await deleteUser(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
