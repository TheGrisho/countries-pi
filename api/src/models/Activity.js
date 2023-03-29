const {DataTypes} = require("sequelize"); 

module.exports = (sequelize) => {
 
    sequelize.define('activity', {
        id:{
            type: DataTypes.FLOAT,
            primaryKey:true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.ENUM('1','2','3','4','5'),
        },
        duration: {
            type: DataTypes.STRING,
        },
        season: {
            type: DataTypes.ENUM('Verano', 'Otoño','Invierno', 'Primavera'),
            allowNull: false
        }
    });
};