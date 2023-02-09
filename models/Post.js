const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    // add properites here, ex:
    title: {
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
            len:[1,30]
         }
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[1,200]
        }
    }
},{
    sequelize
});

module.exports=Post