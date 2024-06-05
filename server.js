import express from "express"
import cors from "cors"
import db from "./config/database.js"
import turmaRota from "./routes/turma_route.js"
import professorRota from "./routes/professor_route.js"
import cursoRota from "./routes/turma_route.js"

import Turma from "./models/turma_model.js"
import { escape } from "mysql2"

const server = express()
server.use(express.json())
server.use(cors())

try {
    await db.authenticate()
    console.log("Conexão com o MySql estabelecida")
} catch (e) {
    console.log("Conexão com o MySql NÃO estabelecida")
}
