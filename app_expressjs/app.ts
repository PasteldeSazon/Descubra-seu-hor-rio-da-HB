import dotenv from "dotenv";
dotenv.config(); // Isso vai garantir que o Node leia seu arquivo .env

import express from "express";
import clientsRouter from "./Router/clients";
import db from "./db";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", "./views");

app.use(clientsRouter);

console.log("Teste de Senha:", process.env.DB_PASSWORD);

db.sync()
  .then(() => {
    console.log("Conectado com o Banco:" + process.env.DB_NAME);
  })
  .then(() => {
    const PORT = Number(process.env.PORT) || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor criado na porta ${PORT}...`);
    });
  });
