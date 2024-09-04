const {Model, DataTypes} = require (`sequelize`);
class Endereco extends Model{}
module.exports = (sequelize) =>{


 Endereco.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    cep:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    Logradouro:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    Numero:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    complemento:{
        type: DataTypes.STRING,
    },
    Bairro:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    cidade:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    Estado:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    MunicipioIBGE:{
        type: DataTypes.STRING,
        allowNull:false,
    },

 }, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'endereco',
    timestamps: false,

 });
 return Endereco;
}
