import swaggerAutogen from "swagger-autogen";

const outputFile = "./swaggerOutput.json";
const endpointsFiles = ["./routes/v1/*Router.js"];

//#swagger.parameters['x-country-alpha-2'] = { in: 'header', required: true, type: 'string',  description: 'Alpha 2 code of the country' }
//#swagger.parameters['x-language-alpha-2'] = { in: 'header', required: true, type: 'string',  description: 'Alpha 2 code of the language' }

const HOST_URL = process.env.HOST_URL;

const doc = {
  info: {
    version: "1.0.0",
    title: "REST API",
    description: "The Microservices API of the USupport Project",
  },
  host: HOST_URL,
  basePath: "/api/v1",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Admin",
      description: "Admin Microservice",
    },
    {
      name: "Client",
      description: "Client Microservice",
    },
    {
      name: "Email",
      description: "Email Microservice",
    },
    {
      name: "Messaging",
      description: "Messaging Microservice",
    },
    {
      name: "Notifications",
      description: "Notifications Microservice",
    },
    {
      name: "Payments",
      description: "Payments Microservice",
    },
    {
      name: "Provider",
      description: "Provider Microservice",
    },
    {
      name: "User",
      description: "User Microservice",
    },
    {
      name: "Video",
      description: "Video Microservice",
    },
  ],
  securityDefinitions: {
    AnyAdminBearer: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description:
        "Please enter into the field the word 'Bearer' following by space and JWT",
    },
    CountryAdminBearer: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description:
        "Please enter into the field the word 'Bearer' following by space and JWT",
    },
    GlobalAdminBearer: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description:
        "Please enter into the field the word 'Bearer' following by space and JWT",
    },
    ClientBearer: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description:
        "Please enter into the field the word 'Bearer' following by space and JWT",
    },
    ProviderBearer: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description:
        "Please enter into the field the word 'Bearer' following by space and JWT",
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
