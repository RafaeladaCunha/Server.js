module. exports ={
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Renata',
    database: 'apinode',
    define:{
    timestamps:false,
    undefined:true,
    }
}
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
