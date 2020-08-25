const Sequelize = require('sequelize');
const db = require('../config/mysql')

const Permission = db.define('permission', {
    permission_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
})
module.exports = Permission;  