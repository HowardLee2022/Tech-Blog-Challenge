const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class comment extends Model {}

comment.init({
    comment:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[1,200]
        }
    }
},{
    sequelize
});

module.exports=comment