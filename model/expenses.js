const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const expenses = sequelize.define('expense',{
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },

    amount : {
        type : Sequelize.STRING,
        allowNull : false
    },

    description : {
        type : Sequelize.STRING,
        allowNull : false
    },

    category : {
        type : Sequelize.STRING,
        allowNull : false
    }
})


module.exports = expenses;