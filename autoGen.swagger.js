const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      version: "1.0.0",
      title: "M3P Backend",
      description: "API para o projeto Recicle365",
    },
    host: "localhost:3000",
    security: [{apiKeyAuth: [] }],
    securityDefinitions: {
      apiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "Insira o token de autenticação",
      },
    },
    }

const outputFile = "./src/routes/doc.swagger.json";
const routes = ["./src/routes/routes.js"];

swaggerAutogen(outputFile, routes, doc)