import professor from "../models/professor_model.js"

export const getProfessores = async(req, res) => {
    try {
        const professores = await professor.findAll()
    } catch (e) {
        console.log("Error ao acessar a tabela turma")
    }
}