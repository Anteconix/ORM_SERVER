import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Curso = db.define('curso', {
    id_curso: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome_curso: {
        type: Sequelize.STRING(200)
    },
    id_turma: {
        type: Sequelize.INTEGER
    },
    matr_professor: {
        type: Sequelize.INTEGER
    },

})