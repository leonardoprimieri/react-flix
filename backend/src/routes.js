const { Router } = require("express");
const VideoController = require("./controllers/VideoController");
const CategoryController = require("./controllers/CategoryController");
const routes = Router();

routes.post("/videos", VideoController.store);
routes.get("/videos", VideoController.index);
routes.post("/category", VideoController.show);
routes.delete("/videos/:id", VideoController.delete);

routes.post("/categories", CategoryController.store);
routes.get("/categories", CategoryController.index);
routes.delete("/categories/:url", CategoryController.delete);

module.exports = routes;
