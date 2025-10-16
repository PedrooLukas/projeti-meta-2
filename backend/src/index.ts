import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});


// Retornar JSON
app.get("/api/teste", (req, res) => {
  res.json({ 
    message: "Teste de API",
    timestamp: new Date(),
    status: "success"
  });
});

// Retornar lista de dados
app.get("/api/usuarios", (req, res) => {
  res.json([
    { id: 1, nome: "Pedro", idade: 25 },
    { id: 2, nome: "Maria", idade: 30 },
    { id: 3, nome: "João", idade: 28 }
  ]);
});

// Retornar um único item
app.get("/api/usuario/:id", (req, res) => {
  const { id } = req.params;
  res.json({ 
    id: Number(id), 
    nome: "Pedro", 
    email: "pedro@email.com" 
  });
});

// Receber dados via POST
app.post("/api/usuarios", (req, res) => {
  const { nome, idade } = req.body;
  res.json({ 
    message: "Usuário criado!",
    dados: { id: 4, nome, idade }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));