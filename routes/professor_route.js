import express from "express"
import {getProfessores} from "../controller/professor_controller.js"

const router = express.Router()

router.get('/professor', getProfessores)

export default router