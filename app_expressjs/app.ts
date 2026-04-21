import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import db from "./db"; 
import clientsRouter from "./Router/clients"; 

const app = express();

// Configurações
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", "./views");

// Rotas
app.use(clientsRouter);

console.log("Teste de Senha:", process.env.DB_PASSWORD);

// APENAS UM BLOCO DE SYNC E LISTEN
db.sync({ force: true }) 
  .then(() => {
    console.log("Conectado com o Banco: " + process.env.DB_NAME);
    console.log("✅ Tabelas atualizadas (Coluna 'sala' verificada)!");
    
    const PORT = Number(process.env.PORT) || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ Erro ao conectar ou sincronizar o banco:", err);
  });