import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

const app = express(); //Representa o servidor
app.use(express.json()); //Express e trasnforma em JSON

app.listen(3001, () => { // Escuta a porta 3001 e transmite uma msg
    console.log("Servidor escutando...");
});

const posts = [ //Array de Objetos
    { 
        id: 1, descricao: "Uma foto teste", 
        imagem: "https://placecats.com/millie/3000/150" 
    },
    { 
        id: 2, descricao: "Gato dormindo", 
        imagem: "https://placecats.com/sleepy/400/200" 
    },
    { 
        id: 3, descricao: "Gatinho brincando", 
        imagem: "https://placecats.com/kitten/500/300" 
    },
];

async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");

    return colecao.find().toArray()
}

app.get("/posts", async (req, res) => {
    const result = await getTodosPosts();
    res.status(200).json(result);
});


/*

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id == Number(id);
    });
};


app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);

});

*/
