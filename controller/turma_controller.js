import turma from "../models/turma_model.js"

export const getTurmas = async(req, res) => {
    try {
        const turmas = await turma.findAll()
    } catch (e) {
        console.log("Error ao acessar a tabela turma")
    }
}
