"use strict";

const { hashSync } = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          nome: "João",
          email: "joao@gmail.com",
          senha: hashSync("usuario1",10),
          cpf: "85698725499",
          sexo: "Masculino",
          cep: "88955000",
          logradouro: "Avenida egidios manuel de medeiros",
          bairro: "Bela Vista",
          numero: "123",
          localidade: "São Jose",
          uf: "SC",
          dataNascimento: "01-01-2001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          nome: "Maria",
          email: "maria@gmail.com",
          senha: hashSync("usuario2",10), 
          cpf: "85698725491",
          sexo: "Feminino",
          cep: "77955000",
          logradouro: "Avenida abelino dos santos",
          bairro: "Pantanal",
          numero: "589",
          localidade: "Florianópolis",
          uf: "SC",
          dataNascimento: "01-01-2002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          nome: "Pedro",
          email: "pedro@gmail.com",
          senha: hashSync("usuario3",10),
          cpf: "85698725493",
          sexo: "Masculino",
          cep: "22955000",
          logradouro: "Rua das flores",
          bairro: "Carvoeira",
          numero: "895",
          localidade: "Florianópolis",
          uf: "SC",
          dataNascimento: "01-01-2004",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          nome: "Ana",
          email: "ana@gmail.com",
          senha: hashSync("usuario4",10),
          cpf: "85698725494",
          sexo: "Feminino",
          cep: "88955865",
          logradouro: "Rua das pedras",
          bairro: "Fundos",
          numero: "917",
          localidade: "Biguaçu",
          uf: "SC",
          dataNascimento: "01-01-2004",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Lucas",
          email: "lucas@gmail.com",
          senha: hashSync("usuario5",10),
          cpf: "85698725495",
          sexo: "Masculino",
          cep: "88998756",
          logradouro: "Rua das Tamareiras",
          bairro: "Bela Vista",
          numero: "965",
          localidade: "Palhoça",
          uf: "SC",
          dataNascimento: "01-01-2005",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};
