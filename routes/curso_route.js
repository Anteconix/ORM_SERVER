import express from "express"
import {getCursos} from "../controller/curso_controller.js"

const router = express.Router()

router.get('/curso', getCursos)

export default router