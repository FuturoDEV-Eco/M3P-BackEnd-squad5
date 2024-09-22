const { Router } = require ('express');
const usuariosRoutes = require("./usuarios.routes");
const loginRoutes = require("./login.routes");


const routes = new Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc.swagger.json');
routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


routes.use('/usuario', usuariosRoutes)
routes.use("/login",loginRoutes);

module.exports = routes;