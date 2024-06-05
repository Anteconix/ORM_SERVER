import {Sequelize} from "sequelize"

const db = new Sequelize('faculdade', 'root','',{
    host:'lcalhost',
    dialect:'mysql'
})
export default db