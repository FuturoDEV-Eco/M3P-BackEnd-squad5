const { Router } = require("express");
const dashboardController = require("../controllers/DashboardController");
const dashboardRoutes = new Router();

dashboardRoutes.get(
  "/",
  dashboardController.totalUsuariosLocais,
  /*
        #swagger.tags = ['Dashboard']
        #swagger.description = 'Retorna o total de usuarios e locais'
    */
);

module.exports = dashboardRoutes;
