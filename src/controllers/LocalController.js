const Locais = require("../models/Locais");

class LocalController {
  async criarLocal(req, res) {
    try {
      let {
        nomeLocal,
        descricaoLocal,
        cep,
        endereco,
        TipoResiduoAceito,
        latitude,
        longitude,
      } = req.body;
      if (
        !nomeLocal ||
        !descricaoLocal ||
        !TipoResiduoAceito ||
        !cep ||
        !endereco ||
        !latitude ||
        !longitude
      ) {
        return res.status(400).json({ error: "Preencha todos os campos" });
      }

      if (cep.length !== 8) {
        return res.status(400).json({ error: "CEP inválido" });
      }

      const local = await Locais.findOne({ where: { latitude } });
      if (local) {
        return res.status(400).json({ error: "Local ja existe" });
      }

      await Locais.create({
        nomeLocal,
        descricaoLocal,
        cep,
        endereco,
        TipoResiduoAceito,
        latitude,
        longitude,
        avaliacaoLocal: 0,
        usuarioId: req.usuarioId,
      });
      return res.status(201).json({ mensagem: "Local criado com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: " Erro ao criar local" });
    }
  }

  async avaliacaoLocal(req, res) {
    try {
      const locaisUsuarioLogado = await Locais.findOne({
        where: { usuarioId: req.usuarioId, local_id: req.params.local_id },
      });

      if (locaisUsuarioLogado) {
        return res
          .status(400)
          .json({ error: "Não é possivel avaliar o local que voce cadastrou" });
      }
      const { avaliacaoLocal } = req.body;
      if (avaliacaoLocal > 5 || avaliacaoLocal < 0) {
        return res
          .status(400)
          .json({ error: "Avaliação deve ser entre 0 e 5" });
      }

      const local = await Locais.findOne({
        where: { local_id: req.params.local_id },
      });
      const media = Math.round(local.avaliacaoLocal + avaliacaoLocal) / 2;

      await Locais.update(
        { avaliacaoLocal: media },
        { where: { local_id: req.params.local_id } }
      );
      return res
        .status(200)
        .json({ mensagem: "Avaliação registrada com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: " Erro ao registrar avaliação" });
    }
  }

  async listarLocaisUsuarioLogado(req, res) {
    try {
      const locais = await Locais.findAll({
        where: { usuarioId: req.usuarioId },
      });
      return res.status(200).json(locais);
    } catch (error) {
      return res
        .status(500)
        .json({ mensagem: " Erro ao buscar locais do usuario", error });
    }
  }
  async listarLocalEspecificoUsuario(req, res) {
    try {
      const local = await Locais.findOne({
        where: { usuarioId: req.usuarioId, local_id: req.params.local_id },
      });
      if (!local) {
        return res.status(404).json({
          mensagem: "Local cadastrado pelo usuário não encontrado",
        });
      }
      return res.status(200).json(local);
    } catch (error) {
      return res.status(500).json({
        error: " Erro ao buscar local do usuario",
      });
    }
  }
  async deletarLocalUsuarioLogado(req, res) {
    try {
      const resultado = await Locais.destroy({
        where: { usuarioId: req.usuarioId, local_id: req.params.local_id },
      });
      if (resultado === 0) {
        return res.status(404).json({
          mensagem: "Local não encontrado ou pertence a outro usuário",
        });
      }
      return res.status(200).json({ mensagem: "Local deletado com sucesso" });
    } catch (error) {
      return res
        .status(500)
        .json({ mensagem: " Erro ao deletar local do usuario", error });
    }
  }
  async atualizarLocalUsuarioLogado(req, res) {
    try {
      const {
        nomeLocal,
        descricaoLocal,
        cep,
        endereco,
        TipoResiduoAceito,
        latitude,
        longitude,
      } = req.body;
      if (
        !nomeLocal ||
        !descricaoLocal ||
        !cep ||
        !endereco ||
        !TipoResiduoAceito ||
        !latitude ||
        !longitude
      ) {
        return res.status(400).json({ error: "Preencha todos os campos" });
      }

      if (cep.length !== 8)
        return res.status(400).json({ error: "Cep invalido" });

      const resultado = await Locais.update(
        {
          nomeLocal,
          descricaoLocal,
          cep,
          endereco,
          TipoResiduoAceito,
          latitude,
          longitude,
        },
        {
          where: { usuarioId: req.usuarioId, local_id: req.params.local_id },
        }
      );

      if (resultado[0] === 0) {
        return res.status(404).json({
          mensagem: "Local não encontrado ou pertence a outro usuário",
        });
      }
      const localAtualizado = await Locais.findOne({
        where: { local_id: req.params.local_id },
      });

      return res.status(200).json(localAtualizado);
    } catch (error) {
      return res
        .status(500)
        .json({ error: " Erro ao atualizar local do usuario" });
    }
  }
}
module.exports = new LocalController();
