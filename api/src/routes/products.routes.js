const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const verifyUserAuthentication = require('../middlewares/verifyUserAuthorization')

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.use(ensureAuthenticated);

productsRoutes.get("/", productsController.index);
productsRoutes.post("/",verifyUserAuthentication("admin"), productsController.create);

module.exports = productsRoutes;