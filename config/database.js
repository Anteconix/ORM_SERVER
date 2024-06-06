import {Sequelize} from "sequelize"

const db = new Sequelize('faculdade', 'root','',{
    host:'localhost',
    dialect:'mysql'
})
export default db