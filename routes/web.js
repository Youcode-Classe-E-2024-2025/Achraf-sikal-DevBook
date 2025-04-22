const express = require("express");
const router = express.Router();
const UserController = require("../app/controllers/UserController");

router.get("/users", UserController.index);

module.exports = router;
