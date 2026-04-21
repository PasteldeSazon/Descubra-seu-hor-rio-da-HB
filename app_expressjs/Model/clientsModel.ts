import db from "../db";
import sequelize from "sequelize";

export default db.define('client', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    sala: { // Certifique-se que o nome aqui é 'sala'
        type: sequelize.STRING,
        allowNull: false
    }
});