import swaggerAutogen from "swagger-autogen";

const outputFile = "./swaggerOutput.json";
const endpointsFiles = ["./routes/v1/*Router.js"];

swaggerAutogen(outputFile, endpointsFiles);
