const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");

routes.use("/", require("./swagger"));

routes.get("/", (req, res) => {
  //#swagger.tags=['Hello World']
  res.send("Hello World");
});

routes.get("/professional", lesson1Controller.getProfessionalData);

routes.use("/contacts", require("./contacts"));

module.exports = routes;
