const { Router } = require ('express');


const routes = new Router();


routes.use('/usuario', usuariosRouter)


module.exports = routes;