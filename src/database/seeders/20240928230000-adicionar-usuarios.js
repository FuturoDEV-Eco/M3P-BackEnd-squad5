'use strict';

const { hashSync } = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'João',
        email: 'joão@gmail.com',
        senha: 123456789,
        cpf: '85698725499',
        endereco: 'avenida egidios manuel de medeiros, 123, Sao Paulo, SP,88955000',
        sexo: 'Masculino',
        dataNascimento: '01-01-2001',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: 'Maria',
        email: 'maria@gmail.com',
        senha: 123456789,
        cpf: '85698725491',
        endereco: 'avenida egidios manuel de medeiros, 123, Sao Paulo, SP,88955000',
        sexo: 'Feminino',
        dataNascimento: '01-01-2002',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: 'Pedro',
        email: 'pedro@gmail.com',
        senha: 123456789,
        cpf: '85698725493',
        endereco: 'avenida egidios manuel de medeiros, 123, Sao Paulo, SP,88955000',
        sexo: 'Masculino',
        dataNascimento: '01-01-2004',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: 'Ana',
        email: 'ana@gmail.com',
        senha: 123456789,
        cpf: '85698725494',
        endereco: 'avenida egidios manuel de medeiros, 123, Sao Paulo, SP,88955000',
        sexo: 'Feminino',
        dataNascimento: '01-01-2004',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Lucas',
        email: 'lucas@gmail.com',
        senha: 123456789,
        cpf: '85698725495',
        endereco: 'avenida egidios manuel de medeiros, 123, Sao Paulo, SP,88955000',
        sexo: 'Masculino',
        dataNascimento: '01-01-2005',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      


    ] , {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
