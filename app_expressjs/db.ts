import dotenv from "dotenv";
dotenv.config(); // Carrega o .env ANTES de criar a conexão
import { Sequelize } from "sequelize";
// ... resto do código

const dbName = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbPassword = process.env.DB_PASSWORD!;
const dbHost = process.env.DB_HOST!;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
});

export default sequelize;
