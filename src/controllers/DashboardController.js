const Locais = require("../models/Locais");
const Usuario = require("../models/Usuario");

class DashboardController {
  async totalUsuariosLocais(req, res) {
    try {
      const [totalUsuarios, totalLocais] = await Promise.all([
        Usuario.count(),
        Locais.count(),
      ]);

      return res.status(200).json({ totalUsuarios, totalLocais });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Erro ao buscar total de locais e usuarios" });
    }
  }
  async LocaisCadastrados(req, res) {
    try {
      const locaisCadastrados = await Locais.findAll();
      return res.status(200).json(locaisCadastrados);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Erro ao buscar locais cadastrados" });
    }
  }
}

module.exports = new DashboardController();
