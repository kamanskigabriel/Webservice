import swaggerJSDoc from "swagger-jsdoc";

const opcoes = {
    definition : {
        openapi : "3.0.0",
        info : { title : "API de Produtos", version : "1.0.0"},
    },
    apis: ["./api.js"]
}
export default swaggerJSDoc(opcoes)