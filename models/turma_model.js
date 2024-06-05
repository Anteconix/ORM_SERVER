import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Turma = db.define('turma', {
    id_turma: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome_turma: {
        type: Sequelize.STRING(200),
    },
    turno_turma: {
        type: Sequelize.STRING(100),
    },
})