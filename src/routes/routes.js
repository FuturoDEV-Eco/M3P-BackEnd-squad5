const { Router } = require("express");
const usuariosRoutes = require("./usuarios.routes");
const loginRoutes = require("./login.routes");
const localRoutes = require("./locais.routes");
const validaToken = require("../midllewares/validatoken");
const dashboardRoutes = require("./dashboard.routes");

const routes = new Router();

routes.use("/usuarios", usuariosRoutes);
routes.use("/login", loginRoutes);
routes.use("/local", validaToken, localRoutes);
routes.use("/dashboard", dashboardRoutes);

module.exports = routes;
