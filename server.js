import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express(); // Cria uma instância do servidor Express
routes(app)

// Inicia o servidor na porta 3001 e exibe uma mensagem no console
app.listen(3001, () => {
    console.log("Servidor escutando...");
});