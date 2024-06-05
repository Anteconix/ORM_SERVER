import curso from "../models/curso_model.js"

export const getCursos = async(req, res) => {
    try {
        const cursos = await curso.findAll()
    } catch (e) {
        console.log("Error ao acessar a tabela curso")
    }
}