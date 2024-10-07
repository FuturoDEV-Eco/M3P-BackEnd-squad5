const { Router } = require("express");
const localController = require("../controllers/LocalController");
const localRoutes = new Router();

localRoutes.post(
  "/",
  localController.criarLocal,
  /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Cria um novo local' 
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Se o cep for valido,retorna o endereco completo,caso contrario preencha todos os campos',
            type: 'object',
            required: true,
            schema: {
                $nomeLocal:"Lagoa da Conceição",
                $descricaoLocal :" Proximo a avenida das rendeiras,esquina com a rua almoedo.Local de facil acesso",
                $TipoResiduoAceito:'Plastico',
                $cep:"12345678",
                $logradouro:"Avenida egidios manuel de medeiros",
                $bairro:"Bela Vista",
                $numero:"123",
                $localidade:"São Jose",
                $uf:"SC",
                $latitude:"-23.5489",
                $longitude:"-46.6556"
            }
        }
    */
);
localRoutes.put(
  "/:local_id",
  localController.avaliacaoLocal,
  /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Avalia um local' 
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Permitido apenas a avaliar de 0 a 5',
            type: 'number',
            required: true, 
            schema: {
                $avaliacaoLocal:"4.5"
            }
        }
    */
);
localRoutes.put(
  "/atualizar_local/:local_id",
  localController.atualizarLocalUsuarioLogado,
  /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Atualiza um local'
        #swagger.parameters['local_id'] = {
            in: 'path',
            description: 'Id do local',
            type: 'string',
            required: true
        }
        #swagger.parameters['body'] = {
            in: 'body',
            type: 'object',
            schema: {
                $nomeLocal:"Lagoa da Conceição",
                $descricaoLocal :" Proximo a avenida das rendeiras,esquina com a rua almoedo.Local de facil acesso",
                $TipoResiduoAceito:'Plastico',
                $cep:"12345678",
                $logradouro:"Avenida egidios manuel de medeiros",
                $bairro:"Bela Vista",
                $numero:"123",
                $localidade:"São Jose",
                $uf:"SC",
                $latitude:"-23.5489",
                $longitude:"-46.6556"
            }
        }
        
    */
);
localRoutes.get(
  "/",
  localController.listarLocaisUsuarioLogado,
  /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Listar todos os locais cadastrados pelo usuario'
        
    */
);
localRoutes.get(
  "/:local_id",
  localController.listarLocalEspecificoUsuario,
  /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Listar local especifico cadastrado pelo usuario'
        #swagger.parameters['local_id'] = {
            in: 'path',
            description: 'Id do local',
            type: 'string',
            required: true
        }
    */
);
localRoutes.delete(
  "/:local_id",
  localController.deletarLocalUsuarioLogado,
  /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Deleta um local especifico cadastrado pelo usuario,não permite deletar locais de outro usuario'
        #swagger.parameters['local_id'] = {
            in: 'path',
            description: 'Id do local',
            type: 'string',
            required: true
        }

    */
);

module.exports = localRoutes;
