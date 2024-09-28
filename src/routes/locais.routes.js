const { Router } = require("express");
const localController = require("../controllers/LocalController");
const localRoutes = new Router();

localRoutes.post("/",localController.criarLocal);
localRoutes.put("/:local_id",localController.avaliacaoLocal)
localRoutes.put("/atualizar_local/:local_id",localController.atualizarLocalUsuarioLogado)
localRoutes.get("/",localController.listarLocaisUsuarioLogado)
localRoutes.get("/:local_id",localController.listarLocalEspecificoUsuario)
localRoutes.delete("/:local_id", localController.deletarLocalUsuarioLogado)


module.exports = localRoutes;


