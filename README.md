# RECICLE 365

Este é um projeto para gerenciamento de locais de coleta seletiva, permitindo a criação, listagem, 
atualização e exclusão de locais cadastrados pelos usuários. Nosso objetivo é incentivar práticas 
sustentáveis e promover a reciclagem.

# 📚 Introdução

O RECICLE 365 facilita a identificação e o gerenciamento de pontos de coleta seletiva, promovendo 
práticas que reduzem o impacto ambiental e incentivam a reciclagem de materiais recicláveis. 
Com uma interface intuitiva, os usuários podem cadastrar novos pontos de coleta, 
visualizar informações detalhadas, e contribuir para uma comunidade mais sustentável.

# 🛠️ Tecnologias Utilizadas

- Express: Framework para construir a API no Node.js.
- Sequelize: ORM para gerenciar o banco de dados relacional com PostgreSQL.
- PostgreSQL: Banco de dados relacional para armazenar os locais de coleta e informações dos usuários.
- jsonwebtoken: Biblioteca autenticação via tokens JWT.
- bcryptjs: Utilizado para criptografar senhas dos usuarios.
- cors: Midlleware que permite que a API seja acessada por diferentes origens.
- dotenv: Gerenciador de variáveis de ambiente.
- pg: Biblioteca usada para interagir com banco de dados PostgreSQL.
- swagger: Documentação de API.
- Gitflow/Github: Fluxo de trabalho e controle de versão.

# 🔨Funcionalidades do projeto

- Criar Local: Permite a criação de um novo ponto de coleta seletiva.
- Listar Locais do Usuário: Lista todos os locais cadastrados pelo usuário autenticado.
- Listar Local Específico: Lista detalhes de um ponto de coleta cadastrado pelo usuário.
- Atualizar Local:Atualiza os dados de um local cadastrado pelo usuário autenticado.
- Deletar Local: Remove um ponto de coleta cadastrado pelo usuário autenticado.
- Avaliar Local: Permite que usuarios avaliem locais cadastrados.

# 💻 Instalação

    1.Clone o repositorio:
       git clone https://github.com/FuturoDEV-Eco/M3P-BackEnd-squad5
    2. Acesse o diretório do projeto:
       cd M3P-backEnd-squad5
    3.Instale as dependências:
       npm install

# ⚙️ Configuração

     1.Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias:
        PORT_API=3000
        DB_HOST=localhost
        DB_PORT=5432
        DB_NAME=api_recicle365
        DB_USER=postgres
        DB_PASSWORD=postgres
        DB_DIALECT=postgres
        JWT_SECRET=suaChaveSecreta

# 🚀 Executar Migrations e Seeders
     1.Executar Migrations.
        As migrations são utilizadas para criar e alterar as tabelas no banco de dados. Para rodar todas as migrations e garantir que o banco de dados está atualizado, utilize o seguinte comando:
            npx sequelize db:migrate
     2. Executar Seeders.
        Os seeders são scripts que inserem dados iniciais no banco de dados, neste projeto é utilizado inserir 5 usuarios. Para rodar os seeders e popular o banco de dados, use o comando:
            npx sequelize db:seed:all

# 🚀 Executar o Servidor
      1. Na seção de scripts do package.json, substitua o comando start por:
         "start:prod": "node index.js"
         "start:dev": "nodemon index.js"
      2.Para executar em modo de produção, use o comando:
         npm run start:prod
      3.Para executar em modo de desenvolvimento, use o comando:
         npm run start:dev
      4. O servidor iniciar na porta 3000 - acesse http://localhost:3000.

# 🛠️ Como Abrir e Rodar o Projeto

    1.Execute a aplicação em modo desenvolvimento:
       npm run start:dev
    2. O servidor iniciará na porta:3000 - acesse <http://localhost:3000>
    
# 📝 Documentação da API
   Para acessar a documentação interativa da API, utilize o Swagger na URL:
      http://localhost:3000/docs/

# 🌟 Melhorias e Futuras Implementações

- Autenticação com Terceiros: Adicionar suporte para facilitar o login com contas de terceiros (Google, Facebook, etc.).
- Notificações: Sistema de notificações via email ou push notifications para lembrar os usuários sobre dias de coleta, eventos especiais, ou novas adições de pontos de coleta.
- Educação Ambiental: Criar uma seção informativa sobre reciclagem e práticas sustentáveis.
- Suporte a Dispositivos Móveis: Desenvolver um aplicativo móvel dedicado para facilitar o acesso e a usabilidade em smartphones e tablets.
- Gamificação: Implementar um sistema de recompensas para motivar os usuários a contribuir mais frequentemente com o cadastramento e manutenção dos pontos de coleta. 