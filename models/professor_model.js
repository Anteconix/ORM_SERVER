import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Professor = db.define('professor', {
    matr_professor:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome_professor: {
        type: Sequelize.INTEGER,
    },
    email_professor: {
        type: Sequelize.STRING(200)
    }
})

export default Professor