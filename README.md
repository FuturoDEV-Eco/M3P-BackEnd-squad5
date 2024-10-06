<br>

<p align="center">
  <img src="https://github.com/jaquelinemarina/Recicle365/assets/153782247/e6b446a1-058e-426c-822b-5af4b6bb9314" alt="Recicle365" width="700">
</p>

<br>

  **Recicle365** é uma plataforma que facilita o gerenciamento de resíduos e o acesso a pontos de coleta seletiva de materiais recicláveis em Florianópolis. 
  Este projeto foi desenvolvido como o projeto final da formação **Futuro DEV - Floripa Mais Tec 2**, coordenada pelo **Lab365** em parceria com a **Prefeitura de Florianópolis**, **SESI** e **SENAI**.

  No **Recicle365**, os usuários têm a possibilidade de cadastrar novos pontos de coleta, encontrar pontos próximos em um mapa interativo, 
  visualizar informações sobre os materiais aceitos em cada local, editar e excluir informações em seus pontos de coleta cadastrados, sempre com o intuito de ajudar a população manezinha na destinação correta de seus lixos.

<br>

# Tecnologias Utilizadas

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-52B0E7?style=for-the-badge&logo=Docker&logoColor=white)

<br> 

# Execução
Para executar o projeto de maneira correta, você deve seguir os seguintes passos:

## Clonagem do Repositório
Para usar o Recicle365, clone ou faça download do repositório

```bash
git clone https://github.com/FuturoDEV-Eco/M3P-BackEnd-squad5
```

## Instalação das bibliotecas
A seguir, você precisará instalar as bibliotecas necessárias para acessar todas as funcionalidades disponíveis.

##### Nodemon
```terminal
npm install nodemon
```

##### Driver PostgreSQL
```terminal
npm install pg
```

##### Sequelize
```terminal
npm install sequelize
```
```terminal
npm install -g sequelize-cli
```

##### Dotenv
```terminal
npm install dotenv
```

##### JSON Web Token (JWT)
```terminal
npm install jsonwebtoken
```

##### axios
```terminal
npm install axios
```

##### Swagger UI & Swagger Autogen
```terminal
npm install swagger-ui-express
```
```terminal
npm install swagger-autogen
```

## Configuração
Depois da instalação das bibliotecas, agora você vai precisar configurar seu arquivo .env.
Para isso, crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias:

        PORT_API=3000
        DB_HOST=localhost
        DB_PORT=5432
        DB_NAME=API_Backend_Squad_5
        DB_USER=postgres
        DB_PASSWORD=postgres
        DB_DIALECT=postgres
        DB_URL=urlExternaPostgres
        JWT_SECRET=palavraSegura

Agora que o ambiente está configurado e as bibliotecas instaladas, você pode seguir para a execução da aplicação!

## Execução da Aplicação
Abra seu terminal e utilize o comando para ativar o servidor:

```shell
npm run start:dev
```

#### Requisições da API
Com o servidor online, você pode testar as requisições da API com os endpoints disponibilizados no código usando o **Swagger**.

> Swagger
Para utilizá-lo, é necessário gerar o documento swagger.json
```terminal
npm run swagger
```
Depois é só carregar o servidor e, no seu provedor da internet, utilizar:
```terminal
localhost:PORT_API/docs
```
Mas é necessário se atentar no **port_api** que você está usando para carregar o servidor. Neste projeto foi utilizado o 3000.

<br>

**Seguindo todos estes passos, a aplicação Recicle365 funcionará normalmente!**

# Melhorias

- Autenticação com Terceiros: Adicionar suporte para facilitar o login com contas de terceiros (Google, Facebook, etc.).
- Notificações: Sistema de notificações via email ou push notifications para lembrar os usuários sobre dias de coleta, eventos especiais, ou novas adições de pontos de coleta.
- Educação Ambiental: Criar uma seção informativa sobre reciclagem e práticas sustentáveis.
- Suporte a Dispositivos Móveis: Desenvolver um aplicativo móvel dedicado para facilitar o acesso e a usabilidade em smartphones e tablets.
- Páginas de Educação Ambiental: Criar páginas informativas e educativas sobre reciclagem e práticas sustentáveis.
- Gamificação: Implementar um sistema de recompensas para motivar os usuários a contribuir mais frequentemente com o cadastramento e manutenção dos pontos de coleta.

## Sobre
Este projeto foi desenvolvido como parte do programa Floripa Mais Tec - Futuro Dev [Turma Eco].
![myImage](https://floripamaistec.sesisenai.org.br/wp-content/uploads/sites/11/2023/08/logo-banner-w.png)
