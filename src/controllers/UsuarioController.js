const Locais = require("../models/Locais");
const Usuario = require("../models/Usuario");
const regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

class UsuarioController {
  async criarUsuario(req, res) {
    try {
      const { nome, email, senha, cpf, sexo, endereco, dataNascimento } =
        req.body;
      if (
        !nome ||
        !email ||
        !senha ||
        !cpf ||
        !sexo ||
        !endereco ||
        !dataNascimento
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios!" });
      }

      if (!regexEmail.test(email)) {
        return res.status(400).json({ error: "Email inválido!" });
      }
      if (cpf.length < 11 || cpf.length > 11) {
        return res.status(400).json({ error: "CPF inválido!" });
      }
      if (dataNascimento.length < 10 || dataNascimento.length > 10) {
        return res.status(400).json({ error: "Data inválida!" });
      }
      if (
        sexo.toLowerCase() !== "masculino" &&
        sexo.toLowerCase() !== "feminino"
      ) {
        return res.status(400).json({
          error: "Sexo inválido,precisa informar se é masculino ou feminino",
        });
      }
      if (senha.length < 8 || senha.length > 16 || senha.includes(" ")) {
        return res.status(400).json({
          error:
            "Senha deve ter entre 8 e 16 caracteres e não pode conter espaços!",
        });
      }

      const usuarioExistente = await Usuario.findOne({ where: { email, cpf } });

      if (usuarioExistente) {
        return res.status(409).json({ error: "Email ou CPF já existentes!" });
      }

      const novoUsuario = await Usuario.create({
        nome,
        email,
        senha,
        cpf,
        sexo,
        endereco,
        dataNascimento,
      });
      return res.status(201).json(novoUsuario);
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro ao criar usuário", error });
    }
  }
  async listarUsuarios(req, res) {
    try {
      const usuarios = await Usuario.findAll({
        attributes: ["nome", "email", "sexo"],
      });
      const dadosUsuario = usuarios.map((usuario) => usuario.dataValues);

      return res.status(200).json(dadosUsuario);
    } catch (error) {
      return res
        .status(500)
        .json({ mensagem: " Erro ao buscar usuários", error });
    }
  }
  async listarUsuarioPorId(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findOne({
        where: { id },
        attributes: ["nome", "email", "sexo"],
      });
      if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
      }
      const dadosUsuario = usuario.dataValues;

      return res.status(200).json(dadosUsuario);
    } catch (error) {
      return res
        .status(500)
        .json({ mensagem: " Erro ao buscar usuário", error });
    }
  }
  async editarUsuarioPorId(req, res) {
    try {
      const { nome, email, senha, cpf, sexo, dataNascimento } = req.body;
      const { id } = req.params;
      const usuario = await Usuario.findOne({ where: { id } });
      if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
      }
      if (cpf) {
        return res
          .status(400)
          .json({ mensagem: "Não e permitido alterar o cpf" });
      }
      await usuario.update({
        nome,
        email,
        senha,
        sexo,
        dataNascimento,
      });
      return res.status(200).json({ mensagem: "Usuário editado com sucesso" });
    } catch (error) {
      return res
        .status(500)
        .json({ mensagem: " Erro ao editar usuário", error });
    }
  }
  async deletarUsuarioPorId(req, res) {
    try {
      //verifica se o usuário existe
      const { id } = req.params;
      const usuario = await Usuario.findOne({ where: { id } });
      if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
      }

      //verifica se o usuário possui locais associados a ele para não permitir a deleção
      const locais = await Locais.findAll({
        where: { usuarioId: id },
      });
      if (locais.length > 0) {
        return res
          .status(400)
          .json({ mensagem: "Usuário possui locais associados" });
      }

      await usuario.destroy();
      return res.status(200).json({ mensagem: "Usuário deletado com sucesso" });
    } catch (error) {
      return res
        .status(500)
        .json({ mensagem: " Erro ao deletar usuário", error });
    }
  }
}
module.exports = new UsuarioController();
