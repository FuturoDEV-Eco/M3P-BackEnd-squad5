const {Router} = require('express');
const usuariosController = require('../controllers/UsuarioController');
const usuariosRoutes = new Router();

usuariosRoutes.post("/", usuariosController.criarUsuario);
usuariosRoutes.get("/", usuariosController.listarUsuarios);
usuariosRoutes.get("/:id", usuariosController.listarUsuarioPorId)
usuariosRoutes.delete("/:id", usuariosController.deletarUsuarioPorId)
usuariosRoutes.put("/:id", usuariosController.editarUsuarioPorId)

module.exports = usuariosRoutes;