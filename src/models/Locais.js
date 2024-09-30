const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const Usuario = require("../models/Usuario");

const Locais = connection.define("locais", {
  local_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nomeLocal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricaoLocal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TipoResiduoAceito: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logradouro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  localidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avaliacaoLocal: {
    type: DataTypes.FLOAT,
    allowNull: true,
    validate: {
      min: 0,
      max: 5,
    },
  },
  latitude: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: "usuarios",
      key: "id",
    },
  },
});

Locais.belongsTo(Usuario, { foreignKey: "usuarioId" });

module.exports = Locais;
