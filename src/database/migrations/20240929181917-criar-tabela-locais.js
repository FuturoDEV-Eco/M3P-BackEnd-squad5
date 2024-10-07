"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("locais", {
      local_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nomeLocal: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      descricaoLocal: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      TipoResiduoAceito: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING(8),
        allowNull: false,
      },
      logradouro: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      localidade: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      uf: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      avaliacaoLocal: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      latitude: {
        type: Sequelize.DECIMAL(25,17),
        allowNull: false,
      },
      longitude: {
        type: Sequelize.DECIMAL(25,17),
        allowNull: false,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("locais");
  },
};
