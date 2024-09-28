const {Router} = require('express');
const dashboardController = require('../controllers/DashboardController');
const dashboardRoutes = new Router();

dashboardRoutes.get('/', dashboardController.totalUsuariosLocais);


module.exports = dashboardRoutes