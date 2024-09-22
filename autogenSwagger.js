const swaggerAutogen = require("swagger-autogen")();
const doc = {
  info: {
    version: "1.0.0",
    title: "Recicle 365",
    description: " API para o projeto Recicle 365",
  },
  host: `localhost:3000`,
  security: [{ apiKeyAuth: [] }],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description: "Insira o token JWT",
    },
  },
};

const outputFile = "./src/routes/doc.swagger.json";
const routes = ["./src/routes/routes.js"];
swaggerAutogen(outputFile, routes, doc);