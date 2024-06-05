import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Professor = db.define('professor', {
    nome_professor: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    email_professor: {
        type: Sequelize.STRING(200),
    }
})