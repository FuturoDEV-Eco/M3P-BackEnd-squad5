const { Router } = require("express");
const usuariosController = require("../controllers/UsuarioController");
const usuariosRoutes = new Router();

usuariosRoutes.post(
  "/",
  usuariosController.criarUsuario,
  /*
        #swagger.tags = ['Usuarios']
        #swagger.description = 'Cria um novo usuario'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados do usuario',
            type: 'object',
            required: true,
            schema: {
                $nome:"Nome do usuario",
                $email:"email do usuario",
                $senha:"12345678",
                $cpf:"12345678910",
                $sexo:"masculino ou feminino",
                $cep:"12345678",
                $logradouro:"Avenida egidios manuel de medeiros",
                $bairro:"Bela Vista",
                $numero:"123",
                $localidade:"São Jose",
                $uf:"SC",
                $dataNascimento:"01/01/2000"
            }
        }

    */
);
usuariosRoutes.get(
  "/",
  usuariosController.listarUsuarios,
  /*
        #swagger.tags = ['Usuarios']
        #swagger.description = 'Listar todos os usuarios ativos'
        
    */
);
usuariosRoutes.get(
  "/:id",
  usuariosController.listarUsuarioPorId,
  /*
        #swagger.tags = ['Usuarios']
        #swagger.description = 'Listar um usuario especifico'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Não lista dados sensiveis,como, CPF,endereço,data de nascimento e email',
            type: 'string',
            required: true
        }
    */
);
usuariosRoutes.delete(
  "/:id",
  usuariosController.deletarUsuarioPorId,
  /*
        #swagger.tags = ['Usuarios']
        #swagger.description = 'Deleta um usuario especifico'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Não é permitido deletar usuarios com ponto de coleta ativos',
            type: 'string',
            required: true
        }
    */
);
usuariosRoutes.put(
  "/:id",
  usuariosController.editarUsuarioPorId,
  /*
        #swagger.tags = ['Usuarios']
        #swagger.description = 'Edita um usuario especifico'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id do usuario',
            type: 'string',
            required: true
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados do usuario,não é permitido alterar o CPF',
            type: 'object',
            schema: {
               $nome:"Nome do usuario",
                $email:"email do usuario",
                $senha:"12345678",
                $sexo:"masculino ou feminino",
                $cep:"12345678",
                $logradouro:"Avenida egidios manuel de medeiros",
                $bairro:"Bela Vista",
                $numero:"123",
                $localidade:"São Jose",
                $uf:"SC",
                $dataNascimento:"01/01/2000"
            }
        }
    */
);

module.exports = usuariosRoutes;
