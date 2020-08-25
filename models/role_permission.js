const Sequelize = require('sequelize');
const db = require('../config/mysql')

const role_permision = db.define('role_permission', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
    }
})


module.exports = role_permision;  