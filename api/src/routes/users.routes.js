const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const UserValidatedController = require("../controllers/UsersValidatedController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const usersRoutes = Router();

const usersController = new UsersController();
const usersValidatedController = new UserValidatedController();

usersRoutes.post("/", usersController.create);
usersRoutes.get("/validated", ensureAuthenticated, usersValidatedController.index);

module.exports = usersRoutes;