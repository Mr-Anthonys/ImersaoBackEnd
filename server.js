import express from "express";

const app = express(); //Representa o servidor
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas a imersao!");
});
