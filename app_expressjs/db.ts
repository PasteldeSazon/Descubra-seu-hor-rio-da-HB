import path from "path";
import dotenv from "dotenv";

// Isso garante que ele procure o .env na raiz da pasta app_expressjs
dotenv.config({ path: path.resolve(__dirname, "../.env") }); 

import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME || 'ExpressDB';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '123456';
const dbHost = process.env.DB_HOST || 'localhost';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
});

export default sequelize;