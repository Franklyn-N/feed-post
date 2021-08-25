import swaggerJsDoc from "swagger-jsdoc";

const swaggerDoc = swaggerJsDoc({
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Feeds Manager",
      description: "Manages the creation, deletion, and other details of feeds.",
      version: "1.0.0",
    },
    servers: [
      {
        // url: config.swagger,
        url: "http://localhost:8080"
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
});


export default swaggerDoc;
